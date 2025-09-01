const colors = [
  {
    name: "Amaranth purple",
    rgb: "rgb(171, 39, 79)",
    group: "red"
  },
  {
    name: "Barn red",
    rgb: "rgb(124, 9, 2)",
    group: "red"
  },
  {
    name: "Bittersweet",
    rgb: "rgb(254, 111, 94)",
    group: "red"
  },
  {
    name: "Bittersweet shimmer",
    rgb: "rgb(191, 79, 81)",
    group: "red"
  },
  {
    name: "Blood red",
    rgb: "rgb(102, 0, 0)",
    group: "red"
  },
  {
    name: "Bright pink (Crayola)",
    rgb: "rgb(251, 96, 127)",
    group: "red"
  },
  {
    name: "Burgundy",
    rgb: "rgb(128, 0, 32)",
    group: "red"
  },
  {
    name: "Candy apple red",
    rgb: "rgb(255, 8, 0)",
    group: "red"
  },
  {
    name: "Cantaloupe melon",
    rgb: "rgb(253, 188, 180)",
    group: "red"
  },
  {
    name: "Cardinal",
    rgb: "rgb(197, 30, 58)",
    group: "red"
  },
  {
    name: "Carmine",
    rgb: "rgb(150, 0, 24)",
    group: "red"
  },
  {
    name: "Cerise",
    rgb: "rgb(222, 49, 99)",
    group: "red"
  },
  {
    name: "Chili red",
    rgb: "rgb(226, 61, 40)",
    group: "red"
  },
  {
    name: "Chocolate cosmos",
    rgb: "rgb(88, 17, 26)",
    group: "red"
  },
  {
    name: "Cinnabar",
    rgb: "rgb(228, 77, 46)",
    group: "red"
  },
  {
    name: "Claret",
    rgb: "rgb(127, 23, 52)",
    group: "red"
  },
  {
    name: "Coquelicot",
    rgb: "rgb(255, 56, 0)",
    group: "red"
  },
  {
    name: "Coral pink",
    rgb: "rgb(248, 131, 121)",
    group: "red"
  },
  {
    name: "Cordovan",
    rgb: "rgb(137, 63, 69)",
    group: "red"
  },
  {
    name: "Cornell red",
    rgb: "rgb(179, 27, 27)",
    group: "red"
  },
  {
    name: "Crimson",
    rgb: "rgb(220, 20, 60)",
    group: "red"
  },
  {
    name: "Dark red",
    rgb: "rgb(139, 0, 0)",
    group: "red"
  },
  {
    name: "Falu red",
    rgb: "rgb(128, 24, 24)",
    group: "red"
  },
  {
    name: "Fire brick",
    rgb: "rgb(178, 34, 34)",
    group: "red"
  },
  {
    name: "Fire engine red",
    rgb: "rgb(206, 32, 41)",
    group: "red"
  },
  {
    name: "Folly",
    rgb: "rgb(255, 0, 79)",
    group: "red"
  },
  {
    name: "Garnet",
    rgb: "rgb(115, 54, 53)",
    group: "red"
  },
  {
    name: "Imperial red",
    rgb: "rgb(237, 41, 57)",
    group: "red"
  },
  {
    name: "Indian red",
    rgb: "rgb(205, 92, 92)",
    group: "red"
  },
  {
    name: "Jasper",
    rgb: "rgb(208, 83, 64)",
    group: "red"
  },
  {
    name: "Light coral",
    rgb: "rgb(240, 128, 128)",
    group: "red"
  },
  {
    name: "Light red",
    rgb: "rgb(255, 127, 127)",
    group: "red"
  },
  {
    name: "Madder",
    rgb: "rgb(165, 0, 33)",
    group: "red"
  },
  {
    name: "Mahogany",
    rgb: "rgb(192, 64, 0)",
    group: "red"
  },
  {
    name: "Maroon",
    rgb: "rgb(128, 0, 0)",
    group: "red"
  },
  {
    name: "Misty rose",
    rgb: "rgb(255, 228, 225)",
    group: "red"
  },
  {
    name: "Off Red (RGB)",
    rgb: "rgb(254, 0, 0)",
    group: "red"
  },
  {
    name: "Old rose",
    rgb: "rgb(192, 128, 129)",
    group: "red"
  },
  {
    name: "OU crimson",
    rgb: "rgb(132, 22, 23)",
    group: "red"
  },
  {
    name: "Penn red",
    rgb: "rgb(153, 0, 0)",
    group: "red"
  },
  {
    name: "Persian red",
    rgb: "rgb(204, 51, 51)",
    group: "red"
  },
  {
    name: "Pink",
    rgb: "rgb(255, 192, 203)",
    group: "red"
  },
  {
    name: "Poppy",
    rgb: "rgb(220, 52, 59)",
    group: "red"
  },
  {
    name: "Red",
    rgb: "rgb(255, 0, 0)",
    group: "red"
  },
  {
    name: "Red Brown",
    rgb: "rgb(165, 42, 42)",
    group: "red"
  },
  {
    name: "Red (CMYK)",
    rgb: "rgb(237, 27, 36)",
    group: "red"
  },
  {
    name: "Red (Crayola)",
    rgb: "rgb(238, 32, 78)",
    group: "red"
  },
  {
    name: "Red (Munsell)",
    rgb: "rgb(242, 0, 60)",
    group: "red"
  },
  {
    name: "Red (NCS)",
    rgb: "rgb(196, 2, 52)",
    group: "red"
  },
  {
    name: "Red (Pantone)",
    rgb: "rgb(237, 40, 57)",
    group: "red"
  },
  {
    name: "Redwood",
    rgb: "rgb(171, 78, 82)",
    group: "red"
  },
  {
    name: "Rojo",
    rgb: "rgb(230, 0, 38)",
    group: "red"
  },
  {
    name: "Rose",
    rgb: "rgb(255, 0, 128)",
    group: "red"
  },
  {
    name: "Rose ebony",
    rgb: "rgb(103, 72, 70)",
    group: "red"
  },
  {
    name: "Rose red",
    rgb: "rgb(194, 30, 86)",
    group: "red"
  },
  {
    name: "Rose taupe",
    rgb: "rgb(144, 93, 93)",
    group: "red"
  },
  {
    name: "Rose vale",
    rgb: "rgb(171, 78, 82)",
    group: "red"
  },
  {
    name: "Rosewood",
    rgb: "rgb(101, 0, 11)",
    group: "red"
  },
  {
    name: "Rosy brown",
    rgb: "rgb(188, 143, 143)",
    group: "red"
  },
  {
    name: "Rust",
    rgb: "rgb(183, 65, 14)",
    group: "red"
  },
  {
    name: "Rusty red",
    rgb: "rgb(218, 44, 67)",
    group: "red"
  },
  {
    name: "Salmon",
    rgb: "rgb(250, 128, 114)",
    group: "red"
  },
  {
    name: "Salmon pink",
    rgb: "rgb(255, 145, 164)",
    group: "red"
  },
  {
    name: "Scarlet",
    rgb: "rgb(255, 36, 0)",
    group: "red"
  },
  {
    name: "Syracuse Red Orange",
    rgb: "rgb(212, 69, 0)",
    group: "red"
  },
  {
    name: "Tea rose (red)",
    rgb: "rgb(244, 194, 194)",
    group: "red"
  },
  {
    name: "Tomato",
    rgb: "rgb(255, 99, 71)",
    group: "red"
  },
  {
    name: "Turkey red",
    rgb: "rgb(169, 17, 1)",
    group: "red"
  },
  {
    name: "Vermilion",
    rgb: "rgb(227, 66, 52)",
    group: "red"
  },
  {
    name: "Wine",
    rgb: "rgb(114, 47, 55)",
    group: "red"
  },
  {
    name: "Aerospace orange",
    rgb: "rgb(255, 79, 0)",
    group: "orange"
  },
  {
    name: "Alloy orange",
    rgb: "rgb(196, 98, 16)",
    group: "orange"
  },
  {
    name: "Amber",
    rgb: "rgb(255, 191, 0)",
    group: "orange"
  },
  {
    name: "Apricot",
    rgb: "rgb(251, 206, 177)",
    group: "orange"
  },
  {
    name: "Atomic tangerine",
    rgb: "rgb(255, 153, 102)",
    group: "orange"
  },
  {
    name: "Brown",
    rgb: "rgb(150, 75, 0)",
    group: "orange"
  },
  {
    name: "Burnt orange",
    rgb: "rgb(191, 87, 0)",
    group: "orange"
  },
  {
    name: "Butterscotch",
    rgb: "rgb(224, 149, 64)",
    group: "orange"
  },
  {
    name: "Carrot orange",
    rgb: "rgb(237, 145, 33)",
    group: "orange"
  },
  {
    name: "Champagne (color)",
    rgb: "rgb(247, 231, 206)",
    group: "orange"
  },
  {
    name: "Coral",
    rgb: "rgb(255, 127, 80)",
    group: "orange"
  },
  {
    name: "Dark orange (web)",
    rgb: "rgb(255, 140, 0)",
    group: "orange"
  },
  {
    name: "Desert sand (color)",
    rgb: "rgb(237, 201, 175)",
    group: "orange"
  },
  {
    name: "Engineering orange",
    rgb: "rgb(186, 22, 12)",
    group: "orange"
  },
  {
    name: "Flame",
    rgb: "rgb(226, 88, 34)",
    group: "orange"
  },
  {
    name: "Giants orange",
    rgb: "rgb(254, 90, 29)",
    group: "orange"
  },
  {
    name: "Gold",
    rgb: "rgb(255, 215, 0)",
    group: "orange"
  },
  {
    name: "Golden Gate Bridge",
    rgb: "rgb(240, 74, 0)",
    group: "orange"
  },
  {
    name: "Goldenrod",
    rgb: "rgb(218, 165, 32)",
    group: "orange"
  },
  {
    name: "Hunyadi yellow",
    rgb: "rgb(232, 172, 65)",
    group: "orange"
  },
  {
    name: "Light orange",
    rgb: "rgb(254, 216, 177)",
    group: "orange"
  },
  {
    name: "Mahogany",
    rgb: "rgb(192, 64, 0)",
    group: "orange"
  },
  {
    name: "Melon",
    rgb: "rgb(253, 188, 180)",
    group: "orange"
  },
  {
    name: "Orange (Crayola)",
    rgb: "rgb(255, 117, 56)",
    group: "orange"
  },
  {
    name: "Orange (Pantone)",
    rgb: "rgb(255, 88, 0)",
    group: "orange"
  },
  {
    name: "Orange peel",
    rgb: "rgb(255, 160, 0)",
    group: "orange"
  },
  {
    name: "Orange (web)",
    rgb: "rgb(255, 165, 0)",
    group: "orange"
  },
  {
    name: "Orange (wheel)",
    rgb: "rgb(255, 128, 0)",
    group: "orange"
  },
  {
    name: "Papaya whip",
    rgb: "rgb(255, 239, 213)",
    group: "orange"
  },
  {
    name: "Peach",
    rgb: "rgb(255, 229, 180)",
    group: "orange"
  },
  {
    name: "Persian orange",
    rgb: "rgb(217, 144, 88)",
    group: "orange"
  },
  {
    name: "Persimmon",
    rgb: "rgb(236, 88, 0)",
    group: "orange"
  },
  {
    name: "Princeton orange",
    rgb: "rgb(255, 143, 0)",
    group: "orange"
  },
  {
    name: "Pumpkin",
    rgb: "rgb(255, 117, 24)",
    group: "orange"
  },
  {
    name: "Safety orange",
    rgb: "rgb(255, 121, 0)",
    group: "orange"
  },
  {
    name: "Saffron",
    rgb: "rgb(244, 196, 48)",
    group: "orange"
  },
  {
    name: "Spanish orange",
    rgb: "rgb(232, 97, 0)",
    group: "orange"
  },
  {
    name: "Tangelo",
    rgb: "rgb(249, 77, 0)",
    group: "orange"
  },
  {
    name: "Tangerine",
    rgb: "rgb(242, 133, 0)",
    group: "orange"
  },
  {
    name: "Tawny",
    rgb: "rgb(205, 87, 0)",
    group: "orange"
  },
  {
    name: "Tiger’s Eye",
    rgb: "rgb(181, 105, 23)",
    group: "orange"
  },
  {
    name: "UT orange",
    rgb: "rgb(255, 130, 0)",
    group: "orange"
  },
  {
    name: "Xanthous",
    rgb: "rgb(241, 180, 47)",
    group: "orange"
  },
  {
    name: "Auburn",
    rgb: "rgb(165, 42, 42)",
    group: "brown"
  },
  {
    name: "Almond",
    rgb: "rgb(239, 222, 205)",
    group: "brown"
  },
  {
    name: "Beaver",
    rgb: "rgb(159, 129, 112)",
    group: "brown"
  },
  {
    name: "Beige",
    rgb: "rgb(245, 245, 220)",
    group: "brown"
  },
  {
    name: "Bistre",
    rgb: "rgb(61, 43, 31)",
    group: "brown"
  },
  {
    name: "Black bean",
    rgb: "rgb(61, 12, 2)",
    group: "brown"
  },
  {
    name: "Black olive",
    rgb: "rgb(59, 60, 54)",
    group: "brown"
  },
  {
    name: "Bole",
    rgb: "rgb(121, 68, 59)",
    group: "brown"
  },
  {
    name: "Bone",
    rgb: "rgb(227, 218, 201)",
    group: "brown"
  },
  {
    name: "Bronze",
    rgb: "rgb(205, 127, 50)",
    group: "brown"
  },
  {
    name: "Brown",
    rgb: "rgb(153, 51, 0)",
    group: "brown"
  },
  {
    name: "Brown sugar",
    rgb: "rgb(175, 110, 77)",
    group: "brown"
  },
  {
    name: "Buff",
    rgb: "rgb(218, 160, 109)",
    group: "brown"
  },
  {
    name: "Burgundy",
    rgb: "rgb(128, 0, 32)",
    group: "brown"
  },
  {
    name: "Burnt sienna",
    rgb: "rgb(233, 116, 81)",
    group: "brown"
  },
  {
    name: "Burnt umber",
    rgb: "rgb(138, 51, 36)",
    group: "brown"
  },
  {
    name: "Camel",
    rgb: "rgb(193, 154, 107)",
    group: "brown"
  },
  {
    name: "Caput mortuum",
    rgb: "rgb(89, 39, 32)",
    group: "brown"
  },
  {
    name: "Caramel",
    rgb: "rgb(204, 127, 59)",
    group: "brown"
  },
  {
    name: "Chamoisee",
    rgb: "rgb(160, 120, 90)",
    group: "brown"
  },
  {
    name: "Chestnut",
    rgb: "rgb(149, 69, 53)",
    group: "brown"
  },
  {
    name: "Chocolate",
    rgb: "rgb(123, 63, 0)",
    group: "brown"
  },
  {
    name: "Citron",
    rgb: "rgb(221, 208, 106)",
    group: "brown"
  },
  {
    name: "Cocoa Brown",
    rgb: "rgb(210, 105, 30)",
    group: "brown"
  },
  {
    name: "Coffee",
    rgb: "rgb(111, 78, 55)",
    group: "brown"
  },
  {
    name: "Copper",
    rgb: "rgb(184, 115, 51)",
    group: "brown"
  },
  {
    name: "Cordovan",
    rgb: "rgb(137, 63, 69)",
    group: "brown"
  },
  {
    name: "Coyote",
    rgb: "rgb(129, 97, 62)",
    group: "brown"
  },
  {
    name: "Desert sand",
    rgb: "rgb(237, 201, 175)",
    group: "brown"
  },
  {
    name: "Drab dark brown",
    rgb: "rgb(74, 65, 42)",
    group: "brown"
  },
  {
    name: "Dun",
    rgb: "rgb(218, 200, 174)",
    group: "brown"
  },
  {
    name: "Earth yellow",
    rgb: "rgb(225, 169, 95)",
    group: "brown"
  },
  {
    name: "Ecru",
    rgb: "rgb(194, 178, 128)",
    group: "brown"
  },
  {
    name: "Fallow",
    rgb: "rgb(193, 154, 107)",
    group: "brown"
  },
  {
    name: "Fawn",
    rgb: "rgb(229, 170, 112)",
    group: "brown"
  },
  {
    name: "Field drab",
    rgb: "rgb(108, 84, 30)",
    group: "brown"
  },
  {
    name: "Fulvous",
    rgb: "rgb(228, 132, 0)",
    group: "brown"
  },
  {
    name: "Golden brown",
    rgb: "rgb(153, 101, 21)",
    group: "brown"
  },
  {
    name: "Goldenrod",
    rgb: "rgb(218, 165, 32)",
    group: "brown"
  },
  {
    name: "Harvest gold",
    rgb: "rgb(218, 145, 0)",
    group: "brown"
  },
  {
    name: "Khaki",
    rgb: "rgb(195, 176, 145)",
    group: "brown"
  },
  {
    name: "Kobicha",
    rgb: "rgb(107, 68, 35)",
    group: "brown"
  },
  {
    name: "Lion",
    rgb: "rgb(193, 154, 107)",
    group: "brown"
  },
  {
    name: "Liver",
    rgb: "rgb(103, 76, 71)",
    group: "brown"
  },
  {
    name: "Mahogany",
    rgb: "rgb(192, 64, 0)",
    group: "brown"
  },
  {
    name: "Maroon",
    rgb: "rgb(128, 0, 0)",
    group: "brown"
  },
  {
    name: "Ochre",
    rgb: "rgb(204, 119, 34)",
    group: "brown"
  },
  {
    name: "Raw umber",
    rgb: "rgb(146, 102, 68)",
    group: "brown"
  },
  {
    name: "Red Brown",
    rgb: "rgb(165, 42, 42)",
    group: "brown"
  },
  {
    name: "Redwood",
    rgb: "rgb(164, 90, 82)",
    group: "brown"
  },
  {
    name: "Rufous",
    rgb: "rgb(168, 28, 7)",
    group: "brown"
  },
  {
    name: "Russet",
    rgb: "rgb(128, 70, 27)",
    group: "brown"
  },
  {
    name: "Rust",
    rgb: "rgb(183, 65, 14)",
    group: "brown"
  },
  {
    name: "Sand",
    rgb: "rgb(194, 178, 128)",
    group: "brown"
  },
  {
    name: "Sandy brown",
    rgb: "rgb(244, 164, 96)",
    group: "brown"
  },
  {
    name: "Satin sheen gold",
    rgb: "rgb(203, 161, 53)",
    group: "brown"
  },
  {
    name: "Seal brown",
    rgb: "rgb(89, 38, 11)",
    group: "brown"
  },
  {
    name: "Sepia",
    rgb: "rgb(112, 66, 20)",
    group: "brown"
  },
  {
    name: "Sienna",
    rgb: "rgb(136, 45, 23)",
    group: "brown"
  },
  {
    name: "Sinopia",
    rgb: "rgb(203, 65, 11)",
    group: "brown"
  },
  {
    name: "Tan",
    rgb: "rgb(210, 180, 140)",
    group: "brown"
  },
  {
    name: "Taupe",
    rgb: "rgb(72, 60, 50)",
    group: "brown"
  },
  {
    name: "Tawny",
    rgb: "rgb(205, 87, 0)",
    group: "brown"
  },
  {
    name: "Umber",
    rgb: "rgb(99, 81, 71)",
    group: "brown"
  },
  {
    name: "Van Dyke",
    rgb: "rgb(68, 54, 47)",
    group: "brown"
  },
  {
    name: "Walnut brown",
    rgb: "rgb(92, 82, 72)",
    group: "brown"
  },
  {
    name: "Wenge",
    rgb: "rgb(100, 84, 82)",
    group: "brown"
  },
  {
    name: "Wheat",
    rgb: "rgb(245, 222, 179)",
    group: "brown"
  },
  {
    name: "Amber",
    rgb: "rgb(255, 191, 0)",
    group: "yellow"
  },
  {
    name: "Apricot",
    rgb: "rgb(251, 206, 177)",
    group: "yellow"
  },
  {
    name: "Arylide yellow",
    rgb: "rgb(233, 214, 107)",
    group: "yellow"
  },
  {
    name: "Aureolin",
    rgb: "rgb(253, 238, 0)",
    group: "yellow"
  },
  {
    name: "Beige",
    rgb: "rgb(245, 245, 220)",
    group: "yellow"
  },
  {
    name: "Buff",
    rgb: "rgb(224, 171, 118)",
    group: "yellow"
  },
  {
    name: "Canary",
    rgb: "rgb(255, 239, 0)",
    group: "yellow"
  },
  {
    name: "Champagne",
    rgb: "rgb(247, 231, 206)",
    group: "yellow"
  },
  {
    name: "Chartreuse",
    rgb: "rgb(223, 255, 0)",
    group: "yellow"
  },
  {
    name: "Citron",
    rgb: "rgb(221, 208, 106)",
    group: "yellow"
  },
  {
    name: "Citrine",
    rgb: "rgb(228, 208, 10)",
    group: "yellow"
  },
  {
    name: "Cosmic latte",
    rgb: "rgb(255, 248, 231)",
    group: "yellow"
  },
  {
    name: "Cream",
    rgb: "rgb(255, 253, 208)",
    group: "yellow"
  },
  {
    name: "Dark goldenrod",
    rgb: "rgb(184, 134, 11)",
    group: "yellow"
  },
  {
    name: "Ecru",
    rgb: "rgb(205, 178, 128)",
    group: "yellow"
  },
  {
    name: "Flax",
    rgb: "rgb(238, 220, 130)",
    group: "yellow"
  },
  {
    name: "Gamboge",
    rgb: "rgb(239, 155, 15)",
    group: "yellow"
  },
  {
    name: "Gold",
    rgb: "rgb(255, 215, 0)",
    group: "yellow"
  },
  {
    name: "Gold (metallic)",
    rgb: "rgb(212, 175, 55)",
    group: "yellow"
  },
  {
    name: "Goldenrod",
    rgb: "rgb(218, 165, 32)",
    group: "yellow"
  },
  {
    name: "Harvest gold",
    rgb: "rgb(230, 168, 23)",
    group: "yellow"
  },
  {
    name: "Icterine",
    rgb: "rgb(252, 247, 94)",
    group: "yellow"
  },
  {
    name: "Ivory",
    rgb: "rgb(255, 255, 240)",
    group: "yellow"
  },
  {
    name: "Jasmine",
    rgb: "rgb(248, 222, 126)",
    group: "yellow"
  },
  {
    name: "Jonquil",
    rgb: "rgb(250, 202, 22)",
    group: "yellow"
  },
  {
    name: "Khaki",
    rgb: "rgb(195, 176, 145)",
    group: "yellow"
  },
  {
    name: "Lemon chiffon",
    rgb: "rgb(255, 250, 205)",
    group: "yellow"
  },
  {
    name: "Lemon Lime",
    rgb: "rgb(227, 255, 0)",
    group: "yellow"
  },
  {
    name: "Light yellow",
    rgb: "rgb(255, 255, 224)",
    group: "yellow"
  },
  {
    name: "Lion",
    rgb: "rgb(193, 154, 107)",
    group: "yellow"
  },
  {
    name: "Maize",
    rgb: "rgb(251, 236, 93)",
    group: "yellow"
  },
  {
    name: "Mikado yellow",
    rgb: "rgb(255, 196, 12)",
    group: "yellow"
  },
  {
    name: "Mindaro",
    rgb: "rgb(227, 249, 136)",
    group: "yellow"
  },
  {
    name: "Mustard",
    rgb: "rgb(255, 219, 88)",
    group: "yellow"
  },
  {
    name: "Naples yellow",
    rgb: "rgb(250, 218, 94)",
    group: "yellow"
  },
  {
    name: "Navajo white",
    rgb: "rgb(255, 222, 173)",
    group: "yellow"
  },
  {
    name: "Old gold",
    rgb: "rgb(207, 181, 59)",
    group: "yellow"
  },
  {
    name: "Olive",
    rgb: "rgb(128, 128, 0)",
    group: "yellow"
  },
  {
    name: "Papaya whip",
    rgb: "rgb(255, 239, 213)",
    group: "yellow"
  },
  {
    name: "Peach Yellow",
    rgb: "rgb(250, 223, 173)",
    group: "yellow"
  },
  {
    name: "Pear",
    rgb: "rgb(209, 226, 49)",
    group: "yellow"
  },
  {
    name: "Saffron",
    rgb: "rgb(244, 196, 49)",
    group: "yellow"
  },
  {
    name: "School bus yellow",
    rgb: "rgb(255, 216, 0)",
    group: "yellow"
  },
  {
    name: "Selective yellow",
    rgb: "rgb(255, 186, 0)",
    group: "yellow"
  },
  {
    name: "Stil de grain yellow",
    rgb: "rgb(250, 218, 94)",
    group: "yellow"
  },
  {
    name: "Straw",
    rgb: "rgb(228, 217, 111)",
    group: "yellow"
  },
  {
    name: "Sunglow",
    rgb: "rgb(255, 204, 51)",
    group: "yellow"
  },
  {
    name: "Sunset",
    rgb: "rgb(250, 214, 165)",
    group: "yellow"
  },
  {
    name: "Vanilla",
    rgb: "rgb(243, 229, 171)",
    group: "yellow"
  },
  {
    name: "Wheat",
    rgb: "rgb(245, 222, 179)",
    group: "yellow"
  },
  {
    name: "Yellow",
    rgb: "rgb(255, 255, 0)",
    group: "yellow"
  },
  {
    name: "Apple green",
    rgb: "rgb(141, 182, 0)",
    group: "green"
  },
  {
    name: "Aquamarine",
    rgb: "rgb(0, 255, 191)",
    group: "green"
  },
  {
    name: "Asparagus",
    rgb: "rgb(123, 160, 91)",
    group: "green"
  },
  {
    name: "Avocado",
    rgb: "rgb(86, 130, 3)",
    group: "green"
  },
  {
    name: "Bright green",
    rgb: "rgb(102, 255, 0)",
    group: "green"
  },
  {
    name: "British racing green",
    rgb: "rgb(0, 66, 37)",
    group: "green"
  },
  {
    name: "Brunswick green",
    rgb: "rgb(27, 77, 62)",
    group: "green"
  },
  {
    name: "Cal Poly green",
    rgb: "rgb(30, 77, 43)",
    group: "green"
  },
  {
    name: "Castleton green",
    rgb: "rgb(0, 86, 59)",
    group: "green"
  },
  {
    name: "Celadon",
    rgb: "rgb(172, 225, 175)",
    group: "green"
  },
  {
    name: "Chartreuse",
    rgb: "rgb(128, 255, 0)",
    group: "green"
  },
  {
    name: "Cyan",
    rgb: "rgb(0, 255, 255)",
    group: "green"
  },
  {
    name: "Dark green",
    rgb: "rgb(1, 50, 32)",
    group: "green"
  },
  {
    name: "Dark moss green",
    rgb: "rgb(74, 93, 35)",
    group: "green"
  },
  {
    name: "Dark pastel green",
    rgb: "rgb(3, 192, 60)",
    group: "green"
  },
  {
    name: "Dark spring green",
    rgb: "rgb(23, 114, 69)",
    group: "green"
  },
  {
    name: "Dartmouth green",
    rgb: "rgb(0, 105, 62)",
    group: "green"
  },
  {
    name: "Emerald",
    rgb: "rgb(80, 200, 120)",
    group: "green"
  },
  {
    name: "Erin",
    rgb: "rgb(0, 255, 64)",
    group: "green"
  },
  {
    name: "Fern green",
    rgb: "rgb(79, 121, 66)",
    group: "green"
  },
  {
    name: "Forest green",
    rgb: "rgb(34, 139, 34)",
    group: "green"
  },
  {
    name: "Green",
    rgb: "rgb(0, 255, 0)",
    group: "green"
  },
  {
    name: "Green Yellow",
    rgb: "rgb(173, 255, 47)",
    group: "green"
  },
  {
    name: "Harlequin",
    rgb: "rgb(63, 255, 0)",
    group: "green"
  },
  {
    name: "Honeydew",
    rgb: "rgb(240, 255, 240)",
    group: "green"
  },
  {
    name: "Hooker's green",
    rgb: "rgb(73, 121, 107)",
    group: "green"
  },
  {
    name: "Hunter green",
    rgb: "rgb(53, 94, 59)",
    group: "green"
  },
  {
    name: "India green",
    rgb: "rgb(19, 136, 8)",
    group: "green"
  },
  {
    name: "Islamic green",
    rgb: "rgb(19, 136, 8)",
    group: "green"
  },
  {
    name: "Jade",
    rgb: "rgb(0, 168, 107)",
    group: "green"
  },
  {
    name: "Jungle green",
    rgb: "rgb(41, 171, 135)",
    group: "green"
  },
  {
    name: "Kelly green",
    rgb: "rgb(76, 187, 23)",
    group: "green"
  },
  {
    name: "Lawn green",
    rgb: "rgb(124, 252, 0)",
    group: "green"
  },
  {
    name: "Light green",
    rgb: "rgb(144, 238, 144)",
    group: "green"
  },
  {
    name: "Lime",
    rgb: "rgb(192, 255, 0)",
    group: "green"
  },
  {
    name: "Lime green",
    rgb: "rgb(50, 205, 50)",
    group: "green"
  },
  {
    name: "Malachite",
    rgb: "rgb(11, 218, 81)",
    group: "green"
  },
  {
    name: "Mantis",
    rgb: "rgb(116, 195, 101)",
    group: "green"
  },
  {
    name: "Midnight green",
    rgb: "rgb(0, 73, 83)",
    group: "green"
  },
  {
    name: "Mindaro",
    rgb: "rgb(227, 249, 136)",
    group: "green"
  },
  {
    name: "Mint",
    rgb: "rgb(62, 180, 137)",
    group: "green"
  },
  {
    name: "Moss green",
    rgb: "rgb(138, 154, 91)",
    group: "green"
  },
  {
    name: "Myrtle green",
    rgb: "rgb(49, 120, 115)",
    group: "green"
  },
  {
    name: "Neon green",
    rgb: "rgb(57, 255, 20)",
    group: "green"
  },
  {
    name: "Office green",
    rgb: "rgb(0, 128, 0)",
    group: "green"
  },
  {
    name: "Olive",
    rgb: "rgb(128, 128, 0)",
    group: "green"
  },
  {
    name: "Olivine",
    rgb: "rgb(154, 185, 115)",
    group: "green"
  },
  {
    name: "Pakistan green",
    rgb: "rgb(0, 64, 26)",
    group: "green"
  },
  {
    name: "Paris green",
    rgb: "rgb(80, 200, 120)",
    group: "green"
  },
  {
    name: "Pear",
    rgb: "rgb(209, 226, 49)",
    group: "green"
  },
  {
    name: "Persian green",
    rgb: "rgb(0, 166, 147)",
    group: "green"
  },
  {
    name: "Pigment green",
    rgb: "rgb(0, 165, 80)",
    group: "green"
  },
  {
    name: "Pine green",
    rgb: "rgb(1, 121, 111)",
    group: "green"
  },
  {
    name: "Pistachio",
    rgb: "rgb(147, 197, 114)",
    group: "green"
  },
  {
    name: "Reseda green",
    rgb: "rgb(108, 124, 89)",
    group: "green"
  },
  {
    name: "Robin egg blue",
    rgb: "rgb(0, 204, 204)",
    group: "green"
  },
  {
    name: "Sage",
    rgb: "rgb(188, 184, 138)",
    group: "green"
  },
  {
    name: "Screamin' green",
    rgb: "rgb(118, 255, 122)",
    group: "green"
  },
  {
    name: "Sea green",
    rgb: "rgb(46, 139, 87)",
    group: "green"
  },
  {
    name: "SGBUS green",
    rgb: "rgb(85, 221, 51)",
    group: "green"
  },
  {
    name: "Shamrock green",
    rgb: "rgb(0, 158, 96)",
    group: "green"
  },
  {
    name: "Spring bud",
    rgb: "rgb(167, 252, 0)",
    group: "green"
  },
  {
    name: "Spring green",
    rgb: "rgb(0, 255, 127)",
    group: "green"
  },
  {
    name: "Tea green",
    rgb: "rgb(208, 240, 192)",
    group: "green"
  },
  {
    name: "Teal",
    rgb: "rgb(0, 128, 128)",
    group: "green"
  },
  {
    name: "Turquoise",
    rgb: "rgb(64, 224, 208)",
    group: "green"
  },
  {
    name: "Viridian",
    rgb: "rgb(64, 130, 109)",
    group: "green"
  },
  {
    name: "Yellow Green",
    rgb: "rgb(154, 205, 50)",
    group: "green"
  },
  {
    name: "Alice blue",
    rgb: "rgb(240, 248, 255)",
    group: "turquoise"
  },
  {
    name: "Aqua",
    rgb: "rgb(15, 255, 255)",
    group: "turquoise"
  },
  {
    name: "Aquamarine",
    rgb: "rgb(127, 255, 212)",
    group: "turquoise"
  },
  {
    name: "Azure",
    rgb: "rgb(0, 127, 255)",
    group: "turquoise"
  },
  {
    name: "Azure (web)",
    rgb: "rgb(240, 255, 255)",
    group: "turquoise"
  },
  {
    name: "Blue Green",
    rgb: "rgb(13, 152, 186)",
    group: "turquoise"
  },
  {
    name: "Capri",
    rgb: "rgb(0, 191, 255)",
    group: "turquoise"
  },
  {
    name: "Caribbean Current",
    rgb: "rgb(0, 109, 111)",
    group: "turquoise"
  },
  {
    name: "Celeste",
    rgb: "rgb(178, 255, 255)",
    group: "turquoise"
  },
  {
    name: "Cerulean",
    rgb: "rgb(0, 123, 167)",
    group: "turquoise"
  },
  {
    name: "Cyan (RGB)",
    rgb: "rgb(0, 255, 255)",
    group: "turquoise"
  },
  {
    name: "Dark cyan",
    rgb: "rgb(0, 139, 139)",
    group: "turquoise"
  },
  {
    name: "Electric blue",
    rgb: "rgb(125, 249, 255)",
    group: "turquoise"
  },
  {
    name: "Fluorescent cyan",
    rgb: "rgb(21, 244, 238)",
    group: "turquoise"
  },
  {
    name: "Jungle green",
    rgb: "rgb(41, 171, 135)",
    group: "turquoise"
  },
  {
    name: "Keppel",
    rgb: "rgb(58, 176, 158)",
    group: "turquoise"
  },
  {
    name: "Ice blue",
    rgb: "rgb(153, 255, 255)",
    group: "turquoise"
  },
  {
    name: "Light cyan",
    rgb: "rgb(224, 255, 255)",
    group: "turquoise"
  },
  {
    name: "Light sea green",
    rgb: "rgb(32, 178, 170)",
    group: "turquoise"
  },
  {
    name: "Mint green",
    rgb: "rgb(223, 255, 253)",
    group: "turquoise"
  },
  {
    name: "Mint",
    rgb: "rgb(62, 180, 137)",
    group: "turquoise"
  },
  {
    name: "Moonstone",
    rgb: "rgb(58, 168, 193)",
    group: "turquoise"
  },
  {
    name: "Myrtle Green",
    rgb: "rgb(49, 120, 115)",
    group: "turquoise"
  },
  {
    name: "Pacific cyan",
    rgb: "rgb(28, 169, 201)",
    group: "turquoise"
  },
  {
    name: "Persian green",
    rgb: "rgb(0, 166, 147)",
    group: "turquoise"
  },
  {
    name: "Pine green",
    rgb: "rgb(1, 121, 111)",
    group: "turquoise"
  },
  {
    name: "Process Cyan",
    rgb: "rgb(0, 183, 235)",
    group: "turquoise"
  },
  {
    name: "Robin egg blue",
    rgb: "rgb(0, 204, 204)",
    group: "turquoise"
  },
  {
    name: "Sea green",
    rgb: "rgb(46, 139, 87)",
    group: "turquoise"
  },
  {
    name: "Skobeloff",
    rgb: "rgb(0, 122, 116)",
    group: "turquoise"
  },
  {
    name: "Sky blue (Crayola)",
    rgb: "rgb(223, 255, 253)",
    group: "turquoise"
  },
  {
    name: "Spring green",
    rgb: "rgb(0, 255, 127)",
    group: "turquoise"
  },
  {
    name: "Teal",
    rgb: "rgb(0, 128, 128)",
    group: "turquoise"
  },
  {
    name: "Tiffany Blue",
    rgb: "rgb(129, 216, 208)",
    group: "turquoise"
  },
  {
    name: "Turquoise",
    rgb: "rgb(64, 224, 208)",
    group: "turquoise"
  },
  {
    name: "Verdigris",
    rgb: "rgb(67, 179, 174)",
    group: "turquoise"
  },
  {
    name: "Vivid sky blue",
    rgb: "rgb(0, 204, 255)",
    group: "turquoise"
  },
  {
    name: "Zomp",
    rgb: "rgb(57, 167, 141)",
    group: "turquoise"
  },
  {
    name: "Aero",
    rgb: "rgb(0, 185, 232)",
    group: "blue"
  },
  {
    name: "Air Force blue",
    rgb: "rgb(93, 138, 168)",
    group: "blue"
  },
  {
    name: "Air superiority blue",
    rgb: "rgb(114, 160, 193)",
    group: "blue"
  },
  {
    name: "Alice Blue",
    rgb: "rgb(240, 248, 255)",
    group: "blue"
  },
  {
    name: "Argentinian Blue",
    rgb: "rgb(108, 180, 238)",
    group: "blue"
  },
  {
    name: "Azure",
    rgb: "rgb(0, 127, 255)",
    group: "blue"
  },
  {
    name: "Azul",
    rgb: "rgb(0, 112, 187)",
    group: "blue"
  },
  {
    name: "Baby blue",
    rgb: "rgb(137, 207, 240)",
    group: "blue"
  },
  {
    name: "Berkeley Blue",
    rgb: "rgb(0, 50, 98)",
    group: "blue"
  },
  {
    name: "Bice blue",
    rgb: "rgb(32, 114, 175)",
    group: "blue"
  },
  {
    name: "Bleu de France",
    rgb: "rgb(49, 140, 231)",
    group: "blue"
  },
  {
    name: "Blue",
    rgb: "rgb(0, 0, 255)",
    group: "blue"
  },
  {
    name: "Blue Gray",
    rgb: "rgb(102, 153, 204)",
    group: "blue"
  },
  {
    name: "Bondi blue",
    rgb: "rgb(0, 149, 182)",
    group: "blue"
  },
  {
    name: "Brandeis blue",
    rgb: "rgb(0, 112, 255)",
    group: "blue"
  },
  {
    name: "Byzantine blue",
    rgb: "rgb(52, 87, 213)",
    group: "blue"
  },
  {
    name: "Cambridge blue",
    rgb: "rgb(133, 176, 154)",
    group: "blue"
  },
  {
    name: "Carolina blue",
    rgb: "rgb(123, 175, 212)",
    group: "blue"
  },
  {
    name: "Celestial Blue",
    rgb: "rgb(73, 151, 208)",
    group: "blue"
  },
  {
    name: "Celtic Blue",
    rgb: "rgb(36, 107, 206)",
    group: "blue"
  },
  {
    name: "Cerulean",
    rgb: "rgb(0, 123, 167)",
    group: "blue"
  },
  {
    name: "Chefchaouen Blue",
    rgb: "rgb(70, 143, 234)",
    group: "blue"
  },
  {
    name: "Chrysler blue",
    rgb: "rgb(59, 0, 219)",
    group: "blue"
  },
  {
    name: "Cobalt blue",
    rgb: "rgb(0, 71, 171)",
    group: "blue"
  },
  {
    name: "Columbia blue",
    rgb: "rgb(185, 217, 235)",
    group: "blue"
  },
  {
    name: "Cornflower blue",
    rgb: "rgb(100, 149, 237)",
    group: "blue"
  },
  {
    name: "Blue (Crayola)",
    rgb: "rgb(31, 117, 254)",
    group: "blue"
  },
  {
    name: "Dark blue",
    rgb: "rgb(0, 0, 184)",
    group: "blue"
  },
  {
    name: "Deep Sky Blue",
    rgb: "rgb(0, 191, 255)",
    group: "blue"
  },
  {
    name: "Delft Blue",
    rgb: "rgb(31, 48, 94)",
    group: "blue"
  },
  {
    name: "Denim",
    rgb: "rgb(21, 96, 189)",
    group: "blue"
  },
  {
    name: "Dodger blue",
    rgb: "rgb(30, 144, 255)",
    group: "blue"
  },
  {
    name: "Duke blue",
    rgb: "rgb(0, 0, 156)",
    group: "blue"
  },
  {
    name: "Egyptian blue",
    rgb: "rgb(16, 52, 166)",
    group: "blue"
  },
  {
    name: "Federal blue",
    rgb: "rgb(22, 22, 107)",
    group: "blue"
  },
  {
    name: "Glaucous",
    rgb: "rgb(96, 130, 182)",
    group: "blue"
  },
  {
    name: "Green Blue",
    rgb: "rgb(17, 100, 180)",
    group: "blue"
  },
  {
    name: "Electric indigo",
    rgb: "rgb(111, 0, 255)",
    group: "blue"
  },
  {
    name: "French Blue",
    rgb: "rgb(0, 114, 187)",
    group: "blue"
  },
  {
    name: "Ice blue",
    rgb: "rgb(153, 255, 255)",
    group: "blue"
  },
  {
    name: "Indigo",
    rgb: "rgb(75, 0, 130)",
    group: "blue"
  },
  {
    name: "Indigo dye",
    rgb: "rgb(0, 65, 106)",
    group: "blue"
  },
  {
    name: "International Klein Blue",
    rgb: "rgb(0, 47, 167)",
    group: "blue"
  },
  {
    name: "Jordy Blue",
    rgb: "rgb(138, 185, 241)",
    group: "blue"
  },
  {
    name: "Lapis Lazuli",
    rgb: "rgb(38, 97, 156)",
    group: "blue"
  },
  {
    name: "Light blue",
    rgb: "rgb(173, 216, 230)",
    group: "blue"
  },
  {
    name: "Light Sky Blue",
    rgb: "rgb(135, 206, 250)",
    group: "blue"
  },
  {
    name: "Majorelle Blue",
    rgb: "rgb(96, 80, 220)",
    group: "blue"
  },
  {
    name: "Marian blue",
    rgb: "rgb(43, 69, 147)",
    group: "blue"
  },
  {
    name: "Maya blue",
    rgb: "rgb(115, 194, 251)",
    group: "blue"
  },
  {
    name: "Medium blue",
    rgb: "rgb(0, 0, 205)",
    group: "blue"
  },
  {
    name: "Medium slate blue",
    rgb: "rgb(123, 104, 238)",
    group: "blue"
  },
  {
    name: "Midnight blue",
    rgb: "rgb(25, 25, 112)",
    group: "blue"
  },
  {
    name: "Blue (Munsell)",
    rgb: "rgb(0, 147, 175)",
    group: "blue"
  },
  {
    name: "Navy blue",
    rgb: "rgb(0, 0, 128)",
    group: "blue"
  },
  {
    name: "Blue (NCS)",
    rgb: "rgb(0, 135, 189)",
    group: "blue"
  },
  {
    name: "Neon blue",
    rgb: "rgb(70, 102, 255)",
    group: "blue"
  },
  {
    name: "Non Photo blue",
    rgb: "rgb(164, 221, 237)",
    group: "blue"
  },
  {
    name: "Oxford Blue",
    rgb: "rgb(0, 33, 71)",
    group: "blue"
  },
  {
    name: "Palatinate blue",
    rgb: "rgb(39, 59, 226)",
    group: "blue"
  },
  {
    name: "Pale azure",
    rgb: "rgb(135, 211, 248)",
    group: "blue"
  },
  {
    name: "Penn Blue",
    rgb: "rgb(1, 31, 91)",
    group: "blue"
  },
  {
    name: "Periwinkle",
    rgb: "rgb(204, 204, 255)",
    group: "blue"
  },
  {
    name: "Persian blue",
    rgb: "rgb(28, 57, 187)",
    group: "blue"
  },
  {
    name: "Phthalo blue",
    rgb: "rgb(0, 15, 137)",
    group: "blue"
  },
  {
    name: "Picton Blue",
    rgb: "rgb(69, 177, 232)",
    group: "blue"
  },
  {
    name: "Polynesian blue",
    rgb: "rgb(34, 76, 152)",
    group: "blue"
  },
  {
    name: "Powder blue",
    rgb: "rgb(158, 185, 212)",
    group: "blue"
  },
  {
    name: "Prussian blue",
    rgb: "rgb(0, 49, 83)",
    group: "blue"
  },
  {
    name: "Resolution Blue",
    rgb: "rgb(0, 35, 135)",
    group: "blue"
  },
  {
    name: "RISD Blue",
    rgb: "rgb(36, 84, 255)",
    group: "blue"
  },
  {
    name: "Royal Blue (web color)",
    rgb: "rgb(65, 105, 225)",
    group: "blue"
  },
  {
    name: "Royal blue (traditional)",
    rgb: "rgb(0, 35, 102)",
    group: "blue"
  },
  {
    name: "Ruddy Blue",
    rgb: "rgb(118, 171, 223)",
    group: "blue"
  },
  {
    name: "Sapphire",
    rgb: "rgb(15, 82, 186)",
    group: "blue"
  },
  {
    name: "Honolulu Blue",
    rgb: "rgb(0, 118, 182)",
    group: "blue"
  },
  {
    name: "Savoy blue",
    rgb: "rgb(75, 97, 209)",
    group: "blue"
  },
  {
    name: "Silver Lake Blue",
    rgb: "rgb(93, 137, 186)",
    group: "blue"
  },
  {
    name: "Sky blue",
    rgb: "rgb(135, 206, 235)",
    group: "blue"
  },
  {
    name: "Space cadet",
    rgb: "rgb(30, 41, 82)",
    group: "blue"
  },
  {
    name: "Steel blue",
    rgb: "rgb(70, 130, 180)",
    group: "blue"
  },
  {
    name: "Tang Blue",
    rgb: "rgb(0, 89, 207)",
    group: "blue"
  },
  {
    name: "True Blue",
    rgb: "rgb(45, 104, 196)",
    group: "blue"
  },
  {
    name: "Tufts Blue",
    rgb: "rgb(62, 142, 222)",
    group: "blue"
  },
  {
    name: "UCLA Blue",
    rgb: "rgb(39, 116, 174)",
    group: "blue"
  },
  {
    name: "Ultramarine",
    rgb: "rgb(18, 10, 143)",
    group: "blue"
  },
  {
    name: "United Nations Blue",
    rgb: "rgb(75, 146, 219)",
    group: "blue"
  },
  {
    name: "Uranian Blue",
    rgb: "rgb(175, 219, 245)",
    group: "blue"
  },
  {
    name: "Violet Blue",
    rgb: "rgb(50, 74, 178)",
    group: "blue"
  },
  {
    name: "Vista Blue",
    rgb: "rgb(124, 158, 217)",
    group: "blue"
  },
  {
    name: "Yale Blue",
    rgb: "rgb(0, 53, 107)",
    group: "blue"
  },
  {
    name: "YInMn Blue",
    rgb: "rgb(46, 80, 144)",
    group: "blue"
  },
  {
    name: "Zaffre",
    rgb: "rgb(0, 20, 168)",
    group: "blue"
  },
  {
    name: "African violet",
    rgb: "rgb(178, 132, 190)",
    group: "purple"
  },
  {
    name: "Amethyst",
    rgb: "rgb(153, 102, 204)",
    group: "purple"
  },
  {
    name: "Blue Violet",
    rgb: "rgb(138, 43, 226)",
    group: "purple"
  },
  {
    name: "Burgundy",
    rgb: "rgb(128, 0, 32)",
    group: "purple"
  },
  {
    name: "Byzantium",
    rgb: "rgb(112, 41, 99)",
    group: "purple"
  },
  {
    name: "Caput mortuum",
    rgb: "rgb(89, 39, 32)",
    group: "purple"
  },
  {
    name: "Cerise",
    rgb: "rgb(222, 49, 99)",
    group: "purple"
  },
  {
    name: "Chinese violet",
    rgb: "rgb(133, 96, 136)",
    group: "purple"
  },
  {
    name: "Dark purple",
    rgb: "rgb(48, 25, 52)",
    group: "purple"
  },
  {
    name: "Dark violet",
    rgb: "rgb(148, 0, 211)",
    group: "purple"
  },
  {
    name: "Eggplant",
    rgb: "rgb(97, 64, 81)",
    group: "purple"
  },
  {
    name: "Electric indigo",
    rgb: "rgb(111, 0, 255)",
    group: "purple"
  },
  {
    name: "Electric purple",
    rgb: "rgb(191, 0, 255)",
    group: "purple"
  },
  {
    name: "Electric violet",
    rgb: "rgb(143, 0, 255)",
    group: "purple"
  },
  {
    name: "English violet",
    rgb: "rgb(86, 60, 92)",
    group: "purple"
  },
  {
    name: "Eminence",
    rgb: "rgb(108, 48, 130)",
    group: "purple"
  },
  {
    name: "Fairy Tale",
    rgb: "rgb(242, 193, 209)",
    group: "purple"
  },
  {
    name: "Fandango",
    rgb: "rgb(181, 51, 137)",
    group: "purple"
  },
  {
    name: "French mauve",
    rgb: "rgb(212, 115, 212)",
    group: "purple"
  },
  {
    name: "French violet",
    rgb: "rgb(136, 6, 206)",
    group: "purple"
  },
  {
    name: "Fuchsia",
    rgb: "rgb(255, 0, 255)",
    group: "purple"
  },
  {
    name: "Grape",
    rgb: "rgb(111, 45, 168)",
    group: "purple"
  },
  {
    name: "Heliotrope",
    rgb: "rgb(223, 115, 255)",
    group: "purple"
  },
  {
    name: "Indigo",
    rgb: "rgb(75, 0, 130)",
    group: "purple"
  },
  {
    name: "Iris",
    rgb: "rgb(90, 79, 207)",
    group: "purple"
  },
  {
    name: "Japanese violet",
    rgb: "rgb(91, 50, 86)",
    group: "purple"
  },
  {
    name: "Lavender blush",
    rgb: "rgb(255, 240, 245)",
    group: "purple"
  },
  {
    name: "Lavender (floral)",
    rgb: "rgb(181, 126, 220)",
    group: "purple"
  },
  {
    name: "Lavender (web)",
    rgb: "rgb(230, 230, 250)",
    group: "purple"
  },
  {
    name: "Lilac",
    rgb: "rgb(200, 162, 200)",
    group: "purple"
  },
  {
    name: "Majorelle Blue",
    rgb: "rgb(96, 80, 220)",
    group: "purple"
  },
  {
    name: "Magenta",
    rgb: "rgb(255, 0, 255)",
    group: "purple"
  },
  {
    name: "Mardi Gras",
    rgb: "rgb(136, 0, 133)",
    group: "purple"
  },
  {
    name: "Mauve",
    rgb: "rgb(224, 176, 255)",
    group: "purple"
  },
  {
    name: "Mauveine",
    rgb: "rgb(141, 2, 155)",
    group: "purple"
  },
  {
    name: "Medium slate blue",
    rgb: "rgb(123, 104, 238)",
    group: "purple"
  },
  {
    name: "Mountbatten pink",
    rgb: "rgb(153, 122, 141)",
    group: "purple"
  },
  {
    name: "Mulberry",
    rgb: "rgb(197, 75, 140)",
    group: "purple"
  },
  {
    name: "Murrey",
    rgb: "rgb(139, 0, 75)",
    group: "purple"
  },
  {
    name: "Orchid",
    rgb: "rgb(218, 112, 214)",
    group: "purple"
  },
  {
    name: "Palatinate",
    rgb: "rgb(104, 40, 96)",
    group: "purple"
  },
  {
    name: "Pale purple",
    rgb: "rgb(250, 230, 250)",
    group: "purple"
  },
  {
    name: "Periwinkle",
    rgb: "rgb(204, 204, 255)",
    group: "purple"
  },
  {
    name: "Persian indigo",
    rgb: "rgb(50, 18, 122)",
    group: "purple"
  },
  {
    name: "Phlox",
    rgb: "rgb(223, 0, 255)",
    group: "purple"
  },
  {
    name: "Pink lavender",
    rgb: "rgb(219, 178, 209)",
    group: "purple"
  },
  {
    name: "Plum (web)",
    rgb: "rgb(221, 160, 221)",
    group: "purple"
  },
  {
    name: "Pomp and Power",
    rgb: "rgb(134, 96, 142)",
    group: "purple"
  },
  {
    name: "Puce",
    rgb: "rgb(204, 136, 153)",
    group: "purple"
  },
  {
    name: "Purple",
    rgb: "rgb(128, 0, 128)",
    group: "purple"
  },
  {
    name: "Purpureus",
    rgb: "rgb(154, 78, 174)",
    group: "purple"
  },
  {
    name: "Rebecca purple",
    rgb: "rgb(102, 51, 153)",
    group: "purple"
  },
  {
    name: "Royal purple",
    rgb: "rgb(120, 81, 169)",
    group: "purple"
  },
  {
    name: "Red Violet",
    rgb: "rgb(199, 21, 133)",
    group: "purple"
  },
  {
    name: "Russian violet",
    rgb: "rgb(50, 23, 77)",
    group: "purple"
  },
  {
    name: "Slate blue",
    rgb: "rgb(106, 90, 205)",
    group: "purple"
  },
  {
    name: "Steel pink",
    rgb: "rgb(204, 51, 204)",
    group: "purple"
  },
  {
    name: "Tekhelet",
    rgb: "rgb(81, 40, 136)",
    group: "purple"
  },
  {
    name: "Thistle",
    rgb: "rgb(216, 191, 216)",
    group: "purple"
  },
  {
    name: "Tropical indigo",
    rgb: "rgb(150, 131, 236)",
    group: "purple"
  },
  {
    name: "Tyrian purple",
    rgb: "rgb(102, 2, 60)",
    group: "purple"
  },
  {
    name: "Ultra Violet",
    rgb: "rgb(100, 83, 148)",
    group: "purple"
  },
  {
    name: "Veronica",
    rgb: "rgb(160, 32, 240)",
    group: "purple"
  },
  {
    name: "Violet",
    rgb: "rgb(128, 0, 255)",
    group: "purple"
  },
  {
    name: "Wisteria",
    rgb: "rgb(201, 160, 220)",
    group: "purple"
  },
  {
    name: "African Violet",
    rgb: "rgb(178, 132, 190)",
    group: "pink"
  },
  {
    name: "Amaranth",
    rgb: "rgb(229, 43, 80)",
    group: "pink"
  },
  {
    name: "Amaranth purple",
    rgb: "rgb(171, 39, 79)",
    group: "pink"
  },
  {
    name: "Baker-Miller Pink",
    rgb: "rgb(255, 145, 175)",
    group: "pink"
  },
  {
    name: "Cerise",
    rgb: "rgb(222, 49, 99)",
    group: "pink"
  },
  {
    name: "Chinese Violet",
    rgb: "rgb(133, 96, 136)",
    group: "pink"
  },
  {
    name: "Crimson",
    rgb: "rgb(220, 20, 60)",
    group: "pink"
  },
  {
    name: "Dark Magenta",
    rgb: "rgb(139, 0, 139)",
    group: "pink"
  },
  {
    name: "Eggplant",
    rgb: "rgb(97, 64, 81)",
    group: "pink"
  },
  {
    name: "English Violet",
    rgb: "rgb(86, 60, 92)",
    group: "pink"
  },
  {
    name: "Fandango",
    rgb: "rgb(181, 51, 137)",
    group: "pink"
  },
  {
    name: "Finn",
    rgb: "rgb(104, 48, 104)",
    group: "pink"
  },
  {
    name: "Fuchsia",
    rgb: "rgb(255, 0, 255)",
    group: "pink"
  },
  {
    name: "Hot magenta",
    rgb: "rgb(255, 29, 206)",
    group: "pink"
  },
  {
    name: "Magenta dye",
    rgb: "rgb(202, 31, 123)",
    group: "pink"
  },
  {
    name: "Magenta (CMYK)",
    rgb: "rgb(255, 0, 144)",
    group: "pink"
  },
  {
    name: "Magenta (RGB)",
    rgb: "rgb(255, 0, 255)",
    group: "pink"
  },
  {
    name: "Magenta (Crayola)",
    rgb: "rgb(246, 83, 166)",
    group: "pink"
  },
  {
    name: "Magenta (Pantone)",
    rgb: "rgb(208, 65, 126)",
    group: "pink"
  },
  {
    name: "Magenta haze",
    rgb: "rgb(159, 69, 118)",
    group: "pink"
  },
  {
    name: "Mulberry",
    rgb: "rgb(197, 75, 140)",
    group: "pink"
  },
  {
    name: "Orchid",
    rgb: "rgb(218, 112, 214)",
    group: "pink"
  },
  {
    name: "Plum",
    rgb: "rgb(142, 69, 133)",
    group: "pink"
  },
  {
    name: "Purple",
    rgb: "rgb(128, 0, 128)",
    group: "pink"
  },
  {
    name: "Purple pizzazz",
    rgb: "rgb(254, 78, 218)",
    group: "pink"
  },
  {
    name: "Quinacridone magenta",
    rgb: "rgb(142, 58, 89)",
    group: "pink"
  },
  {
    name: "Raspberry",
    rgb: "rgb(227, 11, 92)",
    group: "pink"
  },
  {
    name: "Razzle dazzle rose",
    rgb: "rgb(255, 51, 204)",
    group: "pink"
  },
  {
    name: "Red Violet",
    rgb: "rgb(199, 21, 133)",
    group: "pink"
  },
  {
    name: "Rose",
    rgb: "rgb(255, 0, 128)",
    group: "pink"
  },
  {
    name: "Rose pink",
    rgb: "rgb(255, 102, 204)",
    group: "pink"
  },
  {
    name: "Rose quartz",
    rgb: "rgb(170, 152, 169)",
    group: "pink"
  },
  {
    name: "Shocking pink",
    rgb: "rgb(252, 15, 192)",
    group: "pink"
  },
  {
    name: "Shocking pink (Crayola)",
    rgb: "rgb(255, 111, 255)",
    group: "pink"
  },
  {
    name: "Steel pink",
    rgb: "rgb(204, 51, 204)",
    group: "pink"
  },
  {
    name: "Sky magenta",
    rgb: "rgb(207, 113, 175)",
    group: "pink"
  },
  {
    name: "Telemagenta",
    rgb: "rgb(207, 52, 118)",
    group: "pink"
  },
  {
    name: "Violet (JTC)",
    rgb: "rgb(91, 50, 86)",
    group: "pink"
  },
  {
    name: "Violet (web color)",
    rgb: "rgb(238, 130, 238)",
    group: "pink"
  },
  {
    name: "Amaranth",
    rgb: "rgb(229, 43, 80)",
    group: "pink"
  },
  {
    name: "Amaranth pink",
    rgb: "rgb(241, 156, 187)",
    group: "pink"
  },
  {
    name: "Baker-Miller pink",
    rgb: "rgb(255, 145, 175)",
    group: "pink"
  },
  {
    name: "Blush",
    rgb: "rgb(222, 93, 131)",
    group: "pink"
  },
  {
    name: "Brilliant rose",
    rgb: "rgb(246, 83, 166)",
    group: "pink"
  },
  {
    name: "Brink pink",
    rgb: "rgb(251, 96, 127)",
    group: "pink"
  },
  {
    name: "Carnation pink",
    rgb: "rgb(255, 166, 201)",
    group: "pink"
  },
  {
    name: "Cerise",
    rgb: "rgb(222, 49, 99)",
    group: "pink"
  },
  {
    name: "Champagne pink",
    rgb: "rgb(241, 221, 207)",
    group: "pink"
  },
  {
    name: "Cherry blossom pink",
    rgb: "rgb(255, 183, 197)",
    group: "pink"
  },
  {
    name: "China rose",
    rgb: "rgb(168, 81, 110)",
    group: "pink"
  },
  {
    name: "Coral",
    rgb: "rgb(255, 127, 80)",
    group: "pink"
  },
  {
    name: "Coral pink",
    rgb: "rgb(248, 131, 121)",
    group: "pink"
  },
  {
    name: "Cordovan",
    rgb: "rgb(137, 63, 69)",
    group: "pink"
  },
  {
    name: "Cyclamen",
    rgb: "rgb(245, 111, 161)",
    group: "pink"
  },
  {
    name: "Deep pink",
    rgb: "rgb(255, 20, 147)",
    group: "pink"
  },
  {
    name: "Dogwood rose",
    rgb: "rgb(215, 24, 104)",
    group: "pink"
  },
  {
    name: "Fairy Tale",
    rgb: "rgb(242, 193, 209)",
    group: "pink"
  },
  {
    name: "French rose",
    rgb: "rgb(246, 74, 138)",
    group: "pink"
  },
  {
    name: "Fuchsia",
    rgb: "rgb(255, 0, 255)",
    group: "pink"
  },
  {
    name: "Fuchsia rose",
    rgb: "rgb(199, 67, 117)",
    group: "pink"
  },
  {
    name: "Folly",
    rgb: "rgb(255, 0, 79)",
    group: "pink"
  },
  {
    name: "Heliotrope",
    rgb: "rgb(223, 115, 255)",
    group: "pink"
  },
  {
    name: "Hollywood cerise",
    rgb: "rgb(244, 0, 161)",
    group: "pink"
  },
  {
    name: "Hot magenta",
    rgb: "rgb(255, 0, 204)",
    group: "pink"
  },
  {
    name: "Hot pink",
    rgb: "rgb(255, 105, 180)",
    group: "pink"
  },
  {
    name: "Lavender blush",
    rgb: "rgb(255, 240, 245)",
    group: "pink"
  },
  {
    name: "Lavender pink",
    rgb: "rgb(251, 174, 210)",
    group: "pink"
  },
  {
    name: "Magenta",
    rgb: "rgb(255, 0, 144)",
    group: "pink"
  },
  {
    name: "Mexican pink",
    rgb: "rgb(228, 0, 124)",
    group: "pink"
  },
  {
    name: "Mimi Pink",
    rgb: "rgb(255, 218, 233)",
    group: "pink"
  },
  {
    name: "Misty rose",
    rgb: "rgb(255, 228, 225)",
    group: "pink"
  },
  {
    name: "Mountbatten pink",
    rgb: "rgb(153, 122, 141)",
    group: "pink"
  },
  {
    name: "Old rose",
    rgb: "rgb(192, 128, 129)",
    group: "pink"
  },
  {
    name: "Orchid pink",
    rgb: "rgb(242, 189, 205)",
    group: "pink"
  },
  {
    name: "Pale Dogwood",
    rgb: "rgb(237, 205, 194)",
    group: "pink"
  },
  {
    name: "Peach",
    rgb: "rgb(255, 203, 164)",
    group: "pink"
  },
  {
    name: "Persian rose",
    rgb: "rgb(254, 40, 162)",
    group: "pink"
  },
  {
    name: "Persian pink",
    rgb: "rgb(247, 127, 190)",
    group: "pink"
  },
  {
    name: "Phlox",
    rgb: "rgb(223, 0, 255)",
    group: "pink"
  },
  {
    name: "Pink",
    rgb: "rgb(255, 192, 203)",
    group: "pink"
  },
  {
    name: "Rose Pompadour",
    rgb: "rgb(237, 122, 155)",
    group: "pink"
  },
  {
    name: "Puce",
    rgb: "rgb(204, 136, 153)",
    group: "pink"
  },
  {
    name: "Raspberry",
    rgb: "rgb(227, 11, 92)",
    group: "pink"
  },
  {
    name: "Razzle dazzle rose",
    rgb: "rgb(255, 51, 204)",
    group: "pink"
  },
  {
    name: "Razzmatazz",
    rgb: "rgb(227, 37, 107)",
    group: "pink"
  },
  {
    name: "Red Violet",
    rgb: "rgb(199, 21, 133)",
    group: "pink"
  },
  {
    name: "Raspberry rose",
    rgb: "rgb(179, 68, 108)",
    group: "pink"
  },
  {
    name: "Rose",
    rgb: "rgb(255, 0, 128)",
    group: "pink"
  },
  {
    name: "Rose Bonbon",
    rgb: "rgb(249, 66, 158)",
    group: "pink"
  },
  {
    name: "Rose ebony",
    rgb: "rgb(103, 72, 70)",
    group: "pink"
  },
  {
    name: "Rose pink",
    rgb: "rgb(255, 102, 204)",
    group: "pink"
  },
  {
    name: "Rose quartz",
    rgb: "rgb(170, 152, 169)",
    group: "pink"
  },
  {
    name: "Rose red",
    rgb: "rgb(194, 30, 86)",
    group: "pink"
  },
  {
    name: "Rose taupe",
    rgb: "rgb(144, 93, 93)",
    group: "pink"
  },
  {
    name: "Rose vale",
    rgb: "rgb(171, 78, 82)",
    group: "pink"
  },
  {
    name: "Rosewood",
    rgb: "rgb(101, 0, 11)",
    group: "pink"
  },
  {
    name: "Rosy brown",
    rgb: "rgb(188, 143, 143)",
    group: "pink"
  },
  {
    name: "Salmon pink",
    rgb: "rgb(255, 145, 164)",
    group: "pink"
  },
  {
    name: "Seashell",
    rgb: "rgb(255, 245, 238)",
    group: "pink"
  },
  {
    name: "Shocking pink",
    rgb: "rgb(252, 15, 192)",
    group: "pink"
  },
  {
    name: "Tea rose",
    rgb: "rgb(244, 194, 194)",
    group: "pink"
  },
  {
    name: "Tickle me pink",
    rgb: "rgb(252, 137, 172)",
    group: "pink"
  },
  {
    name: "Telemagenta",
    rgb: "rgb(207, 52, 118)",
    group: "pink"
  },
  {
    name: "Thulian pink",
    rgb: "rgb(222, 111, 161)",
    group: "pink"
  },
  {
    name: "Ultra pink",
    rgb: "rgb(255, 111, 255)",
    group: "pink"
  },
  {
    name: "Alabaster",
    rgb: "rgb(237, 234, 224)",
    group: "white"
  },
  {
    name: "Alice blue",
    rgb: "rgb(240, 248, 255)",
    group: "white"
  },
  {
    name: "Anti-flash white",
    rgb: "rgb(242, 243, 244)",
    group: "white"
  },
  {
    name: "Antique white",
    rgb: "rgb(250, 235, 215)",
    group: "white"
  },
  {
    name: "Azure white",
    rgb: "rgb(240, 255, 255)",
    group: "white"
  },
  {
    name: "Baby powder",
    rgb: "rgb(254, 254, 250)",
    group: "white"
  },
  {
    name: "Beige",
    rgb: "rgb(245, 245, 220)",
    group: "white"
  },
  {
    name: "Bone",
    rgb: "rgb(227, 218, 201)",
    group: "white"
  },
  {
    name: "Champagne",
    rgb: "rgb(247, 231, 206)",
    group: "white"
  },
  {
    name: "Cornsilk",
    rgb: "rgb(255, 248, 220)",
    group: "white"
  },
  {
    name: "Cosmic latte",
    rgb: "rgb(255, 248, 231)",
    group: "white"
  },
  {
    name: "Cream",
    rgb: "rgb(255, 253, 208)",
    group: "white"
  },
  {
    name: "Dutch white",
    rgb: "rgb(239, 223, 187)",
    group: "white"
  },
  {
    name: "Eggshell",
    rgb: "rgb(240, 234, 214)",
    group: "white"
  },
  {
    name: "Flax",
    rgb: "rgb(238, 220, 130)",
    group: "white"
  },
  {
    name: "Floral white",
    rgb: "rgb(255, 250, 240)",
    group: "white"
  },
  {
    name: "Ghost white",
    rgb: "rgb(248, 248, 255)",
    group: "white"
  },
  {
    name: "Honeydew",
    rgb: "rgb(240, 255, 240)",
    group: "white"
  },
  {
    name: "Isabelline",
    rgb: "rgb(244, 240, 236)",
    group: "white"
  },
  {
    name: "Ivory",
    rgb: "rgb(255, 255, 240)",
    group: "white"
  },
  {
    name: "Lavender blush",
    rgb: "rgb(255, 240, 245)",
    group: "white"
  },
  {
    name: "Lemon chiffon",
    rgb: "rgb(255, 250, 205)",
    group: "white"
  },
  {
    name: "Linen",
    rgb: "rgb(250, 240, 230)",
    group: "white"
  },
  {
    name: "Magnolia",
    rgb: "rgb(248, 244, 255)",
    group: "white"
  },
  {
    name: "Mint cream",
    rgb: "rgb(245, 255, 250)",
    group: "white"
  },
  {
    name: "Misty rose",
    rgb: "rgb(255, 228, 225)",
    group: "white"
  },
  {
    name: "Navajo white",
    rgb: "rgb(255, 222, 173)",
    group: "white"
  },
  {
    name: "Nyanza",
    rgb: "rgb(233, 255, 219)",
    group: "white"
  },
  {
    name: "Old lace",
    rgb: "rgb(253, 245, 230)",
    group: "white"
  },
  {
    name: "Papaya whip",
    rgb: "rgb(255, 239, 213)",
    group: "white"
  },
  {
    name: "Parchment",
    rgb: "rgb(241, 233, 210)",
    group: "white"
  },
  {
    name: "Peach",
    rgb: "rgb(255, 229, 180)",
    group: "white"
  },
  {
    name: "Pearl",
    rgb: "rgb(234, 224, 200)",
    group: "white"
  },
  {
    name: "Platinum",
    rgb: "rgb(229, 228, 226)",
    group: "white"
  },
  {
    name: "Seasalt",
    rgb: "rgb(247, 247, 247)",
    group: "white"
  },
  {
    name: "Seashell",
    rgb: "rgb(255, 245, 238)",
    group: "white"
  },
  {
    name: "Snow",
    rgb: "rgb(255, 250, 250)",
    group: "white"
  },
  {
    name: "Vanilla",
    rgb: "rgb(243, 229, 171)",
    group: "white"
  },
  {
    name: "White",
    rgb: "rgb(255, 255, 255)",
    group: "white"
  },
  {
    name: "White smoke",
    rgb: "rgb(245, 245, 245)",
    group: "white"
  },
  {
    name: "White smoke",
    rgb: "rgb(245, 245, 245)",
    group: "gray"
  },
  {
    name: "Platinum",
    rgb: "rgb(229, 228, 226)",
    group: "gray"
  },
  {
    name: "Timberwolf",
    rgb: "rgb(219, 215, 210)",
    group: "gray"
  },
  {
    name: "Silver",
    rgb: "rgb(192, 192, 192)",
    group: "gray"
  },
  {
    name: "French gray",
    rgb: "rgb(190, 191, 197)",
    group: "gray"
  },
  {
    name: "Ash gray",
    rgb: "rgb(178, 190, 181)",
    group: "gray"
  },
  {
    name: "Rose quartz",
    rgb: "rgb(170, 152, 169)",
    group: "gray"
  },
  {
    name: "Cinereous",
    rgb: "rgb(152, 129, 123)",
    group: "gray"
  },
  {
    name: "Cadet gray",
    rgb: "rgb(145, 163, 176)",
    group: "gray"
  },
  {
    name: "Cool gray",
    rgb: "rgb(140, 146, 172)",
    group: "gray"
  },
  {
    name: "Taupe gray",
    rgb: "rgb(139, 133, 137)",
    group: "gray"
  },
  {
    name: "Battleship gray",
    rgb: "rgb(132, 132, 130)",
    group: "gray"
  },
  {
    name: "Gray",
    rgb: "rgb(128, 128, 128)",
    group: "gray"
  },
  {
    name: "Slate gray",
    rgb: "rgb(112, 128, 144)",
    group: "gray"
  },
  {
    name: "Dim gray",
    rgb: "rgb(105, 105, 105)",
    group: "gray"
  },
  {
    name: "Davy's gray",
    rgb: "rgb(85, 85, 85)",
    group: "gray"
  },
  {
    name: "Payne's gray",
    rgb: "rgb(83, 104, 120)",
    group: "gray"
  },
  {
    name: "Glaucous",
    rgb: "rgb(96, 130, 182)",
    group: "gray"
  },
  {
    name: "Gunmetal",
    rgb: "rgb(42, 52, 57)",
    group: "gray"
  },
  {
    name: "Feldgrau",
    rgb: "rgb(77, 93, 83)",
    group: "gray"
  },
  {
    name: "Dark slate gray",
    rgb: "rgb(47, 79, 79)",
    group: "gray"
  },
  {
    name: "Bistre",
    rgb: "rgb(61, 43, 31)",
    group: "black"
  },
  {
    name: "Black",
    rgb: "rgb(0, 0, 0)",
    group: "black"
  },
  {
    name: "Black bean",
    rgb: "rgb(61, 12, 2)",
    group: "black"
  },
  {
    name: "Black olive",
    rgb: "rgb(59, 60, 54)",
    group: "black"
  },
  {
    name: "Café noir",
    rgb: "rgb(75, 54, 33)",
    group: "black"
  },
  {
    name: "Charcoal",
    rgb: "rgb(54, 69, 79)",
    group: "black"
  },
  {
    name: "Dark purple",
    rgb: "rgb(48, 25, 52)",
    group: "black"
  },
  {
    name: "Ebony",
    rgb: "rgb(85, 93, 80)",
    group: "black"
  },
  {
    name: "Eerie black",
    rgb: "rgb(27, 27, 27)",
    group: "black"
  },
  {
    name: "Jet",
    rgb: "rgb(52, 52, 52)",
    group: "black"
  },
  {
    name: "Licorice",
    rgb: "rgb(26, 17, 16)",
    group: "black"
  },
  {
    name: "Midnight blue",
    rgb: "rgb(25, 25, 112)",
    group: "black"
  },
  {
    name: "Night",
    rgb: "rgb(17, 17, 17)",
    group: "black"
  },
  {
    name: "Onyx",
    rgb: "rgb(53, 56, 57)",
    group: "black"
  },
  {
    name: "Outer space",
    rgb: "rgb(65, 74, 76)",
    group: "black"
  },
  {
    name: "Raisin black",
    rgb: "rgb(36, 33, 36)",
    group: "black"
  },
  {
    name: "Rich black",
    rgb: "rgb(1, 11, 19)",
    group: "black"
  },
  {
    name: "Russian violet",
    rgb: "rgb(50, 23, 77)",
    group: "black"
  },
  {
    name: "Smoky black",
    rgb: "rgb(16, 12, 8)",
    group: "black"
  },
  {
    name: "Taupe",
    rgb: "rgb(72, 60, 50)",
    group: "black"
  }
];

export default colors;