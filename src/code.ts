/// <reference types="@figma/plugin-typings" />

interface PluginMessage {
  type: 'create-variable' | 'get-collections';
  collectionId?: string;
  namingMode?: 'auto' | 'manual';
  customName?: string;
  appendColor?: boolean;
}

let counter = 1;

figma.showUI(__html__, { width: 280, height: 600 });

// CSS color palette with W3Schools color group mappings
const cssColors = [
  // Pink colors
  { name: 'pink', r: 255, g: 192, b: 203, group: 'pink' },
  { name: 'lightpink', r: 255, g: 182, b: 193, group: 'pink' },
  { name: 'hotpink', r: 255, g: 105, b: 180, group: 'pink' },
  { name: 'deeppink', r: 255, g: 20, b: 147, group: 'pink' },
  { name: 'mediumvioletred', r: 199, g: 21, b: 133, group: 'pink' },
  { name: 'palevioletred', r: 219, g: 112, b: 147, group: 'pink' },

  // Red colors
  { name: 'lightsalmon', r: 255, g: 160, b: 122, group: 'red' },
  { name: 'salmon', r: 250, g: 128, b: 114, group: 'red' },
  { name: 'darksalmon', r: 233, g: 150, b: 122, group: 'red' },
  { name: 'lightcoral', r: 240, g: 128, b: 128, group: 'red' },
  { name: 'indianred', r: 205, g: 92, b: 92, group: 'red' },
  { name: 'crimson', r: 220, g: 20, b: 60, group: 'red' },
  { name: 'firebrick', r: 178, g: 34, b: 34, group: 'red' },
  { name: 'red', r: 255, g: 0, b: 0, group: 'red' },
  { name: 'darkred', r: 139, g: 0, b: 0, group: 'red' },

  // Orange colors
  { name: 'coral', r: 255, g: 127, b: 80, group: 'orange' },
  { name: 'tomato', r: 255, g: 99, b: 71, group: 'orange' },
  { name: 'orangered', r: 255, g: 69, b: 0, group: 'orange' },
  { name: 'gold', r: 255, g: 215, b: 0, group: 'orange' },
  { name: 'orange', r: 255, g: 165, b: 0, group: 'orange' },
  { name: 'darkorange', r: 255, g: 140, b: 0, group: 'orange' },

  // Yellow colors
  { name: 'lightyellow', r: 255, g: 255, b: 224, group: 'yellow' },
  { name: 'lemonchiffon', r: 255, g: 250, b: 205, group: 'yellow' },
  { name: 'lightgoldenrodyellow', r: 250, g: 250, b: 210, group: 'yellow' },
  { name: 'papayawhip', r: 255, g: 239, b: 213, group: 'yellow' },
  { name: 'moccasin', r: 255, g: 228, b: 181, group: 'yellow' },
  { name: 'peachpuff', r: 255, g: 218, b: 185, group: 'yellow' },
  { name: 'palegoldenrod', r: 238, g: 232, b: 170, group: 'yellow' },
  { name: 'khaki', r: 240, g: 230, b: 140, group: 'yellow' },
  { name: 'darkkhaki', r: 189, g: 183, b: 107, group: 'yellow' },
  { name: 'yellow', r: 255, g: 255, b: 0, group: 'yellow' },

  // Purple colors
  { name: 'lavender', r: 230, g: 230, b: 250, group: 'purple' },
  { name: 'thistle', r: 216, g: 191, b: 216, group: 'purple' },
  { name: 'plum', r: 221, g: 160, b: 221, group: 'purple' },
  { name: 'violet', r: 238, g: 130, b: 238, group: 'purple' },
  { name: 'orchid', r: 218, g: 112, b: 214, group: 'purple' },
  { name: 'fuchsia', r: 255, g: 0, b: 255, group: 'purple' },
  { name: 'magenta', r: 255, g: 0, b: 255, group: 'purple' },
  { name: 'mediumorchid', r: 186, g: 85, b: 211, group: 'purple' },
  { name: 'mediumpurple', r: 147, g: 112, b: 219, group: 'purple' },
  { name: 'rebeccapurple', r: 102, g: 51, b: 153, group: 'purple' },
  { name: 'blueviolet', r: 138, g: 43, b: 226, group: 'purple' },
  { name: 'darkviolet', r: 148, g: 0, b: 211, group: 'purple' },
  { name: 'darkorchid', r: 153, g: 50, b: 204, group: 'purple' },
  { name: 'darkmagenta', r: 139, g: 0, b: 139, group: 'purple' },
  { name: 'purple', r: 128, g: 0, b: 128, group: 'purple' },
  { name: 'indigo', r: 75, g: 0, b: 130, group: 'purple' },
  { name: 'slateblue', r: 106, g: 90, b: 205, group: 'purple' },
  { name: 'darkslateblue', r: 72, g: 61, b: 139, group: 'purple' },
  { name: 'mediumslateblue', r: 123, g: 104, b: 238, group: 'purple' },

  // Green colors
  { name: 'greenyellow', r: 173, g: 255, b: 47, group: 'green' },
  { name: 'chartreuse', r: 127, g: 255, b: 0, group: 'green' },
  { name: 'lawngreen', r: 124, g: 252, b: 0, group: 'green' },
  { name: 'lime', r: 0, g: 255, b: 0, group: 'green' },
  { name: 'limegreen', r: 50, g: 205, b: 50, group: 'green' },
  { name: 'palegreen', r: 152, g: 251, b: 152, group: 'green' },
  { name: 'lightgreen', r: 144, g: 238, b: 144, group: 'green' },
  { name: 'mediumspringgreen', r: 0, g: 250, b: 154, group: 'green' },
  { name: 'springgreen', r: 0, g: 255, b: 127, group: 'green' },
  { name: 'mediumseagreen', r: 60, g: 179, b: 113, group: 'green' },
  { name: 'seagreen', r: 46, g: 139, b: 87, group: 'green' },
  { name: 'forestgreen', r: 34, g: 139, b: 34, group: 'green' },
  { name: 'green', r: 0, g: 128, b: 0, group: 'green' },
  { name: 'darkgreen', r: 0, g: 100, b: 0, group: 'green' },
  { name: 'yellowgreen', r: 154, g: 205, b: 50, group: 'green' },
  { name: 'olivedrab', r: 107, g: 142, b: 35, group: 'green' },
  { name: 'olive', r: 128, g: 128, b: 0, group: 'green' },
  { name: 'darkolivegreen', r: 85, g: 107, b: 47, group: 'green' },
  { name: 'mediumaquamarine', r: 102, g: 205, b: 170, group: 'green' },
  { name: 'darkseagreen', r: 143, g: 188, b: 143, group: 'green' },
  { name: 'lightseagreen', r: 32, g: 178, b: 170, group: 'green' },
  { name: 'darkcyan', r: 0, g: 139, b: 139, group: 'green' },
  { name: 'teal', r: 0, g: 128, b: 128, group: 'green' },

  // Cyan colors
  { name: 'aqua', r: 0, g: 255, b: 255, group: 'cyan' },
  { name: 'cyan', r: 0, g: 255, b: 255, group: 'cyan' },
  { name: 'lightcyan', r: 224, g: 255, b: 255, group: 'cyan' },
  { name: 'paleturquoise', r: 175, g: 238, b: 238, group: 'cyan' },
  { name: 'aquamarine', r: 127, g: 255, b: 212, group: 'cyan' },
  { name: 'turquoise', r: 64, g: 224, b: 208, group: 'cyan' },
  { name: 'mediumturquoise', r: 72, g: 209, b: 204, group: 'cyan' },
  { name: 'darkturquoise', r: 0, g: 206, b: 209, group: 'cyan' },

  // Blue colors
  { name: 'cadetblue', r: 95, g: 158, b: 160, group: 'blue' },
  { name: 'steelblue', r: 70, g: 130, b: 180, group: 'blue' },
  { name: 'lightsteelblue', r: 176, g: 196, b: 222, group: 'blue' },
  { name: 'powderblue', r: 176, g: 224, b: 230, group: 'blue' },
  { name: 'lightblue', r: 173, g: 216, b: 230, group: 'blue' },
  { name: 'skyblue', r: 135, g: 206, b: 235, group: 'blue' },
  { name: 'lightskyblue', r: 135, g: 206, b: 250, group: 'blue' },
  { name: 'deepskyblue', r: 0, g: 191, b: 255, group: 'blue' },
  { name: 'dodgerblue', r: 30, g: 144, b: 255, group: 'blue' },
  { name: 'cornflowerblue', r: 100, g: 149, b: 237, group: 'blue' },
  { name: 'royalblue', r: 65, g: 105, b: 225, group: 'blue' },
  { name: 'blue', r: 0, g: 0, b: 255, group: 'blue' },
  { name: 'mediumblue', r: 0, g: 0, b: 205, group: 'blue' },
  { name: 'darkblue', r: 0, g: 0, b: 139, group: 'blue' },
  { name: 'navy', r: 0, g: 0, b: 128, group: 'blue' },
  { name: 'midnightblue', r: 25, g: 25, b: 112, group: 'blue' },

  // Brown colors
  { name: 'cornsilk', r: 255, g: 248, b: 220, group: 'brown' },
  { name: 'blanchedalmond', r: 255, g: 235, b: 205, group: 'brown' },
  { name: 'bisque', r: 255, g: 228, b: 196, group: 'brown' },
  { name: 'navajowhite', r: 255, g: 222, b: 173, group: 'brown' },
  { name: 'wheat', r: 245, g: 222, b: 179, group: 'brown' },
  { name: 'burlywood', r: 222, g: 184, b: 135, group: 'brown' },
  { name: 'tan', r: 210, g: 180, b: 140, group: 'brown' },
  { name: 'rosybrown', r: 188, g: 143, b: 143, group: 'brown' },
  { name: 'sandybrown', r: 244, g: 164, b: 96, group: 'brown' },
  { name: 'goldenrod', r: 218, g: 165, b: 32, group: 'brown' },
  { name: 'darkgoldenrod', r: 184, g: 134, b: 11, group: 'brown' },
  { name: 'peru', r: 205, g: 133, b: 63, group: 'brown' },
  { name: 'chocolate', r: 210, g: 105, b: 30, group: 'brown' },
  { name: 'saddlebrown', r: 139, g: 69, b: 19, group: 'brown' },
  { name: 'sienna', r: 160, g: 82, b: 45, group: 'brown' },
  { name: 'brown', r: 165, g: 42, b: 42, group: 'brown' },
  { name: 'maroon', r: 128, g: 0, b: 0, group: 'brown' },

  // White colors
  { name: 'white', r: 255, g: 255, b: 255, group: 'white' },
  { name: 'snow', r: 255, g: 250, b: 250, group: 'white' },
  { name: 'honeydew', r: 240, g: 255, b: 240, group: 'white' },
  { name: 'mintcream', r: 245, g: 255, b: 250, group: 'white' },
  { name: 'azure', r: 240, g: 255, b: 255, group: 'white' },
  { name: 'aliceblue', r: 240, g: 248, b: 255, group: 'white' },
  { name: 'ghostwhite', r: 248, g: 248, b: 255, group: 'white' },
  { name: 'whitesmoke', r: 245, g: 245, b: 245, group: 'white' },
  { name: 'seashell', r: 255, g: 245, b: 238, group: 'white' },
  { name: 'beige', r: 245, g: 245, b: 220, group: 'white' },
  { name: 'oldlace', r: 253, g: 245, b: 230, group: 'white' },
  { name: 'floralwhite', r: 255, g: 250, b: 240, group: 'white' },
  { name: 'ivory', r: 255, g: 255, b: 240, group: 'white' },
  { name: 'antiquewhite', r: 250, g: 235, b: 215, group: 'white' },
  { name: 'linen', r: 250, g: 240, b: 230, group: 'white' },
  { name: 'lavenderblush', r: 255, g: 240, b: 245, group: 'white' },
  { name: 'mistyrose', r: 255, g: 228, b: 225, group: 'white' },

  // Gray colors
  { name: 'gainsboro', r: 220, g: 220, b: 220, group: 'gray' },
  { name: 'lightgray', r: 211, g: 211, b: 211, group: 'gray' },
  { name: 'silver', r: 192, g: 192, b: 192, group: 'gray' },
  { name: 'darkgray', r: 169, g: 169, b: 169, group: 'gray' },
  { name: 'gray', r: 128, g: 128, b: 128, group: 'gray' },
  { name: 'dimgray', r: 105, g: 105, b: 105, group: 'gray' },
  { name: 'lightslategray', r: 119, g: 136, b: 153, group: 'gray' },
  { name: 'slategray', r: 112, g: 128, b: 144, group: 'gray' },
  { name: 'darkslategray', r: 47, g: 79, b: 79, group: 'gray' },

  // Black
  { name: 'black', r: 0, g: 0, b: 0, group: 'black' }
];

// Helper function to find nearest CSS color and return its W3Schools group
function findNearestColor(r: number, g: number, b: number): string {
  // Convert 0-1 range to 0-255 range for distance calculation
  const R = Math.round(r * 255);
  const G = Math.round(g * 255);
  const B = Math.round(b * 255);
  
  let nearestIndex = 0;
  let nearestDistance = 255 * 255 * 255;
  
  for (let i = 0; i < cssColors.length; i++) {
    const deltaR = cssColors[i].r - R;
    const deltaG = cssColors[i].g - G;
    const deltaB = cssColors[i].b - B;
    
    const distance = (deltaR * deltaR) + (deltaG * deltaG) + (deltaB * deltaB);
    
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestIndex = i;
    }
  }
  
  return cssColors[nearestIndex].group;
}

// Helper function to convert RGB to HSB and get brightness value
function rgbToHsb(r: number, g: number, b: number): [number, number, number] {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  const s = max === 0 ? 0 : (max - min) / max;
  const brightness = max;

  if (max !== min) {
    const d = max - min;
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [h * 360, s * 100, brightness * 100];
}

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
    
    // Get the last used collection from plugin data
    let defaultCollectionId = figma.root.getPluginData('lastUsedCollection');
    
    // If no stored collection or it doesn't exist anymore, find the most recently modified one
    if (!defaultCollectionId || !collections.find(c => c.id === defaultCollectionId)) {
      if (collections.length > 0) {
        // Find collection with most variables as proxy for most recently used
        const allVariables = await figma.variables.getLocalVariables();
        let mostActiveCollection = collections[0];
        let maxVariableCount = 0;
        
        for (const collection of collections) {
          const variableCount = allVariables.filter(v => v.variableCollectionId === collection.id).length;
          if (variableCount > maxVariableCount) {
            maxVariableCount = variableCount;
            mostActiveCollection = collection;
          }
        }
        
        defaultCollectionId = mostActiveCollection.id;
      }
    }
    
    figma.ui.postMessage({
      type: 'update-collections',
      collections: collections.map(c => ({ id: c.id, name: c.name })),
      defaultCollectionId: defaultCollectionId
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
    let isNewCollection = false;
    if (msg.collectionId === 'new') {
      targetCollection = await figma.variables.createVariableCollection("Colors");
      isNewCollection = true;
    } else {
      const collections = await figma.variables.getLocalVariableCollections();
      targetCollection = collections.find(c => c.id === msg.collectionId);
      if (!targetCollection) {
        targetCollection = await figma.variables.createVariableCollection("Colors");
        isNewCollection = true;
      }
    }
    
    // Use default mode for variable values
    const targetModeId = targetCollection.modes[0].modeId;

    // Keep track of created variables and used names
    const createdVariables: string[] = [];
    const usedNames = new Set<string>();
    
    // Get existing variable names in the collection to avoid duplicates
    const existingVariables = await figma.variables.getLocalVariables();
    for (const variable of existingVariables) {
      if (variable.variableCollectionId === targetCollection.id) {
        usedNames.add(variable.name); // Add existing names to our tracking set
      }
    }

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

      // Handle naming based on mode
      if (msg.namingMode === 'manual' && msg.customName && msg.customName.trim()) {
        // Use custom name provided by user
        let baseName = msg.customName.trim();
        
        // Append color match if checkbox is checked
        if (msg.appendColor) {
          const colorName = findNearestColor(fill.color.r, fill.color.g, fill.color.b);
          const [, , brightness] = rgbToHsb(fill.color.r, fill.color.g, fill.color.b);
          const brightnessValue = Math.round(brightness);
          baseName = `${baseName}-${colorName}-${brightnessValue}`;
        }
        
        let finalName = baseName;
        let duplicateCounter = 1;
        while (usedNames.has(finalName)) {
          finalName = `${baseName}-${duplicateCounter}`;
          duplicateCounter++;
        }
        variableName = finalName;
      } else {
        // Auto mode - use existing logic
      if (matchingTextNode) {
        // Use the matching text node's content
          let baseName = matchingTextNode.characters;
          let finalName = baseName;
          let duplicateCounter = 1;
          while (usedNames.has(finalName)) {
            finalName = `${baseName}-${duplicateCounter}`;
            duplicateCounter++;
          }
          variableName = finalName;
        // Remove this text node from available text nodes to avoid reusing it
        textNodes.splice(textNodes.indexOf(matchingTextNode), 1);
      } else if (textNodes.length > 0) {
        // If no matching text node but there are text nodes available, use the first one
          let baseName = `${textNodes[0].characters}${counter++}`;
          let finalName = baseName;
          let duplicateCounter = 1;
          while (usedNames.has(finalName)) {
            finalName = `${baseName}-${duplicateCounter}`;
            duplicateCounter++;
          }
          variableName = finalName;
      } else {
          // No text nodes available, use color-based naming with brightness
          const colorName = findNearestColor(fill.color.r, fill.color.g, fill.color.b);
          const [, , brightness] = rgbToHsb(fill.color.r, fill.color.g, fill.color.b);
          const brightnessValue = Math.round(brightness);
          let baseName = `${colorName}-${brightnessValue}`;
          
          // Handle duplicate names by adding a counter
          let finalName = baseName;
          let duplicateCounter = 1;
          while (usedNames.has(finalName)) {
            finalName = `${baseName}-${duplicateCounter}`;
            duplicateCounter++;
          }
          variableName = finalName;
        }
      }

      // Add the final name to used names set
      usedNames.add(variableName);

      const variable = await figma.variables.createVariable(
        variableName,
        targetCollection.id,
        'COLOR'
      );

      await variable.setValueForMode(targetModeId, {
        r: fill.color.r,
        g: fill.color.g,
        b: fill.color.b,
        a: fill.opacity || 1
      });

      // Add to created variables list instead of showing individual message
      createdVariables.push(variableName);
    }

    // At the end, after variables are created, store this collection as last used
    figma.root.setPluginData('lastUsedCollection', targetCollection.id);
    
    // Show completion message with count
    const count = createdVariables.length;
    if (count === 1) {
      figma.notify(`Created 1 variable: ${createdVariables[0]}`);
    } else {
      figma.notify(`Created ${count} variables`);
    }

    // If a new collection was created, notify the UI after variables are created
    if (isNewCollection) {
      figma.ui.postMessage({
        type: 'collection-created',
        collection: { id: targetCollection.id, name: targetCollection.name }
      });
    }
  }
};