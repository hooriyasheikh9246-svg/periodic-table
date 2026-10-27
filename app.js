const elementsData = [
  { num: 1, symbol: "H", name: "Hydrogen", mass: "1.008", period: 1, group: 1, block: "s", class: "Non-metal", cat: "nonmetal", isotopes: "¹H, ²H", config: "1s¹", density: "0.000089", ionization: "1312.0", colorClass: "cat-nonmetal" },
  { num: 2, symbol: "He", name: "Helium", mass: "4.003", period: 1, group: 18, block: "p", class: "Non-metal", cat: "noble", isotopes: "³He, ⁴He", config: "1s²", density: "0.000179", ionization: "2372.3", colorClass: "cat-noble" },
  { num: 3, symbol: "Li", name: "Lithium", mass: "6.94", period: 2, group: 1, block: "s", class: "Metal", cat: "alkali", isotopes: "⁶Li, ⁷Li", config: "[He] 2s¹", density: "0.534", ionization: "520.2", colorClass: "cat-alkali" },
  { num: 4, symbol: "Be", name: "Beryllium", mass: "9.012", period: 2, group: 2, block: "s", class: "Metal", cat: "alkaline", isotopes: "⁹Be", config: "[He] 2s²", density: "1.85", ionization: "899.5", colorClass: "cat-alkaline" },
  { num: 5, symbol: "B", name: "Boron", mass: "10.81", period: 2, group: 13, block: "p", class: "Metalloid", cat: "metalloid", isotopes: "¹⁰B, ¹¹B", config: "[He] 2s² 2p¹", density: "2.34", ionization: "800.6", colorClass: "cat-metalloid" },
  { num: 6, symbol: "C", name: "Carbon", mass: "12.011", period: 2, group: 14, block: "p", class: "Non-metal", cat: "nonmetal", isotopes: "¹²C, ¹³C", config: "[He] 2s² 2p²", density: "2.267", ionization: "1086.5", colorClass: "cat-nonmetal" },
  { num: 7, symbol: "N", name: "Nitrogen", mass: "14.007", period: 2, group: 15, block: "p", class: "Non-metal", cat: "nonmetal", isotopes: "¹⁴N, ¹⁵N", config: "[He] 2s² 2p³", density: "0.00125", ionization: "1402.3", colorClass: "cat-nonmetal" },
  { num: 8, symbol: "O", name: "Oxygen", mass: "15.999", period: 2, group: 16, block: "p", class: "Non-metal", cat: "nonmetal", isotopes: "¹⁶O, ¹⁷O, ¹⁸O", config: "[He] 2s² 2p⁴", density: "0.00143", ionization: "1313.9", colorClass: "cat-nonmetal" },
  { num: 9, symbol: "F", name: "Fluorine", mass: "18.998", period: 2, group: 17, block: "p", class: "Non-metal", cat: "halogen", isotopes: "¹⁹F", config: "[He] 2s² 2p⁵", density: "0.00170", ionization: "1681.0", colorClass: "cat-halogen" },
  { num: 10, symbol: "Ne", name: "Neon", mass: "20.180", period: 2, group: 18, block: "p", class: "Non-metal", cat: "noble", isotopes: "²⁰Ne, ²²Ne", config: "[He] 2s² 2p⁶", density: "0.00090", ionization: "2080.7", colorClass: "cat-noble" },
  { num: 11, symbol: "Na", name: "Sodium", mass: "22.990", period: 3, group: 1, block: "s", class: "Metal", cat: "alkali", isotopes: "²³Na", config: "[Ne] 3s¹", density: "0.968", ionization: "495.8", colorClass: "cat-alkali" },
  { num: 12, symbol: "Mg", name: "Magnesium", mass: "24.305", period: 3, group: 2, block: "s", class: "Metal", cat: "alkaline", isotopes: "²⁴Mg, ²⁵Mg", config: "[Ne] 3s²", density: "1.738", ionization: "737.7", colorClass: "cat-alkaline" },
  { num: 13, symbol: "Al", name: "Aluminium", mass: "26.982", period: 3, group: 13, block: "p", class: "Metal", cat: "post-transition", isotopes: "²⁷Al", config: "[Ne] 3s² 3p¹", density: "2.70", ionization: "577.5", colorClass: "cat-post-transition" },
  { num: 14, symbol: "Si", name: "Silicon", mass: "28.085", period: 3, group: 14, block: "p", class: "Metalloid", cat: "metalloid", isotopes: "²⁸Si, ²⁹Si", config: "[Ne] 3s² 3p²", density: "2.329", ionization: "786.5", colorClass: "cat-metalloid" },
  { num: 15, symbol: "P", name: "Phosphorus", mass: "30.974", period: 3, group: 15, block: "p", class: "Non-metal", cat: "nonmetal", isotopes: "³¹P", config: "[Ne] 3s² 3p³", density: "1.823", ionization: "1011.8", colorClass: "cat-nonmetal" },
  { num: 16, symbol: "S", name: "Sulfur", mass: "32.06", period: 3, group: 16, block: "p", class: "Non-metal", cat: "nonmetal", isotopes: "³²S, ³⁴S", config: "[Ne] 3s² 3p⁴", density: "2.07", ionization: "999.6", colorClass: "cat-nonmetal" },
  { num: 17, symbol: "Cl", name: "Chlorine", mass: "35.45", period: 3, group: 17, block: "p", class: "Non-metal", cat: "halogen", isotopes: "³⁵Cl, ³⁷Cl", config: "[Ne] 3s² 3p⁵", density: "0.00321", ionization: "1251.2", colorClass: "cat-halogen" },
  { num: 18, symbol: "Ar", name: "Argon", mass: "39.95", period: 3, group: 18, block: "p", class: "Non-metal", cat: "noble", isotopes: "⁴⁰Ar, ³⁶Ar", config: "[Ne] 3s² 3p⁶", density: "0.00178", ionization: "1520.6", colorClass: "cat-noble" },
  { num: 19, symbol: "K", name: "Potassium", mass: "39.098", period: 4, group: 1, block: "s", class: "Metal", cat: "alkali", isotopes: "³⁹K, ⁴¹K", config: "[Ar] 4s¹", density: "0.862", ionization: "418.8", colorClass: "cat-alkali" },
  { num: 20, symbol: "Ca", name: "Calcium", mass: "40.078", period: 4, group: 2, block: "s", class: "Metal", cat: "alkaline", isotopes: "⁴⁰Ca, ⁴⁴Ca", config: "[Ar] 4s²", density: "1.55", ionization: "589.8", colorClass: "cat-alkaline" },
  { num: 21, symbol: "Sc", name: "Scandium", mass: "44.956", period: 4, group: 3, block: "d", class: "Metal", cat: "transition", isotopes: "⁴⁵Sc", config: "[Ar] 3d¹ 4s²", density: "2.985", ionization: "633.1", colorClass: "cat-transition" },
  { num: 22, symbol: "Ti", name: "Titanium", mass: "47.867", period: 4, group: 4, block: "d", class: "Metal", cat: "transition", isotopes: "⁴⁸Ti", config: "[Ar] 3d² 4s²", density: "4.506", ionization: "658.8", colorClass: "cat-transition" },
  { num: 23, symbol: "V", name: "Vanadium", mass: "50.942", period: 4, group: 5, block: "d", class: "Metal", cat: "transition", isotopes: "⁵¹V", config: "[Ar] 3d³ 4s²", density: "6.11", ionization: "650.9", colorClass: "cat-transition" },
  { num: 24, symbol: "Cr", name: "Chromium", mass: "51.996", period: 4, group: 6, block: "d", class: "Metal", cat: "transition", isotopes: "⁵²Cr", config: "[Ar] 3d⁵ 4s¹", density: "7.15", ionization: "652.9", colorClass: "cat-transition" },
  { num: 25, symbol: "Mn", name: "Manganese", mass: "54.938", period: 4, group: 7, block: "d", class: "Metal", cat: "transition", isotopes: "⁵⁵Mn", config: "[Ar] 3d⁵ 4s²", density: "7.21", ionization: "717.3", colorClass: "cat-transition" },
  { num: 26, symbol: "Fe", name: "Iron", mass: "55.845", period: 4, group: 8, block: "d", class: "Metal", cat: "transition", isotopes: "⁵⁶Fe", config: "[Ar] 3d⁶ 4s²", density: "7.874", ionization: "762.5", colorClass: "cat-transition" },
  { num: 27, symbol: "Co", name: "Cobalt", mass: "58.933", period: 4, group: 9, block: "d", class: "Metal", cat: "transition", isotopes: "⁵⁹Co", config: "[Ar] 3d⁷ 4s²", density: "8.90", ionization: "760.4", colorClass: "cat-transition" },
  { num: 28, symbol: "Ni", name: "Nickel", mass: "58.693", period: 4, group: 10, block: "d", class: "Metal", cat: "transition", isotopes: "⁵⁸Ni, ⁶⁰Ni", config: "[Ar] 3d⁸ 4s²", density: "8.908", ionization: "737.1", colorClass: "cat-transition" },
  { num: 29, symbol: "Cu", name: "Copper", mass: "63.546", period: 4, group: 11, block: "d", class: "Metal", cat: "transition", isotopes: "⁶³Cu, ⁶⁵Cu", config: "[Ar] 3d¹⁰ 4s¹", density: "8.96", ionization: "745.5", colorClass: "cat-transition" },
  { num: 30, symbol: "Zn", name: "Zinc", mass: "65.38", period: 4, group: 12, block: "d", class: "Metal", cat: "transition", isotopes: "⁶⁴Zn", config: "[Ar] 3d¹⁰ 4s²", density: "7.14", ionization: "906.4", colorClass: "cat-transition" },
  { num: 31, symbol: "Ga", name: "Gallium", mass: "69.723", period: 4, group: 13, block: "p", class: "Metal", cat: "post-transition", isotopes: "⁶⁹Ga, ⁷¹Ga", config: "[Ar] 3d¹⁰ 4s² 4p¹", density: "5.91", ionization: "578.8", colorClass: "cat-post-transition" },
  { num: 32, symbol: "Ge", name: "Germanium", mass: "72.630", period: 4, group: 14, block: "p", class: "Metalloid", cat: "metalloid", isotopes: "⁷⁴Ge", config: "[Ar] 3d¹⁰ 4s² 4p²", density: "5.323", ionization: "762.0", colorClass: "cat-metalloid" },
  { num: 33, symbol: "As", name: "Arsenic", mass: "74.922", period: 4, group: 15, block: "p", class: "Metalloid", cat: "metalloid", isotopes: "⁷⁵As", config: "[Ar] 3d¹⁰ 4s² 4p³", density: "5.727", ionization: "947.0", colorClass: "cat-metalloid" },
  { num: 34, symbol: "Se", name: "Selenium", mass: "78.971", period: 4, group: 16, block: "p", class: "Non-metal", cat: "nonmetal", isotopes: "⁸⁰Se", config: "[Ar] 3d¹⁰ 4s² 4p⁴", density: "4.81", ionization: "941.0", colorClass: "cat-nonmetal" },
  { num: 35, symbol: "Br", name: "Bromine", mass: "79.904", period: 4, group: 17, block: "p", class: "Non-metal", cat: "halogen", isotopes: "⁷⁹Br, ⁸¹Br", config: "[Ar] 3d¹⁰ 4s² 4p⁵", density: "3.12", ionization: "1139.9", colorClass: "cat-halogen" },
  { num: 36, symbol: "Kr", name: "Krypton", mass: "83.798", period: 4, group: 18, block: "p", class: "Non-metal", cat: "noble", isotopes: "⁸⁴Kr", config: "[Ar] 3d¹⁰ 4s² 4p⁶", density: "0.00375", ionization: "1350.8", colorClass: "cat-noble" },
  { num: 37, symbol: "Rb", name: "Rubidium", mass: "85.468", period: 5, group: 1, block: "s", class: "Metal", cat: "alkali", isotopes: "⁸⁵Rb", config: "[Kr] 5s¹", density: "1.532", ionization: "403.0", colorClass: "cat-alkali" },
  { num: 38, symbol: "Sr", name: "Strontium", mass: "87.62", period: 5, group: 2, block: "s", class: "Metal", cat: "alkaline", isotopes: "⁸⁸Sr", config: "[Kr] 5s²", density: "2.64", ionization: "549.5", colorClass: "cat-alkaline" },
  { num: 39, symbol: "Y", name: "Yttrium", mass: "88.906", period: 5, group: 3, block: "d", class: "Metal", cat: "transition", isotopes: "⁸⁹Y", config: "[Kr] 4d¹ 5s²", density: "4.472", ionization: "600.0", colorClass: "cat-transition" },
  { num: 40, symbol: "Zr", name: "Zirconium", mass: "91.224", period: 5, group: 4, block: "d", class: "Metal", cat: "transition", isotopes: "⁹⁰Zr", config: "[Kr] 4d² 5s²", density: "6.511", ionization: "640.1", colorClass: "cat-transition" },
  { num: 41, symbol: "Nb", name: "Niobium", mass: "92.906", period: 5, group: 5, block: "d", class: "Metal", cat: "transition", isotopes: "⁹³Nb", config: "[Kr] 4d⁴ 5s¹", density: "8.57", ionization: "652.1", colorClass: "cat-transition" },
  { num: 42, symbol: "Mo", name: "Molybdenum", mass: "95.95", period: 5, group: 6, block: "d", class: "Metal", cat: "transition", isotopes: "⁹⁸Mo", config: "[Kr] 4d⁵ 5s¹", density: "10.28", ionization: "684.3", colorClass: "cat-transition" },
  { num: 43, symbol: "Tc", name: "Technetium", mass: "98", period: 5, group: 7, block: "d", class: "Metal", cat: "transition", isotopes: "⁹⁸Tc", config: "[Kr] 4d⁵ 5s²", density: "11.5", ionization: "702.0", colorClass: "cat-transition" },
  { num: 44, symbol: "Ru", name: "Ruthenium", mass: "101.07", period: 5, group: 8, block: "d", class: "Metal", cat: "transition", isotopes: "¹⁰²Ru", config: "[Kr] 4d⁷ 5s¹", density: "12.37", ionization: "710.2", colorClass: "cat-transition" },
  { num: 45, symbol: "Rh", name: "Rhodium", mass: "102.91", period: 5, group: 9, block: "d", class: "Metal", cat: "transition", isotopes: "¹⁰³Rh", config: "[Kr] 4d⁸ 5s¹", density: "12.41", ionization: "719.7", colorClass: "cat-transition" },
  { num: 46, symbol: "Pd", name: "Palladium", mass: "106.42", period: 5, group: 10, block: "d", class: "Metal", cat: "transition", isotopes: "¹⁰⁶Pd", config: "[Kr] 4d¹⁰", density: "12.023", ionization: "804.4", colorClass: "cat-transition" },
  { num: 47, symbol: "Ag", name: "Silver", mass: "107.87", period: 5, group: 11, block: "d", class: "Metal", cat: "transition", isotopes: "¹⁰⁷Ag, ¹⁰⁹Ag", config: "[Kr] 4d¹⁰ 5s¹", density: "10.49", ionization: "731.0", colorClass: "cat-transition" },
  { num: 48, symbol: "Cd", name: "Cadmium", mass: "112.41", period: 5, group: 12, block: "d", class: "Metal", cat: "transition", isotopes: "¹¹⁴Cd", config: "[Kr] 4d¹⁰ 5s²", density: "8.65", ionization: "867.8", colorClass: "cat-transition" },
  { num: 49, symbol: "In", name: "Indium", mass: "114.82", period: 5, group: 13, block: "p", class: "Metal", cat: "post-transition", isotopes: "¹¹⁵In", config: "[Kr] 4d¹⁰ 5s² 5p¹", density: "7.31", ionization: "558.3", colorClass: "cat-post-transition" },
  { num: 50, symbol: "Sn", name: "Tin", mass: "118.71", period: 5, group: 14, block: "p", class: "Metal", cat: "post-transition", isotopes: "¹²⁰Sn", config: "[Kr] 4d¹⁰ 5s² 5p²", density: "7.31", ionization: "708.6", colorClass: "cat-post-transition" },
  { num: 51, symbol: "Sb", name: "Antimony", mass: "121.76", period: 5, group: 15, block: "p", class: "Metalloid", cat: "metalloid", isotopes: "¹²¹Sb, ¹²³Sb", config: "[Kr] 4d¹⁰ 5s² 5p³", density: "6.697", ionization: "834.0", colorClass: "cat-metalloid" },
  { num: 52, symbol: "Te", name: "Tellurium", mass: "127.60", period: 5, group: 16, block: "p", class: "Metalloid", cat: "metalloid", isotopes: "¹³⁰Te", config: "[Kr] 4d¹⁰ 5s² 5p⁴", density: "6.24", ionization: "869.3", colorClass: "cat-metalloid" },
  { num: 53, symbol: "I", name: "Iodine", mass: "126.90", period: 5, group: 17, block: "p", class: "Non-metal", cat: "halogen", isotopes: "¹²⁷I", config: "[Kr] 4d¹⁰ 5s² 5p⁵", density: "4.93", ionization: "1008.4", colorClass: "cat-halogen" },
  { num: 54, symbol: "Xe", name: "Xenon", mass: "131.29", period: 5, group: 18, block: "p", class: "Non-metal", cat: "noble", isotopes: "¹²⁹Xe, ¹³²Xe", config: "[Kr] 4d¹⁰ 5s² 5p⁶", density: "0.00589", ionization: "1170.4", colorClass: "cat-noble" },
  { num: 55, symbol: "Cs", name: "Caesium", mass: "132.91", period: 6, group: 1, block: "s", class: "Metal", cat: "alkali", isotopes: "¹³³Cs", config: "[Xe] 6s¹", density: "1.93", ionization: "375.7", colorClass: "cat-alkali" },
  { num: 56, symbol: "Ba", name: "Barium", mass: "137.33", period: 6, group: 2, block: "s", class: "Metal", cat: "alkaline", isotopes: "¹³⁸Ba", config: "[Xe] 6s²", density: "3.51", ionization: "502.9", colorClass: "cat-alkaline" },
  { num: 57, symbol: "La", name: "Lanthanum", mass: "138.91", period: 8, group: 3, block: "f", class: "Metal", cat: "lanthanide", series: "lanthanide", isotopes: "¹³⁹La", config: "[Xe] 5d¹ 6s²", density: "6.162", ionization: "538.1", colorClass: "cat-lanthanide" },
  { num: 58, symbol: "Ce", name: "Cerium", mass: "140.12", period: 8, group: 4, block: "f", class: "Metal", cat: "lanthanide", series: "lanthanide", isotopes: "¹⁴⁰Ce", config: "[Xe] 4f¹ 5d¹ 6s²", density: "6.77", ionization: "534.4", colorClass: "cat-lanthanide" },
  { num: 59, symbol: "Pr", name: "Praseodymium", mass: "140.91", period: 8, group: 5, block: "f", class: "Metal", cat: "lanthanide", series: "lanthanide", isotopes: "¹⁴¹Pr", config: "[Xe] 4f³ 6s²", density: "6.77", ionization: "527.0", colorClass: "cat-lanthanide" },
  { num: 60, symbol: "Nd", name: "Neodymium", mass: "144.24", period: 8, group: 6, block: "f", class: "Metal", cat: "lanthanide", series: "lanthanide", isotopes: "¹⁴²Nd", config: "[Xe] 4f⁴ 6s²", density: "7.01", ionization: "533.1", colorClass: "cat-lanthanide" },
  { num: 61, symbol: "Pm", name: "Promethium", mass: "145", period: 8, group: 7, block: "f", class: "Metal", cat: "lanthanide", series: "lanthanide", isotopes: "¹⁴⁵Pm", config: "[Xe] 4f⁵ 6s²", density: "7.26", ionization: "540.0", colorClass: "cat-lanthanide" },
  { num: 62, symbol: "Sm", name: "Samarium", mass: "150.36", period: 8, group: 8, block: "f", class: "Metal", cat: "lanthanide", series: "lanthanide", isotopes: "¹⁵²Sm", config: "[Xe] 4f⁶ 6s²", density: "7.52", ionization: "544.5", colorClass: "cat-lanthanide" },
  { num: 63, symbol: "Eu", name: "Europium", mass: "151.96", period: 8, group: 9, block: "f", class: "Metal", cat: "lanthanide", series: "lanthanide", isotopes: "¹⁵³Eu", config: "[Xe] 4f⁷ 6s²", density: "5.244", ionization: "547.1", colorClass: "cat-lanthanide" },
  { num: 64, symbol: "Gd", name: "Gadolinium", mass: "157.25", period: 8, group: 10, block: "f", class: "Metal", cat: "lanthanide", series: "lanthanide", isotopes: "¹⁵⁸Gd", config: "[Xe] 4f⁷ 5d¹ 6s²", density: "7.90", ionization: "593.4", colorClass: "cat-lanthanide" },
  { num: 65, symbol: "Tb", name: "Terbium", mass: "158.93", period: 8, group: 11, block: "f", class: "Metal", cat: "lanthanide", series: "lanthanide", isotopes: "¹⁵⁹Tb", config: "[Xe] 4f⁹ 6s²", density: "8.23", ionization: "565.8", colorClass: "cat-lanthanide" },
  { num: 66, symbol: "Dy", name: "Dysprosium", mass: "162.50", period: 8, group: 12, block: "f", class: "Metal", cat: "lanthanide", series: "lanthanide", isotopes: "¹⁶⁴Dy", config: "[Xe] 4f¹⁰ 6s²", density: "8.54", ionization: "573.0", colorClass: "cat-lanthanide" },
  { num: 67, symbol: "Ho", name: "Holmium", mass: "164.93", period: 8, group: 13, block: "f", class: "Metal", cat: "lanthanide", series: "lanthanide", isotopes: "¹⁶⁵Ho", config: "[Xe] 4f¹¹ 6s²", density: "8.80", ionization: "581.0", colorClass: "cat-lanthanide" },
  { num: 68, symbol: "Er", name: "Erbium", mass: "167.26", period: 8, group: 14, block: "f", class: "Metal", cat: "lanthanide", series: "lanthanide", isotopes: "¹⁶⁶Er", config: "[Xe] 4f¹² 6s²", density: "9.066", ionization: "589.3", colorClass: "cat-lanthanide" },
  { num: 69, symbol: "Tm", name: "Thulium", mass: "168.93", period: 8, group: 15, block: "f", class: "Metal", cat: "lanthanide", series: "lanthanide", isotopes: "¹⁶⁹Tm", config: "[Xe] 4f¹³ 6s²", density: "9.32", ionization: "596.7", colorClass: "cat-lanthanide" },
  { num: 70, symbol: "Yb", name: "Ytterbium", mass: "173.05", period: 8, group: 16, block: "f", class: "Metal", cat: "lanthanide", series: "lanthanide", isotopes: "¹⁷⁴Yb", config: "[Xe] 4f¹⁴ 6s²", density: "6.90", ionization: "603.5", colorClass: "cat-lanthanide" },
  { num: 71, symbol: "Lu", name: "Lutetium", mass: "174.97", period: 8, group: 17, block: "d", class: "Metal", cat: "lanthanide", series: "lanthanide", isotopes: "¹⁷⁵Lu", config: "[Xe] 4f¹⁴ 5d¹ 6s²", density: "9.841", ionization: "523.5", colorClass: "cat-lanthanide" },
  { num: 72, symbol: "Hf", name: "Hafnium", mass: "178.49", period: 6, group: 4, block: "d", class: "Metal", cat: "transition", isotopes: "¹⁸⁰Hf", config: "[Xe] 4f¹⁴ 5d² 6s²", density: "13.31", ionization: "658.5", colorClass: "cat-transition" },
  { num: 73, symbol: "Ta", name: "Tantalum", mass: "180.95", period: 6, group: 5, block: "d", class: "Metal", cat: "transition", isotopes: "¹⁸¹Ta", config: "[Xe] 4f¹⁴ 5d³ 6s²", density: "16.65", ionization: "761.0", colorClass: "cat-transition" },
  { num: 74, symbol: "W", name: "Tungsten", mass: "183.84", period: 6, group: 6, block: "d", class: "Metal", cat: "transition", isotopes: "¹⁸⁴W", config: "[Xe] 4f¹⁴ 5d⁴ 6s²", density: "19.25", ionization: "770.0", colorClass: "cat-transition" },
  { num: 75, symbol: "Re", name: "Rhenium", mass: "186.21", period: 6, group: 7, block: "d", class: "Metal", cat: "transition", isotopes: "¹⁸⁷Re", config: "[Xe] 4f¹⁴ 5d⁵ 6s²", density: "21.02", ionization: "760.0", colorClass: "cat-transition" },
  { num: 76, symbol: "Os", name: "Osmium", mass: "190.23", period: 6, group: 8, block: "d", class: "Metal", cat: "transition", isotopes: "¹⁹²Os", config: "[Xe] 4f¹⁴ 5d⁶ 6s²", density: "22.59", ionization: "840.0", colorClass: "cat-transition" },
  { num: 77, symbol: "Ir", name: "Iridium", mass: "192.22", period: 6, group: 9, block: "d", class: "Metal", cat: "transition", isotopes: "¹⁹³Ir", config: "[Xe] 4f¹⁴ 5d⁷ 6s²", density: "22.56", ionization: "880.0", colorClass: "cat-transition" },
  { num: 78, symbol: "Pt", name: "Platinum", mass: "195.08", period: 6, group: 10, block: "d", class: "Metal", cat: "transition", isotopes: "¹⁹⁵Pt", config: "[Xe] 4f¹⁴ 5d⁹ 6s¹", density: "21.45", ionization: "870.0", colorClass: "cat-transition" },
  { num: 79, symbol: "Au", name: "Gold", mass: "196.97", period: 6, group: 11, block: "d", class: "Metal", cat: "transition", isotopes: "¹⁹⁷Au", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", density: "19.32", ionization: "890.1", colorClass: "cat-transition" },
  { num: 80, symbol: "Hg", name: "Mercury", mass: "200.59", period: 6, group: 12, block: "d", class: "Metal", cat: "transition", isotopes: "²⁰²Hg", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", density: "13.534", ionization: "1007.1", colorClass: "cat-transition" },
  { num: 81, symbol: "Tl", name: "Thallium", mass: "204.38", period: 6, group: 13, block: "p", class: "Metal", cat: "post-transition", isotopes: "²⁰⁵Tl", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", density: "11.85", ionization: "589.4", colorClass: "cat-post-transition" },
  { num: 82, symbol: "Pb", name: "Lead", mass: "207.2", period: 6, group: 14, block: "p", class: "Metal", cat: "post-transition", isotopes: "²⁰⁸Pb", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", density: "11.34", ionization: "715.6", colorClass: "cat-post-transition" },
  { num: 83, symbol: "Bi", name: "Bismuth", mass: "208.98", period: 6, group: 15, block: "p", class: "Metal", cat: "post-transition", isotopes: "²⁰⁹Bi", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", density: "9.78", ionization: "703.0", colorClass: "cat-post-transition" },
  { num: 84, symbol: "Po", name: "Polonium", mass: "209", period: 6, group: 16, block: "p", class: "Metalloid", cat: "metalloid", isotopes: "²⁰⁹Po", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", density: "9.196", ionization: "812.1", colorClass: "cat-metalloid" },
  { num: 85, symbol: "At", name: "Astatine", mass: "210", period: 6, group: 17, block: "p", class: "Non-metal", cat: "halogen", isotopes: "²¹⁰At", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", density: "7.0", ionization: "899.0", colorClass: "cat-halogen" },
  { num: 86, symbol: "Rn", name: "Radon", mass: "222", period: 6, group: 18, block: "p", class: "Non-metal", cat: "noble", isotopes: "²²²Rn", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", density: "0.00973", ionization: "1037.0", colorClass: "cat-noble" },
  { num: 87, symbol: "Fr", name: "Francium", mass: "223", period: 7, group: 1, block: "s", class: "Metal", cat: "alkali", isotopes: "²²³Fr", config: "[Rn] 7s¹", density: "1.87", ionization: "380.0", colorClass: "cat-alkali" },
  { num: 88, symbol: "Ra", name: "Radium", mass: "226", period: 7, group: 2, block: "s", class: "Metal", cat: "alkaline", isotopes: "²²⁶Ra", config: "[Rn] 7s²", density: "5.5", ionization: "509.3", colorClass: "cat-alkaline" },
  { num: 89, symbol: "Ac", name: "Actinium", mass: "227", period: 9, group: 3, block: "f", class: "Metal", cat: "actinide", series: "actinide", isotopes: "²²⁷Ac", config: "[Rn] 6d¹ 7s²", density: "10.0", ionization: "499.0", colorClass: "cat-actinide" },
  { num: 90, symbol: "Th", name: "Thorium", mass: "232.04", period: 9, group: 4, block: "f", class: "Metal", cat: "actinide", series: "actinide", isotopes: "²³²Th", config: "[Rn] 6d² 7s²", density: "11.7", ionization: "587.0", colorClass: "cat-actinide" },
  { num: 91, symbol: "Pa", name: "Protactinium", mass: "231.04", period: 9, group: 5, block: "f", class: "Metal", cat: "actinide", series: "actinide", isotopes: "²³¹Pa", config: "[Rn] 5f² 6d¹ 7s²", density: "15.37", ionization: "568.0", colorClass: "cat-actinide" },
  { num: 92, symbol: "U", name: "Uranium", mass: "238.03", period: 9, group: 6, block: "f", class: "Metal", cat: "actinide", series: "actinide", isotopes: "²³⁸U", config: "[Rn] 5f³ 6d¹ 7s²", density: "19.1", ionization: "597.6", colorClass: "cat-actinide" },
  { num: 93, symbol: "Np", name: "Neptunium", mass: "237", period: 9, group: 7, block: "f", class: "Metal", cat: "actinide", series: "actinide", isotopes: "²³⁷Np", config: "[Rn] 5f⁴ 6d¹ 7s²", density: "20.45", ionization: "604.5", colorClass: "cat-actinide" },
  { num: 94, symbol: "Pu", name: "Plutonium", mass: "244", period: 9, group: 8, block: "f", class: "Metal", cat: "actinide", series: "actinide", isotopes: "²⁴⁴Pu", config: "[Rn] 5f⁶ 7s²", density: "19.85", ionization: "584.7", colorClass: "cat-actinide" },
  { num: 95, symbol: "Am", name: "Americium", mass: "243", period: 9, group: 9, block: "f", class: "Metal", cat: "actinide", series: "actinide", isotopes: "²⁴³Am", config: "[Rn] 5f⁷ 7s²", density: "13.69", ionization: "578.0", colorClass: "cat-actinide" },
  { num: 96, symbol: "Cm", name: "Curium", mass: "247", period: 9, group: 10, block: "f", class: "Metal", cat: "actinide", series: "actinide", isotopes: "²⁴⁷Cm", config: "[Rn] 5f⁷ 6d¹ 7s²", density: "13.51", ionization: "581.0", colorClass: "cat-actinide" },
  { num: 97, symbol: "Bk", name: "Berkelium", mass: "247", period: 9, group: 11, block: "f", class: "Metal", cat: "actinide", series: "actinide", isotopes: "²⁴⁷Bk", config: "[Rn] 5f⁹ 7s²", density: "14.78", ionization: "601.0", colorClass: "cat-actinide" },
  { num: 98, symbol: "Cf", name: "Californium", mass: "251", period: 9, group: 12, block: "f", class: "Metal", cat: "actinide", series: "actinide", isotopes: "²⁵¹Cf", config: "[Rn] 5f¹⁰ 7s²", density: "15.1", ionization: "608.0", colorClass: "cat-actinide" },
  { num: 99, symbol: "Es", name: "Einsteinium", mass: "252", period: 9, group: 13, block: "f", class: "Metal", cat: "actinide", series: "actinide", isotopes: "²⁵²Es", config: "[Rn] 5f¹¹ 7s²", density: "8.84", ionization: "619.0", colorClass: "cat-actinide" },
  { num: 100, symbol: "Fm", name: "Fermium", mass: "257", period: 9, group: 14, block: "f", class: "Metal", cat: "actinide", series: "actinide", isotopes: "²⁵⁷Fm", config: "[Rn] 5f¹² 7s²", density: "9.7", ionization: "627.0", colorClass: "cat-actinide" },
  { num: 101, symbol: "Md", name: "Mendelevium", mass: "258", period: 9, group: 15, block: "f", class: "Metal", cat: "actinide", series: "actinide", isotopes: "²⁵⁸Md", config: "[Rn] 5f¹³ 7s²", density: "10.3", ionization: "635.0", colorClass: "cat-actinide" },
  { num: 102, symbol: "No", name: "Nobelium", mass: "259", period: 9, group: 16, block: "f", class: "Metal", cat: "actinide", series: "actinide", isotopes: "²⁵⁹No", config: "[Rn] 5f¹⁴ 7s²", density: "9.9", ionization: "642.0", colorClass: "cat-actinide" },
  { num: 103, symbol: "Lr", name: "Lawrencium", mass: "266", period: 9, group: 17, block: "d", class: "Metal", cat: "actinide", series: "actinide", isotopes: "²⁶⁶Lr", config: "[Rn] 5f¹⁴ 7s² 7p¹", density: "15.6", ionization: "470.0", colorClass: "cat-actinide" },
  { num: 104, symbol: "Rf", name: "Rutherfordium", mass: "267", period: 7, group: 4, block: "d", class: "Metal", cat: "transition", isotopes: "²⁶⁷Rf", config: "[Rn] 5f¹⁴ 6d² 7s²", density: "23.2", ionization: "580.0", colorClass: "cat-transition" },
  { num: 105, symbol: "Db", name: "Dubnium", mass: "268", period: 7, group: 5, block: "d", class: "Metal", cat: "transition", isotopes: "²⁶⁸Db", config: "[Rn] 5f¹⁴ 6d³ 7s²", density: "29.3", ionization: "0", colorClass: "cat-transition" },
  { num: 106, symbol: "Sg", name: "Seaborgium", mass: "269", period: 7, group: 6, block: "d", class: "Metal", cat: "transition", isotopes: "²⁶⁹Sg", config: "[Rn] 5f¹⁴ 6d⁴ 7s²", density: "35.0", ionization: "0", colorClass: "cat-transition" },
  { num: 107, symbol: "Bh", name: "Bohrium", mass: "270", period: 7, group: 7, block: "d", class: "Metal", cat: "transition", isotopes: "²⁷⁰Bh", config: "[Rn] 5f¹⁴ 6d⁵ 7s²", density: "37.1", ionization: "0", colorClass: "cat-transition" },
  { num: 108, symbol: "Hs", name: "Hassium", mass: "277", period: 7, group: 8, block: "d", class: "Metal", cat: "transition", isotopes: "²⁷⁷Hs", config: "[Rn] 5f¹⁴ 6d⁶ 7s²", density: "40.7", ionization: "0", colorClass: "cat-transition" },
  { num: 109, symbol: "Mt", name: "Meitnerium", mass: "278", period: 7, group: 9, block: "d", class: "Metal", cat: "transition", isotopes: "²⁷⁸Mt", config: "[Rn] 5f¹⁴ 6d⁷ 7s²", density: "37.4", ionization: "0", colorClass: "cat-transition" },
  { num: 110, symbol: "Ds", name: "Darmstadtium", mass: "281", period: 7, group: 10, block: "d", class: "Metal", cat: "transition", isotopes: "²⁸¹Ds", config: "[Rn] 5f¹⁴ 6d⁸ 7s²", density: "34.8", ionization: "0", colorClass: "cat-transition" },
  { num: 111, symbol: "Rg", name: "Roentgenium", mass: "282", period: 7, group: 11, block: "d", class: "Metal", cat: "transition", isotopes: "²⁸²Rg", config: "[Rn] 5f¹⁴ 6d⁹ 7s²", density: "28.7", ionization: "0", colorClass: "cat-transition" },
  { num: 112, symbol: "Cn", name: "Copernicium", mass: "285", period: 7, group: 12, block: "d", class: "Metal", cat: "transition", isotopes: "²⁸⁵Cn", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", density: "23.7", ionization: "1154.9", colorClass: "cat-transition" },
  { num: 113, symbol: "Nh", name: "Nihonium", mass: "286", period: 7, group: 13, block: "p", class: "Metal", cat: "post-transition", isotopes: "²⁸⁶Nh", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", density: "16.0", ionization: "704.9", colorClass: "cat-post-transition" },
  { num: 114, symbol: "Fl", name: "Flerovium", mass: "289", period: 7, group: 14, block: "p", class: "Metal", cat: "post-transition", isotopes: "²⁸⁹Fl", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", density: "14.0", ionization: "823.9", colorClass: "cat-post-transition" },
  { num: 115, symbol: "Mc", name: "Moscovium", mass: "290", period: 7, group: 15, block: "p", class: "Metal", cat: "post-transition", isotopes: "²⁹⁰Mc", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", density: "13.5", ionization: "538.4", colorClass: "cat-post-transition" },
  { num: 116, symbol: "Lv", name: "Livermorium", mass: "293", period: 7, group: 16, block: "p", class: "Metal", cat: "post-transition", isotopes: "²⁹³Lv", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", density: "12.9", ionization: "705.5", colorClass: "cat-post-transition" },
  { num: 117, symbol: "Ts", name: "Tennessine", mass: "294", period: 7, group: 17, block: "p", class: "Non-metal", cat: "halogen", isotopes: "²⁹⁴Ts", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", density: "7.2", ionization: "737.4", colorClass: "cat-halogen" },
  { num: 118, symbol: "Og", name: "Oganesson", mass: "294", period: 7, group: 18, block: "p", class: "Non-metal", cat: "noble", isotopes: "²⁹⁴Og", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", density: "5.0", ionization: "839.4", colorClass: "cat-noble" }
];

document.addEventListener("DOMContentLoaded", () => {
  const tableEl = document.getElementById("periodic-table");
  const groupFiltersEl = document.getElementById("group-filters");
  const clearBtn = document.getElementById("clear-filters-btn");
  
  const prevNum = document.getElementById("prev-num");
  const prevSymbol = document.getElementById("prev-symbol");
  const prevName = document.getElementById("prev-name");
  const prevCategory = document.getElementById("prev-category");
  const prevIsotopes = document.getElementById("prev-isotopes");
  const prevConfig = document.getElementById("prev-config");
  const prevDensity = document.getElementById("prev-density");
  const prevIonization = document.getElementById("prev-ionization");
  const prevMass = document.getElementById("prev-mass");
  const previewCard = document.getElementById("preview-card");

  for (let i = 1; i <= 18; i++) {
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.dataset.type = "group";
    btn.dataset.val = i.toString();
    btn.textContent = i;
    groupFiltersEl.appendChild(btn);
  }

  let activeFilters = {
    class: null,
    block: null,
    group: null,
    period: null,
    series: null
  };

  const categoryColors = {
    "alkali": "#ea580c",
    "alkaline": "#db2777",
    "transition": "#0284c7",
    "post-transition": "#0d9488",
    "metalloid": "#d97706",
    "nonmetal": "#ea580c",
    "halogen": "#7c3aed",
    "noble": "#9333ea",
    "lanthanide": "#059669",
    "actinide": "#16a34a"
  };

  function updatePreview(elem) {
    prevNum.textContent = elem.num;
    prevSymbol.textContent = elem.symbol;
    prevName.textContent = elem.name;
    prevCategory.textContent = elem.class + ' (' + elem.cat + ')';
    prevIsotopes.innerHTML = elem.isotopes;
    prevConfig.textContent = elem.config;
    prevDensity.textContent = elem.density + ' g/cm³';
    prevIonization.textContent = elem.ionization + ' kJ/mol';
    prevMass.textContent = elem.mass + ' u';
    
    if (previewCard && categoryColors[elem.cat]) {
      previewCard.style.backgroundColor = categoryColors[elem.cat];
    }
  }

  function renderTable() {
    tableEl.innerHTML = "";
    
    elementsData.forEach(elem => {
      const card = document.createElement("div");
      card.className = `element-card ${elem.colorClass}`;
      card.style.gridColumn = elem.group;
      card.style.gridRow = elem.period;

      card.innerHTML = `
        <span class="elem-num">${elem.num}</span>
        <span class="elem-symbol">${elem.symbol}</span>
        <span class="elem-name">${elem.name}</span>
      `;

      let matches = true;
      if (activeFilters.class && elem.class !== activeFilters.class) matches = false;
      if (activeFilters.block && elem.block !== activeFilters.block) matches = false;
      if (activeFilters.group && elem.group.toString() !== activeFilters.group) matches = false;
      if (activeFilters.period && elem.period.toString() !== activeFilters.period && elem.period !== 8 && elem.period !== 9) matches = false;
      if (activeFilters.series && elem.series !== activeFilters.series) matches = false;

      if (!matches) {
        card.classList.add("dimmed");
      }

      card.addEventListener("mouseenter", () => {
        updatePreview(elem);
      });

      tableEl.appendChild(card);
    });
  }

  const defaultElem = elementsData.find(e => e.num === 1);
  if (defaultElem) updatePreview(defaultElem);

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.type;
      const val = btn.dataset.val;

      const groupBtns = document.querySelectorAll(`[data-type="${type}"]`);
      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
        activeFilters[type] = null;
      } else {
        groupBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeFilters[type] = val;
      }

      renderTable();
    });
  });

  clearBtn.addEventListener("click", () => {
    activeFilters = { class: null, block: null, group: null, period: null, series: null };
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    renderTable();
  });

  renderTable();
});