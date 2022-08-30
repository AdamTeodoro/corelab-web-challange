

function ColorService() {
    const colors = [
        {
            colorName: "black",
            colorHexa: "#000000",
            ptbrName: "preto"
        },
        {
            colorName: "silver",
            colorHexa: "#c0c0c0",
            ptbrName: "prata"
        },
        {
            colorName: "gray",
            colorHexa: "#808080",
            ptbrName: "cinza"
        },
        {
            colorName: "white",
            colorHexa: "#ffffff",
            ptbrName: "branco"
        },
        {
            colorName: "maroon",
            colorHexa: "#800000",
            ptbrName: "castanho"
        },
        {
            colorName: "red",
            colorHexa: "#ff0000",
            ptbrName: "vermelho"
        },
        {
            colorName: "purple",
            colorHexa: "#800080",
            ptbrName: "roxo"
        },
        {
            colorName: "fuchsia",
            colorHexa: "#ff00ff",
            ptbrName: "fúcsia"
        },
        {
            colorName: "green",
            colorHexa: "#008000",
            ptbrName: "verde"
        },
        {
            colorName: "lime",
            colorHexa: "#00ff00",
            ptbrName: "lima"
        },
        {
            colorName: "olive",
            colorHexa: "#808000",
            ptbrName: "oliva"
        },
        {
            colorName: "yellow",
            colorHexa: "#ffff00",
            ptbrName: "amarelo"
        },
        {
            colorName: "navy",
            colorHexa: "#000080",
            ptbrName: "marinha"
        },
        {
            colorName: "blue",
            colorHexa: "#0000ff",
            ptbrName: "azul"
        },
        {
            colorName: "teal",
            colorHexa: "#008080",
            ptbrName: "cerceta"
        },
        {
            colorName: "aqua",
            colorHexa: "#00ffff",
            ptbrName: "marinha"
        },
        {
            colorName: "aliceblue",
            colorHexa: "#f0f8ff",
        },
        {
            colorName: "antiquewhite",
            colorHexa: "#faebd7"
        },
        {
            colorName: "aquamarine",
            colorHexa: "#7fffd4"
        },
        {
            colorName: "azure",
            colorHexa: "#f0ffff",
            ptbrName: "azul-celeste"
        },
        {
            colorName: "beige",
            colorHexa: "#f5f5dc"
        },
        {
            colorName: "bisque",
            colorHexa: "#ffe4c4"
        },
        {
            colorName: "blanchedalmond",
            colorHexa: "#ffebcd"
        },
        {
            colorName: "blueviolet",
            colorHexa: "#8a2be2"
        },
        {
            colorName: "brown",
            colorHexa: "#a52a2a",
            ptbrName: "marrom"
        },
        {
            colorName: "burlywood",
            colorHexa: "#deb887"
        },
        {
            colorName: "cadetblue",
            colorHexa: "#5f9ea0"
        },
        {
            colorName: "chartreuse",
            colorHexa: "#7fff00"
        },
        {
            colorName: "chocolate",
            colorHexa: "#d2691e",
            ptbrName: "azul-celeste"
        },
        {
            colorName: "coral",
            colorHexa: "#ff7f50"
        },
        {
            colorName: "cornflowerblue",
            colorHexa: "#6495ed"
        },
        {
            colorName: "cornsilk",
            colorHexa: "#fff8dc"
        },
        {
            colorName: "crimson",
            colorHexa: "#dc143c",
            ptbrName: "carmesim"
        },
        {
            colorName: "cyan",
            colorHexa: "#00ffff",
            ptbrName: "ciano"
        },
        {
            colorName: "darkblue",
            colorHexa: "#00008b",
            ptbrName: "azul escuro"
        },
        {
            colorName: "darkcyan",
            colorHexa: "#008b8b",
            ptbrName: "ciano escuro"
        },
        {
            colorName: "darkgoldenrod",
            colorHexa: "#b8860b"
        },
        {
            colorName: "darkgray",
            colorHexa: "#a9a9a9",
            ptbrName: "cinza escuro"
        },
        {
            colorName: "darkgreen",
            colorHexa: "#006400",
            ptbrName: "verde escuro"
        },
        {
            colorName: "darkkhaki",
            colorHexa: "#bdb76b"
        },
        {
            colorName: "darkmagenta",
            colorHexa: "#8b008b",
            ptbrName: "magenta escuro"
        },
        {
            colorName: "darkolivegreen",
            colorHexa: "#556b2f",
            ptbrName: "oliva escuro"
        },
        {
            colorName: "darkorange",
            colorHexa: "#ff8c00",
            ptbrName: "laranja escuro"
        },
        {
            colorName: "darkorchid",
            colorHexa: "#9932cc"
        },
        {
            colorName: "darkred",
            colorHexa: "#8b0000",
            ptbrName: "vermelho escuro"
        },
        {
            colorName: "darksalmon",
            colorHexa: "#e9967a",
            ptbrName: "salmão escuro"
        },
        {
            colorName: "darkseagreen",
            colorHexa: "#8fbc8f"
        },
        {
            colorName: "darkslateblue",
            colorHexa: "#483d8b"
        },
        {
            colorName: "darkslategray",
            colorHexa: "#2f4f4f"
        },
        {
            colorName: "darkslategrey",
            colorHexa: "#2f4f4f"
        },
        {
            colorName: "darkturquoise",
            colorHexa: "#00ced1"
        },
        {
            colorName: "darkviolet",
            colorHexa: "#9400d3",
            ptbrName: "violeta escuro"
        },
        {
            colorName: "deeppink",
            colorHexa: "#ff1493"
        },
        {
            colorName: "deepskyblue",
            colorHexa: "#00bfff"
        },
        {
            colorName: "dimgray",
            colorHexa: "#696969"
        },
        {
            colorName: "dimgrey",
            colorHexa: "#696969"
        },
        {
            colorName: "dodgerblue",
            colorHexa: "#1e90ff"
        },
        {
            colorName: "firebrick",
            colorHexa: "#b22222"
        },
        {
            colorName: "floralwhite",
            colorHexa: "#fffaf0"
        },
        {
            colorName: "forestgreen",
            colorHexa: "#228b22"
        },
        {
            colorName: "gainsboro",
            colorHexa: "#dcdcdc"
        },
        {
            colorName: "ghostwhite",
            colorHexa: "#f8f8ff"
        },
        {
            colorName: "gold",
            colorHexa: "#ffd700",
            ptbrName: "ouro"
        },
        {
            colorName: "goldenrod",
            colorHexa: "#daa520"
        },
        {
            colorName: "greenyellow",
            colorHexa: "#adff2f"
        },
        {
            colorName: "grey",
            colorHexa: "#808080",
            ptbrName: "cinza"
        },
        {
            colorName: "honeydew",
            colorHexa: "#f0fff0"
        },
        {
            colorName: "hotpink",
            colorHexa: "#ff69b4"
        },
        {
            colorName: "indianred",
            colorHexa: "#cd5c5c"
        },
        {
            colorName: "indigo",
            colorHexa: "#4b0082"
        },
        {
            colorName: "ivory",
            colorHexa: "#fffff0"
        },
        {
            colorName: "khaki",
            colorHexa: "#f0e68c"
        },
        {
            colorName: "lavender",
            colorHexa: "#e6e6fa"
        },
        {
            colorName: "lavenderblush",
            colorHexa: "#fff0f5"
        },
        {
            colorName: "lawngreen",
            colorHexa: "#7cfc00"
        },
        {
            colorName: "lemonchiffon",
            colorHexa: "#fffacd"
        },
        {
            colorName: "lightblue",
            colorHexa: "#add8e6",
            ptbrName: "azul claro",
        },
        {
            colorName: "lightcoral",
            colorHexa: "#f08080",
            ptbrName: "coral claro"
        },
        {
            colorName: "lightcyan",
            colorHexa: "#e0ffff",
            ptbrName: "ciano claro"
        },
        {
            colorName: "lightgoldenrodyellow",
            colorHexa: "#fafad2"
        },
        {
            colorName: "lightgray",
            colorHexa: "#d3d3d3",
            ptbrName: "cinza claro"
        },
        {
            colorName: "lightgreen",
            colorHexa: "#90ee90",
            ptbrName: "verde claro"
        },
        {
            colorName: "lightgrey",
            colorHexa: "#d3d3d3",
            ptbrName: "cinza claro"
        },
        {
            colorName: "lightpink",
            colorHexa: "#ffb6c1",
            ptbrName: "rosa claro",
        },
        {
            colorName: "lightsalmon",
            colorHexa: "#ffa07a",
            ptbrName: "salmão claro"
        },
        {
            colorName: "lightseagreen",
            colorHexa: "#20b2aa"
        },
        {
            colorName: "lightskyblue",
            colorHexa: "#87cefa"
        },
        {
            colorName: "lightslategray",
            colorHexa: "#778899"
        },
        {
            colorName: "lightslategrey",
            colorHexa: "#778899"
        },
        {
            colorName: "lightsteelblue",
            colorHexa: "#b0c4de"
        },
        {
            colorName: "lightyellow",
            colorHexa: "#ffffe0",
            ptbrName: "amarelo claro"
        },
        {
            colorName: "limegreen",
            colorHexa: "#32cd32"
        },
        {
            colorName: "linen",
            colorHexa: "#faf0e6"
        },
        {
            colorName: "mediumaquamarine",
            colorHexa: "#66cdaa"
        },
        {
            colorName: "mediumblue",
            colorHexa: "#0000cd"
        },
        {
            colorName: "mediumorchid",
            colorHexa: "#ba55d3"
        },
        {
            colorName: "mediumpurple",
            colorHexa: "#9370db"
        },
        {
            colorName: "mediumseagreen",
            colorHexa: "#3cb371"
        },
        {
            colorName: "mediumslateblue",
            colorHexa: "#7b68ee"
        },
        {
            colorName: "mediumspringgreen",
            colorHexa: "#00fa9a"
        },
        {
            colorName: "mediumturquoise",
            colorHexa: "#48d1cc"
        },
        {
            colorName: "mediumvioletred",
            colorHexa: "#c71585"
        },
        {
            colorName: "midnightblue",
            colorHexa: "#191970"
        },
        {
            colorName: "mintcream",
            colorHexa: "#f5fffa"
        },
        {
            colorName: "mistyrose",
            colorHexa: "#ffe4e1"
        },
        {
            colorName: "moccasin",
            colorHexa: "#ffe4b5"
        },
        {
            colorName: "navajowhite",
            colorHexa: "#ffdead"
        },
        {
            colorName: "oldlace",
            colorHexa: "#fdf5e6"
        },
        {
            colorName: "olivedrab",
            colorHexa: "#6b8e23"
        },
        {
            colorName: "orangered",
            colorHexa: "#ff4500"
        },
        {
            colorName: "orchid",
            colorHexa: "#da70d6"
        },
        {
            colorName: "palegoldenrod",
            colorHexa: "#eee8aa"
        },
        {
            colorName: "palegreen",
            colorHexa: "#98fb98"
        },
        {
            colorName: "paleturquoise",
            colorHexa: "#afeeee"
        },
        {
            colorName: "palevioletred",
            colorHexa: "#db7093"
        },
        {
            colorName: "papayawhip",
            colorHexa: "#ffefd5"
        },
        {
            colorName: "peachpuff",
            colorHexa: "#ffdab9"
        },
        {
            colorName: "peru",
            colorHexa: "#cd853f"
        },
        {
            colorName: "pink",
            colorHexa: "#ffc0cb",
            ptbrName: "rosa"
        },
        {
            colorName: "plum",
            colorHexa: "#dda0dd"
        },
        {
            colorName: "powderblue",
            colorHexa: "#b0e0e6"
        },
        {
            colorName: "rosybrown",
            colorHexa: "#bc8f8f"
        },
        {
            colorName: "royalblue",
            colorHexa: "#4169e1"
        },
        {
            colorName: "saddlebrown",
            colorHexa: "#8b4513"
        },
        {
            colorName: "salmon",
            colorHexa: "#fa8072",
            ptbrName: "salmão"
        },
        {
            colorName: "sandybrown",
            colorHexa: "#f4a460"
        },
        {
            colorName: "seagreen",
            colorHexa: "#2e8b57"
        },
        {
            colorName: "seashell",
            colorHexa: "#fff5ee"
        },
        {
            colorName: "sienna",
            colorHexa: "#a0522d"
        },
        {
            colorName: "skyblue",
            colorHexa: "#87ceeb"
        },
        {
            colorName: "slateblue",
            colorHexa: "#6a5acd"
        },
        {
            colorName: "slategray",
            colorHexa: "#708090"
        },
        {
            colorName: "slategrey",
            colorHexa: "#708090"
        },
        {
            colorName: "snow",
            colorHexa: "#fffafa"
        },
        {
            colorName: "springgreen",
            colorHexa: "#00ff7f"
        },
        {
            colorName: "steelblue",
            colorHexa: "#4682b4"
        },
        {
            colorName: "tan",
            colorHexa: "#d2b48c"
        },
        {
            colorName: "thistle",
            colorHexa: "#d8bfd8"
        },
        {
            colorName: "tomato",
            colorHexa: "#ff6347",
            ptbrName: "toamte"
        },
        {
            colorName: "turquoise",
            colorHexa: "#40e0d0"
        },
        {
            colorName: "violet",
            colorHexa: "#ee82ee",
            ptbrName: "violeta"
        },
        {
            colorName: "wheat",
            colorHexa: "#f5deb3"
        },
        {
            colorName: "whitesmoke",
            colorHexa: "#f5f5f5",
            ptbrName: "branco fumaça"
        },
        {
            colorName: "yellowgreen",
            colorHexa: "#9acd32"
        }
    ];

    function findColorName(selectedColor) {
        if (!selectedColor) return;
        const colorName = selectedColor.toLowerCase();
        // find ptbr name
        const ptbrColorFindeds = colors.filter((color) => color.ptbrName === colorName);
        
        if (ptbrColorFindeds.length > 0) {
            return ptbrColorFindeds[0].colorHexa;
        } else {
            const firstColorName = colorName.split(' ')[0].replace(' ');
            const findedColor = colors.filter((color) => {
                if (color.ptbrName) {
                    return color.ptbrName.includes(firstColorName)
                } else {
                    return false
                }
            });
            if (findedColor.length > 0) {
                return findedColor[0].colorHexa;
            }
        }
        // find english name
        const enColorFindeds = colors.filter((color) => color.colorName === colorName);
        if (enColorFindeds.length > 0) {
            return enColorFindeds[0].colorName;
        }
        return "#ccc";
    }
    
    return {
        findColorName,
        colors
    }
}

export const colorService = new ColorService();
