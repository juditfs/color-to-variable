/// <reference types="@figma/plugin-typings" />

interface PluginMessage {
  type: 'create-variable';
}

let counter = 1;

figma.showUI(__html__, { width: 240, height: 100 });

figma.ui.onmessage = async (msg: PluginMessage) => {
  if (msg.type === 'create-variable') {
    const selection = figma.currentPage.selection;

    if (selection.length === 0) {
      figma.notify('Please select layers with fill and optionally a text layer');
      return;
    }

    // Find filled layers and text layer in the selection
    const filledNodes: (SceneNode & { fills: readonly Paint[] })[] = [];
    let textNode: TextNode | null = null;

    for (const node of selection) {
      // First check if it's a text node
      if (node.type === 'TEXT') {
        textNode = node as TextNode;
        continue; // Skip text nodes for fill color
      }
      // Then look for fills in non-text nodes
      if ('fills' in node && Array.isArray(node.fills) && node.fills.length > 0 && node.fills[0].type === 'SOLID') {
        filledNodes.push(node as SceneNode & { fills: readonly Paint[] });
      }
    }

    if (filledNodes.length === 0) {
      figma.notify('Please select at least one layer with fill');
      return;
    }

    // Get or create collection
    const collections = await figma.variables.getLocalVariableCollections();
    let targetCollection;

    if (collections.length === 0) {
      targetCollection = await figma.variables.createVariableCollection("Colors");
    } else {
      targetCollection = collections[0];
    }

    // Process each filled node
    for (const filledNode of filledNodes) {
      const fill = filledNode.fills[0] as SolidPaint;

      // Determine variable name
      let variableName = '';
      if (textNode) {
        variableName = textNode.characters;
        if (filledNodes.length > 1) {
          variableName += counter++;
        }
      } else {
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

      figma.notify(`Created variable: ${variableName}`);
    }
  }
};
