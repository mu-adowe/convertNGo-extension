const units = [
    {
        unit: "char",
        type: "ASCII",
        abbrev: ["char"],
        validator: /[\s\S]+/,
        "binary": function (val) {
            return val.split("").map(function (char) {
                return char.charCodeAt(0).toString(2);
            }).join(" ");
        },
        "octal": function (val) {
            return val.split("").map(function (char) {
                return char.charCodeAt(0).toString(8);
            }).join(" ");
        },
        "decimal": function (val) {
            return val.split("").map(function (char) {
                return char.charCodeAt(0).toString(10);
            }).join(" ");
        },
        "hexadecimal": function (val) {
            return val.split("").map(function (char) {
                return char.charCodeAt(0).toString(16);
            }).join(" ");
        }

    },
    {
        unit: "binary",
        type: "ASCII",
        abbrev: ["binary"],
        validator: /^[0-1\s]+$/,
        "char": function (val) {
            if (val.split(" ").length == 1)
                return String.fromCharCode(parseInt(val, 2));

            return val.split(" ").map(elem => String.fromCharCode(parseInt(elem, 2))).join("");
        },
        "octal": function (val) {
            if (val.split(" ").length == 1)
                return parseInt(val, 2).toString(8);
            return val.split(" ").map(function (char) {
                return parseInt(char, 2).toString(8);
            }).join(" ");
        },
        "decimal": function (val) {
            if (val.split(" ").length == 1)
                return parseInt(val, 2).toString(10);
            return val.split(" ").map(function (char) {
                return parseInt(char, 2).toString(10);
            }).join(" ");
        },
        "hexadecimal": function (val) {
            if (val.split(" ").length == 1)
                return parseInt(val, 2).toString(16);
            return val.split(" ").map(function (char) {
                return parseInt(char, 2).toString(16);
            }).join(" ");
        }
    },
    {
        unit: "octal",
        type: "ASCII",
        abbrev: ["octal"],
        validator: /^[0-7\s]+$/,
        "char": function (val) {
            if (val.split(" ").length == 1)
                return String.fromCharCode(parseInt(val, 8));
            return val.split(" ").map(elem => String.fromCharCode(parseInt(elem, 8))).join("");
        },
        "binary": function (val) {
            if (val.split(" ").length == 1)
                return parseInt(val, 8).toString(2);
            return val.split(" ").map(function (char) {
                return parseInt(char, 8).toString(2);
            }).join(" ");
        },
        "decimal": function (val) {
            if (val.split(" ").length == 1)
                return parseInt(val, 8).toString(10);
            return val.split(" ").map(function (char) {
                return parseInt(char, 8).toString(10);
            }).join(" ");
        },
        "hexadecimal": function (val) {
            if (val.split(" ").length == 1)
                return parseInt(val, 8).toString(16);
            return val.split(" ").map(function (char) {
                return parseInt(char, 8).toString(16);
            }).join(" ");
        }
    },
    {
        unit: "decimal",
        type: "ASCII",
        abbrev: ["decimal"],
        validator: /^[0-9\s]+$/,
        "char": function (val) {
            if (val.split(" ").length == 1)
                return String.fromCharCode(parseInt(val, 10));
            return val.split(" ").map(elem => String.fromCharCode(parseInt(elem, 10))).join("");
        },
        "octal": function (val) {
            if (val.split(" ").length == 1)
                return parseInt(val, 10).toString(8);
            return val.split(" ").map(function (char) {
                return parseInt(char, 10).toString(8);
            }).join(" ");
        },
        "binary": function (val) {
            if (val.split(" ").length == 1)
                return parseInt(val, 10).toString(2);
            return val.split(" ").map(function (char) {
                return parseInt(char, 10).toString(2);
            }).join(" ");
        },
        "hexadecimal": function (val) {
            if (val.split(" ").length == 1)
                return parseInt(val, 10).toString(16);
            return val.split(" ").map(function (char) {
                return parseInt(char, 10).toString(16);
            }).join(" ");
        }
    },
    {
        unit: "hexadecimal",
        type: "ASCII",
        abbrev: ["hexadecimal"],
        validator: /^[0-9A-F\s]+$/i,
        "char": function (val) {
            if (val.split(" ").length == 1)
                return String.fromCharCode(parseInt(val, 16));
            return val.split(" ").map(elem => String.fromCharCode(parseInt(elem, 16))).join("");
        },
        "octal": function (val) {
            if (val.split(" ").length == 1)
                return parseInt(val, 16).toString(8);
            return val.split(" ").map(function (char) {
                return parseInt(char, 16).toString(8);
            }).join(" ");
        },
        "decimal": function (val) {
            if (val.split(" ").length == 1)
                return parseInt(val, 16).toString(10);
            return val.split(" ").map(function (char) {
                return parseInt(char, 16).toString(10);
            }).join(" ");
        },
        "binary": function (val) {
            if (val.split(" ").length == 1)
                return parseInt(val, 16).toString(2);
            return val.split(" ").map(function (char) {
                return parseInt(char, 16).toString(2);
            }).join(" ");
        }
    },
    {
        unit: "centimeters",
        type: "length",
        abbrev: ["cm", "centimetre", "centimetres", "centimeter", "centimeters"],
        validator: /^[0-9.]+$/,
        "millimeters": (val) => parseFloat(val) * 10,

        "kilometers": (val) => parseFloat(val) / 100000,

        "meters": (val) => parseFloat(val) / 100,

        "micrometers": (val) => parseFloat(val) * 10000,

        "nanometers": (val) => parseFloat(val) * 10000000,

        "miles": (val) => parseFloat(val) / 160934,

        "yard": (val) => parseFloat(val) / 91.44,

        "feet": (val) => parseFloat(val) / 30.48,

        "inches": (val) => parseFloat(val) / 2.54,

        "nautical miles": (val) => parseFloat(val) / 185200
    },
    {
        unit: "millimeters",
        type: "length",
        abbrev: ["mm", "millimetre", "millimetres", "millimeter", "millimeters"],
        validator: /^[0-9.]+$/,
        "centimeters": (val) => parseFloat(val) / 10,

        "kilometers": (val) => parseFloat(val) / 1000000,

        "meters": (val) => parseFloat(val) / 1000,

        "micrometers": (val) => parseFloat(val) * 1000,

        "nanometers": (val) => parseFloat(val) * 1000000,

        "miles": (val) => parseFloat(val) / 1609340,

        "yard": (val) => parseFloat(val) / 914,

        "feet": (val) => parseFloat(val) / 305,

        "inches": (val) => parseFloat(val) / 25.4,

        "nautical miles": (val) => parseFloat(val) / 1852000000,

    }, {
        unit: "nanometer",
        type: "length",
        abbrev: ["nm", "nanometre", "nanometres", "nanometer", "nanometers"],
        validator: /^[0-9.]+$/,
        "centimeters": (val) => parseFloat(val) / 10000000,

        "kilometers": (val) => parseFloat(val) / 1000000000000,

        "meters": (val) => parseFloat(val) / 1000000000,

        "micrometers": (val) => parseFloat(val) / 1000,

        "millimeters": (val) => parseFloat(val) / 1000000,

        "miles": (val) => parseFloat(val) / 1609340000000,

        "yard": (val) => parseFloat(val) / 914400000,

        "feet": (val) => parseFloat(val) / 304800000,

        "inches": (val) => parseFloat(val) / 25400000,

        "nautical miles": (val) => parseFloat(val) / 1852000000000,

    }, {
        unit: "meters",
        type: "length",
        abbrev: ["m", "metre", "metres", "meter", "meters"],
        validator: /^[0-9.]+$/,
        "millimeters": (val) => parseFloat(val) * 1000,

        "kilometers": (val) => parseFloat(val) / 1000,

        "centimeters": (val) => parseFloat(val) * 100,

        "micrometers": (val) => parseFloat(val) * 1000000,

        "nanometers": (val) => parseFloat(val) * 1000000000,

        "miles": (val) => parseFloat(val) / 1609,

        "yard": (val) => parseFloat(val) * 1.094,

        "feet": (val) => parseFloat(val) * 3.281,

        "inches": (val) => parseFloat(val) * 39.37,

        "nautical miles": (val) => parseFloat(val) / 1852,

    }, {
        unit: "kilometers",
        type: "length",
        abbrev: ["km", "kilometre", "kilometres", "kilometer", "kilometers"],
        validator: /^[0-9.]+$/,
        "millimeters": (val) => parseFloat(val) * 1000000,

        "meters": (val) => parseFloat(val) * 1000,

        "centimeters": (val) => parseFloat(val) * 100000,

        "micrometers": (val) => parseFloat(val) * 1000000000,

        "nanometers": (val) => parseFloat(val) * 1000000000000,

        "miles": (val) => parseFloat(val) / 1.609,

        "yard": (val) => parseFloat(val) * 1094,

        "feet": (val) => parseFloat(val) * 3281,

        "inches": (val) => parseFloat(val) * 39370,

        "nautical miles": (val) => parseFloat(val) / 1.852,

    }, {
        unit: "micrometers",
        type: "length",
        abbrev: ["micrometre", "micrometres", "micrometer", "micrometers"],
        validator: /^[0-9.]+$/,
        "millimeters": (val) => parseFloat(val) / 1000,

        "kilometers": (val) => parseFloat(val) / 1000000000,

        "meters": (val) => parseFloat(val) / 1000000,

        "centimeters": (val) => parseFloat(val) / 10000,

        "nanometers": (val) => parseFloat(val) * 1000,

        "miles": (val) => parseFloat(val) / 1609000000,

        "yard": (val) => parseFloat(val) / 914400,

        "feet": (val) => parseFloat(val) / 304800,

        "inches": (val) => parseFloat(val) / 25400,

        "nautical miles": (val) => parseFloat(val) / 1852000000,

    }, {
        unit: "miles",
        type: "length",
        abbrev: ["mile", "miles", "mi"],
        validator: /^[0-9.]+$/,
        "millimeters": (val) => parseFloat(val) * 1609000,

        "kilometers": (val) => parseFloat(val) * 1.609,

        "meters": (val) => parseFloat(val) * 1609,

        "micrometers": (val) => parseFloat(val) * 1609000000,

        "nanometers": (val) => parseFloat(val) * 1609000000000,

        "centimeters": (val) => parseFloat(val) * 160934,

        "yard": (val) => parseFloat(val) * 1760,

        "feet": (val) => parseFloat(val) * 5280,

        "inches": (val) => parseFloat(val) * 63360,

        "nautical miles": (val) => parseFloat(val) / 1.151,

    }, {
        unit: "yard",
        type: "length",
        abbrev: ["yard", "yards"],
        validator: /^[0-9.]+$/,
        "millimeters": (val) => parseFloat(val) * 914,

        "kilometers": (val) => parseFloat(val) / 1094,

        "centimeters": (val) => parseFloat(val) * 91.44,

        "micrometers": (val) => parseFloat(val) * 914400,

        "nanometers": (val) => parseFloat(val) * 914400000,

        "miles": (val) => parseFloat(val) / 1760,

        "meters": (val) => parseFloat(val) / 1.094,

        "feet": (val) => parseFloat(val) * 3,

        "inches": (val) => parseFloat(val) * 36,

        "nautical miles": (val) => parseFloat(val) / 2025,

    }, {
        unit: "feet",
        type: "length",
        abbrev: ["foot", "ft", "feet"],
        validator: /^[0-9.]+$/,
        "millimeters": (val) => parseFloat(val) * 305,

        "kilometers": (val) => parseFloat(val) / 3281,

        "centimeters": (val) => parseFloat(val) * 30.48,

        "micrometers": (val) => parseFloat(val) * 304800,

        "nanometers": (val) => parseFloat(val) * 304800000,

        "miles": (val) => parseFloat(val) / 5280,

        "yard": (val) => parseFloat(val) / 3,

        "meters": (val) => parseFloat(val) / 3.281,

        "inches": (val) => parseFloat(val) / 12,

        "nautical miles": (val) => parseFloat(val) / 6076,

    }, {
        unit: "inches",
        type: "length",
        abbrev: ["inch", "inches", "in"],
        validator: /^[0-9.]+$/,
        "millimeters": (val) => parseFloat(val) * 25.4,

        "kilometers": (val) => parseFloat(val) / 39370,

        "centimeters": (val) => parseFloat(val) * 2.54,

        "micrometers": (val) => parseFloat(val) * 25400,

        "nanometers": (val) => parseFloat(val) * 25400000,

        "miles": (val) => parseFloat(val) / 63360,

        "yard": (val) => parseFloat(val) / 36,

        "feet": (val) => parseFloat(val) / 12,

        "meters": (val) => parseFloat(val) / 39.37,

        "nautical miles": (val) => parseFloat(val) / 72913,

    }, {
        unit: "nautical miles",
        type: "length",
        abbrev: ["nautical mile", "nautical miles"],
        validator: /^[0-9.]+$/,
        "millimeters": (val) => parseFloat(val) * 1852000,

        "kilometers": (val) => parseFloat(val) * 1.852,

        "centimeters": (val) => parseFloat(val) * 185200,

        "micrometers": (val) => parseFloat(val) * 1852000000,

        "nanometers": (val) => parseFloat(val) * 1852000000000,

        "miles": (val) => parseFloat(val) * 1.151,

        "yard": (val) => parseFloat(val) * 2025,

        "feet": (val) => parseFloat(val) * 6076,

        "inches": (val) => parseFloat(val) * 72913,

        "meters": (val) => parseFloat(val) * 1852,

    }, {
        unit: "square kilometers",
        type: "area",
        abbrev: ["square km", "square kilometre", "square kilometer", "square kilometres", "square kilometers", "km2", "km²"],
        validator: /^[0-9.]+$/,
        "square meters": (val) => parseFloat(val) * 1000000,

        "square miles": (val) => parseFloat(val) / 2.59,

        "square yard": (val) => parseFloat(val) * 1196000,

        "square feet": (val) => parseFloat(val) * 10760000,

        "square inches": (val) => parseFloat(val) * 1550000000,

        "hectare": (val) => parseFloat(val) * 100,

        "acre": (val) => parseFloat(val) * 247.105,

    }, {
        unit: "square meters",
        type: "area",
        abbrev: ["square m", "square metre", "square meter", "square metres", "square meters", "m2", "m²"],
        validator: /^[0-9.]+$/,
        "square kilometers": (val) => parseFloat(val) / 1000000,

        "square miles": (val) => parseFloat(val) / 2590000,

        "square yard": (val) => parseFloat(val) * 1.196,

        "square feet": (val) => parseFloat(val) * 10.764,

        "square inches": (val) => parseFloat(val) * 1550,

        "hectare": (val) => parseFloat(val) / 10000,

        "acre": (val) => parseFloat(val) / 4047,

    }, {
        unit: "square miles",
        type: "area",
        abbrev: ["square mile", "square miles", "mi2", "mi²"],
        validator: /^[0-9.]+$/,
        "square meters": (val) => parseFloat(val) * 2590000,

        "square kilometers": (val) => parseFloat(val) * 2.59,

        "square yard": (val) => parseFloat(val) * 3098000,

        "square feet": (val) => parseFloat(val) * 27880000,

        "square inches": (val) => parseFloat(val) * 4014000000,

        "hectare": (val) => parseFloat(val) * 259,

        "acre": (val) => parseFloat(val) * 640,

    }, {
        unit: "square yard",
        type: "area",
        abbrev: ["square yard", "square yards", "yd2", "yd²"],
        validator: /^[0-9.]+$/,
        "square meters": (val) => parseFloat(val) / 1.196,

        "square miles": (val) => parseFloat(val) / 3098000,

        "square kilometers": (val) => parseFloat(val) / 1196000,

        "square feet": (val) => parseFloat(val) * 9,

        "square inches": (val) => parseFloat(val) * 1296,

        "hectare": (val) => parseFloat(val) / 11960,

        "acre": (val) => parseFloat(val) / 4840,

    }, {
        unit: "square feet",
        type: "area",
        abbrev: ["square foot", "square feet", "sq. ft", "sq ft"],
        validator: /^[0-9.]+$/,
        "square meters": (val) => parseFloat(val) / 10.764,

        "square miles": (val) => parseFloat(val) / 27880000,

        "square yard": (val) => parseFloat(val) / 9,

        "square kilometers": (val) => parseFloat(val) * 10760000,

        "square inches": (val) => parseFloat(val) * 144,

        "hectare": (val) => parseFloat(val) / 107369,

        "acre": (val) => parseFloat(val) / 43560,

    }, {
        unit: "square inches",
        type: "area",
        abbrev: ["square inch", "square inches", "sq. in", "sq in"],
        validator: /^[0-9.]+$/,
        "square meters": (val) => parseFloat(val) / 1550,

        "square miles": (val) => parseFloat(val) / 4014000000,

        "square yard": (val) => parseFloat(val) / 1296,

        "square feet": (val) => parseFloat(val) / 144,

        "square kilometers": (val) => parseFloat(val) * 1550000000,

        "hectare": (val) => parseFloat(val) / 15500000,

        "acre": (val) => parseFloat(val) / 6273000,

    }, {
        unit: "hectare",
        type: "area",
        abbrev: ["hectare", "hectares", "ha"],
        validator: /^[0-9.]+$/,
        "square meters": (val) => parseFloat(val) * 10000,

        "square miles": (val) => parseFloat(val) / 259,

        "square yard": (val) => parseFloat(val) * 11960,

        "square feet": (val) => parseFloat(val) * 107639,

        "square inches": (val) => parseFloat(val) * 15500000,

        "square kilometers": (val) => parseFloat(val) / 100,

        "acre": (val) => parseFloat(val) * 2.47105,

    }, {
        unit: "acre",
        type: "area",
        abbrev: ["acre", "acres", "ac"],
        validator: /^[0-9.]+$/,
        "square meters": (val) => parseFloat(val) * 4047,

        "square miles": (val) => parseFloat(val) / 640,

        "square yard": (val) => parseFloat(val) * 4840,

        "square feet": (val) => parseFloat(val) * 43560,

        "square inches": (val) => parseFloat(val) * 6273000,

        "hectare": (val) => parseFloat(val) / 2.47105,

        "square kilometers": (val) => parseFloat(val) / 247.105,

    }, {
        unit: "bits",
        type: "Data Transfer Rate",
        abbrev: ["bit", "bits", "bit/s", "bps", "b"],
        validator: /^[0-9.]+$/,
        "kilobits": (val) => parseFloat(val) / 1000,

        "kilobytes": (val) => parseFloat(val) / 8000,

        "kibibits": (val) => parseFloat(val) / 1024,

        "megabits": (val) => parseFloat(val) / 1000000,

        "megabytess": (val) => parseFloat(val) / 8000000,

        "mebibits": (val) => parseFloat(val) / 1049000,

        "gigabits": (val) => parseFloat(val) / 1000000000,

        "gigabytes": (val) => parseFloat(val) / 8000000000,

        "gibibits": (val) => parseFloat(val) / 1074000000,

        "terabits": (val) => parseFloat(val) / 1000000000000,

        "terabytes": (val) => parseFloat(val) / 8000000000000,

        "tebibits": (val) => parseFloat(val) / 1100000000000,

    }, {
        unit: "kilobits",
        type: "Data Transfer Rate",
        abbrev: ["kilobit", "kilobits", "kb/s", "kbps", "Kbit", "Kb"],
        validator: /^[0-9.]+$/,
        "bits": (val) => parseFloat(val) * 1000,

        "kilobytes": (val) => parseFloat(val) / 8,

        "kibibits": (val) => parseFloat(val) / 1.024,

        "megabits": (val) => parseFloat(val) / 1000,

        "megabytes": (val) => parseFloat(val) / 8000,

        "mebibits": (val) => parseFloat(val) / 1049,

        "gigabits": (val) => parseFloat(val) / 1000000,

        "gigabytes": (val) => parseFloat(val) / 8000000,

        "gibibits": (val) => parseFloat(val) / 1074000,

        "terabits": (val) => parseFloat(val) / 1000000000,

        "terabytes": (val) => parseFloat(val) / 8000000000,

        "tebibits": (val) => parseFloat(val) / 1100000000,

    }, {
        unit: "kilobytes",
        type: "Data Transfer Rate",
        abbrev: ["kilobyte", "kilobytes", "KB/s", "KBps", "KB"],
        validator: /^[0-9.]+$/,
        "kilobits": (val) => parseFloat(val) * 8,

        "bits": (val) => parseFloat(val) * 8000,

        "kibibits": (val) => parseFloat(val) * 7.812,

        "megabits": (val) => parseFloat(val) / 125,

        "megabytes": (val) => parseFloat(val) / 1000,

        "mebibits": (val) => parseFloat(val) / 131,

        "gigabits": (val) => parseFloat(val) / 125000,

        "gigabytes": (val) => parseFloat(val) / 1000000,

        "gibibits": (val) => parseFloat(val) / 134218,

        "terabits": (val) => parseFloat(val) / 125000000,

        "terabytes": (val) => parseFloat(val) / 1000000000,

        "tebibits": (val) => parseFloat(val) / 137400000,

    }, {
        unit: "kibibits",
        type: "Data Transfer Rate",
        abbrev: ["kibibit", "kibibits", "KiBit"],
        validator: /^[0-9.]+$/,
        "kilobits": (val) => parseFloat(val) * 1.024,

        "kilobytes": (val) => parseFloat(val) / 7.812,

        "bits": (val) => parseFloat(val) * 1024,

        "megabits": (val) => parseFloat(val) / 977,

        "megabytes": (val) => parseFloat(val) / 7813,

        "mebibits": (val) => parseFloat(val) / 1024,

        "gigabits": (val) => parseFloat(val) / 976562,

        "gigabytes": (val) => parseFloat(val) / 7812000,

        "gibibits": (val) => parseFloat(val) / 1049000,

        "terabits": (val) => parseFloat(val) / 976600000,

        "terabytes": (val) => parseFloat(val) / 7812000000,

        "tebibits": (val) => parseFloat(val) / 1074000000,

    }, {
        unit: "megabits",
        type: "Data Transfer Rate",
        abbrev: ["megabit", "megabits", "mb/s", "mbps", "Mbit", "Mb"],
        validator: /^[0-9.]+$/,
        "kilobits": (val) => parseFloat(val) * 1000,

        "kilobytes": (val) => parseFloat(val) * 125,

        "kibibits": (val) => parseFloat(val) * 977,

        "bits": (val) => parseFloat(val) * 1000000,

        "megabytes": (val) => parseFloat(val) / 8,

        "mebibits": (val) => parseFloat(val) / 1.049,

        "gigabits": (val) => parseFloat(val) / 1000,

        "gigabytes": (val) => parseFloat(val) / 8000,

        "gibibits": (val) => parseFloat(val) / 1074,

        "terabits": (val) => parseFloat(val) / 1000000000,

        "terabytes": (val) => parseFloat(val) / 8000000000,

        "tebibits": (val) => parseFloat(val) / 1100000000,

    }, {
        unit: "megabytes",
        type: "Data Transfer Rate",
        abbrev: ["megabyte", "megabytes", "MB/s", "MBps", "MB"],
        validator: /^[0-9.]+$/,
        "kilobytes": (val) => parseFloat(val) * 1000,

        "kilobits": (val) => parseFloat(val) * 8000,

        "kibibits": (val) => parseFloat(val) * 7813,

        "megabits": (val) => parseFloat(val) * 8,

        "bits": (val) => parseFloat(val) * 8000000,

        "mebibits": (val) => parseFloat(val) * 7.629,

        "gigabits": (val) => parseFloat(val) / 125,

        "gigabytes": (val) => parseFloat(val) / 1000,

        "gibibits": (val) => parseFloat(val) / 134,

        "terabits": (val) => parseFloat(val) / 125000,

        "terabytes": (val) => parseFloat(val) / 1000000,

        "tebibits": (val) => parseFloat(val) / 137439,

    }, {
        unit: "mebibits",
        type: "Data Transfer Rate",
        abbrev: ["mebibit", "mebibits", "MiBit"],
        validator: /^[0-9.]+$/,
        "kilobits": (val) => parseFloat(val) * 1049,

        "kilobytes": (val) => parseFloat(val) * 131,

        "kibibits": (val) => parseFloat(val) * 1024,

        "megabits": (val) => parseFloat(val) * 1.049,

        "megabytes": (val) => parseFloat(val) / 7.629,

        "bits": (val) => parseFloat(val) / 1049000,

        "gigabits": (val) => parseFloat(val) / 954,

        "gigabytes": (val) => parseFloat(val) / 7629,

        "gibibits": (val) => parseFloat(val) / 1024,

        "terabits": (val) => parseFloat(val) / 953674,

        "terabytes": (val) => parseFloat(val) / 7629000,

        "tebibits": (val) => parseFloat(val) / 1049000,

    }, {
        unit: "gigabits",
        type: "Data Transfer Rate",
        abbrev: ["gigabit", "gigabits", "gb/s", "gbps", "Gbit", "Gb"],
        validator: /^[0-9.]+$/,
        "kilobits": (val) => parseFloat(val) * 1000000,

        "kilobytes": (val) => parseFloat(val) * 125000,

        "kibibits": (val) => parseFloat(val) * 976563,

        "megabits": (val) => parseFloat(val) * 1000,

        "megabytes": (val) => parseFloat(val) * 125,

        "mebibits": (val) => parseFloat(val) * 954,

        "bits": (val) => parseFloat(val) * 1000000000,

        "gigabytes": (val) => parseFloat(val) / 8,

        "gibibits": (val) => parseFloat(val) / 1.074,

        "terabits": (val) => parseFloat(val) / 1000,

        "terabytes": (val) => parseFloat(val) / 8000,

        "tebibits": (val) => parseFloat(val) / 1100,

    }, {
        unit: "gigabytes",
        type: "Data Transfer Rate",
        abbrev: ["gigabyte", "gigabytes", "GB/s", "GBps", "GB"],
        validator: /^[0-9.]+$/,
        "kilobits": (val) => parseFloat(val) * 1000000,

        "kilobytes": (val) => parseFloat(val) * 125000,

        "kibibits": (val) => parseFloat(val) * 976563,

        "megabits": (val) => parseFloat(val) * 8000,

        "megabytes": (val) => parseFloat(val) * 1000,

        "mebibits": (val) => parseFloat(val) * 954,

        "gigabits": (val) => parseFloat(val) / 954,

        "gigabytes": (val) => parseFloat(val) / 7629,

        "gibibits": (val) => parseFloat(val) / 1024,

        "terabits": (val) => parseFloat(val) / 953674,

        "terabytes": (val) => parseFloat(val) / 7629000,

        "tebibits": (val) => parseFloat(val) / 1049000,

    }, {
        unit: "gibibits",
        type: "Data Transfer Rate",
        abbrev: ["gibibit", "gibibits", "GiBit"],
        validator: /^[0-9.]+$/,
        "kilobits": (val) => parseFloat(val) * 1074000,

        "kilobytes": (val) => parseFloat(val) * 134218,

        "kibibits": (val) => parseFloat(val) * 1049000,

        "megabits": (val) => parseFloat(val) * 8589.93,

        "megabytes": (val) => parseFloat(val) * 1073.74,

        "mebibits": (val) => parseFloat(val) * 1024,

        "gigabits": (val) => parseFloat(val) * 1.024,

        "gigabytes": (val) => parseFloat(val) / 7.451,

        "bits": (val) => parseFloat(val) / 1074000000,

        "terabits": (val) => parseFloat(val) / 931,

        "terabytes": (val) => parseFloat(val) / 7451,

        "tebibits": (val) => parseFloat(val) / 1024,

    }, {
        unit: "terabits",
        type: "Data Transfer Rate",
        abbrev: ["terabit", "terabits", "tb/s", "tbps", "Tbit", "Tb"],
        validator: /^[0-9.]+$/,
        "kilobits": (val) => parseFloat(val) * 1000000000,

        "kilobytes": (val) => parseFloat(val) * 125000000,

        "kibibits": (val) => parseFloat(val) * 976600000,

        "megabits": (val) => parseFloat(val) * 1000000,

        "megabytes": (val) => parseFloat(val) * 125000,

        "mebibits": (val) => parseFloat(val) * 953674,

        "gigabits": (val) => parseFloat(val) * 1000,

        "gigabytes": (val) => parseFloat(val) * 125,

        "gibibits": (val) => parseFloat(val) * 931,

        "bits": (val) => parseFloat(val) * 1000000000000,

        "terabytes": (val) => parseFloat(val) / 8,

        "tebibits": (val) => parseFloat(val) / 1.1,

    }, {
        unit: "terabytes",
        type: "Data Transfer Rate",
        abbrev: ["terabyte", "terabytes", "TB/s", "TBps", "TB"],
        validator: /^[0-9.]+$/,
        "kilobits": (val) => parseFloat(val) * 8000000000,

        "kilobytes": (val) => parseFloat(val) * 1000000000,

        "kibibits": (val) => parseFloat(val) * 7812000000,

        "megabits": (val) => parseFloat(val) * 8000000,

        "megabytes": (val) => parseFloat(val) * 1000000,

        "mebibits": (val) => parseFloat(val) * 7629000,

        "gigabits": (val) => parseFloat(val) * 8000,

        "gigabytes": (val) => parseFloat(val) * 1000,

        "gibibits": (val) => parseFloat(val) * 7451,

        "terabits": (val) => parseFloat(val) * 8,

        "bits": (val) => parseFloat(val) * 8000000000000,

        "tebibits": (val) => parseFloat(val) * 7.276,

    }, {
        unit: "tebibits",
        type: "Data Transfer Rate",
        abbrev: ["tebibit", "tebibits", "TiBit"],
        validator: /^[0-9.]+$/,
        "kilobits": (val) => parseFloat(val) * 1100000000,

        "kilobytes": (val) => parseFloat(val) * 137400000,

        "kibibits": (val) => parseFloat(val) * 1074000000,

        "megabits": (val) => parseFloat(val) * 1100000,

        "megabytes": (val) => parseFloat(val) * 137439,

        "mebibits": (val) => parseFloat(val) * 1049000,

        "gigabits": (val) => parseFloat(val) * 1100,

        "gigabytes": (val) => parseFloat(val) * 137,

        "gibibits": (val) => parseFloat(val) * 1024,

        "terabits": (val) => parseFloat(val) * 1.1,

        "terabytes": (val) => parseFloat(val) * 7.276,

        "bits": (val) => parseFloat(val) * 1100000000000,

    }, {
        unit: "celsius",
        type: "Temperature",
        abbrev: ["Celsius", "°c", "c"],
        validator: /^-?\d+(\.\d+)?$/,
        "fahrenheit": (val) => (parseFloat(val) * 9 / 5) + 32,

        "kelvin": (val) => parseFloat(val) + 273.15,

    }, {
        unit: "fahrenheit",
        type: "Temperature",
        abbrev: ["Fahrenheit", "fahrenheit", "°f", "f"],
        validator: /^-?\d+(\.\d+)?$/,
        "celsius": (val) => (parseFloat(val) - 32) * 5 / 9,

        "kelvin": (val) => ((parseFloat(val) - 32) * 5 / 9) + 273.15,

    }, {
        unit: "kelvin",
        type: "Temperature",
        abbrev: ["Kelvin", "K"],
        validator: /^-?\d+(\.\d+)?$/,
        "celsius": (val) => parseFloat(val) - 273.15,

        "fahrenheit": (val) => ((parseFloat(val) - 273.15) * 9 / 5) + 32,

    }, {
        unit: "bar",
        type: "Pressure",
        abbrev: ["bar"],
        validator: /^[0-9.]+$/,
        "pascal": (val) => parseFloat(val) * 100000,

        "pound per square inch": (val) => parseFloat(val) * 14.504,

        "standard atmosphere": (val) => parseFloat(val) / 1.013,

        "torr": (val) => parseFloat(val) * 750.1

    }, {
        unit: "pascal",
        type: "Pressure",
        abbrev: ["pa", "n/m²", "n/m2"],
        validator: /^[0-9.]+$/,
        "bar": (val) => parseFloat(val) / 100000,

        "pound per square inch": (val) => parseFloat(val) / 6895,

        "standard atmosphere": (val) => parseFloat(val) / 101300,

        "torr": (val) => parseFloat(val) / 133.3

    }, {
        unit: "pound per square inch",
        type: "Pressure",
        abbrev: ["pound per square inch", "PSI", "lbf/in²", "lbf/in2"],
        validator: /^[0-9.]+$/,
        "bar": (val) => parseFloat(val) / 14.504,

        "pascal": (val) => parseFloat(val) * 6895,

        "standard atmosphere": (val) => parseFloat(val) / 14.696,

        "torr": (val) => parseFloat(val) * 51.715

    }, {
        unit: "standard atmosphere",
        type: "Pressure",
        abbrev: ["standard atmosphere", "atm"],
        validator: /^[0-9.]+$/,
        "bar": (val) => parseFloat(val) * 1.013,

        "pascal": (val) => parseFloat(val) * 101300,

        "pound per square inch": (val) => parseFloat(val) * 14.696,

        "torr": (val) => parseFloat(val) * 760

    }, {
        unit: "torr",
        type: "Pressure",
        abbrev: ["torr"],
        validator: /^[0-9.]+$/,
        "bar": (val) => parseFloat(val) / 750.1,

        "pascal": (val) => parseFloat(val) * 133.3,

        "pound per square inch": (val) => parseFloat(val) / 51.715,

        "standard atmosphere": (val) => parseFloat(val) / 760

    }, {
        unit: "tonne",
        type: "Mass",
        abbrev: ["tonne", "Tonne", "T", "Mg"],
        validator: /^[0-9.]+$/,
        "kilogram": (val) => parseFloat(val) * 1000,

        "gram": (val) => parseFloat(val) * 1000000,

        "milligram": (val) => parseFloat(val) * 1000000000,

        "microgram": (val) => parseFloat(val) * 1000000000000,

        "imperial ton": (val) => parseFloat(val) / 1.016,

        "US ton": (val) => parseFloat(val) * 1.102,

        "stone": (val) => parseFloat(val) * 157.5,

        "pounds": (val) => parseFloat(val) * 2205,

        "ounce": (val) => parseFloat(val) * 35270

    }, {
        unit: "kilogram",
        type: "Mass",
        abbrev: ["kilogram", "Kilogram", "kg"],
        validator: /^[0-9.]+$/,
        "tonne": (val) => parseFloat(val) / 1000,

        "gram": (val) => parseFloat(val) * 1000,

        "milligram": (val) => parseFloat(val) * 1000000,

        "microgram": (val) => parseFloat(val) * 1000000000,

        "imperial ton": (val) => parseFloat(val) / 1016,

        "US ton": (val) => parseFloat(val) * 907.2,

        "stone": (val) => parseFloat(val) / 6.35,

        "pounds": (val) => parseFloat(val) * 2.205,

        "ounce": (val) => parseFloat(val) * 35.274

    }, {
        unit: "gram",
        type: "Mass",
        abbrev: ["gram", "Gram", "g"],
        validator: /^[0-9.]+$/,
        "kilogram": (val) => parseFloat(val) / 1000,

        "tonne": (val) => parseFloat(val) / 1000000,

        "milligram": (val) => parseFloat(val) * 1000,

        "microgram": (val) => parseFloat(val) * 1000000,

        "imperial ton": (val) => parseFloat(val) / 1016000,

        "US ton": (val) => parseFloat(val) / 907200,

        "stone": (val) => parseFloat(val) / 6350,

        "pounds": (val) => parseFloat(val) / 453.6,

        "ounce": (val) => parseFloat(val) / 28.35

    }, {
        unit: "milligram",
        type: "Mass",
        abbrev: ["milligram", "Milligram", "mg"],
        validator: /^[0-9.]+$/,
        "kilogram": (val) => parseFloat(val) / 1000000,

        "gram": (val) => parseFloat(val) / 1000,

        "tonne": (val) => parseFloat(val) / 1000000000,

        "microgram": (val) => parseFloat(val) * 1000,

        "imperial ton": (val) => parseFloat(val) / 1016000000,

        "US ton": (val) => parseFloat(val) / 907200000,

        "stone": (val) => parseFloat(val) / 6350000,

        "pounds": (val) => parseFloat(val) / 453600,

        "ounce": (val) => parseFloat(val) / 28350

    }, {
        unit: "microgram",
        type: "Mass",
        abbrev: ["microgram", "Microgram", "μg"],
        validator: /^[0-9.]+$/,
        "kilogram": (val) => parseFloat(val) / 1000000000,

        "gram": (val) => parseFloat(val) / 1000000,

        "milligram": (val) => parseFloat(val) / 1000,

        "tonne": (val) => parseFloat(val) / 1000000000000,

        "imperial ton": (val) => parseFloat(val) / 1016000000000,

        "US ton": (val) => parseFloat(val) / 907200000000,

        "stone": (val) => parseFloat(val) / 6350000000,

        "pounds": (val) => parseFloat(val) / 453600000,

        "ounce": (val) => parseFloat(val) / 28350000

    }, {
        unit: "imperial ton",
        type: "Mass",
        abbrev: ["imperial ton", "Imperial Ton", "t"],
        validator: /^[0-9.]+$/,
        "kilogram": (val) => parseFloat(val) * 1016,

        "gram": (val) => parseFloat(val) * 1016000,

        "milligram": (val) => parseFloat(val) * 1016000000,

        "tonne": (val) => parseFloat(val) * 1.106,

        "microgram": (val) => parseFloat(val) * 1016000000000,

        "US ton": (val) => parseFloat(val) * 1.12,

        "stone": (val) => parseFloat(val) * 160,

        "pounds": (val) => parseFloat(val) * 2240,

        "ounce": (val) => parseFloat(val) * 35840

    }, {
        unit: "US ton",
        type: "Mass",
        abbrev: ["us ton", "US Ton", "tn"],
        validator: /^[0-9.]+$/,
        "kilogram": (val) => parseFloat(val) * 907.2,

        "gram": (val) => parseFloat(val) * 907200,

        "milligram": (val) => parseFloat(val) * 907200000,

        "tonne": (val) => parseFloat(val) / 1.102,

        "microgram": (val) => parseFloat(val) * 907200000000,

        "imperial ton": (val) => parseFloat(val) / 1.12,

        "stone": (val) => parseFloat(val) * 142.9,

        "pounds": (val) => parseFloat(val) * 2000,

        "ounce": (val) => parseFloat(val) * 32000

    }, {
        unit: "stone",
        type: "Mass",
        abbrev: ["stone", "Stone", "st"],
        validator: /^[0-9.]+$/,
        "kilogram": (val) => parseFloat(val) * 6.35,

        "gram": (val) => parseFloat(val) * 6350,

        "milligram": (val) => parseFloat(val) * 6350000,

        "tonne": (val) => parseFloat(val) / 157.5,

        "microgram": (val) => parseFloat(val) * 6350000000,

        "imperial ton": (val) => parseFloat(val) / 160,

        "US ton": (val) => parseFloat(val) / 142.9,

        "pounds": (val) => parseFloat(val) * 14,

        "ounce": (val) => parseFloat(val) * 224

    }, {
        unit: "pounds",
        type: "Mass",
        abbrev: ["pound", "Pound", "pounds", "Pounds", "lbs", "lb"],
        validator: /^[0-9.]+$/,
        "kilogram": (val) => parseFloat(val) / 2.205,

        "gram": (val) => parseFloat(val) * 453.6,

        "milligram": (val) => parseFloat(val) * 453600,

        "tonne": (val) => parseFloat(val) / 2205,

        "microgram": (val) => parseFloat(val) * 453600000,

        "imperial ton": (val) => parseFloat(val) / 2240,

        "US ton": (val) => parseFloat(val) / 2000,

        "stone": (val) => parseFloat(val) / 14,

        "ounce": (val) => parseFloat(val) * 16

    }, {
        unit: "ounce",
        type: "Mass",
        abbrev: ["ounce", "Ounce", "ounces", "Ounces", "oz"],
        validator: /^[0-9.]+$/,
        "kilogram": (val) => parseFloat(val) / 35.274,

        "gram": (val) => parseFloat(val) * 28.35,

        "milligram": (val) => parseFloat(val) * 28350,

        "tonne": (val) => parseFloat(val) / 35270,

        "microgram": (val) => parseFloat(val) * 2835000,

        "imperial ton": (val) => parseFloat(val) / 35840,

        "US ton": (val) => parseFloat(val) / 32000,

        "stone": (val) => parseFloat(val) / 224,

        "pounds": (val) => parseFloat(val) / 16

    }, {
        unit: "US liquid gallon",
        type: "Volume",
        abbrev: ["US liquid gallon", "us liquid gallon", "gal"],
        validator: /^[0-9.]+$/,
        "US liquid quart": (val) => parseFloat(val) * 4,

        "US liquid pint": (val) => parseFloat(val) * 8,

        "US legal cup": (val) => parseFloat(val) * 15.773,

        "US fluid ounce": (val) => parseFloat(val) * 128,

        "US tablespoon": (val) => parseFloat(val) * 256,

        "US teaspoon": (val) => parseFloat(val) * 768,

        "cubic meter": (val) => parseFloat(val) / 264.2,

        "liter": (val) => parseFloat(val) * 3.785,

        "milliliter": (val) => parseFloat(val) * 3785,

        "imperial gallon": (val) => parseFloat(val) / 1.201,

        "imperial quart": (val) => parseFloat(val) * 3.331,

        "imperial pint": (val) => parseFloat(val) * 6.661,

        "imperial cup": (val) => parseFloat(val) * 13.323,

        "fluid ounce": (val) => parseFloat(val) * 133.2,

        "imperial tablespoon": (val) => parseFloat(val) * 213.2,

        "imperial teaspoon": (val) => parseFloat(val) * 639.5,

        "cubic foot": (val) => parseFloat(val) / 7.48,

        "cubic inch": (val) => parseFloat(val) * 231

    }, {
        unit: "US liquid quart",
        type: "Volume",
        abbrev: ["US liquid quart", "us liquid quart", "qt"],
        validator: /^[0-9.]+$/,
        "US liquid gallon": (val) => parseFloat(val) / 4,

        "US liquid pint": (val) => parseFloat(val) * 2,

        "US legal cup": (val) => parseFloat(val) * 3.943,

        "US fluid ounce": (val) => parseFloat(val) * 32,

        "US tablespoon": (val) => parseFloat(val) * 64,

        "US teaspoon": (val) => parseFloat(val) * 192,

        "cubic meter": (val) => parseFloat(val) / 1057,

        "liter": (val) => parseFloat(val) / 1.057,

        "milliliter": (val) => parseFloat(val) * 946.4,

        "imperial gallon": (val) => parseFloat(val) / 4.804,

        "imperial quart": (val) => parseFloat(val) / 1.201,

        "imperial pint": (val) => parseFloat(val) * 1.665,

        "imperial cup": (val) => parseFloat(val) * 3.331,

        "fluid ounce": (val) => parseFloat(val) * 33.307,

        "imperial tablespoon": (val) => parseFloat(val) * 53.291,

        "imperial teaspoon": (val) => parseFloat(val) * 159.9,

        "cubic foot": (val) => parseFloat(val) / 29.922,

        "cubic inch": (val) => parseFloat(val) * 57.75

    }, {
        unit: "US liquid pint",
        type: "Volume",
        abbrev: ["US liquid pint", "us liquid pint", "pt", "p"],
        validator: /^[0-9.]+$/,
        "US liquid gallon": (val) => parseFloat(val) / 8,

        "US liquid quart": (val) => parseFloat(val) / 2,

        "US legal cup": (val) => parseFloat(val) * 1.972,

        "US fluid ounce": (val) => parseFloat(val) * 16,

        "US tablespoon": (val) => parseFloat(val) * 32,

        "US teaspoon": (val) => parseFloat(val) * 96,

        "cubic meter": (val) => parseFloat(val) / 2113,

        "liter": (val) => parseFloat(val) / 2.113,

        "milliliter": (val) => parseFloat(val) * 473.2,

        "imperial gallon": (val) => parseFloat(val) / 9.608,

        "imperial quart": (val) => parseFloat(val) / 2.402,

        "imperial pint": (val) => parseFloat(val) / 1.201,

        "imperial cup": (val) => parseFloat(val) * 1.665,

        "fluid ounce": (val) => parseFloat(val) * 16.653,

        "imperial tablespoon": (val) => parseFloat(val) * 26.646,

        "imperial teaspoon": (val) => parseFloat(val) * 79.937,

        "cubic foot": (val) => parseFloat(val) / 59.844,

        "cubic inch": (val) => parseFloat(val) * 28.875

    }, {
        unit: "US legal cup",
        type: "Volume",
        abbrev: ["US legal cup", "us legal cup", "cups", "cup", "Cup", "Cups"],
        validator: /^[0-9.]+$/,
        "US liquid gallon": (val) => parseFloat(val) / 15.772,

        "US liquid quart": (val) => parseFloat(val) / 3.943,

        "US liquid pint": (val) => parseFloat(val) / 1.972,

        "US fluid ounce": (val) => parseFloat(val) * 8.115,

        "US tablespoon": (val) => parseFloat(val) * 16.231,

        "US teaspoon": (val) => parseFloat(val) * 48.692,

        "cubic meter": (val) => parseFloat(val) / 4167,

        "liter": (val) => parseFloat(val) / 4.167,

        "milliliter": (val) => parseFloat(val) * 240,

        "imperial gallon": (val) => parseFloat(val) / 18.942,

        "imperial quart": (val) => parseFloat(val) / 4.736,

        "imperial pint": (val) => parseFloat(val) / 2.368,

        "imperial cup": (val) => parseFloat(val) / 1.184,

        "fluid ounce": (val) => parseFloat(val) * 8.447,

        "imperial tablespoon": (val) => parseFloat(val) * 13.515,

        "imperial teaspoon": (val) => parseFloat(val) * 40.545,

        "cubic foot": (val) => parseFloat(val) / 118,

        "cubic inch": (val) => parseFloat(val) * 14.646

    }, {
        unit: "US fluid ounce",
        type: "Volume",
        abbrev: ["US fluid ounce", "us fluid ounce", "fl oz"],
        validator: /^[0-9.]+$/,
        "US liquid gallon": (val) => parseFloat(val) / 128,

        "US liquid quart": (val) => parseFloat(val) / 32,

        "US liquid pint": (val) => parseFloat(val) / 16,

        "US legal cup": (val) => parseFloat(val) / 8.115,

        "US tablespoon": (val) => parseFloat(val) * 2,

        "US teaspoon": (val) => parseFloat(val) * 6,

        "cubic meter": (val) => parseFloat(val) / 33810,

        "liter": (val) => parseFloat(val) / 33.814,

        "milliliter": (val) => parseFloat(val) * 29.574,

        "imperial gallon": (val) => parseFloat(val) / 153.7,

        "imperial quart": (val) => parseFloat(val) / 38.43,

        "imperial pint": (val) => parseFloat(val) / 19.215,

        "imperial cup": (val) => parseFloat(val) / 9.608,

        "fluid ounce": (val) => parseFloat(val) * 1.041,

        "imperial tablespoon": (val) => parseFloat(val) * 1.665,

        "imperial teaspoon": (val) => parseFloat(val) * 4.996,

        "cubic foot": (val) => parseFloat(val) / 957.5,

        "cubic inch": (val) => parseFloat(val) * 1.805

    }, {
        unit: "US tablespoon",
        type: "Volume",
        abbrev: ["US tablespoon", "us tablespoon", "tbsp"],
        validator: /^[0-9.]+$/,
        "US liquid gallon": (val) => parseFloat(val) / 256,

        "US liquid quart": (val) => parseFloat(val) / 64,

        "US liquid pint": (val) => parseFloat(val) / 32,

        "US legal cup": (val) => parseFloat(val) / 16.231,

        "US fluid ounce": (val) => parseFloat(val) / 2,

        "US teaspoon": (val) => parseFloat(val) * 3,

        "cubic meter": (val) => parseFloat(val) / 67630,

        "liter": (val) => parseFloat(val) / 67.628,

        "milliliter": (val) => parseFloat(val) * 14.787,

        "imperial gallon": (val) => parseFloat(val) / 307.4,

        "imperial quart": (val) => parseFloat(val) / 76.861,

        "imperial pint": (val) => parseFloat(val) / 38.43,

        "imperial cup": (val) => parseFloat(val) / 19.215,

        "fluid ounce": (val) => parseFloat(val) / 1.922,

        "imperial tablespoon": (val) => parseFloat(val) / 1.201,

        "imperial teaspoon": (val) => parseFloat(val) * 2.498,

        "cubic foot": (val) => parseFloat(val) / 1915,

        "cubic inch": (val) => parseFloat(val) / 1.108

    }, {
        unit: "US teaspoon",
        type: "Volume",
        abbrev: ["US teaspoon", "us teaspoon", "teaspoon", "teaspoons", "tsp"],
        validator: /^[0-9.]+$/,
        "US liquid gallon": (val) => parseFloat(val) / 768,

        "US liquid quart": (val) => parseFloat(val) / 192,

        "US liquid pint": (val) => parseFloat(val) / 96,

        "US legal cup": (val) => parseFloat(val) / 48.692,

        "US fluid ounce": (val) => parseFloat(val) / 6,

        "US tablespoon": (val) => parseFloat(val) / 3,

        "cubic meter": (val) => parseFloat(val) / 202900,

        "liter": (val) => parseFloat(val) / 202.9,

        "milliliter": (val) => parseFloat(val) * 4.929,

        "imperial gallon": (val) => parseFloat(val) / 922.3,

        "imperial quart": (val) => parseFloat(val) / 230.6,

        "imperial pint": (val) => parseFloat(val) / 115.3,

        "imperial cup": (val) => parseFloat(val) / 57.646,

        "fluid ounce": (val) => parseFloat(val) / 5.765,

        "imperial tablespoon": (val) => parseFloat(val) / 3.603,

        "imperial teaspoon": (val) => parseFloat(val) / 1.201,

        "cubic foot": (val) => parseFloat(val) / 5745,

        "cubic inch": (val) => parseFloat(val) / 3.325

    }, {
        unit: "cubic meter",
        type: "Volume",
        abbrev: ["cubic meter", "Cubic Meter", "cubic metre", "Cubic Metre", "m3", "m³"],
        validator: /^[0-9.]+$/,
        "US liquid gallon": (val) => parseFloat(val) * 264.2,

        "US liquid quart": (val) => parseFloat(val) * 1057,

        "US liquid pint": (val) => parseFloat(val) * 2113,

        "US legal cup": (val) => parseFloat(val) * 4167,

        "US fluid ounce": (val) => parseFloat(val) * 33810,

        "US tablespoon": (val) => parseFloat(val) * 67630,

        "US teaspoon": (val) => parseFloat(val) * 202900,

        "liter": (val) => parseFloat(val) * 1000,

        "milliliter": (val) => parseFloat(val) * 1000000,

        "imperial gallon": (val) => parseFloat(val) * 220,

        "imperial quart": (val) => parseFloat(val) * 879.9,

        "imperial pint": (val) => parseFloat(val) * 1760,

        "imperial cup": (val) => parseFloat(val) * 3520,

        "fluid ounce": (val) => parseFloat(val) * 35200,

        "imperial tablespoon": (val) => parseFloat(val) * 56310,

        "imperial teaspoon": (val) => parseFloat(val) * 168900,

        "cubic foot": (val) => parseFloat(val) * 35.315,

        "cubic inch": (val) => parseFloat(val) * 61020

    }, {
        unit: "liter",
        type: "Volume",
        abbrev: ["liter", "Liter", "litre", "Litre", "L", "l"],
        validator: /^[0-9.]+$/,
        "US liquid gallon": (val) => parseFloat(val) / 3.785,

        "US liquid quart": (val) => parseFloat(val) * 1.057,

        "US liquid pint": (val) => parseFloat(val) * 2.113,

        "US legal cup": (val) => parseFloat(val) * 4.167,

        "US fluid ounce": (val) => parseFloat(val) * 33.814,

        "US tablespoon": (val) => parseFloat(val) * 67.628,

        "US teaspoon": (val) => parseFloat(val) * 202.9,

        "cubic meter": (val) => parseFloat(val) / 1000,

        "milliliter": (val) => parseFloat(val) * 1000,

        "imperial gallon": (val) => parseFloat(val) / 4.546,

        "imperial quart": (val) => parseFloat(val) / 1.136,

        "imperial pint": (val) => parseFloat(val) * 1.76,

        "imperial cup": (val) => parseFloat(val) * 3.52,

        "fluid ounce": (val) => parseFloat(val) * 35.195,

        "imperial tablespoon": (val) => parseFloat(val) * 56.312,

        "imperial teaspoon": (val) => parseFloat(val) * 168.9,

        "cubic foot": (val) => parseFloat(val) / 28.317,

        "cubic inch": (val) => parseFloat(val) * 61.024

    }, {
        unit: "milliliter",
        type: "Volume",
        abbrev: ["milliliter", "Milliliter", "millilitre", "millilitre", "mL", "ml"],
        validator: /^[0-9.]+$/,
        "US liquid gallon": (val) => parseFloat(val) / 3785,

        "US liquid quart": (val) => parseFloat(val) / 946.4,

        "US liquid pint": (val) => parseFloat(val) / 473.2,

        "US legal cup": (val) => parseFloat(val) / 240,

        "US fluid ounce": (val) => parseFloat(val) / 29.574,

        "US tablespoon": (val) => parseFloat(val) / 14.787,

        "US teaspoon": (val) => parseFloat(val) / 4.929,

        "cubic meter": (val) => parseFloat(val) / 1000000,

        "liter": (val) => parseFloat(val) / 1000,

        "imperial gallon": (val) => parseFloat(val) / 4546,

        "imperial quart": (val) => parseFloat(val) / 1137,

        "imperial pint": (val) => parseFloat(val) / 568.3,

        "imperial cup": (val) => parseFloat(val) / 284.1,

        "fluid ounce": (val) => parseFloat(val) / 28.413,

        "imperial tablespoon": (val) => parseFloat(val) / 17.758,

        "imperial teaspoon": (val) => parseFloat(val) / 5.919,

        "cubic foot": (val) => parseFloat(val) / 28320,

        "cubic inch": (val) => parseFloat(val) / 16.387

    }, {
        unit: "imperial gallon",
        type: "Volume",
        abbrev: ["imperial gallon", "Imperial gallon", "dm"],
        validator: /^[0-9.]+$/,
        "US liquid gallon": (val) => parseFloat(val) * 1.201,

        "US liquid quart": (val) => parseFloat(val) * 4.804,

        "US liquid pint": (val) => parseFloat(val) * 9.608,

        "US legal cup": (val) => parseFloat(val) * 18.942,

        "US fluid ounce": (val) => parseFloat(val) * 153.7,

        "US tablespoon": (val) => parseFloat(val) * 307.4,

        "US teaspoon": (val) => parseFloat(val) * 922.3,

        "cubic meter": (val) => parseFloat(val) / 220,

        "liter": (val) => parseFloat(val) * 4.546,

        "milliliter": (val) => parseFloat(val) * 4546,

        "imperial quart": (val) => parseFloat(val) * 4,

        "imperial pint": (val) => parseFloat(val) * 8,

        "imperial cup": (val) => parseFloat(val) * 16,

        "fluid ounce": (val) => parseFloat(val) * 160,

        "imperial tablespoon": (val) => parseFloat(val) * 256,

        "imperial teaspoon": (val) => parseFloat(val) * 768,

        "cubic foot": (val) => parseFloat(val) / 6.229,

        "cubic inch": (val) => parseFloat(val) * 277.4

    }, {
        unit: "imperial quart",
        type: "Volume",
        abbrev: ["imperial quart", "Imperial quart"],
        validator: /^[0-9.]+$/,
        "US liquid gallon": (val) => parseFloat(val) / 3.331,

        "US liquid quart": (val) => parseFloat(val) * 1.201,

        "US liquid pint": (val) => parseFloat(val) * 2.402,

        "US legal cup": (val) => parseFloat(val) * 4.736,

        "US fluid ounce": (val) => parseFloat(val) * 38.43,

        "US tablespoon": (val) => parseFloat(val) * 76.861,

        "US teaspoon": (val) => parseFloat(val) * 230.6,

        "cubic meter": (val) => parseFloat(val) / 879.9,

        "liter": (val) => parseFloat(val) * 1.137,

        "milliliter": (val) => parseFloat(val) * 1137,

        "imperial gallon": (val) => parseFloat(val) / 4,

        "imperial pint": (val) => parseFloat(val) * 2,

        "imperial cup": (val) => parseFloat(val) * 4,

        "fluid ounce": (val) => parseFloat(val) * 40,

        "imperial tablespoon": (val) => parseFloat(val) * 64,

        "imperial teaspoon": (val) => parseFloat(val) * 192,

        "cubic foot": (val) => parseFloat(val) / 24.915,

        "cubic inch": (val) => parseFloat(val) * 69.355

    }, {
        unit: "imperial pint",
        type: "Volume",
        abbrev: ["imperial pint", "Imperial pint"],
        validator: /^[0-9.]+$/,
        "US liquid gallon": (val) => parseFloat(val) / 6.661,

        "US liquid quart": (val) => parseFloat(val) * 1.665,

        "US liquid pint": (val) => parseFloat(val) * 1.201,

        "US legal cup": (val) => parseFloat(val) * 2.368,

        "US fluid ounce": (val) => parseFloat(val) * 19.215,

        "US tablespoon": (val) => parseFloat(val) * 38.43,

        "US teaspoon": (val) => parseFloat(val) * 115.3,

        "cubic meter": (val) => parseFloat(val) / 1760,

        "liter": (val) => parseFloat(val) / 1.76,

        "milliliter": (val) => parseFloat(val) * 568.3,

        "imperial gallon": (val) => parseFloat(val) / 8,

        "imperial quart": (val) => parseFloat(val) / 2,

        "imperial cup": (val) => parseFloat(val) * 2,

        "fluid ounce": (val) => parseFloat(val) * 20,

        "imperial tablespoon": (val) => parseFloat(val) * 32,

        "imperial teaspoon": (val) => parseFloat(val) * 96,

        "cubic foot": (val) => parseFloat(val) / 49.831,

        "cubic inch": (val) => parseFloat(val) * 34.677

    }, {
        unit: "imperial cup",
        type: "Volume",
        abbrev: ["imperial cup", "Imperial cup"],
        validator: /^[0-9.]+$/,
        "US liquid gallon": (val) => parseFloat(val) / 13.323,

        "US liquid quart": (val) => parseFloat(val) / 3.331,

        "US liquid pint": (val) => parseFloat(val) / 1.665,

        "US legal cup": (val) => parseFloat(val) * 1.184,

        "US fluid ounce": (val) => parseFloat(val) * 9.608,

        "US tablespoon": (val) => parseFloat(val) * 19.215,

        "US teaspoon": (val) => parseFloat(val) * 57.646,

        "cubic meter": (val) => parseFloat(val) / 3520,

        "liter": (val) => parseFloat(val) / 3.52,

        "milliliter": (val) => parseFloat(val) * 284.1,

        "imperial gallon": (val) => parseFloat(val) / 16,

        "imperial quart": (val) => parseFloat(val) / 4,

        "imperial pint": (val) => parseFloat(val) / 2,

        "fluid ounce": (val) => parseFloat(val) * 10,

        "imperial tablespoon": (val) => parseFloat(val) * 16,

        "imperial teaspoon": (val) => parseFloat(val) * 48,

        "cubic foot": (val) => parseFloat(val) / 99.661,

        "cubic inch": (val) => parseFloat(val) * 17339

    }, {
        unit: "fluid ounce",
        type: "Volume",
        abbrev: ["fluid ounce", "Fluid ounce"],
        validator: /^[0-9.]+$/,
        "US liquid gallon": (val) => parseFloat(val) / 133.2,

        "US liquid quart": (val) => parseFloat(val) / 33.307,

        "US liquid pint": (val) => parseFloat(val) / 16.654,

        "US legal cup": (val) => parseFloat(val) / 8.447,

        "US fluid ounce": (val) => parseFloat(val) / 1.041,

        "US tablespoon": (val) => parseFloat(val) * 1.922,

        "US teaspoon": (val) => parseFloat(val) * 5.765,

        "cubic meter": (val) => parseFloat(val) / 35200,

        "liter": (val) => parseFloat(val) / 35.195,

        "milliliter": (val) => parseFloat(val) * 28.413,

        "imperial gallon": (val) => parseFloat(val) / 160,

        "imperial quart": (val) => parseFloat(val) / 40,

        "imperial pint": (val) => parseFloat(val) / 20,

        "imperial cup": (val) => parseFloat(val) / 10,

        "imperial tablespoon": (val) => parseFloat(val) * 1.6,

        "imperial teaspoon": (val) => parseFloat(val) * 4.8,

        "cubic foot": (val) => parseFloat(val) / 996.6,

        "cubic inch": (val) => parseFloat(val) * 1.734

    }, {
        unit: "imperial tablespoon",
        type: "Volume",
        abbrev: ["imperial tablespoon", "Imperial tablespoon"],
        validator: /^[0-9.]+$/,
        "US liquid gallon": (val) => parseFloat(val) / 213.2,

        "US liquid quart": (val) => parseFloat(val) / 53.291,

        "US liquid pint": (val) => parseFloat(val) / 26.646,

        "US legal cup": (val) => parseFloat(val) / 13.515,

        "US fluid ounce": (val) => parseFloat(val) / 1.665,

        "US tablespoon": (val) => parseFloat(val) * 1.201,

        "US teaspoon": (val) => parseFloat(val) * 3.603,

        "cubic meter": (val) => parseFloat(val) / 56310,

        "liter": (val) => parseFloat(val) / 56.312,

        "milliliter": (val) => parseFloat(val) * 17.758,

        "imperial gallon": (val) => parseFloat(val) / 256,

        "imperial quart": (val) => parseFloat(val) / 64,

        "imperial pint": (val) => parseFloat(val) / 32,

        "imperial cup": (val) => parseFloat(val) / 16,

        "fluid ounce": (val) => parseFloat(val) / 1.6,

        "imperial teaspoon": (val) => parseFloat(val) * 3,

        "cubic foot": (val) => parseFloat(val) / 1595,

        "cubic inch": (val) => parseFloat(val) * 1.084

    }, {
        unit: "imperial teaspoon",
        type: "Volume",
        abbrev: ["imperial teaspoon", "Imperial teaspoon"],
        validator: /^[0-9.]+$/,
        "US liquid gallon": (val) => parseFloat(val) / 639.5,

        "US liquid quart": (val) => parseFloat(val) / 159.9,

        "US liquid pint": (val) => parseFloat(val) / 79.937,

        "US legal cup": (val) => parseFloat(val) / 40.545,

        "US fluid ounce": (val) => parseFloat(val) / 4.996,

        "US tablespoon": (val) => parseFloat(val) / 2.498,

        "US teaspoon": (val) => parseFloat(val) * 1.201,

        "cubic meter": (val) => parseFloat(val) / 168900,

        "liter": (val) => parseFloat(val) / 168.9,

        "milliliter": (val) => parseFloat(val) * 5.919,

        "imperial gallon": (val) => parseFloat(val) / 768,

        "imperial quart": (val) => parseFloat(val) / 192,

        "imperial pint": (val) => parseFloat(val) / 96,

        "imperial cup": (val) => parseFloat(val) / 48,

        "fluid ounce": (val) => parseFloat(val) / 4.8,

        "imperial tablespoon": (val) => parseFloat(val) / 3,

        "cubic foot": (val) => parseFloat(val) / 4784,

        "cubic inch": (val) => parseFloat(val) / 2.768

    }, {
        unit: "cubic foot",
        type: "Volume",
        abbrev: ["cubic foot", "Cubic foot", "cubic feet", "Cubic feet", "ft³", "cu ft"],
        validator: /^[0-9.]+$/,
        "US liquid gallon": (val) => parseFloat(val) * 7.481,

        "US liquid quart": (val) => parseFloat(val) * 29.922,

        "US liquid pint": (val) => parseFloat(val) * 59.844,

        "US legal cup": (val) => parseFloat(val) * 118,

        "US fluid ounce": (val) => parseFloat(val) * 957.5,

        "US tablespoon": (val) => parseFloat(val) * 1915,

        "US teaspoon": (val) => parseFloat(val) * 5745,

        "cubic meter": (val) => parseFloat(val) / 35.315,

        "liter": (val) => parseFloat(val) * 28.317,

        "milliliter": (val) => parseFloat(val) * 28316,

        "imperial gallon": (val) => parseFloat(val) * 6.229,

        "imperial quart": (val) => parseFloat(val) * 24.915,

        "imperial pint": (val) => parseFloat(val) * 49.831,

        "imperial cup": (val) => parseFloat(val) * 99.661,

        "fluid ounce": (val) => parseFloat(val) * 996.6,

        "imperial tablespoon": (val) => parseFloat(val) * 1595,

        "imperial teaspoon": (val) => parseFloat(val) * 4784,

        "cubic inch": (val) => parseFloat(val) * 1728

    }, {
        unit: "cubic inch",
        type: "Volume",
        abbrev: ["cubic inch", "Cubic inch", "cubic inches", "Cubic inches", "in³", "cu in"],
        validator: /^[0-9.]+$/,
        "US liquid gallon": (val) => parseFloat(val) / 231,

        "US liquid quart": (val) => parseFloat(val) / 57.75,

        "US liquid pint": (val) => parseFloat(val) / 28.875,

        "US legal cup": (val) => parseFloat(val) / 14.646,

        "US fluid ounce": (val) => parseFloat(val) / 1.805,

        "US tablespoon": (val) => parseFloat(val) * 1.108,

        "US teaspoon": (val) => parseFloat(val) * 3.325,

        "cubic meter": (val) => parseFloat(val) / 61020,

        "liter": (val) => parseFloat(val) / 61.024,

        "milliliter": (val) => parseFloat(val) * 16.387,

        "imperial gallon": (val) => parseFloat(val) / 277.4,

        "imperial quart": (val) => parseFloat(val) / 69.355,

        "imperial pint": (val) => parseFloat(val) / 34.677,

        "imperial cup": (val) => parseFloat(val) / 17.339,

        "fluid ounce": (val) => parseFloat(val) / 1.734,

        "imperial tablespoon": (val) => parseFloat(val) / 1.084,

        "imperial teaspoon": (val) => parseFloat(val) * 2.768,

        "cubic foot": (val) => parseFloat(val) / 1728

    }
    , {
        unit: "hertz",
        type: "Frequency",
        abbrev: ["hertz", "Hertz", "Hz"],
        validator: /^[0-9.]+$/,
        "kilohertz": (val) => parseFloat(val) / 1000,

        "megahertz": (val) => parseFloat(val) / 1000000,

        "gigahertz": (val) => parseFloat(val) / 1000000000
    }
    , {
        unit: "kilohertz",
        type: "Frequency",
        abbrev: ["kilohertz", "Kilohertz", "kHz", "KHz"],
        validator: /^[0-9.]+$/,

        "hertz": (val) => parseFloat(val) * 1000,

        "megahertz": (val) => parseFloat(val) / 1000,

        "gigahertz": (val) => parseFloat(val) / 1000000
    }
    , {
        unit: "megahertz",
        type: "Frequency",
        abbrev: ["megahertz", "Megahertz", "mHz", "MHz"],
        validator: /^[0-9.]+$/,
        "hertz": (val) => parseFloat(val) * 1000000,

        "kilohertz": (val) => parseFloat(val) * 1000,

        "gigahertz": (val) => parseFloat(val) / 1000
    }
    , {
        unit: "gigahertz",
        type: "Frequency",
        abbrev: ["gigahertz", "Gigahertz", "gHz", "GHz"],
        validator: /^[0-9.]+$/,
        "hertz": (val) => parseFloat(val) * 1000000000,

        "kilohertz": (val) => parseFloat(val) * 1000000,

        "megahertz": (val) => parseFloat(val) * 1000
    }, {
        unit: "joule",
        type: "Energy",
        abbrev:
            ["joule", "Joule", "kg·m²·sˉ²", "J", "kg·m2·s-2", "N·m", "Pa·m³", "W·s", "C·V"],
        validator: /^[0-9.]+$/,

        "kilojoule": (val) => parseFloat(val) / 1000,

        "gram calorie": (val) => parseFloat(val) / 4.184,

        "kilocalorie": (val) => parseFloat(val) / 4184,

        "watt hour": (val) => parseFloat(val) / 3600,

        "kilowatt hour": (val) => parseFloat(val) / 3600000,

        "electronvolt": (val) => parseFloat(val) * 6242000000000000000,

        "british thermal unit": (val) => parseFloat(val) / 1055,

        "US therm": (val) => parseFloat(val) / 105500000,

        "foot-pound": (val) => parseFloat(val) / 1.356,

    }
    , {
        unit: "kilojoule",
        type: "Energy",
        abbrev: ["kilojoule", "Kilojoule", "kJ"],
        validator: /^[0-9.]+$/,

        "joule": (val) => parseFloat(val) * 1000,

        "gram calorie": (val) => parseFloat(val) * 239,

        "kilocalorie": (val) => parseFloat(val) / 4.184,

        "watt hour": (val) => parseFloat(val) / 3.6,

        "kilowatt hour": (val) => parseFloat(val) / 3600,

        "electronvolt": (val) => parseFloat(val) * 6242000000000000000000,

        "british thermal unit": (val) => parseFloat(val) / 1.055,

        "US therm": (val) => parseFloat(val) / 105500,

        "foot-pound": (val) => parseFloat(val) * 737.6,

    }
    , {
        unit: "gram calorie",
        type: "Energy",
        abbrev: ["gram calorie", "calories", "Calories", "Calorie", "cal"],
        validator: /^[0-9.]+$/,

        "joule": (val) => parseFloat(val) * 4.184,

        "kilojoule": (val) => parseFloat(val) / 239,

        "kilocalorie": (val) => parseFloat(val) / 1000,

        "watt hour": (val) => parseFloat(val) / 860.4,

        "kilowatt hour": (val) => parseFloat(val) / 860400,

        "electronvolt": (val) => parseFloat(val) * 26110000000000000000,

        "british thermal unit": (val) => parseFloat(val) / 252.2,

        "US therm": (val) => parseFloat(val) / 25210000,

        "foot-pound": (val) => parseFloat(val) * 3.086,

    }
    , {
        unit: "kilocalorie",
        type: "Energy",
        abbrev: ["kilocalorie", "kilocalories", "Kilocalories", "kcal"],
        validator: /^[0-9.]+$/,

        "joule": (val) => parseFloat(val) * 4184,

        "kilojoule": (val) => parseFloat(val) * 4.184,

        "gram calorie": (val) => parseFloat(val) * 1000,

        "watt hour": (val) => parseFloat(val) * 1.162,

        "kilowatt hour": (val) => parseFloat(val) / 860.4,

        "electronvolt": (val) => parseFloat(val) * 2.6110000000000000000000,

        "british thermal unit": (val) => parseFloat(val) * 3.966,

        "US therm": (val) => parseFloat(val) / 25210,

        "foot-pound": (val) => parseFloat(val) * 3086,

    }
    , {
        unit: "watt hour",
        type: "Energy",
        abbrev: ["watt hour", "Watt hour", "W·h", "Wh"],
        validator: /^[0-9.]+$/,

        "joule": (val) => parseFloat(val) * 3600,

        "kilojoule": (val) => parseFloat(val) * 3.6,

        "gram calorie": (val) => parseFloat(val) * 860.4,

        "kilocalorie": (val) => parseFloat(val) / 1.162,

        "kilowatt hour": (val) => parseFloat(val) / 1000,

        "electronvolt": (val) => parseFloat(val) * 22470000000000000000000,

        "british thermal unit": (val) => parseFloat(val) * 3.412,

        "US therm": (val) => parseFloat(val) / 29300,

        "foot-pound": (val) => parseFloat(val) * 2655,

    }
    , {
        unit: "kilowatt hour",
        type: "Energy",
        abbrev: ["kilowatt hour", "Kilowatt hour", "kW·h", "kWh"],
        validator: /^[0-9.]+$/,

        "joule": (val) => parseFloat(val) * 3600000,

        "kilojoule": (val) => parseFloat(val) * 3600,

        "gram calorie": (val) => parseFloat(val) * 860400,

        "kilocalorie": (val) => parseFloat(val) * 860.4,

        "watt hour": (val) => parseFloat(val) * 1000,

        "electronvolt": (val) => parseFloat(val) * 22470000000000000000000000,

        "british thermal unit": (val) => parseFloat(val) * 3412,

        "US therm": (val) => parseFloat(val) / 29.3,

        "foot-pound": (val) => parseFloat(val) * 2655000,

    }
    , {
        unit: "electronvolt",
        type: "Energy",
        abbrev: ["electronvolt", "electron-volt", "electron volt", "eV"],
        validator: /^[0-9.]+$/,

        "joule": (val) => parseFloat(val) / 6242000000000000000,

        "kilojoule": (val) => parseFloat(val) / 6242000000000000000000,

        "gram calorie": (val) => parseFloat(val) / 26110000000000000000,

        "kilocalorie": (val) => parseFloat(val) / 26110000000000000000000,

        "watt hour": (val) => parseFloat(val) / 22470000000000000000000,

        "kilowatt hour": (val) => parseFloat(val) / 22470000000000000000000000,

        "british thermal unit": (val) => parseFloat(val) / 6585000000000000000000,

        "US therm": (val) => parseFloat(val) / 658400000000000000000000000,

        "foot-pound": (val) => parseFloat(val) / 8462000000000000000,

    }
    , {
        unit: "british thermal unit",
        type: "Energy",
        abbrev: ["british thermal unit", "BTU", "btu", "British Thermal Unit"],
        validator: /^[0-9.]+$/,

        "joule": (val) => parseFloat(val) * 1055,

        "kilojoule": (val) => parseFloat(val) * 1.055,

        "gram calorie": (val) => parseFloat(val) * 252.2,

        "kilocalorie": (val) => parseFloat(val) / 3.966,

        "watt hour": (val) => parseFloat(val) / 3.412,

        "kilowatt hour": (val) => parseFloat(val) / 3412,

        "electronvolt": (val) => parseFloat(val) * 6585000000000000000000,

        "US therm": (val) => parseFloat(val) / 99980,

        "foot-pound": (val) => parseFloat(val) * 778.2,

    }
    , {
        unit: "US therm",
        type: "Energy",
        abbrev: ["US therm", "Therm", "thm"],
        validator: /^[0-9.]+$/,

        "joule": (val) => parseFloat(val) * 105500000,

        "kilojoule": (val) => parseFloat(val) * 105500,

        "gram calorie": (val) => parseFloat(val) * 25210000,

        "kilocalorie": (val) => parseFloat(val) * 25210,

        "watt hour": (val) => parseFloat(val) * 29300,

        "kilowatt hour": (val) => parseFloat(val) * 29.3,

        "electronvolt": (val) => parseFloat(val) * 658400000000000000000000000,

        "british thermal unit": (val) => parseFloat(val) * 99980,

        "foot-pound": (val) => parseFloat(val) * 77800000,

    }
    , {
        unit: "foot-pound",
        type: "Energy",
        abbrev: ["foot-pound", "ft.lbf", "ft·lbf", "Foot-pound"],
        validator: /^[0-9.]+$/,

        "joule": (val) => parseFloat(val) * 1.356,

        "kilojoule": (val) => parseFloat(val) / 737.6,

        "gram calorie": (val) => parseFloat(val) / 3.086,

        "kilocalorie": (val) => parseFloat(val) / 3086,

        "watt hour": (val) => parseFloat(val) / 2655,

        "kilowatt hour": (val) => parseFloat(val) / 2655000,

        "electronvolt": (val) => parseFloat(val) * 8462000000000000000,

        "british thermal unit": (val) => parseFloat(val) / 778.2,

        "US therm": (val) => parseFloat(val) / 77800000,

    }
];