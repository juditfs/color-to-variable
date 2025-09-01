/// <reference types="@figma/plugin-typings" />

interface PluginMessage {
  type: 'create-variable' | 'get-collections';
  collectionId?: string;
  namingMode?: 'figma-default' | 'auto' | 'manual';
  customName?: string;
  appendMode?: 'increment' | 'color';
}

figma.showUI(__html__, { width: 320, height: 600 });

// CSS color palette with expanded color matches

// Types for color groups
type ChromaticGroup = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'brown' | 'turquoise';
type NeutralGroup = 'white' | 'gray' | 'black';
type Group = ChromaticGroup | NeutralGroup;

interface NamedColor {
  name: string;
  r: number;
  g: number;
  b: number;
  group: Group;
}

const cssColors: NamedColor[] = [
  {
    name: "Amaranth purple",
    r: 171,
    g: 39,
    b: 79,
    group: "red"
  },
  {
    name: "Barn red",
    r: 124,
    g: 9,
    b: 2,
    group: "red"
  },
  {
    name: "Bittersweet",
    r: 254,
    g: 111,
    b: 94,
    group: "red"
  },
  {
    name: "Bittersweet shimmer",
    r: 191,
    g: 79,
    b: 81,
    group: "red"
  },
  {
    name: "Blood red",
    r: 102,
    g: 0,
    b: 0,
    group: "red"
  },
  {
    name: "Bright pink (Crayola)",
    r: 251,
    g: 96,
    b: 127,
    group: "red"
  },
  {
    name: "Burgundy",
    r: 128,
    g: 0,
    b: 32,
    group: "red"
  },
  {
    name: "Candy apple red",
    r: 255,
    g: 8,
    b: 0,
    group: "red"
  },
  {
    name: "Cantaloupe melon",
    r: 253,
    g: 188,
    b: 180,
    group: "red"
  },
  {
    name: "Cardinal",
    r: 197,
    g: 30,
    b: 58,
    group: "red"
  },
  {
    name: "Carmine",
    r: 150,
    g: 0,
    b: 24,
    group: "red"
  },
  {
    name: "Cerise",
    r: 222,
    g: 49,
    b: 99,
    group: "red"
  },
  {
    name: "Chili red",
    r: 226,
    g: 61,
    b: 40,
    group: "red"
  },
  {
    name: "Chocolate cosmos",
    r: 88,
    g: 17,
    b: 26,
    group: "red"
  },
  {
    name: "Cinnabar",
    r: 228,
    g: 77,
    b: 46,
    group: "red"
  },
  {
    name: "Claret",
    r: 127,
    g: 23,
    b: 52,
    group: "red"
  },
  {
    name: "Coquelicot",
    r: 255,
    g: 56,
    b: 0,
    group: "red"
  },
  {
    name: "Coral pink",
    r: 248,
    g: 131,
    b: 121,
    group: "red"
  },
  {
    name: "Cordovan",
    r: 137,
    g: 63,
    b: 69,
    group: "red"
  },
  {
    name: "Cornell red",
    r: 179,
    g: 27,
    b: 27,
    group: "red"
  },
  {
    name: "Crimson",
    r: 220,
    g: 20,
    b: 60,
    group: "red"
  },
  {
    name: "Dark red",
    r: 139,
    g: 0,
    b: 0,
    group: "red"
  },
  {
    name: "Falu red",
    r: 128,
    g: 24,
    b: 24,
    group: "red"
  },
  {
    name: "Fire brick",
    r: 178,
    g: 34,
    b: 34,
    group: "red"
  },
  {
    name: "Fire engine red",
    r: 206,
    g: 32,
    b: 41,
    group: "red"
  },
  {
    name: "Folly",
    r: 255,
    g: 0,
    b: 79,
    group: "red"
  },
  {
    name: "Garnet",
    r: 115,
    g: 54,
    b: 53,
    group: "red"
  },
  {
    name: "Imperial red",
    r: 237,
    g: 41,
    b: 57,
    group: "red"
  },
  {
    name: "Indian red",
    r: 205,
    g: 92,
    b: 92,
    group: "red"
  },
  {
    name: "Jasper",
    r: 208,
    g: 83,
    b: 64,
    group: "red"
  },
  {
    name: "Light coral",
    r: 240,
    g: 128,
    b: 128,
    group: "red"
  },
  {
    name: "Light red",
    r: 255,
    g: 127,
    b: 127,
    group: "red"
  },
  {
    name: "Madder",
    r: 165,
    g: 0,
    b: 33,
    group: "red"
  },
  {
    name: "Mahogany",
    r: 192,
    g: 64,
    b: 0,
    group: "red"
  },
  {
    name: "Maroon",
    r: 128,
    g: 0,
    b: 0,
    group: "red"
  },
  {
    name: "Misty rose",
    r: 255,
    g: 228,
    b: 225,
    group: "red"
  },
  {
    name: "Off Red (RGB)",
    r: 254,
    g: 0,
    b: 0,
    group: "red"
  },
  {
    name: "Old rose",
    r: 192,
    g: 128,
    b: 129,
    group: "red"
  },
  {
    name: "OU crimson",
    r: 132,
    g: 22,
    b: 23,
    group: "red"
  },
  {
    name: "Penn red",
    r: 153,
    g: 0,
    b: 0,
    group: "red"
  },
  {
    name: "Persian red",
    r: 204,
    g: 51,
    b: 51,
    group: "red"
  },
  {
    name: "Pink",
    r: 255,
    g: 192,
    b: 203,
    group: "red"
  },
  {
    name: "Poppy",
    r: 220,
    g: 52,
    b: 59,
    group: "red"
  },
  {
    name: "Red",
    r: 255,
    g: 0,
    b: 0,
    group: "red"
  },
  {
    name: "Red Brown",
    r: 165,
    g: 42,
    b: 42,
    group: "red"
  },
  {
    name: "Red (CMYK)",
    r: 237,
    g: 27,
    b: 36,
    group: "red"
  },
  {
    name: "Red (Crayola)",
    r: 238,
    g: 32,
    b: 78,
    group: "red"
  },
  {
    name: "Red (Munsell)",
    r: 242,
    g: 0,
    b: 60,
    group: "red"
  },
  {
    name: "Red (NCS)",
    r: 196,
    g: 2,
    b: 52,
    group: "red"
  },
  {
    name: "Red (Pantone)",
    r: 237,
    g: 40,
    b: 57,
    group: "red"
  },
  {
    name: "Redwood",
    r: 171,
    g: 78,
    b: 82,
    group: "red"
  },
  {
    name: "Rojo",
    r: 230,
    g: 0,
    b: 38,
    group: "red"
  },
  {
    name: "Rose",
    r: 255,
    g: 0,
    b: 128,
    group: "red"
  },
  {
    name: "Rose ebony",
    r: 103,
    g: 72,
    b: 70,
    group: "red"
  },
  {
    name: "Rose red",
    r: 194,
    g: 30,
    b: 86,
    group: "red"
  },
  {
    name: "Rose taupe",
    r: 144,
    g: 93,
    b: 93,
    group: "red"
  },
  {
    name: "Rose vale",
    r: 171,
    g: 78,
    b: 82,
    group: "red"
  },
  {
    name: "Rosewood",
    r: 101,
    g: 0,
    b: 11,
    group: "red"
  },
  {
    name: "Rosy brown",
    r: 188,
    g: 143,
    b: 143,
    group: "red"
  },
  {
    name: "Rust",
    r: 183,
    g: 65,
    b: 14,
    group: "red"
  },
  {
    name: "Rusty red",
    r: 218,
    g: 44,
    b: 67,
    group: "red"
  },
  {
    name: "Salmon",
    r: 250,
    g: 128,
    b: 114,
    group: "red"
  },
  {
    name: "Salmon pink",
    r: 255,
    g: 145,
    b: 164,
    group: "red"
  },
  {
    name: "Scarlet",
    r: 255,
    g: 36,
    b: 0,
    group: "red"
  },
  {
    name: "Syracuse Red Orange",
    r: 212,
    g: 69,
    b: 0,
    group: "red"
  },
  {
    name: "Tea rose (red)",
    r: 244,
    g: 194,
    b: 194,
    group: "red"
  },
  {
    name: "Tomato",
    r: 255,
    g: 99,
    b: 71,
    group: "red"
  },
  {
    name: "Turkey red",
    r: 169,
    g: 17,
    b: 1,
    group: "red"
  },
  {
    name: "Vermilion",
    r: 227,
    g: 66,
    b: 52,
    group: "red"
  },
  {
    name: "Wine",
    r: 114,
    g: 47,
    b: 55,
    group: "red"
  },
  {
    name: "Aerospace orange",
    r: 255,
    g: 79,
    b: 0,
    group: "orange"
  },
  {
    name: "Alloy orange",
    r: 196,
    g: 98,
    b: 16,
    group: "orange"
  },
  {
    name: "Amber",
    r: 255,
    g: 191,
    b: 0,
    group: "orange"
  },
  {
    name: "Apricot",
    r: 251,
    g: 206,
    b: 177,
    group: "orange"
  },
  {
    name: "Atomic tangerine",
    r: 255,
    g: 153,
    b: 102,
    group: "orange"
  },
  {
    name: "Brown",
    r: 150,
    g: 75,
    b: 0,
    group: "orange"
  },
  {
    name: "Burnt orange",
    r: 191,
    g: 87,
    b: 0,
    group: "orange"
  },
  {
    name: "Butterscotch",
    r: 224,
    g: 149,
    b: 64,
    group: "orange"
  },
  {
    name: "Carrot orange",
    r: 237,
    g: 145,
    b: 33,
    group: "orange"
  },
  {
    name: "Champagne (color)",
    r: 247,
    g: 231,
    b: 206,
    group: "orange"
  },
  {
    name: "Coral",
    r: 255,
    g: 127,
    b: 80,
    group: "orange"
  },
  {
    name: "Dark orange (web)",
    r: 255,
    g: 140,
    b: 0,
    group: "orange"
  },
  {
    name: "Desert sand (color)",
    r: 237,
    g: 201,
    b: 175,
    group: "orange"
  },
  {
    name: "Engineering orange",
    r: 186,
    g: 22,
    b: 12,
    group: "orange"
  },
  {
    name: "Flame",
    r: 226,
    g: 88,
    b: 34,
    group: "orange"
  },
  {
    name: "Giants orange",
    r: 254,
    g: 90,
    b: 29,
    group: "orange"
  },
  {
    name: "Gold",
    r: 255,
    g: 215,
    b: 0,
    group: "orange"
  },
  {
    name: "Golden Gate Bridge",
    r: 240,
    g: 74,
    b: 0,
    group: "orange"
  },
  {
    name: "Goldenrod",
    r: 218,
    g: 165,
    b: 32,
    group: "orange"
  },
  {
    name: "Hunyadi yellow",
    r: 232,
    g: 172,
    b: 65,
    group: "orange"
  },
  {
    name: "Light orange",
    r: 254,
    g: 216,
    b: 177,
    group: "orange"
  },
  {
    name: "Mahogany",
    r: 192,
    g: 64,
    b: 0,
    group: "orange"
  },
  {
    name: "Melon",
    r: 253,
    g: 188,
    b: 180,
    group: "orange"
  },
  {
    name: "Orange (Crayola)",
    r: 255,
    g: 117,
    b: 56,
    group: "orange"
  },
  {
    name: "Orange (Pantone)",
    r: 255,
    g: 88,
    b: 0,
    group: "orange"
  },
  {
    name: "Orange peel",
    r: 255,
    g: 160,
    b: 0,
    group: "orange"
  },
  {
    name: "Orange (web)",
    r: 255,
    g: 165,
    b: 0,
    group: "orange"
  },
  {
    name: "Orange (wheel)",
    r: 255,
    g: 128,
    b: 0,
    group: "orange"
  },
  {
    name: "Papaya whip",
    r: 255,
    g: 239,
    b: 213,
    group: "orange"
  },
  {
    name: "Peach",
    r: 255,
    g: 229,
    b: 180,
    group: "orange"
  },
  {
    name: "Persian orange",
    r: 217,
    g: 144,
    b: 88,
    group: "orange"
  },
  {
    name: "Persimmon",
    r: 236,
    g: 88,
    b: 0,
    group: "orange"
  },
  {
    name: "Princeton orange",
    r: 255,
    g: 143,
    b: 0,
    group: "orange"
  },
  {
    name: "Pumpkin",
    r: 255,
    g: 117,
    b: 24,
    group: "orange"
  },
  {
    name: "Safety orange",
    r: 255,
    g: 121,
    b: 0,
    group: "orange"
  },
  {
    name: "Saffron",
    r: 244,
    g: 196,
    b: 48,
    group: "orange"
  },
  {
    name: "Spanish orange",
    r: 232,
    g: 97,
    b: 0,
    group: "orange"
  },
  {
    name: "Tangelo",
    r: 249,
    g: 77,
    b: 0,
    group: "orange"
  },
  {
    name: "Tangerine",
    r: 242,
    g: 133,
    b: 0,
    group: "orange"
  },
  {
    name: "Tawny",
    r: 205,
    g: 87,
    b: 0,
    group: "orange"
  },
  {
    name: "Tiger’s Eye",
    r: 181,
    g: 105,
    b: 23,
    group: "orange"
  },
  {
    name: "UT orange",
    r: 255,
    g: 130,
    b: 0,
    group: "orange"
  },
  {
    name: "Xanthous",
    r: 241,
    g: 180,
    b: 47,
    group: "orange"
  },
  {
    name: "Auburn",
    r: 165,
    g: 42,
    b: 42,
    group: "brown"
  },
  {
    name: "Almond",
    r: 239,
    g: 222,
    b: 205,
    group: "brown"
  },
  {
    name: "Beaver",
    r: 159,
    g: 129,
    b: 112,
    group: "brown"
  },
  {
    name: "Beige",
    r: 245,
    g: 245,
    b: 220,
    group: "brown"
  },
  {
    name: "Bistre",
    r: 61,
    g: 43,
    b: 31,
    group: "brown"
  },
  {
    name: "Black bean",
    r: 61,
    g: 12,
    b: 2,
    group: "brown"
  },
  {
    name: "Black olive",
    r: 59,
    g: 60,
    b: 54,
    group: "brown"
  },
  {
    name: "Bole",
    r: 121,
    g: 68,
    b: 59,
    group: "brown"
  },
  {
    name: "Bone",
    r: 227,
    g: 218,
    b: 201,
    group: "brown"
  },
  {
    name: "Bronze",
    r: 205,
    g: 127,
    b: 50,
    group: "brown"
  },
  {
    name: "Brown",
    r: 153,
    g: 51,
    b: 0,
    group: "brown"
  },
  {
    name: "Brown sugar",
    r: 175,
    g: 110,
    b: 77,
    group: "brown"
  },
  {
    name: "Buff",
    r: 218,
    g: 160,
    b: 109,
    group: "brown"
  },
  {
    name: "Burgundy",
    r: 128,
    g: 0,
    b: 32,
    group: "brown"
  },
  {
    name: "Burnt sienna",
    r: 233,
    g: 116,
    b: 81,
    group: "brown"
  },
  {
    name: "Burnt umber",
    r: 138,
    g: 51,
    b: 36,
    group: "brown"
  },
  {
    name: "Camel",
    r: 193,
    g: 154,
    b: 107,
    group: "brown"
  },
  {
    name: "Caput mortuum",
    r: 89,
    g: 39,
    b: 32,
    group: "brown"
  },
  {
    name: "Caramel",
    r: 204,
    g: 127,
    b: 59,
    group: "brown"
  },
  {
    name: "Chamoisee",
    r: 160,
    g: 120,
    b: 90,
    group: "brown"
  },
  {
    name: "Chestnut",
    r: 149,
    g: 69,
    b: 53,
    group: "brown"
  },
  {
    name: "Chocolate",
    r: 123,
    g: 63,
    b: 0,
    group: "brown"
  },
  {
    name: "Citron",
    r: 221,
    g: 208,
    b: 106,
    group: "brown"
  },
  {
    name: "Cocoa Brown",
    r: 210,
    g: 105,
    b: 30,
    group: "brown"
  },
  {
    name: "Coffee",
    r: 111,
    g: 78,
    b: 55,
    group: "brown"
  },
  {
    name: "Copper",
    r: 184,
    g: 115,
    b: 51,
    group: "brown"
  },
  {
    name: "Cordovan",
    r: 137,
    g: 63,
    b: 69,
    group: "brown"
  },
  {
    name: "Coyote",
    r: 129,
    g: 97,
    b: 62,
    group: "brown"
  },
  {
    name: "Desert sand",
    r: 237,
    g: 201,
    b: 175,
    group: "brown"
  },
  {
    name: "Drab dark brown",
    r: 74,
    g: 65,
    b: 42,
    group: "brown"
  },
  {
    name: "Dun",
    r: 218,
    g: 200,
    b: 174,
    group: "brown"
  },
  {
    name: "Earth yellow",
    r: 225,
    g: 169,
    b: 95,
    group: "brown"
  },
  {
    name: "Ecru",
    r: 194,
    g: 178,
    b: 128,
    group: "brown"
  },
  {
    name: "Fallow",
    r: 193,
    g: 154,
    b: 107,
    group: "brown"
  },
  {
    name: "Fawn",
    r: 229,
    g: 170,
    b: 112,
    group: "brown"
  },
  {
    name: "Field drab",
    r: 108,
    g: 84,
    b: 30,
    group: "brown"
  },
  {
    name: "Fulvous",
    r: 228,
    g: 132,
    b: 0,
    group: "brown"
  },
  {
    name: "Golden brown",
    r: 153,
    g: 101,
    b: 21,
    group: "brown"
  },
  {
    name: "Goldenrod",
    r: 218,
    g: 165,
    b: 32,
    group: "brown"
  },
  {
    name: "Harvest gold",
    r: 218,
    g: 145,
    b: 0,
    group: "brown"
  },
  {
    name: "Khaki",
    r: 195,
    g: 176,
    b: 145,
    group: "brown"
  },
  {
    name: "Kobicha",
    r: 107,
    g: 68,
    b: 35,
    group: "brown"
  },
  {
    name: "Lion",
    r: 193,
    g: 154,
    b: 107,
    group: "brown"
  },
  {
    name: "Liver",
    r: 103,
    g: 76,
    b: 71,
    group: "brown"
  },
  {
    name: "Mahogany",
    r: 192,
    g: 64,
    b: 0,
    group: "brown"
  },
  {
    name: "Maroon",
    r: 128,
    g: 0,
    b: 0,
    group: "brown"
  },
  {
    name: "Ochre",
    r: 204,
    g: 119,
    b: 34,
    group: "brown"
  },
  {
    name: "Raw umber",
    r: 146,
    g: 102,
    b: 68,
    group: "brown"
  },
  {
    name: "Red Brown",
    r: 165,
    g: 42,
    b: 42,
    group: "brown"
  },
  {
    name: "Redwood",
    r: 164,
    g: 90,
    b: 82,
    group: "brown"
  },
  {
    name: "Rufous",
    r: 168,
    g: 28,
    b: 7,
    group: "brown"
  },
  {
    name: "Russet",
    r: 128,
    g: 70,
    b: 27,
    group: "brown"
  },
  {
    name: "Rust",
    r: 183,
    g: 65,
    b: 14,
    group: "brown"
  },
  {
    name: "Sand",
    r: 194,
    g: 178,
    b: 128,
    group: "brown"
  },
  {
    name: "Sandy brown",
    r: 244,
    g: 164,
    b: 96,
    group: "brown"
  },
  {
    name: "Satin sheen gold",
    r: 203,
    g: 161,
    b: 53,
    group: "brown"
  },
  {
    name: "Seal brown",
    r: 89,
    g: 38,
    b: 11,
    group: "brown"
  },
  {
    name: "Sepia",
    r: 112,
    g: 66,
    b: 20,
    group: "brown"
  },
  {
    name: "Sienna",
    r: 136,
    g: 45,
    b: 23,
    group: "brown"
  },
  {
    name: "Sinopia",
    r: 203,
    g: 65,
    b: 11,
    group: "brown"
  },
  {
    name: "Tan",
    r: 210,
    g: 180,
    b: 140,
    group: "brown"
  },
  {
    name: "Taupe",
    r: 72,
    g: 60,
    b: 50,
    group: "brown"
  },
  {
    name: "Tawny",
    r: 205,
    g: 87,
    b: 0,
    group: "brown"
  },
  {
    name: "Umber",
    r: 99,
    g: 81,
    b: 71,
    group: "brown"
  },
  {
    name: "Van Dyke",
    r: 68,
    g: 54,
    b: 47,
    group: "brown"
  },
  {
    name: "Walnut brown",
    r: 92,
    g: 82,
    b: 72,
    group: "brown"
  },
  {
    name: "Wenge",
    r: 100,
    g: 84,
    b: 82,
    group: "brown"
  },
  {
    name: "Wheat",
    r: 245,
    g: 222,
    b: 179,
    group: "brown"
  },
  {
    name: "Amber",
    r: 255,
    g: 191,
    b: 0,
    group: "yellow"
  },
  {
    name: "Apricot",
    r: 251,
    g: 206,
    b: 177,
    group: "yellow"
  },
  {
    name: "Arylide yellow",
    r: 233,
    g: 214,
    b: 107,
    group: "yellow"
  },
  {
    name: "Aureolin",
    r: 253,
    g: 238,
    b: 0,
    group: "yellow"
  },
  {
    name: "Beige",
    r: 245,
    g: 245,
    b: 220,
    group: "yellow"
  },
  {
    name: "Buff",
    r: 224,
    g: 171,
    b: 118,
    group: "yellow"
  },
  {
    name: "Canary",
    r: 255,
    g: 239,
    b: 0,
    group: "yellow"
  },
  {
    name: "Champagne",
    r: 247,
    g: 231,
    b: 206,
    group: "yellow"
  },
  {
    name: "Chartreuse",
    r: 223,
    g: 255,
    b: 0,
    group: "yellow"
  },
  {
    name: "Citron",
    r: 221,
    g: 208,
    b: 106,
    group: "yellow"
  },
  {
    name: "Citrine",
    r: 228,
    g: 208,
    b: 10,
    group: "yellow"
  },
  {
    name: "Cosmic latte",
    r: 255,
    g: 248,
    b: 231,
    group: "yellow"
  },
  {
    name: "Cream",
    r: 255,
    g: 253,
    b: 208,
    group: "yellow"
  },
  {
    name: "Dark goldenrod",
    r: 184,
    g: 134,
    b: 11,
    group: "yellow"
  },
  {
    name: "Ecru",
    r: 205,
    g: 178,
    b: 128,
    group: "yellow"
  },
  {
    name: "Flax",
    r: 238,
    g: 220,
    b: 130,
    group: "yellow"
  },
  {
    name: "Gamboge",
    r: 239,
    g: 155,
    b: 15,
    group: "yellow"
  },
  {
    name: "Gold",
    r: 255,
    g: 215,
    b: 0,
    group: "yellow"
  },
  {
    name: "Gold (metallic)",
    r: 212,
    g: 175,
    b: 55,
    group: "yellow"
  },
  {
    name: "Goldenrod",
    r: 218,
    g: 165,
    b: 32,
    group: "yellow"
  },
  {
    name: "Harvest gold",
    r: 230,
    g: 168,
    b: 23,
    group: "yellow"
  },
  {
    name: "Icterine",
    r: 252,
    g: 247,
    b: 94,
    group: "yellow"
  },
  {
    name: "Ivory",
    r: 255,
    g: 255,
    b: 240,
    group: "yellow"
  },
  {
    name: "Jasmine",
    r: 248,
    g: 222,
    b: 126,
    group: "yellow"
  },
  {
    name: "Jonquil",
    r: 250,
    g: 202,
    b: 22,
    group: "yellow"
  },
  {
    name: "Khaki",
    r: 195,
    g: 176,
    b: 145,
    group: "yellow"
  },
  {
    name: "Lemon chiffon",
    r: 255,
    g: 250,
    b: 205,
    group: "yellow"
  },
  {
    name: "Lemon Lime",
    r: 227,
    g: 255,
    b: 0,
    group: "yellow"
  },
  {
    name: "Light yellow",
    r: 255,
    g: 255,
    b: 224,
    group: "yellow"
  },
  {
    name: "Lion",
    r: 193,
    g: 154,
    b: 107,
    group: "yellow"
  },
  {
    name: "Maize",
    r: 251,
    g: 236,
    b: 93,
    group: "yellow"
  },
  {
    name: "Mikado yellow",
    r: 255,
    g: 196,
    b: 12,
    group: "yellow"
  },
  {
    name: "Mindaro",
    r: 227,
    g: 249,
    b: 136,
    group: "yellow"
  },
  {
    name: "Mustard",
    r: 255,
    g: 219,
    b: 88,
    group: "yellow"
  },
  {
    name: "Naples yellow",
    r: 250,
    g: 218,
    b: 94,
    group: "yellow"
  },
  {
    name: "Navajo white",
    r: 255,
    g: 222,
    b: 173,
    group: "yellow"
  },
  {
    name: "Old gold",
    r: 207,
    g: 181,
    b: 59,
    group: "yellow"
  },
  {
    name: "Olive",
    r: 128,
    g: 128,
    b: 0,
    group: "yellow"
  },
  {
    name: "Papaya whip",
    r: 255,
    g: 239,
    b: 213,
    group: "yellow"
  },
  {
    name: "Peach Yellow",
    r: 250,
    g: 223,
    b: 173,
    group: "yellow"
  },
  {
    name: "Pear",
    r: 209,
    g: 226,
    b: 49,
    group: "yellow"
  },
  {
    name: "Saffron",
    r: 244,
    g: 196,
    b: 49,
    group: "yellow"
  },
  {
    name: "School bus yellow",
    r: 255,
    g: 216,
    b: 0,
    group: "yellow"
  },
  {
    name: "Selective yellow",
    r: 255,
    g: 186,
    b: 0,
    group: "yellow"
  },
  {
    name: "Stil de grain yellow",
    r: 250,
    g: 218,
    b: 94,
    group: "yellow"
  },
  {
    name: "Straw",
    r: 228,
    g: 217,
    b: 111,
    group: "yellow"
  },
  {
    name: "Sunglow",
    r: 255,
    g: 204,
    b: 51,
    group: "yellow"
  },
  {
    name: "Sunset",
    r: 250,
    g: 214,
    b: 165,
    group: "yellow"
  },
  {
    name: "Vanilla",
    r: 243,
    g: 229,
    b: 171,
    group: "yellow"
  },
  {
    name: "Wheat",
    r: 245,
    g: 222,
    b: 179,
    group: "yellow"
  },
  {
    name: "Yellow",
    r: 255,
    g: 255,
    b: 0,
    group: "yellow"
  },
  {
    name: "Apple green",
    r: 141,
    g: 182,
    b: 0,
    group: "green"
  },
  {
    name: "Aquamarine",
    r: 0,
    g: 255,
    b: 191,
    group: "green"
  },
  {
    name: "Asparagus",
    r: 123,
    g: 160,
    b: 91,
    group: "green"
  },
  {
    name: "Avocado",
    r: 86,
    g: 130,
    b: 3,
    group: "green"
  },
  {
    name: "Bright green",
    r: 102,
    g: 255,
    b: 0,
    group: "green"
  },
  {
    name: "British racing green",
    r: 0,
    g: 66,
    b: 37,
    group: "green"
  },
  {
    name: "Brunswick green",
    r: 27,
    g: 77,
    b: 62,
    group: "green"
  },
  {
    name: "Cal Poly green",
    r: 30,
    g: 77,
    b: 43,
    group: "green"
  },
  {
    name: "Castleton green",
    r: 0,
    g: 86,
    b: 59,
    group: "green"
  },
  {
    name: "Celadon",
    r: 172,
    g: 225,
    b: 175,
    group: "green"
  },
  {
    name: "Chartreuse",
    r: 128,
    g: 255,
    b: 0,
    group: "green"
  },
  {
    name: "Cyan",
    r: 0,
    g: 255,
    b: 255,
    group: "green"
  },
  {
    name: "Dark green",
    r: 1,
    g: 50,
    b: 32,
    group: "green"
  },
  {
    name: "Dark moss green",
    r: 74,
    g: 93,
    b: 35,
    group: "green"
  },
  {
    name: "Dark pastel green",
    r: 3,
    g: 192,
    b: 60,
    group: "green"
  },
  {
    name: "Dark spring green",
    r: 23,
    g: 114,
    b: 69,
    group: "green"
  },
  {
    name: "Dartmouth green",
    r: 0,
    g: 105,
    b: 62,
    group: "green"
  },
  {
    name: "Emerald",
    r: 80,
    g: 200,
    b: 120,
    group: "green"
  },
  {
    name: "Erin",
    r: 0,
    g: 255,
    b: 64,
    group: "green"
  },
  {
    name: "Fern green",
    r: 79,
    g: 121,
    b: 66,
    group: "green"
  },
  {
    name: "Forest green",
    r: 34,
    g: 139,
    b: 34,
    group: "green"
  },
  {
    name: "Green",
    r: 0,
    g: 255,
    b: 0,
    group: "green"
  },
  {
    name: "Green Yellow",
    r: 173,
    g: 255,
    b: 47,
    group: "green"
  },
  {
    name: "Harlequin",
    r: 63,
    g: 255,
    b: 0,
    group: "green"
  },
  {
    name: "Honeydew",
    r: 240,
    g: 255,
    b: 240,
    group: "green"
  },
  {
    name: "Hooker's green",
    r: 73,
    g: 121,
    b: 107,
    group: "green"
  },
  {
    name: "Hunter green",
    r: 53,
    g: 94,
    b: 59,
    group: "green"
  },
  {
    name: "India green",
    r: 19,
    g: 136,
    b: 8,
    group: "green"
  },
  {
    name: "Islamic green",
    r: 19,
    g: 136,
    b: 8,
    group: "green"
  },
  {
    name: "Jade",
    r: 0,
    g: 168,
    b: 107,
    group: "green"
  },
  {
    name: "Jungle green",
    r: 41,
    g: 171,
    b: 135,
    group: "green"
  },
  {
    name: "Kelly green",
    r: 76,
    g: 187,
    b: 23,
    group: "green"
  },
  {
    name: "Lawn green",
    r: 124,
    g: 252,
    b: 0,
    group: "green"
  },
  {
    name: "Light green",
    r: 144,
    g: 238,
    b: 144,
    group: "green"
  },
  {
    name: "Lime",
    r: 192,
    g: 255,
    b: 0,
    group: "green"
  },
  {
    name: "Lime green",
    r: 50,
    g: 205,
    b: 50,
    group: "green"
  },
  {
    name: "Malachite",
    r: 11,
    g: 218,
    b: 81,
    group: "green"
  },
  {
    name: "Mantis",
    r: 116,
    g: 195,
    b: 101,
    group: "green"
  },
  {
    name: "Midnight green",
    r: 0,
    g: 73,
    b: 83,
    group: "green"
  },
  {
    name: "Mindaro",
    r: 227,
    g: 249,
    b: 136,
    group: "green"
  },
  {
    name: "Mint",
    r: 62,
    g: 180,
    b: 137,
    group: "green"
  },
  {
    name: "Moss green",
    r: 138,
    g: 154,
    b: 91,
    group: "green"
  },
  {
    name: "Myrtle green",
    r: 49,
    g: 120,
    b: 115,
    group: "green"
  },
  {
    name: "Neon green",
    r: 57,
    g: 255,
    b: 20,
    group: "green"
  },
  {
    name: "Office green",
    r: 0,
    g: 128,
    b: 0,
    group: "green"
  },
  {
    name: "Olive",
    r: 128,
    g: 128,
    b: 0,
    group: "green"
  },
  {
    name: "Olivine",
    r: 154,
    g: 185,
    b: 115,
    group: "green"
  },
  {
    name: "Pakistan green",
    r: 0,
    g: 64,
    b: 26,
    group: "green"
  },
  {
    name: "Paris green",
    r: 80,
    g: 200,
    b: 120,
    group: "green"
  },
  {
    name: "Pear",
    r: 209,
    g: 226,
    b: 49,
    group: "green"
  },
  {
    name: "Persian green",
    r: 0,
    g: 166,
    b: 147,
    group: "green"
  },
  {
    name: "Pigment green",
    r: 0,
    g: 165,
    b: 80,
    group: "green"
  },
  {
    name: "Pine green",
    r: 1,
    g: 121,
    b: 111,
    group: "green"
  },
  {
    name: "Pistachio",
    r: 147,
    g: 197,
    b: 114,
    group: "green"
  },
  {
    name: "Reseda green",
    r: 108,
    g: 124,
    b: 89,
    group: "green"
  },
  {
    name: "Robin egg blue",
    r: 0,
    g: 204,
    b: 204,
    group: "green"
  },
  {
    name: "Sage",
    r: 188,
    g: 184,
    b: 138,
    group: "green"
  },
  {
    name: "Screamin' green",
    r: 118,
    g: 255,
    b: 122,
    group: "green"
  },
  {
    name: "Sea green",
    r: 46,
    g: 139,
    b: 87,
    group: "green"
  },
  {
    name: "SGBUS green",
    r: 85,
    g: 221,
    b: 51,
    group: "green"
  },
  {
    name: "Shamrock green",
    r: 0,
    g: 158,
    b: 96,
    group: "green"
  },
  {
    name: "Spring bud",
    r: 167,
    g: 252,
    b: 0,
    group: "green"
  },
  {
    name: "Spring green",
    r: 0,
    g: 255,
    b: 127,
    group: "green"
  },
  {
    name: "Tea green",
    r: 208,
    g: 240,
    b: 192,
    group: "green"
  },
  {
    name: "Teal",
    r: 0,
    g: 128,
    b: 128,
    group: "green"
  },
  {
    name: "Turquoise",
    r: 64,
    g: 224,
    b: 208,
    group: "green"
  },
  {
    name: "Viridian",
    r: 64,
    g: 130,
    b: 109,
    group: "green"
  },
  {
    name: "Yellow Green",
    r: 154,
    g: 205,
    b: 50,
    group: "green"
  },
  {
    name: "Alice blue",
    r: 240,
    g: 248,
    b: 255,
    group: "turquoise"
  },
  {
    name: "Aqua",
    r: 15,
    g: 255,
    b: 255,
    group: "turquoise"
  },
  {
    name: "Aquamarine",
    r: 127,
    g: 255,
    b: 212,
    group: "turquoise"
  },
  {
    name: "Azure",
    r: 0,
    g: 127,
    b: 255,
    group: "turquoise"
  },
  {
    name: "Azure (web)",
    r: 240,
    g: 255,
    b: 255,
    group: "turquoise"
  },
  {
    name: "Blue Green",
    r: 13,
    g: 152,
    b: 186,
    group: "turquoise"
  },
  {
    name: "Capri",
    r: 0,
    g: 191,
    b: 255,
    group: "turquoise"
  },
  {
    name: "Caribbean Current",
    r: 0,
    g: 109,
    b: 111,
    group: "turquoise"
  },
  {
    name: "Celeste",
    r: 178,
    g: 255,
    b: 255,
    group: "turquoise"
  },
  {
    name: "Cerulean",
    r: 0,
    g: 123,
    b: 167,
    group: "turquoise"
  },
  {
    name: "Cyan (RGB)",
    r: 0,
    g: 255,
    b: 255,
    group: "turquoise"
  },
  {
    name: "Dark cyan",
    r: 0,
    g: 139,
    b: 139,
    group: "turquoise"
  },
  {
    name: "Electric blue",
    r: 125,
    g: 249,
    b: 255,
    group: "turquoise"
  },
  {
    name: "Fluorescent cyan",
    r: 21,
    g: 244,
    b: 238,
    group: "turquoise"
  },
  {
    name: "Jungle green",
    r: 41,
    g: 171,
    b: 135,
    group: "turquoise"
  },
  {
    name: "Keppel",
    r: 58,
    g: 176,
    b: 158,
    group: "turquoise"
  },
  {
    name: "Ice blue",
    r: 153,
    g: 255,
    b: 255,
    group: "turquoise"
  },
  {
    name: "Light cyan",
    r: 224,
    g: 255,
    b: 255,
    group: "turquoise"
  },
  {
    name: "Light sea green",
    r: 32,
    g: 178,
    b: 170,
    group: "turquoise"
  },
  {
    name: "Mint green",
    r: 223,
    g: 255,
    b: 253,
    group: "turquoise"
  },
  {
    name: "Mint",
    r: 62,
    g: 180,
    b: 137,
    group: "turquoise"
  },
  {
    name: "Moonstone",
    r: 58,
    g: 168,
    b: 193,
    group: "turquoise"
  },
  {
    name: "Myrtle Green",
    r: 49,
    g: 120,
    b: 115,
    group: "turquoise"
  },
  {
    name: "Pacific cyan",
    r: 28,
    g: 169,
    b: 201,
    group: "turquoise"
  },
  {
    name: "Persian green",
    r: 0,
    g: 166,
    b: 147,
    group: "turquoise"
  },
  {
    name: "Pine green",
    r: 1,
    g: 121,
    b: 111,
    group: "turquoise"
  },
  {
    name: "Process Cyan",
    r: 0,
    g: 183,
    b: 235,
    group: "turquoise"
  },
  {
    name: "Robin egg blue",
    r: 0,
    g: 204,
    b: 204,
    group: "turquoise"
  },
  {
    name: "Sea green",
    r: 46,
    g: 139,
    b: 87,
    group: "turquoise"
  },
  {
    name: "Skobeloff",
    r: 0,
    g: 122,
    b: 116,
    group: "turquoise"
  },
  {
    name: "Sky blue (Crayola)",
    r: 223,
    g: 255,
    b: 253,
    group: "turquoise"
  },
  {
    name: "Spring green",
    r: 0,
    g: 255,
    b: 127,
    group: "turquoise"
  },
  {
    name: "Teal",
    r: 0,
    g: 128,
    b: 128,
    group: "turquoise"
  },
  {
    name: "Tiffany Blue",
    r: 129,
    g: 216,
    b: 208,
    group: "turquoise"
  },
  {
    name: "Turquoise",
    r: 64,
    g: 224,
    b: 208,
    group: "turquoise"
  },
  {
    name: "Verdigris",
    r: 67,
    g: 179,
    b: 174,
    group: "turquoise"
  },
  {
    name: "Vivid sky blue",
    r: 0,
    g: 204,
    b: 255,
    group: "turquoise"
  },
  {
    name: "Zomp",
    r: 57,
    g: 167,
    b: 141,
    group: "turquoise"
  },
  {
    name: "Aero",
    r: 0,
    g: 185,
    b: 232,
    group: "blue"
  },
  {
    name: "Air Force blue",
    r: 93,
    g: 138,
    b: 168,
    group: "blue"
  },
  {
    name: "Air superiority blue",
    r: 114,
    g: 160,
    b: 193,
    group: "blue"
  },
  {
    name: "Alice Blue",
    r: 240,
    g: 248,
    b: 255,
    group: "blue"
  },
  {
    name: "Argentinian Blue",
    r: 108,
    g: 180,
    b: 238,
    group: "blue"
  },
  {
    name: "Azure",
    r: 0,
    g: 127,
    b: 255,
    group: "blue"
  },
  {
    name: "Azul",
    r: 0,
    g: 112,
    b: 187,
    group: "blue"
  },
  {
    name: "Baby blue",
    r: 137,
    g: 207,
    b: 240,
    group: "blue"
  },
  {
    name: "Berkeley Blue",
    r: 0,
    g: 50,
    b: 98,
    group: "blue"
  },
  {
    name: "Bice blue",
    r: 32,
    g: 114,
    b: 175,
    group: "blue"
  },
  {
    name: "Bleu de France",
    r: 49,
    g: 140,
    b: 231,
    group: "blue"
  },
  {
    name: "Blue",
    r: 0,
    g: 0,
    b: 255,
    group: "blue"
  },
  {
    name: "Blue Gray",
    r: 102,
    g: 153,
    b: 204,
    group: "blue"
  },
  {
    name: "Bondi blue",
    r: 0,
    g: 149,
    b: 182,
    group: "blue"
  },
  {
    name: "Brandeis blue",
    r: 0,
    g: 112,
    b: 255,
    group: "blue"
  },
  {
    name: "Byzantine blue",
    r: 52,
    g: 87,
    b: 213,
    group: "blue"
  },
  {
    name: "Cambridge blue",
    r: 133,
    g: 176,
    b: 154,
    group: "blue"
  },
  {
    name: "Carolina blue",
    r: 123,
    g: 175,
    b: 212,
    group: "blue"
  },
  {
    name: "Celestial Blue",
    r: 73,
    g: 151,
    b: 208,
    group: "blue"
  },
  {
    name: "Celtic Blue",
    r: 36,
    g: 107,
    b: 206,
    group: "blue"
  },
  {
    name: "Cerulean",
    r: 0,
    g: 123,
    b: 167,
    group: "blue"
  },
  {
    name: "Chefchaouen Blue",
    r: 70,
    g: 143,
    b: 234,
    group: "blue"
  },
  {
    name: "Chrysler blue",
    r: 59,
    g: 0,
    b: 219,
    group: "blue"
  },
  {
    name: "Cobalt blue",
    r: 0,
    g: 71,
    b: 171,
    group: "blue"
  },
  {
    name: "Columbia blue",
    r: 185,
    g: 217,
    b: 235,
    group: "blue"
  },
  {
    name: "Cornflower blue",
    r: 100,
    g: 149,
    b: 237,
    group: "blue"
  },
  {
    name: "Blue (Crayola)",
    r: 31,
    g: 117,
    b: 254,
    group: "blue"
  },
  {
    name: "Dark blue",
    r: 0,
    g: 0,
    b: 184,
    group: "blue"
  },
  {
    name: "Deep Sky Blue",
    r: 0,
    g: 191,
    b: 255,
    group: "blue"
  },
  {
    name: "Delft Blue",
    r: 31,
    g: 48,
    b: 94,
    group: "blue"
  },
  {
    name: "Denim",
    r: 21,
    g: 96,
    b: 189,
    group: "blue"
  },
  {
    name: "Dodger blue",
    r: 30,
    g: 144,
    b: 255,
    group: "blue"
  },
  {
    name: "Duke blue",
    r: 0,
    g: 0,
    b: 156,
    group: "blue"
  },
  {
    name: "Egyptian blue",
    r: 16,
    g: 52,
    b: 166,
    group: "blue"
  },
  {
    name: "Federal blue",
    r: 22,
    g: 22,
    b: 107,
    group: "blue"
  },
  {
    name: "Glaucous",
    r: 96,
    g: 130,
    b: 182,
    group: "blue"
  },
  {
    name: "Green Blue",
    r: 17,
    g: 100,
    b: 180,
    group: "blue"
  },
  {
    name: "Electric indigo",
    r: 111,
    g: 0,
    b: 255,
    group: "blue"
  },
  {
    name: "French Blue",
    r: 0,
    g: 114,
    b: 187,
    group: "blue"
  },
  {
    name: "Ice blue",
    r: 153,
    g: 255,
    b: 255,
    group: "blue"
  },
  {
    name: "Indigo",
    r: 75,
    g: 0,
    b: 130,
    group: "blue"
  },
  {
    name: "Indigo dye",
    r: 0,
    g: 65,
    b: 106,
    group: "blue"
  },
  {
    name: "International Klein Blue",
    r: 0,
    g: 47,
    b: 167,
    group: "blue"
  },
  {
    name: "Jordy Blue",
    r: 138,
    g: 185,
    b: 241,
    group: "blue"
  },
  {
    name: "Lapis Lazuli",
    r: 38,
    g: 97,
    b: 156,
    group: "blue"
  },
  {
    name: "Light blue",
    r: 173,
    g: 216,
    b: 230,
    group: "blue"
  },
  {
    name: "Light Sky Blue",
    r: 227,
    g: 240,
    b: 252,
    group: "blue"
  },
  {
    name: "Majorelle Blue",
    r: 96,
    g: 80,
    b: 220,
    group: "blue"
  },
  {
    name: "Marian blue",
    r: 43,
    g: 69,
    b: 147,
    group: "blue"
  },
  {
    name: "Maya blue",
    r: 115,
    g: 194,
    b: 251,
    group: "blue"
  },
  {
    name: "Medium blue",
    r: 0,
    g: 0,
    b: 205,
    group: "blue"
  },
  {
    name: "Medium slate blue",
    r: 123,
    g: 104,
    b: 238,
    group: "blue"
  },
  {
    name: "Midnight blue",
    r: 25,
    g: 25,
    b: 112,
    group: "blue"
  },
  {
    name: "Blue (Munsell)",
    r: 0,
    g: 147,
    b: 175,
    group: "blue"
  },
  {
    name: "Navy blue",
    r: 0,
    g: 0,
    b: 128,
    group: "blue"
  },
  {
    name: "Blue (NCS)",
    r: 0,
    g: 135,
    b: 189,
    group: "blue"
  },
  {
    name: "Neon blue",
    r: 70,
    g: 102,
    b: 255,
    group: "blue"
  },
  {
    name: "Non Photo blue",
    r: 164,
    g: 221,
    b: 237,
    group: "blue"
  },
  {
    name: "Oxford Blue",
    r: 0,
    g: 33,
    b: 71,
    group: "blue"
  },
  {
    name: "Palatinate blue",
    r: 39,
    g: 59,
    b: 226,
    group: "blue"
  },
  {
    name: "Pale azure",
    r: 135,
    g: 211,
    b: 248,
    group: "blue"
  },
  {
    name: "Penn Blue",
    r: 1,
    g: 31,
    b: 91,
    group: "blue"
  },
  {
    name: "Periwinkle",
    r: 204,
    g: 204,
    b: 255,
    group: "blue"
  },
  {
    name: "Persian blue",
    r: 28,
    g: 57,
    b: 187,
    group: "blue"
  },
  {
    name: "Phthalo blue",
    r: 0,
    g: 15,
    b: 137,
    group: "blue"
  },
  {
    name: "Picton Blue",
    r: 69,
    g: 177,
    b: 232,
    group: "blue"
  },
  {
    name: "Polynesian blue",
    r: 34,
    g: 76,
    b: 152,
    group: "blue"
  },
  {
    name: "Powder blue",
    r: 158,
    g: 185,
    b: 212,
    group: "blue"
  },
  {
    name: "Prussian blue",
    r: 0,
    g: 49,
    b: 83,
    group: "blue"
  },
  {
    name: "Resolution Blue",
    r: 0,
    g: 35,
    b: 135,
    group: "blue"
  },
  {
    name: "RISD Blue",
    r: 36,
    g: 84,
    b: 255,
    group: "blue"
  },
  {
    name: "Royal Blue (web color)",
    r: 65,
    g: 105,
    b: 225,
    group: "blue"
  },
  {
    name: "Royal blue (traditional)",
    r: 0,
    g: 35,
    b: 102,
    group: "blue"
  },
  {
    name: "Ruddy Blue",
    r: 118,
    g: 171,
    b: 223,
    group: "blue"
  },
  {
    name: "Sapphire",
    r: 15,
    g: 82,
    b: 186,
    group: "blue"
  },
  {
    name: "Honolulu Blue",
    r: 0,
    g: 118,
    b: 182,
    group: "blue"
  },
  {
    name: "Savoy blue",
    r: 75,
    g: 97,
    b: 209,
    group: "blue"
  },
  {
    name: "Silver Lake Blue",
    r: 93,
    g: 137,
    b: 186,
    group: "blue"
  },
  {
    name: "Sky blue",
    r: 135,
    g: 206,
    b: 235,
    group: "blue"
  },
  {
    name: "Light sky blue",
    r: 227,
    g: 240,
    b: 252,
    group: "blue"
  },
  {
    name: "Space cadet",
    r: 30,
    g: 41,
    b: 82,
    group: "blue"
  },
  {
    name: "Steel blue",
    r: 70,
    g: 130,
    b: 180,
    group: "blue"
  },
  {
    name: "Tang Blue",
    r: 0,
    g: 89,
    b: 207,
    group: "blue"
  },
  {
    name: "True Blue",
    r: 45,
    g: 104,
    b: 196,
    group: "blue"
  },
  {
    name: "Tufts Blue",
    r: 62,
    g: 142,
    b: 222,
    group: "blue"
  },
  {
    name: "UCLA Blue",
    r: 39,
    g: 116,
    b: 174,
    group: "blue"
  },
  {
    name: "Ultramarine",
    r: 18,
    g: 10,
    b: 143,
    group: "blue"
  },
  {
    name: "United Nations Blue",
    r: 75,
    g: 146,
    b: 219,
    group: "blue"
  },
  {
    name: "Uranian Blue",
    r: 175,
    g: 219,
    b: 245,
    group: "blue"
  },
  {
    name: "Violet Blue",
    r: 50,
    g: 74,
    b: 178,
    group: "blue"
  },
  {
    name: "Vista Blue",
    r: 124,
    g: 158,
    b: 217,
    group: "blue"
  },
  {
    name: "Yale Blue",
    r: 0,
    g: 53,
    b: 107,
    group: "blue"
  },
  {
    name: "YInMn Blue",
    r: 46,
    g: 80,
    b: 144,
    group: "blue"
  },
  {
    name: "Zaffre",
    r: 0,
    g: 20,
    b: 168,
    group: "blue"
  },
  {
    name: "African violet",
    r: 178,
    g: 132,
    b: 190,
    group: "purple"
  },
  {
    name: "Amethyst",
    r: 153,
    g: 102,
    b: 204,
    group: "purple"
  },
  {
    name: "Blue Violet",
    r: 138,
    g: 43,
    b: 226,
    group: "purple"
  },
  {
    name: "Burgundy",
    r: 128,
    g: 0,
    b: 32,
    group: "purple"
  },
  {
    name: "Byzantium",
    r: 112,
    g: 41,
    b: 99,
    group: "purple"
  },
  {
    name: "Caput mortuum",
    r: 89,
    g: 39,
    b: 32,
    group: "purple"
  },
  {
    name: "Cerise",
    r: 222,
    g: 49,
    b: 99,
    group: "purple"
  },
  {
    name: "Chinese violet",
    r: 133,
    g: 96,
    b: 136,
    group: "purple"
  },
  {
    name: "Dark purple",
    r: 48,
    g: 25,
    b: 52,
    group: "purple"
  },
  {
    name: "Dark violet",
    r: 148,
    g: 0,
    b: 211,
    group: "purple"
  },
  {
    name: "Eggplant",
    r: 97,
    g: 64,
    b: 81,
    group: "purple"
  },
  {
    name: "Electric indigo",
    r: 111,
    g: 0,
    b: 255,
    group: "purple"
  },
  {
    name: "Electric purple",
    r: 191,
    g: 0,
    b: 255,
    group: "purple"
  },
  {
    name: "Electric violet",
    r: 143,
    g: 0,
    b: 255,
    group: "purple"
  },
  {
    name: "English violet",
    r: 86,
    g: 60,
    b: 92,
    group: "purple"
  },
  {
    name: "Eminence",
    r: 108,
    g: 48,
    b: 130,
    group: "purple"
  },
  {
    name: "Fairy Tale",
    r: 242,
    g: 193,
    b: 209,
    group: "purple"
  },
  {
    name: "Fandango",
    r: 181,
    g: 51,
    b: 137,
    group: "purple"
  },
  {
    name: "French mauve",
    r: 212,
    g: 115,
    b: 212,
    group: "purple"
  },
  {
    name: "French violet",
    r: 136,
    g: 6,
    b: 206,
    group: "purple"
  },
  {
    name: "Fuchsia",
    r: 255,
    g: 0,
    b: 255,
    group: "purple"
  },
  {
    name: "Grape",
    r: 111,
    g: 45,
    b: 168,
    group: "purple"
  },
  {
    name: "Heliotrope",
    r: 223,
    g: 115,
    b: 255,
    group: "purple"
  },
  {
    name: "Indigo",
    r: 75,
    g: 0,
    b: 130,
    group: "purple"
  },
  {
    name: "Iris",
    r: 90,
    g: 79,
    b: 207,
    group: "purple"
  },
  {
    name: "Japanese violet",
    r: 91,
    g: 50,
    b: 86,
    group: "purple"
  },
  {
    name: "Lavender blush",
    r: 255,
    g: 240,
    b: 245,
    group: "purple"
  },
  {
    name: "Lavender (floral)",
    r: 181,
    g: 126,
    b: 220,
    group: "purple"
  },
  {
    name: "Lavender (web)",
    r: 230,
    g: 230,
    b: 250,
    group: "purple"
  },
  {
    name: "Lilac",
    r: 200,
    g: 162,
    b: 200,
    group: "purple"
  },
  {
    name: "Majorelle Blue",
    r: 96,
    g: 80,
    b: 220,
    group: "purple"
  },
  {
    name: "Magenta",
    r: 255,
    g: 0,
    b: 255,
    group: "purple"
  },
  {
    name: "Mardi Gras",
    r: 136,
    g: 0,
    b: 133,
    group: "purple"
  },
  {
    name: "Mauve",
    r: 224,
    g: 176,
    b: 255,
    group: "purple"
  },
  {
    name: "Mauveine",
    r: 141,
    g: 2,
    b: 155,
    group: "purple"
  },
  {
    name: "Medium slate blue",
    r: 123,
    g: 104,
    b: 238,
    group: "purple"
  },
  {
    name: "Mountbatten pink",
    r: 153,
    g: 122,
    b: 141,
    group: "purple"
  },
  {
    name: "Mulberry",
    r: 197,
    g: 75,
    b: 140,
    group: "purple"
  },
  {
    name: "Murrey",
    r: 139,
    g: 0,
    b: 75,
    group: "purple"
  },
  {
    name: "Orchid",
    r: 218,
    g: 112,
    b: 214,
    group: "purple"
  },
  {
    name: "Palatinate",
    r: 104,
    g: 40,
    b: 96,
    group: "purple"
  },
  {
    name: "Pale purple",
    r: 250,
    g: 230,
    b: 250,
    group: "purple"
  },
  {
    name: "Periwinkle",
    r: 204,
    g: 204,
    b: 255,
    group: "purple"
  },
  {
    name: "Persian indigo",
    r: 50,
    g: 18,
    b: 122,
    group: "purple"
  },
  {
    name: "Phlox",
    r: 223,
    g: 0,
    b: 255,
    group: "purple"
  },
  {
    name: "Pink lavender",
    r: 219,
    g: 178,
    b: 209,
    group: "purple"
  },
  {
    name: "Plum (web)",
    r: 221,
    g: 160,
    b: 221,
    group: "purple"
  },
  {
    name: "Pomp and Power",
    r: 134,
    g: 96,
    b: 142,
    group: "purple"
  },
  {
    name: "Puce",
    r: 204,
    g: 136,
    b: 153,
    group: "purple"
  },
  {
    name: "Purple",
    r: 128,
    g: 0,
    b: 128,
    group: "purple"
  },
  {
    name: "Purpureus",
    r: 154,
    g: 78,
    b: 174,
    group: "purple"
  },
  {
    name: "Rebecca purple",
    r: 102,
    g: 51,
    b: 153,
    group: "purple"
  },
  {
    name: "Royal purple",
    r: 120,
    g: 81,
    b: 169,
    group: "purple"
  },
  {
    name: "Red Violet",
    r: 199,
    g: 21,
    b: 133,
    group: "purple"
  },
  {
    name: "Russian violet",
    r: 50,
    g: 23,
    b: 77,
    group: "purple"
  },
  {
    name: "Slate blue",
    r: 106,
    g: 90,
    b: 205,
    group: "purple"
  },
  {
    name: "Steel pink",
    r: 204,
    g: 51,
    b: 204,
    group: "purple"
  },
  {
    name: "Tekhelet",
    r: 81,
    g: 40,
    b: 136,
    group: "purple"
  },
  {
    name: "Thistle",
    r: 216,
    g: 191,
    b: 216,
    group: "purple"
  },
  {
    name: "Tropical indigo",
    r: 150,
    g: 131,
    b: 236,
    group: "purple"
  },
  {
    name: "Tyrian purple",
    r: 102,
    g: 2,
    b: 60,
    group: "purple"
  },
  {
    name: "Ultra Violet",
    r: 100,
    g: 83,
    b: 148,
    group: "purple"
  },
  {
    name: "Veronica",
    r: 160,
    g: 32,
    b: 240,
    group: "purple"
  },
  {
    name: "Violet",
    r: 128,
    g: 0,
    b: 255,
    group: "purple"
  },
  {
    name: "Wisteria",
    r: 201,
    g: 160,
    b: 220,
    group: "purple"
  },
  {
    name: "African Violet",
    r: 178,
    g: 132,
    b: 190,
    group: "pink"
  },
  {
    name: "Amaranth",
    r: 229,
    g: 43,
    b: 80,
    group: "pink"
  },
  {
    name: "Amaranth purple",
    r: 171,
    g: 39,
    b: 79,
    group: "pink"
  },
  {
    name: "Baker-Miller Pink",
    r: 255,
    g: 145,
    b: 175,
    group: "pink"
  },
  {
    name: "Cerise",
    r: 222,
    g: 49,
    b: 99,
    group: "pink"
  },
  {
    name: "Chinese Violet",
    r: 133,
    g: 96,
    b: 136,
    group: "pink"
  },
  {
    name: "Crimson",
    r: 220,
    g: 20,
    b: 60,
    group: "pink"
  },
  {
    name: "Dark Magenta",
    r: 139,
    g: 0,
    b: 139,
    group: "pink"
  },
  {
    name: "Eggplant",
    r: 97,
    g: 64,
    b: 81,
    group: "pink"
  },
  {
    name: "English Violet",
    r: 86,
    g: 60,
    b: 92,
    group: "pink"
  },
  {
    name: "Fandango",
    r: 181,
    g: 51,
    b: 137,
    group: "pink"
  },
  {
    name: "Finn",
    r: 104,
    g: 48,
    b: 104,
    group: "pink"
  },
  {
    name: "Fuchsia",
    r: 255,
    g: 0,
    b: 255,
    group: "pink"
  },
  {
    name: "Hot magenta",
    r: 255,
    g: 29,
    b: 206,
    group: "pink"
  },
  {
    name: "Magenta dye",
    r: 202,
    g: 31,
    b: 123,
    group: "pink"
  },
  {
    name: "Magenta (CMYK)",
    r: 255,
    g: 0,
    b: 144,
    group: "pink"
  },
  {
    name: "Magenta (RGB)",
    r: 255,
    g: 0,
    b: 255,
    group: "pink"
  },
  {
    name: "Magenta (Crayola)",
    r: 246,
    g: 83,
    b: 166,
    group: "pink"
  },
  {
    name: "Magenta (Pantone)",
    r: 208,
    g: 65,
    b: 126,
    group: "pink"
  },
  {
    name: "Magenta haze",
    r: 159,
    g: 69,
    b: 118,
    group: "pink"
  },
  {
    name: "Mulberry",
    r: 197,
    g: 75,
    b: 140,
    group: "pink"
  },
  {
    name: "Orchid",
    r: 218,
    g: 112,
    b: 214,
    group: "pink"
  },
  {
    name: "Plum",
    r: 142,
    g: 69,
    b: 133,
    group: "pink"
  },
  {
    name: "Purple",
    r: 128,
    g: 0,
    b: 128,
    group: "pink"
  },
  {
    name: "Purple pizzazz",
    r: 254,
    g: 78,
    b: 218,
    group: "pink"
  },
  {
    name: "Quinacridone magenta",
    r: 142,
    g: 58,
    b: 89,
    group: "pink"
  },
  {
    name: "Raspberry",
    r: 227,
    g: 11,
    b: 92,
    group: "pink"
  },
  {
    name: "Razzle dazzle rose",
    r: 255,
    g: 51,
    b: 204,
    group: "pink"
  },
  {
    name: "Red Violet",
    r: 199,
    g: 21,
    b: 133,
    group: "pink"
  },
  {
    name: "Rose",
    r: 255,
    g: 0,
    b: 128,
    group: "pink"
  },
  {
    name: "Rose Bonbon",
    r: 249,
    g: 66,
    b: 158,
    group: "pink"
  },
  {
    name: "Rose ebony",
    r: 103,
    g: 72,
    b: 70,
    group: "pink"
  },
  {
    name: "Rose pink",
    r: 255,
    g: 102,
    b: 204,
    group: "pink"
  },
  {
    name: "Rose quartz",
    r: 170,
    g: 152,
    b: 169,
    group: "pink"
  },
  {
    name: "Rose red",
    r: 194,
    g: 30,
    b: 86,
    group: "pink"
  },
  {
    name: "Rose taupe",
    r: 144,
    g: 93,
    b: 93,
    group: "pink"
  },
  {
    name: "Rose vale",
    r: 171,
    g: 78,
    b: 82,
    group: "pink"
  },
  {
    name: "Rosewood",
    r: 101,
    g: 0,
    b: 11,
    group: "pink"
  },
  {
    name: "Rosy brown",
    r: 188,
    g: 143,
    b: 143,
    group: "pink"
  },
  {
    name: "Salmon pink",
    r: 255,
    g: 145,
    b: 164,
    group: "pink"
  },
  {
    name: "Seashell",
    r: 255,
    g: 245,
    b: 238,
    group: "pink"
  },
  {
    name: "Shocking pink",
    r: 252,
    g: 15,
    b: 192,
    group: "pink"
  },
  {
    name: "Tea rose",
    r: 244,
    g: 194,
    b: 194,
    group: "pink"
  },
  {
    name: "Tickle me pink",
    r: 252,
    g: 137,
    b: 172,
    group: "pink"
  },
  {
    name: "Telemagenta",
    r: 207,
    g: 52,
    b: 118,
    group: "pink"
  },
  {
    name: "Thulian pink",
    r: 222,
    g: 111,
    b: 161,
    group: "pink"
  },
  {
    name: "Ultra pink",
    r: 255,
    g: 111,
    b: 255,
    group: "pink"
  },
  {
    name: "Alabaster",
    r: 237,
    g: 234,
    b: 224,
    group: "white"
  },
  {
    name: "Alice blue",
    r: 240,
    g: 248,
    b: 255,
    group: "white"
  },
  {
    name: "Anti-flash white",
    r: 242,
    g: 243,
    b: 244,
    group: "white"
  },
  {
    name: "Antique white",
    r: 250,
    g: 235,
    b: 215,
    group: "white"
  },
  {
    name: "Azure white",
    r: 240,
    g: 255,
    b: 255,
    group: "white"
  },
  {
    name: "Baby powder",
    r: 254,
    g: 254,
    b: 250,
    group: "white"
  },
  {
    name: "Beige",
    r: 245,
    g: 245,
    b: 220,
    group: "white"
  },
  {
    name: "Bone",
    r: 227,
    g: 218,
    b: 201,
    group: "white"
  },
  {
    name: "Champagne",
    r: 247,
    g: 231,
    b: 206,
    group: "white"
  },
  {
    name: "Cornsilk",
    r: 255,
    g: 248,
    b: 220,
    group: "white"
  },
  {
    name: "Cosmic latte",
    r: 255,
    g: 248,
    b: 231,
    group: "white"
  },
  {
    name: "Cream",
    r: 255,
    g: 253,
    b: 208,
    group: "white"
  },
  {
    name: "Dutch white",
    r: 239,
    g: 223,
    b: 187,
    group: "white"
  },
  {
    name: "Eggshell",
    r: 240,
    g: 234,
    b: 214,
    group: "white"
  },
  {
    name: "Flax",
    r: 238,
    g: 220,
    b: 130,
    group: "white"
  },
  {
    name: "Floral white",
    r: 255,
    g: 250,
    b: 240,
    group: "white"
  },
  {
    name: "Ghost white",
    r: 248,
    g: 248,
    b: 255,
    group: "white"
  },
  {
    name: "Honeydew",
    r: 240,
    g: 255,
    b: 240,
    group: "white"
  },
  {
    name: "Isabelline",
    r: 244,
    g: 240,
    b: 236,
    group: "white"
  },
  {
    name: "Ivory",
    r: 255,
    g: 255,
    b: 240,
    group: "white"
  },
  {
    name: "Lavender blush",
    r: 255,
    g: 240,
    b: 245,
    group: "white"
  },
  {
    name: "Lemon chiffon",
    r: 255,
    g: 250,
    b: 205,
    group: "white"
  },
  {
    name: "Linen",
    r: 250,
    g: 240,
    b: 230,
    group: "white"
  },
  {
    name: "Magnolia",
    r: 248,
    g: 244,
    b: 255,
    group: "white"
  },
  {
    name: "Mint cream",
    r: 245,
    g: 255,
    b: 250,
    group: "white"
  },
  {
    name: "Misty rose",
    r: 255,
    g: 228,
    b: 225,
    group: "white"
  },
  {
    name: "Navajo white",
    r: 255,
    g: 222,
    b: 173,
    group: "white"
  },
  {
    name: "Nyanza",
    r: 233,
    g: 255,
    b: 219,
    group: "white"
  },
  {
    name: "Old lace",
    r: 253,
    g: 245,
    b: 230,
    group: "white"
  },
  {
    name: "Papaya whip",
    r: 255,
    g: 239,
    b: 213,
    group: "white"
  },
  {
    name: "Parchment",
    r: 241,
    g: 233,
    b: 210,
    group: "white"
  },
  {
    name: "Peach",
    r: 255,
    g: 203,
    b: 164,
    group: "white"
  },
  {
    name: "Pearl",
    r: 234,
    g: 224,
    b: 200,
    group: "white"
  },
  {
    name: "Platinum",
    r: 229,
    g: 228,
    b: 226,
    group: "white"
  },
  {
    name: "Seasalt",
    r: 247,
    g: 247,
    b: 247,
    group: "white"
  },
  {
    name: "Seashell",
    r: 255,
    g: 245,
    b: 238,
    group: "white"
  },
  {
    name: "Snow",
    r: 255,
    g: 250,
    b: 250,
    group: "white"
  },
  {
    name: "Vanilla",
    r: 243,
    g: 229,
    b: 171,
    group: "white"
  },
  {
    name: "White",
    r: 255,
    g: 255,
    b: 255,
    group: "white"
  },
  {
    name: "White smoke",
    r: 245,
    g: 245,
    b: 245,
    group: "white"
  },
  {
    name: "White smoke",
    r: 245,
    g: 245,
    b: 245,
    group: "gray"
  },
  {
    name: "Platinum",
    r: 229,
    g: 228,
    b: 226,
    group: "gray"
  },
  {
    name: "Timberwolf",
    r: 219,
    g: 215,
    b: 210,
    group: "gray"
  },
  {
    name: "Silver",
    r: 192,
    g: 192,
    b: 192,
    group: "gray"
  },
  {
    name: "French gray",
    r: 190,
    g: 191,
    b: 197,
    group: "gray"
  },
  {
    name: "Ash gray",
    r: 178,
    g: 190,
    b: 181,
    group: "gray"
  },
  {
    name: "Rose quartz",
    r: 170,
    g: 152,
    b: 169,
    group: "gray"
  },
  {
    name: "Cinereous",
    r: 152,
    g: 129,
    b: 123,
    group: "gray"
  },
  {
    name: "Cadet gray",
    r: 145,
    g: 163,
    b: 176,
    group: "gray"
  },
  {
    name: "Cool gray",
    r: 140,
    g: 146,
    b: 172,
    group: "gray"
  },
  {
    name: "Taupe gray",
    r: 139,
    g: 133,
    b: 137,
    group: "gray"
  },
  {
    name: "Battleship gray",
    r: 132,
    g: 132,
    b: 130,
    group: "gray"
  },
  {
    name: "Gray",
    r: 128,
    g: 128,
    b: 128,
    group: "gray"
  },
  {
    name: "Slate gray",
    r: 112,
    g: 128,
    b: 144,
    group: "gray"
  },
  {
    name: "Dim gray",
    r: 105,
    g: 105,
    b: 105,
    group: "gray"
  },
  {
    name: "Davy's gray",
    r: 85,
    g: 85,
    b: 85,
    group: "gray"
  },
  {
    name: "Payne's gray",
    r: 83,
    g: 104,
    b: 120,
    group: "gray"
  },
  {
    name: "Glaucous",
    r: 96,
    g: 130,
    b: 182,
    group: "gray"
  },
  {
    name: "Gunmetal",
    r: 42,
    g: 52,
    b: 57,
    group: "gray"
  },
  {
    name: "Feldgrau",
    r: 77,
    g: 93,
    b: 83,
    group: "gray"
  },
  {
    name: "Dark slate gray",
    r: 47,
    g: 79,
    b: 79,
    group: "gray"
  },
  {
    name: "Bistre",
    r: 61,
    g: 43,
    b: 31,
    group: "black"
  },
  {
    name: "Black",
    r: 0,
    g: 0,
    b: 0,
    group: "black"
  },
  {
    name: "Black bean",
    r: 61,
    g: 12,
    b: 2,
    group: "black"
  },
  {
    name: "Black olive",
    r: 59,
    g: 60,
    b: 54,
    group: "black"
  },
  {
    name: "Café noir",
    r: 75,
    g: 54,
    b: 33,
    group: "black"
  },
  {
    name: "Charcoal",
    r: 54,
    g: 69,
    b: 79,
    group: "black"
  },
  {
    name: "Dark purple",
    r: 48,
    g: 25,
    b: 52,
    group: "black"
  },
  {
    name: "Ebony",
    r: 85,
    g: 93,
    b: 80,
    group: "black"
  },
  {
    name: "Eerie black",
    r: 27,
    g: 27,
    b: 27,
    group: "black"
  },
  {
    name: "Jet",
    r: 52,
    g: 52,
    b: 52,
    group: "black"
  },
  {
    name: "Licorice",
    r: 26,
    g: 17,
    b: 16,
    group: "black"
  },
  {
    name: "Midnight blue",
    r: 25,
    g: 25,
    b: 112,
    group: "black"
  },
  {
    name: "Night",
    r: 17,
    g: 17,
    b: 17,
    group: "black"
  },
  {
    name: "Onyx",
    r: 53,
    g: 56,
    b: 57,
    group: "black"
  },
  {
    name: "Outer space",
    r: 65,
    g: 74,
    b: 76,
    group: "black"
  },
  {
    name: "Raisin black",
    r: 36,
    g: 33,
    b: 36,
    group: "black"
  },
  {
    name: "Rich black",
    r: 1,
    g: 11,
    b: 19,
    group: "black"
  },
  {
    name: "Russian violet",
    r: 50,
    g: 23,
    b: 77,
    group: "black"
  },
  {
    name: "Smoky black",
    r: 16,
    g: 12,
    b: 8,
    group: "black"
  },
  {
    name: "Taupe",
    r: 72,
    g: 60,
    b: 50,
    group: "black"
  }
];

// Simple RGB to HSL conversion for Figma's 0-1 RGB values
function rgbToHsl(r: number, g: number, b: number) {
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  const d = max - min;

  if (d !== 0) {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h *= 60;
  }
  return { h, s, l };
}

// Simple RGB distance color matching
function findNearestColor(r: number, g: number, b: number): Group {
  // Convert Figma's 0-1 range to 0-255
  const R = Math.round(r * 255);
  const G = Math.round(g * 255);
  const B = Math.round(b * 255);

  let nearestIndex = 0;
  let nearestDistance = Infinity;

  for (let i = 0; i < cssColors.length; i++) {
    const deltaR = cssColors[i].r - R;
    const deltaG = cssColors[i].g - G;
    const deltaB = cssColors[i].b - B;

    const distance = deltaR * deltaR + deltaG * deltaG + deltaB * deltaB;

    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestIndex = i;
    }
  }

  return cssColors[nearestIndex].group;
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

// Helper function to generate unique collection name
async function generateUniqueCollectionName(): Promise<string> {
  const existingCollections = await figma.variables.getLocalVariableCollections();
  const baseName = "Color to variable";
  
  // Check if base name is available
  if (!existingCollections.some(c => c.name === baseName)) {
    return baseName;
  }
  
  // Find the next available number
  let counter = 2;
  let candidateName = `${baseName} ${counter}`;
  
  while (existingCollections.some(c => c.name === candidateName)) {
    counter++;
    candidateName = `${baseName} ${counter}`;
  }
  
  return candidateName;
}

// Function to sanitize variable names by removing or replacing problematic characters
function sanitizeVariableName(name: string): string {
  if (!name) return '';

  return name
    .trim() // Remove leading/trailing spaces
    .replace(/[\/\\]/g, '-') // Replace forward slashes and backslashes with hyphens
    .replace(/[\.]/g, ' ') // Replace periods with spaces
    .replace(/[,;:|]/g, ' ') // Replace commas, semicolons, colons, pipes with spaces
    .replace(/[<>'"]/g, ' ') // Replace quotes and angle brackets with spaces
    .replace(/[\[\](){}]/g, ' ') // Replace brackets and parentheses with spaces
    .replace(/[\$]/g, '') // Remove dollar signs completely
    .replace(/[#@%^&*+=]/g, ' ') // Replace other special symbols with spaces
    .replace(/\s+/g, ' ') // Collapse multiple spaces to single space
    .replace(/^\-+|\-+$/g, '') // Remove leading or trailing hyphens only
    .substring(0, 100) // Limit length to 100 characters
    .trim(); // Final trim
}

// Replace the HSL naming function with simpler collision handling

function generateHSLColorName(r: number, g: number, b: number, usedNames: Set<string>): string {
  const baseColor = findNearestColor(r, g, b);
  const { h, s, l } = rgbToHsl(r, g, b);

  const lightness = Math.round(l * 100);
  const saturation = Math.round(s * 100);

  // Map to Tailwind-like scale (50, 100, 200, 300, 400, 500, 600, 700, 800, 900)
  let scale: number;
  if (lightness >= 95) scale = 50;
  else if (lightness >= 85) scale = 100;
  else if (lightness >= 75) scale = 200;
  else if (lightness >= 65) scale = 300;
  else if (lightness >= 55) scale = 400;
  else if (lightness >= 45) scale = 500;
  else if (lightness >= 35) scale = 600;
  else if (lightness >= 25) scale = 700;
  else if (lightness >= 15) scale = 800;
  else scale = 900;

  // Determine saturation category (only for non-neutral colors)
  let saturationSuffix = '';
  if (saturation >= 15) {
    if (saturation >= 80) saturationSuffix = '-vivid';
    else if (saturation >= 60) saturationSuffix = '-bright';
    else if (saturation >= 40) saturationSuffix = '-medium';
    else if (saturation >= 20) saturationSuffix = '-muted';
    else saturationSuffix = '-pale';
  }

  let baseName = `${baseColor}-${scale}${saturationSuffix}`;

  // Simple collision handling with counter increment
  let finalName = baseName;
  let counter = 1;
  while (usedNames.has(finalName)) {
    finalName = `${baseName}-${counter}`;
    counter++;
  }

  return finalName;
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
    // Add validation check at the beginning
    if (msg.namingMode === 'manual' && (!msg.customName || !msg.customName.trim())) {
      figma.notify('Please enter a variable name');
      return;
    }

    const selection = figma.currentPage.selection;

    if (selection.length === 0) {
      figma.notify('Please select at least one layer with a solid fill');
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
      figma.notify('Please select at least one layer with a solid fill');
      return;
    }

    // Get or create collection based on selection
    let targetCollection;
    let isNewCollection = false;
    if (msg.collectionId === 'new') {
      const collectionName = await generateUniqueCollectionName();
      targetCollection = await figma.variables.createVariableCollection(collectionName);
      isNewCollection = true;
    } else {
      const collections = await figma.variables.getLocalVariableCollections();
      targetCollection = collections.find(c => c.id === msg.collectionId);
      if (!targetCollection) {
        const collectionName = await generateUniqueCollectionName();
        targetCollection = await figma.variables.createVariableCollection(collectionName);
        isNewCollection = true;
      }
    }

    // Use default mode for variable values
    const targetModeId = targetCollection.modes[0].modeId;

    // Keep track of created variables and used names
    const createdVariables: string[] = [];
    const usedNames = new Set<string>();
    let textNodeCounter = 1; // Counter for text node based naming

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

      // Handle naming based on mode - but always check for text nodes first
      if (matchingTextNode) {
        // Use the matching text node's content for any naming mode
        let baseName = sanitizeVariableName(matchingTextNode.characters);

        // If sanitization resulted in empty string, fall back to auto naming
        if (!baseName) {
          baseName = generateHSLColorName(fill.color.r, fill.color.g, fill.color.b, usedNames);
        }

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
        let baseName = sanitizeVariableName(`${textNodes[0].characters}${textNodeCounter++}`);

        // If sanitization resulted in empty string, fall back to auto naming
        if (!baseName) {
          baseName = generateHSLColorName(fill.color.r, fill.color.g, fill.color.b, usedNames);
        }

        let finalName = baseName;
        let duplicateCounter = 1;
        while (usedNames.has(finalName)) {
          finalName = `${baseName}-${duplicateCounter}`;
          duplicateCounter++;
        }
        variableName = finalName;
      } else if (msg.namingMode === 'figma-default') {
        // Use Figma's default naming: Color + increment (only when no text nodes)
        let baseName = 'Color';
        let finalName = baseName;
        let duplicateCounter = 1;
        while (usedNames.has(finalName)) {
          finalName = `${baseName} ${duplicateCounter}`;
          duplicateCounter++;
        }
        variableName = finalName;
      } else if (msg.namingMode === 'manual' && msg.customName && msg.customName.trim()) {
        // Use custom name provided by user (only when no text nodes)
        let baseName = sanitizeVariableName(msg.customName.trim());

        // If sanitization resulted in empty string, show error and fall back
        if (!baseName) {
          figma.notify('Variable name contains only invalid characters. Please use a different name.', { error: true });
          baseName = generateHSLColorName(fill.color.r, fill.color.g, fill.color.b, usedNames);
        }

        // Append color match if selected
        if (msg.appendMode === 'color') {
          const colorPart = generateHSLColorName(fill.color.r, fill.color.g, fill.color.b, new Set());
          baseName = `${baseName}-${colorPart}`;
        }

        let finalName = baseName;
        let duplicateCounter = 1;
        while (usedNames.has(finalName)) {
          // For increment mode, use Figma's default format: space + number
          if (msg.appendMode === 'increment') {
            finalName = `${sanitizeVariableName(msg.customName.trim())} ${duplicateCounter}`;
          } else {
            // For color mode, append to the color-appended name
            finalName = `${baseName}-${duplicateCounter}`;
          }
          duplicateCounter++;
        }
        variableName = finalName;
      } else {
        // Auto mode - use Tailwind-style scale naming (only when no text nodes)
        variableName = generateHSLColorName(fill.color.r, fill.color.g, fill.color.b, usedNames);
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
