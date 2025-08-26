/// <reference types="@figma/plugin-typings" />

interface PluginMessage {
  type: 'create-variable' | 'get-collections';
  collectionId?: string;
}

let counter = 1;

figma.showUI(__html__, { width: 240, height: 120 });

// Helper function to find parent group
function getAncestors(node: BaseNode): BaseNode[] {
  const ancestors: BaseNode[] = [];
  let parent = node.parent;
  while (parent) {
    ancestors.push(parent);
    parent = parent.parent;
  }
  return ancestors;
}

figma.ui.onmessage = async (msg: PluginMessage) => {
  if (msg.type === 'get-collections') {
    const collections = await figma.variables.getLocalVariableCollections();
    figma.ui.postMessage({
      type: 'update-collections',
      collections: collections.map(c => ({ id: c.id, name: c.name }))
    });
  }

  if (msg.type === 'create-variable') {
    const selection = figma.currentPage.selection;

    if (selection.length === 0) {
      figma.notify('Please select layers with fill and optionally text layers');
      return;
    }

    // Show working message
    figma.notify('Working...');

    // Find filled layers and text layers in the selection
    const filledNodes: (SceneNode & { fills: readonly Paint[] })[] = [];
    const textNodes: TextNode[] = [];

    for (const node of selection) {
      if (node.type === 'TEXT') {
        textNodes.push(node);
      } else if ('fills' in node && Array.isArray(node.fills) && node.fills.length > 0 && node.fills[0].type === 'SOLID') {
        filledNodes.push(node as SceneNode & { fills: readonly Paint[] });
      }
    }

    if (filledNodes.length === 0) {
      figma.notify('Please select at least one layer with fill');
      return;
    }

    // Get or create collection based on selection
    let targetCollection;
    if (msg.collectionId === 'new') {
      targetCollection = await figma.variables.createVariableCollection("Colors");
    } else {
      const collections = await figma.variables.getLocalVariableCollections();
      targetCollection = collections.find(c => c.id === msg.collectionId);
      if (!targetCollection) {
        targetCollection = await figma.variables.createVariableCollection("Colors");
      }
    }

    // Keep track of created variables
    const createdVariables: string[] = [];

    // Process each filled node
    for (const filledNode of filledNodes) {
      const fill = filledNode.fills[0] as SolidPaint;
      let variableName = '';

      // Get all ancestor groups of the filled node
      const filledNodeAncestors = getAncestors(filledNode);

      // Try to find a text node that shares any ancestor with the filled node
      const matchingTextNode = textNodes.find(textNode => {
        const textNodeAncestors = getAncestors(textNode);
        return textNodeAncestors.some(ancestor =>
          filledNodeAncestors.some(fillAncestor => fillAncestor.id === ancestor.id)
        );
      });

      if (matchingTextNode) {
        // Use the matching text node's content
        variableName = matchingTextNode.characters;
        // Remove this text node from available text nodes to avoid reusing it
        textNodes.splice(textNodes.indexOf(matchingTextNode), 1);
      } else if (textNodes.length > 0) {
        // If no matching text node but there are text nodes available, use the first one
        variableName = `${textNodes[0].characters}${counter++}`;
      } else {
        // No text nodes available, use default naming
        variableName = `color${counter++}`;
      }

      const variable = await figma.variables.createVariable(
        variableName,
        targetCollection.id,
        'COLOR'
      );

      await variable.setValueForMode(targetCollection.modes[0].modeId, {
        r: fill.color.r,
        g: fill.color.g,
        b: fill.color.b,
        a: fill.opacity || 1
      });

      // Add to created variables list instead of showing individual message
      createdVariables.push(variableName);
    }

    // Show completion message with count
    const count = createdVariables.length;
    if (count === 1) {
      figma.notify(`Created 1 variable: ${createdVariables[0]}`);
    } else {
      figma.notify(`Created ${count} variables`);
    }
  }
};
