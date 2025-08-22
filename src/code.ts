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
      figma.notify('Please select a layer');
      return;
    }

    const node = selection[0];

    if ('fills' in node && Array.isArray(node.fills) && node.fills.length > 0) {
      const fill = node.fills[0];
      if (fill.type === 'SOLID') {
        const collections = await figma.variables.getLocalVariableCollections();
        let targetCollection;

        if (collections.length === 0) {
          targetCollection = await figma.variables.createVariableCollection("Colors");
        } else {
          targetCollection = collections[0];
        }

        const variableName = `color${counter}`;
        counter++;

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
  }
};
