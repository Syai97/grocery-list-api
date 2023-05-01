"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          brand: "Twitterworks",
          name: "Sauce - Oyster",
          image: "http://dummyimage.com/238x100.png/cc0000/ffffff",
          upc12: 4036,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Viva",
          name: "Foam Dinner Plate",
          image: "http://dummyimage.com/164x100.png/dddddd/000000",
          upc12: 1721,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Janyx",
          name: "Bagel - 12 Grain Preslice",
          image: "http://dummyimage.com/194x100.png/5fa2dd/ffffff",
          upc12: 5356,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Livetube",
          name: "Cookie - Oreo 100x2",
          image: "http://dummyimage.com/141x100.png/dddddd/000000",
          upc12: 5505,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Kamba",
          name: "Beef - Cooked, Corned",
          image: "http://dummyimage.com/238x100.png/dddddd/000000",
          upc12: 5054,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Edgeify",
          name: "Lettuce - Romaine",
          image: "http://dummyimage.com/197x100.png/dddddd/000000",
          upc12: 3894,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Feedbug",
          name: "Basil - Seedlings Cookstown",
          image: "http://dummyimage.com/124x100.png/5fa2dd/ffffff",
          upc12: 1149,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Feednation",
          name: "Bread - Focaccia Quarter",
          image: "http://dummyimage.com/175x100.png/5fa2dd/ffffff",
          upc12: 3732,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Zooxo",
          name: "Cheese - Wine",
          image: "http://dummyimage.com/248x100.png/ff4444/ffffff",
          upc12: 8078,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Dynabox",
          name: "Split Peas - Green, Dry",
          image: "http://dummyimage.com/154x100.png/dddddd/000000",
          upc12: 6974,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Rhybox",
          name: "Sesame Seed Black",
          image: "http://dummyimage.com/135x100.png/ff4444/ffffff",
          upc12: 7299,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Blogspan",
          name: "Pastry - Trippleberry Muffin - Mini",
          image: "http://dummyimage.com/169x100.png/cc0000/ffffff",
          upc12: 3913,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Janyx",
          name: "Cornish Hen",
          image: "http://dummyimage.com/102x100.png/ff4444/ffffff",
          upc12: 5617,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Jabbercube",
          name: "Beer - Maudite",
          image: "http://dummyimage.com/215x100.png/dddddd/000000",
          upc12: 6379,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Thoughtstorm",
          name: "Wine - Red, Antinori Santa",
          image: "http://dummyimage.com/112x100.png/5fa2dd/ffffff",
          upc12: 6356,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Yodel",
          name: "Coconut - Creamed, Pure",
          image: "http://dummyimage.com/186x100.png/cc0000/ffffff",
          upc12: 5623,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Buzzbean",
          name: "Pastry - Apple Muffins - Mini",
          image: "http://dummyimage.com/131x100.png/dddddd/000000",
          upc12: 9408,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Voonix",
          name: "Spinach - Frozen",
          image: "http://dummyimage.com/196x100.png/5fa2dd/ffffff",
          upc12: 8278,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Myworks",
          name: "Straws - Cocktale",
          image: "http://dummyimage.com/235x100.png/5fa2dd/ffffff",
          upc12: 5062,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Photobug",
          name: "Muffin - Zero Transfat",
          image: "http://dummyimage.com/111x100.png/dddddd/000000",
          upc12: 3498,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Zava",
          name: "Icecream Bar - Del Monte",
          image: "http://dummyimage.com/142x100.png/dddddd/000000",
          upc12: 2479,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Babbleset",
          name: "Turkey - Ground. Lean",
          image: "http://dummyimage.com/132x100.png/dddddd/000000",
          upc12: 9064,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Kwilith",
          name: "Pepper - Paprika, Hungarian",
          image: "http://dummyimage.com/221x100.png/ff4444/ffffff",
          upc12: 1893,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Yakitri",
          name: "Nut - Pumpkin Seeds",
          image: "http://dummyimage.com/138x100.png/cc0000/ffffff",
          upc12: 6169,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Trudoo",
          name: "Beef - Inside Round",
          image: "http://dummyimage.com/106x100.png/5fa2dd/ffffff",
          upc12: 8948,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Feednation",
          name: "Wine - White, Colubia Cresh",
          image: "http://dummyimage.com/135x100.png/ff4444/ffffff",
          upc12: 1181,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Cogibox",
          name: "Beef - Ground Lean Fresh",
          image: "http://dummyimage.com/217x100.png/5fa2dd/ffffff",
          upc12: 6844,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Thoughtworks",
          name: "Oyster - In Shell",
          image: "http://dummyimage.com/117x100.png/dddddd/000000",
          upc12: 8013,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Divavu",
          name: "Lentils - Green Le Puy",
          image: "http://dummyimage.com/151x100.png/5fa2dd/ffffff",
          upc12: 9597,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Twitterlist",
          name: "Potatoes - Idaho 100 Count",
          image: "http://dummyimage.com/188x100.png/cc0000/ffffff",
          upc12: 8256,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Meezzy",
          name: "Gelatine Powder",
          image: "http://dummyimage.com/111x100.png/ff4444/ffffff",
          upc12: 4965,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Edgetag",
          name: "Longos - Lasagna Beef",
          image: "http://dummyimage.com/203x100.png/5fa2dd/ffffff",
          upc12: 7860,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Quinu",
          name: "Cookie Chocolate Chip With",
          image: "http://dummyimage.com/249x100.png/ff4444/ffffff",
          upc12: 1860,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Jetpulse",
          name: "Wine - Chianti Classica Docg",
          image: "http://dummyimage.com/204x100.png/5fa2dd/ffffff",
          upc12: 1850,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Edgetag",
          name: "Salmon Steak - Cohoe 8 Oz",
          image: "http://dummyimage.com/218x100.png/cc0000/ffffff",
          upc12: 8002,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Kwimbee",
          name: "Tea - Decaf 1 Cup",
          image: "http://dummyimage.com/153x100.png/dddddd/000000",
          upc12: 8179,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Yata",
          name: "Wine - Champagne Brut Veuve",
          image: "http://dummyimage.com/196x100.png/dddddd/000000",
          upc12: 9031,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Twitterlist",
          name: "Plums - Red",
          image: "http://dummyimage.com/170x100.png/5fa2dd/ffffff",
          upc12: 4899,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Thoughtsphere",
          name: "Chocolate - Dark Callets",
          image: "http://dummyimage.com/150x100.png/cc0000/ffffff",
          upc12: 3181,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Edgewire",
          name: "Veal - Chops, Split, Frenched",
          image: "http://dummyimage.com/177x100.png/ff4444/ffffff",
          upc12: 1717,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Oozz",
          name: "Beef - Texas Style Burger",
          image: "http://dummyimage.com/128x100.png/dddddd/000000",
          upc12: 2427,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Centimia",
          name: "Vinegar - Raspberry",
          image: "http://dummyimage.com/117x100.png/ff4444/ffffff",
          upc12: 1226,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Vinte",
          name: "Ecolab - Hobart Upr Prewash Arm",
          image: "http://dummyimage.com/117x100.png/ff4444/ffffff",
          upc12: 6890,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Rhynoodle",
          name: "Glass - Juice Clear 5oz 55005",
          image: "http://dummyimage.com/191x100.png/ff4444/ffffff",
          upc12: 1040,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Yadel",
          name: "Soup - Cream Of Broccoli, Dry",
          image: "http://dummyimage.com/134x100.png/cc0000/ffffff",
          upc12: 1921,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Babbleopia",
          name: "Lamb - Sausage Casings",
          image: "http://dummyimage.com/247x100.png/5fa2dd/ffffff",
          upc12: 5574,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Buzzdog",
          name: "Wine - Casillero Deldiablo",
          image: "http://dummyimage.com/113x100.png/5fa2dd/ffffff",
          upc12: 7510,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Innotype",
          name: "Cherries - Bing, Canned",
          image: "http://dummyimage.com/158x100.png/dddddd/000000",
          upc12: 8460,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Babbleopia",
          name: "Lettuce - Romaine",
          image: "http://dummyimage.com/242x100.png/dddddd/000000",
          upc12: 4443,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Skidoo",
          name: "Hagen Daza - Dk Choocolate",
          image: "http://dummyimage.com/164x100.png/cc0000/ffffff",
          upc12: 4142,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Voonyx",
          name: "Trout - Smoked",
          image: "http://dummyimage.com/231x100.png/ff4444/ffffff",
          upc12: 7105,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Skyvu",
          name: "Coffee - Espresso",
          image: "http://dummyimage.com/172x100.png/cc0000/ffffff",
          upc12: 4566,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Cogilith",
          name: "Cheese - Oka",
          image: "http://dummyimage.com/193x100.png/ff4444/ffffff",
          upc12: 3360,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Kamba",
          name: "Beef - Cooked, Corned",
          image: "http://dummyimage.com/163x100.png/dddddd/000000",
          upc12: 8748,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Livetube",
          name: "Flour - Chickpea",
          image: "http://dummyimage.com/208x100.png/5fa2dd/ffffff",
          upc12: 8435,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Snaptags",
          name: "Wine - Sherry Dry Sack, William",
          image: "http://dummyimage.com/183x100.png/cc0000/ffffff",
          upc12: 1529,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Fatz",
          name: "Chives - Fresh",
          image: "http://dummyimage.com/165x100.png/5fa2dd/ffffff",
          upc12: 3049,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Buzzbean",
          name: "Cucumber - Pickling Ontario",
          image: "http://dummyimage.com/242x100.png/dddddd/000000",
          upc12: 9327,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Meejo",
          name: "Napkin Colour",
          image: "http://dummyimage.com/179x100.png/dddddd/000000",
          upc12: 9382,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Leexo",
          name: "Soup - Knorr, Veg / Beef",
          image: "http://dummyimage.com/112x100.png/5fa2dd/ffffff",
          upc12: 6953,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Browsecat",
          name: "Kahlua",
          image: "http://dummyimage.com/147x100.png/ff4444/ffffff",
          upc12: 2934,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Wordpedia",
          name: "Placemat - Scallop, White",
          image: "http://dummyimage.com/193x100.png/dddddd/000000",
          upc12: 9781,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Rhybox",
          name: "Apron",
          image: "http://dummyimage.com/237x100.png/cc0000/ffffff",
          upc12: 7981,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Rhyloo",
          name: "Wine - Fino Tio Pepe Gonzalez",
          image: "http://dummyimage.com/199x100.png/ff4444/ffffff",
          upc12: 8676,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Omba",
          name: "Nantucket - Carrot Orange",
          image: "http://dummyimage.com/151x100.png/cc0000/ffffff",
          upc12: 5839,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Browsetype",
          name: "Soup Campbells Mexicali Tortilla",
          image: "http://dummyimage.com/192x100.png/cc0000/ffffff",
          upc12: 6749,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Wikido",
          name: "Fish - Soup Base, Bouillon",
          image: "http://dummyimage.com/214x100.png/cc0000/ffffff",
          upc12: 7418,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Zoomlounge",
          name: "Beef - Ground, Extra Lean, Fresh",
          image: "http://dummyimage.com/120x100.png/5fa2dd/ffffff",
          upc12: 6379,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Babblestorm",
          name: "Wine - Red, Marechal Foch",
          image: "http://dummyimage.com/114x100.png/cc0000/ffffff",
          upc12: 8940,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Avavee",
          name: "Energy Drink - Redbull 355ml",
          image: "http://dummyimage.com/120x100.png/dddddd/000000",
          upc12: 2264,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Mudo",
          name: "Anchovy Fillets",
          image: "http://dummyimage.com/211x100.png/5fa2dd/ffffff",
          upc12: 2582,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Bluezoom",
          name: "Pepper - Roasted Red",
          image: "http://dummyimage.com/186x100.png/dddddd/000000",
          upc12: 3434,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Livetube",
          name: "Teriyaki Sauce",
          image: "http://dummyimage.com/175x100.png/cc0000/ffffff",
          upc12: 4950,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Oyope",
          name: "Steamers White",
          image: "http://dummyimage.com/249x100.png/ff4444/ffffff",
          upc12: 5581,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Feedspan",
          name: "Pineapple - Golden",
          image: "http://dummyimage.com/234x100.png/ff4444/ffffff",
          upc12: 8128,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Divape",
          name: "Foie Gras",
          image: "http://dummyimage.com/201x100.png/cc0000/ffffff",
          upc12: 5907,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Ooba",
          name: "Sugar - Sweet N Low, Individual",
          image: "http://dummyimage.com/175x100.png/5fa2dd/ffffff",
          upc12: 3551,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Skyndu",
          name: "Wine - White, Mosel Gold",
          image: "http://dummyimage.com/200x100.png/cc0000/ffffff",
          upc12: 2428,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Topicshots",
          name: "Bread - Roll, Italian",
          image: "http://dummyimage.com/164x100.png/ff4444/ffffff",
          upc12: 4779,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Tagtune",
          name: "Puree - Strawberry",
          image: "http://dummyimage.com/103x100.png/5fa2dd/ffffff",
          upc12: 8355,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Meejo",
          name: "Coke - Classic, 355 Ml",
          image: "http://dummyimage.com/114x100.png/cc0000/ffffff",
          upc12: 6041,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Youspan",
          name: "Onions - White",
          image: "http://dummyimage.com/113x100.png/ff4444/ffffff",
          upc12: 1052,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Feedmix",
          name: "Compound - Rum",
          image: "http://dummyimage.com/128x100.png/cc0000/ffffff",
          upc12: 4996,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Eire",
          name: "Trout - Hot Smkd, Dbl Fillet",
          image: "http://dummyimage.com/170x100.png/dddddd/000000",
          upc12: 6783,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Bluejam",
          name: "Wine - Prosecco Valdobienne",
          image: "http://dummyimage.com/147x100.png/5fa2dd/ffffff",
          upc12: 7884,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Chatterbridge",
          name: "Lettuce - Arugula",
          image: "http://dummyimage.com/122x100.png/cc0000/ffffff",
          upc12: 6998,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Quinu",
          name: "Pork - Smoked Back Bacon",
          image: "http://dummyimage.com/121x100.png/cc0000/ffffff",
          upc12: 9739,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Pixope",
          name: "Salmon Steak - Cohoe 8 Oz",
          image: "http://dummyimage.com/132x100.png/5fa2dd/ffffff",
          upc12: 9615,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Zoomcast",
          name: "Soup - Campbells Chicken",
          image: "http://dummyimage.com/245x100.png/cc0000/ffffff",
          upc12: 1775,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Devbug",
          name: "Salmon - Sockeye Raw",
          image: "http://dummyimage.com/108x100.png/cc0000/ffffff",
          upc12: 1303,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Fanoodle",
          name: "Wine - Lou Black Shiraz",
          image: "http://dummyimage.com/127x100.png/5fa2dd/ffffff",
          upc12: 7516,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Agimba",
          name: "Sugar - Fine",
          image: "http://dummyimage.com/102x100.png/5fa2dd/ffffff",
          upc12: 5090,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Zoovu",
          name: "Coffee - Colombian, Portioned",
          image: "http://dummyimage.com/195x100.png/dddddd/000000",
          upc12: 6625,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Quinu",
          name: "Almonds Ground Blanched",
          image: "http://dummyimage.com/182x100.png/5fa2dd/ffffff",
          upc12: 4117,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Skalith",
          name: "Raspberries - Frozen",
          image: "http://dummyimage.com/250x100.png/cc0000/ffffff",
          upc12: 9337,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Realfire",
          name: "Bread - Kimel Stick Poly",
          image: "http://dummyimage.com/138x100.png/ff4444/ffffff",
          upc12: 3807,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Flashspan",
          name: "Icecream - Dstk Cml And Fdg",
          image: "http://dummyimage.com/240x100.png/5fa2dd/ffffff",
          upc12: 7884,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Dazzlesphere",
          name: "Veal - Bones",
          image: "http://dummyimage.com/153x100.png/dddddd/000000",
          upc12: 1847,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "InnoZ",
          name: "Shallots",
          image: "http://dummyimage.com/221x100.png/cc0000/ffffff",
          upc12: 7446,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand: "Voonyx",
          name: "Bread - Rosemary Focaccia",
          image: "http://dummyimage.com/248x100.png/ff4444/ffffff",
          upc12: 4969,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};