var units = [
    {

        
        unit: "char",
        type: "ASCII",
        abbrev: /^/,
        validator: /[\s\S]+/,
        "binary": function (val) {
            return val.split('').map(function (char) {
                return char.charCodeAt(0).toString(2);
            }).join(' ');
        },
        "octal": function (val) {
            return val.split('').map(function (char) {
                return char.charCodeAt(0).toString(8);
            }).join(' ');
        },
        "decimal": function (val) {
            return val.split('').map(function (char) {
                return char.charCodeAt(0).toString(10);
            }).join(' ');
        },
        "hexadecimal": function (val) {
            return val.split('').map(function (char) {
                return char.charCodeAt(0).toString(16);
            }).join(' ');
        }

    },
    {
        unit: "binary",
        type: "ASCII",
        abbrev: /^/,
        validator: /^[0-1\s]+$/,
        "char": function (val) {
            if (val.split(' ').length == 1)
                return String.fromCharCode(parseInt(val, 2));

            return val.split(' ').map(elem => String.fromCharCode(parseInt(elem, 2))).join("");
        },
        "octal": function (val) {
            if (val.split(' ').length == 1)
                return parseInt(val, 2).toString(8);
            return val.split(' ').map(function (char) {
                return parseInt(char, 2).toString(8);
            }).join(' ');
        },
        "decimal": function (val) {
            if (val.split(' ').length == 1)
                return parseInt(val, 2).toString(10);
            return val.split(' ').map(function (char) {
                return parseInt(char, 2).toString(10);
            }).join(' ');
        },
        "hexadecimal": function (val) {
            if (val.split(' ').length == 1)
                return parseInt(val, 2).toString(16);
            return val.split(' ').map(function (char) {
                return parseInt(char, 2).toString(16);
            }).join(' ');
        }
    },
    {
        unit: "octal",
        type: "ASCII",
        abbrev: /^/,
        validator: /^[0-7\s]+$/,
        "char": function (val) {
            if (val.split(' ').length == 1)
                return String.fromCharCode(parseInt(val, 8));
            return val.split(' ').map(elem => String.fromCharCode(parseInt(elem, 8))).join("");
        },
        "binary": function (val) {
            if (val.split(' ').length == 1)
                return parseInt(val, 8).toString(2);
            return val.split(' ').map(function (char) {
                return parseInt(char, 8).toString(2);
            }).join(' ');
        },
        "decimal": function (val) {
            if (val.split(' ').length == 1)
                return parseInt(val, 8).toString(10);
            return val.split(' ').map(function (char) {
                return parseInt(char, 8).toString(10);
            }).join(' ');
        },
        "hexadecimal": function (val) {
            if (val.split(' ').length == 1)
                return parseInt(val, 8).toString(16);
            return val.split(' ').map(function (char) {
                return parseInt(char, 8).toString(16);
            }).join(' ');
        }
    },
    {
        unit: "decimal",
        type: "ASCII",
        abbrev: /^/,
        validator: /^[0-9\s]+$/,
        "char": function (val) {
            if (val.split(' ').length == 1)
                return String.fromCharCode(parseInt(val, 10));
            return val.split(' ').map(elem => String.fromCharCode(parseInt(elem, 10))).join("");
        },
        "octal": function (val) {
            if (val.split(' ').length == 1)
                return parseInt(val, 10).toString(8);
            return val.split(' ').map(function (char) {
                return parseInt(char, 10).toString(8);
            }).join(' ');
        },
        "binary": function (val) {
            if (val.split(' ').length == 1)
                return parseInt(val, 10).toString(2);
            return val.split(' ').map(function (char) {
                return parseInt(char, 10).toString(2);
            }).join(' ');
        },
        "hexadecimal": function (val) {
            if (val.split(' ').length == 1)
                return parseInt(val, 10).toString(16);
            return val.split(' ').map(function (char) {
                return parseInt(char, 10).toString(16);
            }).join(' ');
        }
    },
    {
        unit: "hexadecimal",
        type: "ASCII",
        abbrev: /^/,
        validator: /^[0-9A-F\s]+$/i,
        "char": function (val) {
            if (val.split(' ').length == 1)
                return String.fromCharCode(parseInt(val, 16));
            return val.split(' ').map(elem => String.fromCharCode(parseInt(elem, 16))).join("");
        },
        "octal": function (val) {
            if (val.split(' ').length == 1)
                return parseInt(val, 16).toString(8);
            return val.split(' ').map(function (char) {
                return parseInt(char, 16).toString(8);
            }).join(' ');
        },
        "decimal": function (val) {
            if (val.split(' ').length == 1)
                return parseInt(val, 16).toString(10);
            return val.split(' ').map(function (char) {
                return parseInt(char, 16).toString(10);
            }).join(' ');
        },
        "binary": function (val) {
            if (val.split(' ').length == 1)
                return parseInt(val, 16).toString(2);
            return val.split(' ').map(function (char) {
                return parseInt(char, 16).toString(2);
            }).join(' ');
        }
    },
    {
        unit: "centimeters",
        type: "length",
        abbrev: /cm|centimetre|centimetres|centimeter|centimeters/i,
        validator: /^[0-9.]+$/,
        "millimeters": function (val) {
            return parseFloat(val) * 10;
        },
        "kilometers": function (val) {
            return parseFloat(val) / 100000;
        },
        "meter": function (val) {
            return parseFloat(val) / 100;
        },
        "micrometer": function (val) {
            return parseFloat(val) * 10000;
        },
        "nanometer": function (val) {
            return parseFloat(val) * 10000000;
        },
        "miles": function (val) {
            return parseFloat(val) / 160934;
        },
        "yard": function (val) {
            return parseFloat(val) / 91.44;
        },
        "feet": function (val) {
            return parseFloat(val) / 30.48;
        },
        "inch": function (val) {
            return parseFloat(val) / 2.54;
        },
        "nautical miles": function (val) {
            return parseFloat(val) / 185200;
        }
    },
    {
        unit: "millimeters",
        type: "length",
        abbrev: /mm|millimetre|millimetres|millimeter|millimeters/i,
        validator: /^[0-9.]+$/,
        "centimeters": function (val) {
            return parseFloat(val) / 10;
        },
        "kilometers": function (val) {
            return parseFloat(val) / 1000000;
        },
        "meter": function (val) {
            return parseFloat(val) / 1000;
        },
        "micrometer": function (val) {
            return parseFloat(val) * 1000;
        },
        "nanometer": function (val) {
            return parseFloat(val) * 1000000;
        },
        "miles": function (val) {
            return parseFloat(val) / 1609340;
        },
        "yard": function (val) {
            return parseFloat(val) / 914;
        },
        "feet": function (val) {
            return parseFloat(val) / 305;
        },
        "inch": function (val) {
            return parseFloat(val) / 25.4;
        },
        "nautical miles": function (val) {
            return parseFloat(val) / 1852000000;
        }
    }, {
        unit: "nanometer",
        type: "length",
        abbrev: /nm|nanometre|nanometres|nanometer|nanometers/i,
        validator: /^[0-9.]+$/,
        "centimeters": function (val) {
            return parseFloat(val) / 10000000;
        },
        "kilometers": function (val) {
            return parseFloat(val) / 1000000000000;
        },
        "meter": function (val) {
            return parseFloat(val) / 1000000000;
        },
        "micrometer": function (val) {
            return parseFloat(val) / 1000;
        },
        "millimeters": function (val) {
            return parseFloat(val) / 1000000;
        },
        "miles": function (val) {
            return parseFloat(val) / 1609340000000;
        },
        "yard": function (val) {
            return parseFloat(val) / 914400000;
        },
        "feet": function (val) {
            return parseFloat(val) / 304800000;
        },
        "inch": function (val) {
            return parseFloat(val) / 25400000;
        },
        "nautical miles": function (val) {
            return parseFloat(val) / 1852000000000;
        }
    }, {
        unit: "meter",
        type: "length",
        abbrev: /m|metre|metres|meter|meters/i,
        validator: /^[0-9.]+$/,
        "millimeters": function (val) {
            return parseFloat(val) * 1000;
        },
        "kilometers": function (val) {
            return parseFloat(val) / 1000;
        },
        "centimeters": function (val) {
            return parseFloat(val) * 100;
        },
        "micrometer": function (val) {
            return parseFloat(val) * 1000000;
        },
        "nanometer": function (val) {
            return parseFloat(val) * 1000000000;
        },
        "miles": function (val) {
            return parseFloat(val) / 1609;
        },
        "yard": function (val) {
            return parseFloat(val) / 1.094;
        },
        "feet": function (val) {
            return parseFloat(val) / 3.281;
        },
        "inch": function (val) {
            return parseFloat(val) * 39.37;
        },
        "nautical miles": function (val) {
            return parseFloat(val) / 1852;
        }
    }, {
        unit: "kilometers",
        type: "length",
        abbrev: /km|kilometre|kilometres|kilometer|kilometers/i,
        validator: /^[0-9.]+$/,
        "millimeters": function (val) {
            return parseFloat(val) * 1000000;
        },
        "meter": function (val) {
            return parseFloat(val) * 1000;
        },
        "centimeters": function (val) {
            return parseFloat(val) * 100000;
        },
        "micrometer": function (val) {
            return parseFloat(val) * 1000000000;
        },
        "nanometer": function (val) {
            return parseFloat(val) * 1000000000000;
        },
        "miles": function (val) {
            return parseFloat(val) / 1.609;
        },
        "yard": function (val) {
            return parseFloat(val) * 1094;
        },
        "feet": function (val) {
            return parseFloat(val) * 3281;
        },
        "inch": function (val) {
            return parseFloat(val) * 39370;
        },
        "nautical miles": function (val) {
            return parseFloat(val) / 1.852;
        }
    }, {
        unit: "micrometer",
        type: "length",
        abbrev: /micrometre|micrometres|micrometer|micrometers/i,
        validator: /^[0-9.]+$/,
        "millimeters": function (val) {
            return parseFloat(val) / 1000;
        },
        "kilometers": function (val) {
            return parseFloat(val) / 1000000000;
        },
        "meter": function (val) {
            return parseFloat(val) / 1000000;
        },
        "centimeters": function (val) {
            return parseFloat(val) / 10000;
        },
        "nanometer": function (val) {
            return parseFloat(val) * 1000;
        },
        "miles": function (val) {
            return parseFloat(val) / 1609000000;
        },
        "yard": function (val) {
            return parseFloat(val) / 914400;
        },
        "feet": function (val) {
            return parseFloat(val) / 304800;
        },
        "inch": function (val) {
            return parseFloat(val) / 25400;
        },
        "nautical miles": function (val) {
            return parseFloat(val) / 1852000000;
        }
    }, {
        unit: "miles",
        type: "length",
        abbrev: /mile|miles/i,
        validator: /^[0-9.]+$/,
        "millimeters": function (val) {
            return parseFloat(val) * 1609000;
        },
        "kilometers": function (val) {
            return parseFloat(val) * 1.609;
        },
        "meter": function (val) {
            return parseFloat(val) * 1609;
        },
        "micrometer": function (val) {
            return parseFloat(val) * 1609000000;
        },
        "nanometer": function (val) {
            return parseFloat(val) * 1609000000000;
        },
        "centimeters": function (val) {
            return parseFloat(val) * 160934;
        },
        "yard": function (val) {
            return parseFloat(val) * 1760;
        },
        "feet": function (val) {
            return parseFloat(val) * 5280;
        },
        "inch": function (val) {
            return parseFloat(val) * 63360;
        },
        "nautical miles": function (val) {
            return parseFloat(val) / 1.151;
        }
    }, {
        unit: "yard",
        type: "length",
        abbrev: /yard|yards/i,
        validator: /^[0-9.]+$/,
        "millimeters": function (val) {
            return parseFloat(val) * 914;
        },
        "kilometers": function (val) {
            return parseFloat(val) / 1094;
        },
        "centimeters": function (val) {
            return parseFloat(val) * 91.44;
        },
        "micrometer": function (val) {
            return parseFloat(val) * 914400;
        },
        "nanometer": function (val) {
            return parseFloat(val) * 914400000;
        },
        "miles": function (val) {
            return parseFloat(val) / 1760;
        },
        "meter": function (val) {
            return parseFloat(val) / 1.094;
        },
        "feet": function (val) {
            return parseFloat(val) * 3;
        },
        "inch": function (val) {
            return parseFloat(val) * 36;
        },
        "nautical miles": function (val) {
            return parseFloat(val) / 2025;
        }
    }, {
        unit: "feet",
        type: "length",
        abbrev: /foot|ft|feet/i,
        validator: /^[0-9.]+$/,
        "millimeters": function (val) {
            return parseFloat(val) * 305;
        },
        "kilometers": function (val) {
            return parseFloat(val) / 3281;
        },
        "centimeters": function (val) {
            return parseFloat(val) * 30.48;
        },
        "micrometer": function (val) {
            return parseFloat(val) * 304800;
        },
        "nanometer": function (val) {
            return parseFloat(val) * 304800000;
        },
        "miles": function (val) {
            return parseFloat(val) / 5280;
        },
        "yard": function (val) {
            return parseFloat(val) / 3;
        },
        "meter": function (val) {
            return parseFloat(val) / 3.281;
        },
        "inch": function (val) {
            return parseFloat(val) / 12;
        },
        "nautical miles": function (val) {
            return parseFloat(val) / 6076;
        }
    }, {
        unit: "inch",
        type: "length",
        abbrev: /inch|inches|in/i,
        validator: /^[0-9.]+$/,
        "millimeters": function (val) {
            return parseFloat(val) * 25.4;
        },
        "kilometers": function (val) {
            return parseFloat(val) / 39370;
        },
        "centimeters": function (val) {
            return parseFloat(val) * 2.54;
        },
        "micrometer": function (val) {
            return parseFloat(val) * 25400;
        },
        "nanometer": function (val) {
            return parseFloat(val) * 25400000;
        },
        "miles": function (val) {
            return parseFloat(val) / 63360;
        },
        "yard": function (val) {
            return parseFloat(val) / 36;
        },
        "feet": function (val) {
            return parseFloat(val) / 12;
        },
        "meter": function (val) {
            return parseFloat(val) / 39.37;
        },
        "nautical miles": function (val) {
            return parseFloat(val) / 72913;
        }
    }, {
        unit: "nautical miles",
        type: "length",
        abbrev: /nautical mile/i,
        validator: /^[0-9.]+$/,
        "millimeters": function (val) {
            return parseFloat(val) * 1852000;
        },
        "kilometers": function (val) {
            return parseFloat(val) * 1.852;
        },
        "centimeters": function (val) {
            return parseFloat(val) * 185200;
        },
        "micrometer": function (val) {
            return parseFloat(val) * 1852000000;
        },
        "nanometer": function (val) {
            return parseFloat(val) * 1852000000000;
        },
        "miles": function (val) {
            return parseFloat(val) * 1.151;
        },
        "yard": function (val) {
            return parseFloat(val) * 2025;
        },
        "feet": function (val) {
            return parseFloat(val) * 6076;
        },
        "inch": function (val) {
            return parseFloat(val) * 72913;
        },
        "meter": function (val) {
            return parseFloat(val) * 1852;
        }
    }, {
        unit: "square kilometers",
        type: "area",
        abbrev: /square km|square kilometre|square kilometer|square kilometres|square kilometers|km2|km²/i,
        validator: /^[0-9.]+$/,
        "square meter": function (val) {
            return parseFloat(val) * 1000000;
        },
        "square miles": function (val) {
            return parseFloat(val) / 2.59;
        },
        "square yard": function (val) {
            return parseFloat(val) * 1196000;
        },
        "square feet": function (val) {
            return parseFloat(val) * 10760000;
        },
        "square inch": function (val) {
            return parseFloat(val) * 1550000000;
        },
        "hectare": function (val) {
            return parseFloat(val) * 100;
        },
        "acre": function (val) {
            return parseFloat(val) * 247.105;
        }
    }, {
        unit: "square meter",
        type: "area",
        abbrev: /square m|square metre|square meter|square metres|square meters|m2|m²/i,
        validator: /^[0-9.]+$/,
        "square kilometers": function (val) {
            return parseFloat(val) / 1000000;
        },
        "square miles": function (val) {
            return parseFloat(val) / 2590000;
        },
        "square yard": function (val) {
            return parseFloat(val) * 1.196;
        },
        "square feet": function (val) {
            return parseFloat(val) * 10.764;
        },
        "square inch": function (val) {
            return parseFloat(val) * 1550;
        },
        "hectare": function (val) {
            return parseFloat(val) * 10000;
        },
        "acre": function (val) {
            return parseFloat(val) / 4047;
        }
    }, {
        unit: "square miles",
        type: "area",
        abbrev: /square mile|square miles|mi2|mi²/i,
        validator: /^[0-9.]+$/,
        "square meter": function (val) {
            return parseFloat(val) * 2590000;
        },
        "square kilometers": function (val) {
            return parseFloat(val) * 2.59;
        },
        "square yard": function (val) {
            return parseFloat(val) * 3098000;
        },
        "square feet": function (val) {
            return parseFloat(val) * 27880000;
        },
        "square inch": function (val) {
            return parseFloat(val) * 4014000000;
        },
        "hectare": function (val) {
            return parseFloat(val) * 259;
        },
        "acre": function (val) {
            return parseFloat(val) * 640;
        }
    }, {
        unit: "square yard",
        type: "area",
        abbrev: /square yard|square yards|yd2|yd²/i,
        validator: /^[0-9.]+$/,
        "square meter": function (val) {
            return parseFloat(val) / 1.196;
        },
        "square miles": function (val) {
            return parseFloat(val) / 3098000;
        },
        "square kilometers": function (val) {
            return parseFloat(val) / 1196000;
        },
        "square feet": function (val) {
            return parseFloat(val) * 9;
        },
        "square inch": function (val) {
            return parseFloat(val) * 1296;
        },
        "hectare": function (val) {
            return parseFloat(val) / 11960;
        },
        "acre": function (val) {
            return parseFloat(val) / 4840;
        }
    }, {
        unit: "square feet",
        type: "area",
        abbrev: /square foot|square feet|sq. ft|sq ft/i,
        validator: /^[0-9.]+$/,
        "square meter": function (val) {
            return parseFloat(val) / 10.764;
        },
        "square miles": function (val) {
            return parseFloat(val) / 27880000;
        },
        "square yard": function (val) {
            return parseFloat(val) / 9;
        },
        "square kilometers": function (val) {
            return parseFloat(val) * 10760000;
        },
        "square inch": function (val) {
            return parseFloat(val) * 144;
        },
        "hectare": function (val) {
            return parseFloat(val) / 107369;
        },
        "acre": function (val) {
            return parseFloat(val) / 43560;
        }
    }, {
        unit: "square inch",
        type: "area",
        abbrev: /square inch|square inches|sq. in|sq in/i,
        validator: /^[0-9.]+$/,
        "square meter": function (val) {
            return parseFloat(val) / 1550;
        },
        "square miles": function (val) {
            return parseFloat(val) / 4014000000;
        },
        "square yard": function (val) {
            return parseFloat(val) / 1296;
        },
        "square feet": function (val) {
            return parseFloat(val) / 144;
        },
        "square kilometers": function (val) {
            return parseFloat(val) * 1550000000;
        },
        "hectare": function (val) {
            return parseFloat(val) / 15500000;
        },
        "acre": function (val) {
            return parseFloat(val) / 6273000;
        }
    }, {
        unit: "hectare",
        type: "area",
        abbrev: /hectare|hectares|ha/i,
        validator: /^[0-9.]+$/,
        "square meter": function (val) {
            return parseFloat(val) * 10000;
        },
        "square miles": function (val) {
            return parseFloat(val) / 259;
        },
        "square yard": function (val) {
            return parseFloat(val) * 11960;
        },
        "square feet": function (val) {
            return parseFloat(val) * 107639;
        },
        "square inch": function (val) {
            return parseFloat(val) * 15500000;
        },
        "square kilometers": function (val) {
            return parseFloat(val) / 100;
        },
        "acre": function (val) {
            return parseFloat(val) * 2.47105;
        }
    }, {
        unit: "acre",
        type: "area",
        abbrev: /acre|acres|ac/i,
        validator: /^[0-9.]+$/,
        "square meter": function (val) {
            return parseFloat(val) * 4047;
        },
        "square miles": function (val) {
            return parseFloat(val) / 640;
        },
        "square yard": function (val) {
            return parseFloat(val) * 4840;
        },
        "square feet": function (val) {
            return parseFloat(val) * 43560;
        },
        "square inch": function (val) {
            return parseFloat(val) * 6273000;
        },
        "hectare": function (val) {
            return parseFloat(val) / 2.47105;
        },
        "square kilometers": function (val) {
            return parseFloat(val) / 247.105;
        }
    }, {
        unit: "bits",
        type: "Data Transfer Rate",
        abbrev: /bit|bits|bit\/s|bps/i,
        validator: /^[0-9.]+$/,
        "kilobits": function (val) {
            return parseFloat(val) / 1000;
        },
        "kilobytes": function (val) {
            return parseFloat(val) / 8000;
        },
        "kibibits": function (val) {
            return parseFloat(val) / 1024;
        },
        "megabits": function (val) {
            return parseFloat(val) / 1000000;
        },
        "megabytess": function (val) {
            return parseFloat(val) / 8000000;
        },
        "mebibits": function (val) {
            return parseFloat(val) / 1049000;
        },
        "gigabits": function (val) {
            return parseFloat(val) / 1000000000;
        },
        "gigabytes": function (val) {
            return parseFloat(val) / 8000000000;
        },
        "gibibits": function (val) {
            return parseFloat(val) / 1074000000;
        },
        "terabits": function (val) {
            return parseFloat(val) / 1000000000000;
        },
        "terabytes": function (val) {
            return parseFloat(val) / 8000000000000;
        },
        "tebibits": function (val) {
            return parseFloat(val) / 1100000000000;
        }
    }, {
        unit: "kilobits",
        type: "Data Transfer Rate",
        abbrev: /kilobit|kilobits|kb\/s|kbps/i,
        validator: /^[0-9.]+$/,
        "bits": function (val) {
            return parseFloat(val) * 1000;
        },
        "kilobytes": function (val) {
            return parseFloat(val) / 8;
        },
        "kibibits": function (val) {
            return parseFloat(val) / 1.024;
        },
        "megabits": function (val) {
            return parseFloat(val) / 1000;
        },
        "megabytes": function (val) {
            return parseFloat(val) / 8000;
        },
        "mebibits": function (val) {
            return parseFloat(val) / 1049;
        },
        "gigabits": function (val) {
            return parseFloat(val) / 1000000;
        },
        "gigabytes": function (val) {
            return parseFloat(val) / 8000000;
        },
        "gibibits": function (val) {
            return parseFloat(val) / 1074000;
        },
        "terabits": function (val) {
            return parseFloat(val) / 1000000000;
        },
        "terabytes": function (val) {
            return parseFloat(val) / 8000000000;
        },
        "tebibits": function (val) {
            return parseFloat(val) / 1100000000;
        }
    }, {
        unit: "kilobytes",
        type: "Data Transfer Rate",
        abbrev: /kilobyte|kilobytes|KB\/s|KBps/i,
        validator: /^[0-9.]+$/,
        "kilobits": function (val) {
            return parseFloat(val) * 8;
        },
        "bits": function (val) {
            return parseFloat(val) * 8000;
        },
        "kibibits": function (val) {
            return parseFloat(val) * 7.812;
        },
        "megabits": function (val) {
            return parseFloat(val) / 125;
        },
        "megabytes": function (val) {
            return parseFloat(val) / 1000;
        },
        "mebibits": function (val) {
            return parseFloat(val) / 131;
        },
        "gigabits": function (val) {
            return parseFloat(val) / 125000;
        },
        "gigabytes": function (val) {
            return parseFloat(val) / 1000000;
        },
        "gibibits": function (val) {
            return parseFloat(val) / 134218;
        },
        "terabits": function (val) {
            return parseFloat(val) / 125000000;
        },
        "terabytes": function (val) {
            return parseFloat(val) / 1000000000;
        },
        "tebibits": function (val) {
            return parseFloat(val) / 137400000;
        }
    }, {
        unit: "kibibits",
        type: "Data Transfer Rate",
        abbrev: /kibibit|kibibits/i,
        validator: /^[0-9.]+$/,
        "kilobits": function (val) {
            return parseFloat(val) * 1.024;
        },
        "kilobytes": function (val) {
            return parseFloat(val) / 7.812;
        },
        "bits": function (val) {
            return parseFloat(val) * 1024;
        },
        "megabits": function (val) {
            return parseFloat(val) / 977;
        },
        "megabytes": function (val) {
            return parseFloat(val) / 7813;
        },
        "mebibits": function (val) {
            return parseFloat(val) / 1024;
        },
        "gigabits": function (val) {
            return parseFloat(val) / 976562;
        },
        "gigabytes": function (val) {
            return parseFloat(val) / 7812000;
        },
        "gibibits": function (val) {
            return parseFloat(val) / 1049000;
        },
        "terabits": function (val) {
            return parseFloat(val) / 976600000;
        },
        "terabytes": function (val) {
            return parseFloat(val) / 7812000000;
        },
        "tebibits": function (val) {
            return parseFloat(val) / 1074000000;
        }
    }, {
        unit: "megabits",
        type: "Data Transfer Rate",
        abbrev: /megabit|megabits|mb\/s|mbps/i,
        validator: /^[0-9.]+$/,
        "kilobits": function (val) {
            return parseFloat(val) * 1000;
        },
        "kilobytes": function (val) {
            return parseFloat(val) * 125;
        },
        "kibibits": function (val) {
            return parseFloat(val) * 977;
        },
        "bits": function (val) {
            return parseFloat(val) * 1000000;
        },
        "megabytes": function (val) {
            return parseFloat(val) / 8;
        },
        "mebibits": function (val) {
            return parseFloat(val) / 1.049;
        },
        "gigabits": function (val) {
            return parseFloat(val) / 1000;
        },
        "gigabytes": function (val) {
            return parseFloat(val) / 8000;
        },
        "gibibits": function (val) {
            return parseFloat(val) / 1074;
        },
        "terabits": function (val) {
            return parseFloat(val) / 1000000000;
        },
        "terabytes": function (val) {
            return parseFloat(val) / 8000000000;
        },
        "tebibits": function (val) {
            return parseFloat(val) / 1100000000;
        }
    }, {
        unit: "megabytes",
        type: "Data Transfer Rate",
        abbrev: /megabyte|megabytes|MB\/s|MBps/i,
        validator: /^[0-9.]+$/,
        "kilobytes": function (val) {
            return parseFloat(val) * 1000;
        },
        "kilobits": function (val) {
            return parseFloat(val) * 8000;
        },
        "kibibits": function (val) {
            return parseFloat(val) * 7813;
        },
        "megabits": function (val) {
            return parseFloat(val) * 8;
        },
        "bits": function (val) {
            return parseFloat(val) * 8000000;
        },
        "mebibits": function (val) {
            return parseFloat(val) * 7.629;
        },
        "gigabits": function (val) {
            return parseFloat(val) / 125;
        },
        "gigabytes": function (val) {
            return parseFloat(val) / 1000;
        },
        "gibibits": function (val) {
            return parseFloat(val) / 134;
        },
        "terabits": function (val) {
            return parseFloat(val) / 125000;
        },
        "terabytes": function (val) {
            return parseFloat(val) / 1000000;
        },
        "tebibits": function (val) {
            return parseFloat(val) / 137439;
        }
    }, {
        unit: "mebibits",
        type: "Data Transfer Rate",
        abbrev: /mebibit|mebibits/i,
        validator: /^[0-9.]+$/,
        "kilobits": function (val) {
            return parseFloat(val) * 1049;
        },
        "kilobytes": function (val) {
            return parseFloat(val) * 131;
        },
        "kibibits": function (val) {
            return parseFloat(val) * 1024;
        },
        "megabits": function (val) {
            return parseFloat(val) * 1.049;
        },
        "megabytes": function (val) {
            return parseFloat(val) / 7.629;
        },
        "bits": function (val) {
            return parseFloat(val) / 1049000;
        },
        "gigabits": function (val) {
            return parseFloat(val) / 954;
        },
        "gigabytes": function (val) {
            return parseFloat(val) / 7629;
        },
        "gibibits": function (val) {
            return parseFloat(val) / 1024;
        },
        "terabits": function (val) {
            return parseFloat(val) / 953674;
        },
        "terabytes": function (val) {
            return parseFloat(val) / 7629000;
        },
        "tebibits": function (val) {
            return parseFloat(val) / 1049000;
        }
    }, {
        unit: "gigabits",
        type: "Data Transfer Rate",
        abbrev: /gigabit|gigabits|gb\/s|gbps/i,
        validator: /^[0-9.]+$/,
        "kilobits": function (val) {
            return parseFloat(val) * 1000000;
        },
        "kilobytes": function (val) {
            return parseFloat(val) * 125000;
        },
        "kibibits": function (val) {
            return parseFloat(val) * 976563;
        },
        "megabits": function (val) {
            return parseFloat(val) * 1000;
        },
        "megabytes": function (val) {
            return parseFloat(val) * 125;
        },
        "mebibits": function (val) {
            return parseFloat(val) * 954;
        },
        "bits": function (val) {
            return parseFloat(val) * 1000000000;
        },
        "gigabytes": function (val) {
            return parseFloat(val) / 8;
        },
        "gibibits": function (val) {
            return parseFloat(val) / 1.074;
        },
        "terabits": function (val) {
            return parseFloat(val) / 1000;
        },
        "terabytes": function (val) {
            return parseFloat(val) / 8000;
        },
        "tebibits": function (val) {
            return parseFloat(val) / 1100;
        }
    }, {
        unit: "gigabytes",
        type: "Data Transfer Rate",
        abbrev: /gigabyte|gigabytes|GB\/s|GBps/i,
        validator: /^[0-9.]+$/,
        "kilobits": function (val) {
            return parseFloat(val) * 1000000;
        },
        "kilobytes": function (val) {
            return parseFloat(val) * 125000;
        },
        "kibibits": function (val) {
            return parseFloat(val) * 976563;
        },
        "megabits": function (val) {
            return parseFloat(val) * 1000;
        },
        "megabytes": function (val) {
            return parseFloat(val) * 125;
        },
        "mebibits": function (val) {
            return parseFloat(val) * 954;
        },
        "gigabits": function (val) {
            return parseFloat(val) / 954;
        },
        "gigabytes": function (val) {
            return parseFloat(val) / 7629;
        },
        "gibibits": function (val) {
            return parseFloat(val) / 1024;
        },
        "terabits": function (val) {
            return parseFloat(val) / 953674;
        },
        "terabytes": function (val) {
            return parseFloat(val) / 7629000;
        },
        "tebibits": function (val) {
            return parseFloat(val) / 1049000;
        }
    }, {
        unit: "gibibits",
        type: "Data Transfer Rate",
        abbrev: /gibibit|gibibits/i,
        validator: /^[0-9.]+$/,
        "kilobits": function (val) {
            return parseFloat(val) * 1074000;
        },
        "kilobytes": function (val) {
            return parseFloat(val) * 134218;
        },
        "kibibits": function (val) {
            return parseFloat(val) * 1049000;
        },
        "megabits": function (val) {
            return parseFloat(val) * 1074;
        },
        "megabytes": function (val) {
            return parseFloat(val) * 134;
        },
        "mebibits": function (val) {
            return parseFloat(val) * 1024;
        },
        "gigabits": function (val) {
            return parseFloat(val) * 1.024;
        },
        "gigabytes": function (val) {
            return parseFloat(val) / 7.451;
        },
        "bits": function (val) {
            return parseFloat(val) / 1074000000;
        },
        "terabits": function (val) {
            return parseFloat(val) / 931;
        },
        "terabytes": function (val) {
            return parseFloat(val) / 7451;
        },
        "tebibits": function (val) {
            return parseFloat(val) / 1024;
        }
    }, {
        unit: "terabits",
        type: "Data Transfer Rate",
        abbrev: /terabit|terabits|tb\/s|tbps/i,
        validator: /^[0-9.]+$/,
        "kilobits": function (val) {
            return parseFloat(val) * 1000000000;
        },
        "kilobytes": function (val) {
            return parseFloat(val) * 125000000;
        },
        "kibibits": function (val) {
            return parseFloat(val) * 976600000;
        },
        "megabits": function (val) {
            return parseFloat(val) * 1000000;
        },
        "megabytes": function (val) {
            return parseFloat(val) * 125000;
        },
        "mebibits": function (val) {
            return parseFloat(val) * 953674;
        },
        "gigabits": function (val) {
            return parseFloat(val) * 1000;
        },
        "gigabytes": function (val) {
            return parseFloat(val) * 125;
        },
        "gibibits": function (val) {
            return parseFloat(val) * 931;
        },
        "bits": function (val) {
            return parseFloat(val) * 1000000000000;
        },
        "terabytes": function (val) {
            return parseFloat(val) / 8;
        },
        "tebibits": function (val) {
            return parseFloat(val) / 1.1;
        }
    }, {
        unit: "terabytes",
        type: "Data Transfer Rate",
        abbrev: /terabyte|terabytes|TB\/s|TBps/i,
        validator: /^[0-9.]+$/,
        "kilobits": function (val) {
            return parseFloat(val) * 8000000000;
        },
        "kilobytes": function (val) {
            return parseFloat(val) * 1000000000;
        },
        "kibibits": function (val) {
            return parseFloat(val) * 7812000000;
        },
        "megabits": function (val) {
            return parseFloat(val) * 8000000;
        },
        "megabytes": function (val) {
            return parseFloat(val) * 1000000;
        },
        "mebibits": function (val) {
            return parseFloat(val) * 7629000;
        },
        "gigabits": function (val) {
            return parseFloat(val) * 8000;
        },
        "gigabytes": function (val) {
            return parseFloat(val) * 1000;
        },
        "gibibits": function (val) {
            return parseFloat(val) * 7451;
        },
        "terabits": function (val) {
            return parseFloat(val) * 8;
        },
        "bits": function (val) {
            return parseFloat(val) * 8000000000000;
        },
        "tebibits": function (val) {
            return parseFloat(val) * 7.276;
        }
    }, {
        unit: "tebibits",
        type: "Data Transfer Rate",
        abbrev: /tebibit|tebibits/i,
        validator: /^[0-9.]+$/,
        "kilobits": function (val) {
            return parseFloat(val) * 1100000000;
        },
        "kilobytes": function (val) {
            return parseFloat(val) * 137400000;
        },
        "kibibits": function (val) {
            return parseFloat(val) * 1074000000;
        },
        "megabits": function (val) {
            return parseFloat(val) * 1100000;
        },
        "megabytes": function (val) {
            return parseFloat(val) * 137439;
        },
        "mebibits": function (val) {
            return parseFloat(val) * 1049000;
        },
        "gigabits": function (val) {
            return parseFloat(val) * 1100;
        },
        "gigabytes": function (val) {
            return parseFloat(val) * 137;
        },
        "gibibits": function (val) {
            return parseFloat(val) * 1024;
        },
        "terabits": function (val) {
            return parseFloat(val) * 1.1;
        },
        "terabytes": function (val) {
            return parseFloat(val) * 7.276;
        },
        "bits": function (val) {
            return parseFloat(val) * 1100000000000;
        }
    }, {
        unit: "celsius",
        type: "Temperature",
        abbrev: /Celsius|°C/i,
        validator: /^[0-9.]+$/,
        "fahrenheit": function (val) {
            return (parseFloat(val) * 9 / 5) + 32;
        },
        "kelvin": function (val) {
            return parseFloat(val) + 273.15;
        }
    }, {
        unit: "fahrenheit",
        type: "Temperature",
        abbrev: /Fahrenheit|°F/i,
        validator: /^[0-9.]+$/,
        "celsius": function (val) {
            return (parseFloat(val) - 32) * 5 / 9;
        },
        "kelvin": function (val) {
            return ((parseFloat(val) - 32) * 5 / 9) + 273.15;
        }
    }, {
        unit: "kelvin",
        type: "Temperature",
        abbrev: /Kelvin|K/i,
        validator: /^[0-9.]+$/,
        "celsius": function (val) {
            return parseFloat(val) - 273.15;
        },
        "fahrenheit": function (val) {
            return ((parseFloat(val) - 273.15) * 9 / 5) + 32;
        }
    }, {
        unit: "bar",
        type: "Pressure",
        abbrev: /bar/i,
        validator: /^[0-9.]+$/,
        "pascal": function (val) {
            return parseFloat(val) * 100000;
        },
        "pound per square inch": function (val) {
            return parseFloat(val) * 14.504;
        },
        "standard atmosphere": function (val) {
            return parseFloat(val) / 1.013;
        },
        "torr": function (val) {
            return parseFloat(val) * 750.1;
        }
    }, {
        unit: "pascal",
        type: "Pressure",
        abbrev: /Pa|N\/m²|N\/m2/i,
        validator: /^[0-9.]+$/,
        "bar": function (val) {
            return parseFloat(val) / 100000;
        },
        "pound per square inch": function (val) {
            return parseFloat(val) / 6895;
        },
        "standard atmosphere": function (val) {
            return parseFloat(val) / 101300;
        },
        "torr": function (val) {
            return parseFloat(val) / 133.3;
        }
    }, {
        unit: "pound per square inch",
        type: "Pressure",
        abbrev: /pound per square inch|PSI|lbf\/in²|lbf\/in2/i,
        validator: /^[0-9.]+$/,
        "bar": function (val) {
            return parseFloat(val) / 14.504;
        },
        "pascal": function (val) {
            return parseFloat(val) * 6895;
        },
        "standard atmosphere": function (val) {
            return parseFloat(val) / 14.696;
        },
        "torr": function (val) {
            return parseFloat(val) * 51.715;
        }
    }, {
        unit: "standard atmosphere",
        type: "Pressure",
        abbrev: /standard atmosphere|atm/i,
        validator: /^[0-9.]+$/,
        "bar": function (val) {
            return parseFloat(val) * 1.013;
        },
        "pascal": function (val) {
            return parseFloat(val) * 101300;
        },
        "pound per square inch": function (val) {
            return parseFloat(val) * 14.696;
        },
        "torr": function (val) {
            return parseFloat(val) * 760;
        }
    }, {
        unit: "torr",
        type: "Pressure",
        abbrev: /torr/i,
        validator: /^[0-9.]+$/,
        "bar": function (val) {
            return parseFloat(val) / 750.1;
        },
        "pascal": function (val) {
            return parseFloat(val) * 133.3;
        },
        "pound per square inch": function (val) {
            return parseFloat(val) / 51.715;
        },
        "standard atmosphere": function (val) {
            return parseFloat(val) / 760;
        }
    }
];