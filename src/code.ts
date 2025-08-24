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
      figma.notify('Please select a layer with fill and optionally a text layer');
      return;
    }

    // Find the filled layer and text layer in the selection
    let filledNode: SceneNode & { fills: readonly Paint[] } | null = null;
    let textNode: TextNode | null = null;

    for (const node of selection) {
      if ('fills' in node && Array.isArray(node.fills) && node.fills.length > 0 && node.fills[0].type === 'SOLID') {
        filledNode = node as SceneNode & { fills: readonly Paint[] };
      }
      if (node.type === 'TEXT') {
        textNode = node as TextNode;
      }
    } if (!filledNode) {
      figma.notify('Please select at least one layer with fill');
      return;
    }

    // Determine variable name
    let variableName = '';
    if (textNode) {
      variableName = textNode.characters.toLowerCase().replace(/[^a-z0-9]/g, '');
    }
    if (!variableName) {
      variableName = `color${counter++}`;
    }

    const fill = filledNode.fills[0];
    if (fill.type === 'SOLID') {
      const collections = await figma.variables.getLocalVariableCollections();
      let targetCollection;

      if (collections.length === 0) {
        targetCollection = await figma.variables.createVariableCollection("Colors");
      } else {
        targetCollection = collections[0];
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
