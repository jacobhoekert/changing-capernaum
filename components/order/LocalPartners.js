import React, { useState, useEffect } from "react";
import "../../styles/order/local_partners.scss";
import ProductMenu from "../order/ProductMenu";
import CustomRequest from "../order/CustomRequest";
import CartBanner from "../order/CartBanner";

const LocalPartners = (props) => {
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [selectedList, setSelectedList] = useState([]);
  const [isPartnerSelected, setIsPartnerSelected] = useState(false);

  const localPartnersList = [
    {
      imgURL: "/building.png",
      name: "Building Three Coffee"
    },
    {
      imgURL: "/red-point-logo.png",
      name: "Cafe Red Point"
    },
    {
      imgURL: "/ola-juice-bar-logo.png",
      name: "Ola Juice Bar"
    },
    {
      imgURL: "/ten-thousand-cookies-logo.png",
      name: "Ten Thousand Cookies"
    },
    {
      imgURL: "/nighting.jpg",
      name: "Nightingale Bread"
    } 
  ];

  const buildingThreeMenu = [
    [
      "Drinks",
      [
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-drip.jpeg",
          name: "Drip Coffee",
          description: "Good Ole Drip.",
          amount: 300,
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-drip.jpeg",
          name: "Americano",
          description: "Espresso + hot water",
          amount: 300,
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-pourover.jpeg",
          name: "Pourover",
          description: "El Salvador Coffee. Handpoured with a V60.",
          amount: 450,
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-espresso.jpeg",
          name: "Espresso",
          description: "2 shots of Long Cap Espresso",
          amount: 250,
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-latte.png",
          name: "Latte",
          description: "Double shot w/ steamed milk",
          amount: 425,
          coffeeOptions: ""
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-latte.png",
          name: "Mocha",
          description: "Double shot w/ steamed milk + chocolate",
          amount: 425,
          coffeeOptions: ""
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-espresso.jpeg",
          name: "Macchiato",
          description: "Double shot w/ dollop of steamed milk",
          amount: 300,
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-espresso.jpeg",
          name: "Cortado",
          description: "Double shot w/ steamed milk",
          amount: 300,
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-cappuccino.jpeg",
          name: "Cappuccino",
          description: "Double shot w/ steamed milk + froth",
          amount: 350,
          coffeeOptions: ""
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-coldbrew.jpeg",
          name: "Cold Brew",
          description: "",
          amount: 400,
          coffeeOptions: ""
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-nitro.png",
          name: "Nitro",
          description: "Nitrogen infused cold brew",
          amount: 400,
          coffeeOptions: ""
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-hotcocoa.jpg",
          name: "Hot Chocolate",
          description: "",
          amount: 300,
          coffeeOptions: ""
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-chai.jpg",
          name: "Chai",
          description: "",
          amount: 400,
          coffeeOptions: ""
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-oj.jpeg",
          name: "Orange Juice",
          description: "Naked Orange Juice",
          amount: 350,
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-kombucha.jpeg",
          name: "Kombucha",
          description: "",
          amount: 400,
        },
      ]
    ],
    [
      "Brunch",
      [
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-pastries.jpeg",
          name: "Pastries",
          description: "All of our pastries are made on site by Snowberry Bakehouse. We have a large variety of vegan and gluten free options that are delicious!",
          amount: 350,
          foodOptions: "Lemon Poppy Seed Muffin (v, gf), Chocolate Chip Cookie (v, gf), Almond Rasberry Fanancier (v, gf), Rasberry Oat Bar (gf), Scone"
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-pastypie.jpeg",
          name: "Pasty Pie",
          description: "Our pasty pies are made by the Pasty Company. We have 3 options that are all great and a good tummy filler. There is a vegan option which is the springs.",
          amount: 700,
          foodOptions: "The Capitol, The Springs, Fruit"
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-quiche.jpeg",
          name: "Quiche",
          description: "",
          amount: 350,
          foodOptions: "Veggie (Green Chili and Cheese), Meat - Lorraine Bacon & Shallot, Blueberries optional"
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-bagel.jpeg",
          name: "Bagel & Cream Cheese",
          description: "",
          amount: 325,
          foodOptions: "Types: Plain, Jalapeño, Blueberry, Everything, Cinnamon Raisin | Options: Cream Cheese, Butter, Toasted"
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-granola.png",
          name: "Granola + Milk",
          description: "",
          amount: 400,
          foodOptions: "Milk: Normal, Almond, Coconut, Oat, Breve"
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-burrito.jpeg",
          name: "Breakfast Burrito",
          description: "",
          amount: 650,
        },
      ]
    ],
    [
      "Coffee Beans",
      [
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/ethiopia-natural-amaro.jpg",
          name: "Ethiopia Natural Amaro",
          description: "Process: Natural ~~~ Impressions: Syrupy, Coconut Sugar, Hawaiian Punch",
          amount: 1800,
          beanGrind: "Whole Bean"
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/ethiopia-natural-amaro.jpg",
          name: "Guatemala Teanzul Natural",
          description: "Process: Natural ~~~ Impressions: Almond, Raspberry, Croissant",
          amount: 1700,
          beanGrind: "Whole Bean"
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/ethiopia-natural-amaro.jpg",
          name: "Guatemala El Durazno",
          description: "Process: Washed ~~~ Impressions: White peach, caramel, dark chocolate",
          amount: 1700,
          beanGrind: "Whole Bean"
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/ethiopia-natural-amaro.jpg",
          name: "Long Cap Espresso",
          description: "Espresso Blend: Guatemala Piedra Partida & Ethiopia Yirgacheffe ~~~ Process: Washed",
          amount: 1700,
          beanGrind: "Whole Bean"
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/ethiopia-natural-amaro.jpg",
          name: "Decaf Columbia",
          description: "Process: Sugar Cane ~~~ Impressions: Smooth Creamy Chocolates, Full Body",
          amount: 1700,
          beanGrind: "Whole Bean"
        }
      ]
    ],
    [
      "Brewing Products",
      [
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/chemex.jpg",
          name: "Chemex 8 Cup",
          description: "",
          amount: 4600,
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/v60.jpg",
          name: "Hario V60 Brewer",
          description: "",
          amount: 2300,
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/aeropress.png",
          name: "Aeropress",
          description: "",
          amount: 3200,
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/chemex-filters.jpg",
          name: "Chemex Filters",
          description: "100 Count",
          amount: 1050,
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/v60-filters.jpg",
          name: "Hario V60 Filters",
          description: "60 Count",
          amount: 700,
        },
      ]
    ]
  ];

  const nightingGaleMenu = [
    [
    "Standard Loaves",
      [
        {
          company: "Nightingale Bread",
          name: "Blonde",
          description: "One third fresh-milled whole grain flour, two thirds white bread flour.",
          amount: 800,
          requiredDescriptions: ["Whole ( $8.00 )", "Half ( $4.00 )"],
          requiredOptions: [800, 400]
        },
        {
          company: "Nightingale Bread",
          name: "Red",
          description: "Fresh milled red wheat from the San Luis Valley, some of it slightly sifted, with a little rye and spelt",
          amount: 800,
          requiredDescriptions: ["Whole ( $8.00 )", "Half ( $4.00 )"],
          requiredOptions: [800, 400]
        },
        {
          company: "Nightingale Bread",
          name: "Seeded Rustic",
          description: "As above, but with organic sunflower, flax, sesame, pumpkin, oat, and poppy seeds.",
          amount: 800,
          requiredDescriptions: ["Whole ( $8.00 )", "Half ( $4.00 )"],
          requiredOptions: [800, 400]
        },
        {
          company: "Nightingale Bread",
          name: "Spelt",
          description: "All fresh-milled whole spelt flour.",
          amount: 800,
          requiredDescriptions: ["Whole ( $8.00 )", "Half ( $4.00 )"],
          requiredOptions: [800, 400]
        },
        {
          company: "Nightingale Bread",
          name: "Daily Special",
          description: "Rotates daily. Contact us for details!",
          amount: 800,
          requiredDescriptions: ["Whole ( $8.00 )", "Half ( $4.00 )"],
          requiredOptions: [800, 400]
        },
      ]
    ],
    [
      "Yeasted Loaves",
      [
        {
          company: "Nightingale Bread",
          name: "Baguette",
          description: "The iconic French loaf.",
          amount: 400
        },
        {
          company: "Nightingale Bread",
          name: "Ciabatta Rolls",
          description: "Crusty, fist-sized rolls with a tender crumb.",
          amount: 200
        }
      ]
    ],
    [
    "Nordic Loaves",
      [
        {
          company: "Nightingale Bread",
          name: "Rye",
          description: "All fresh-milled whole rye flour.",
          amount: 800
        },
        {
          company: "Nightingale Bread",
          name: "Sprouted Rye",
          description: "Fresh-milled whole rye and spelt flour. Packed with flax, sesame, sunflower, pumpkin, and sprouted rye berries.",
          amount: 800
        },
        {
          company: "Nightingale Bread",
          name: "Backcountry",
          description: "As above, but with dried apricot, cranberry, raisin, date, toasted walnut, and Lockhart honey.",
          amount: 1000
        }
      ]
    ]
  ];

  const redPointCafeMenu = [
    [
      "Smoothies",
      [
        {
          company: "Cafe Red Point",
          name: "Foehnsturm Smoothie",
          description: "Almond milk, Equal Exchange organic chocolate, cold-brew coffee, banana, organic coconut oil, cashews.",
          amount: 750,
          requiredDescriptions: ["20 Oz ( $7.50 )", "12 Oz ( $5.50 )"],
          requiredOptions: [750, 550],
          optionalDescriptions: ["Gnarly Vanilla Whey ($1.00)", "Ascent Chocolate Whey ($1.00)", "Gnarly Vanilla Vegan ($1.00)", "Gnarly Chocolate Vegan ($1.00)", "Collagen Protein ($1.00)", "Banana ($0.50)", "Greens ($0.50)", "Microgreens ($1.00)", "Micronized Creatine ($0.50)", "Extra Almond Butter ($0.75)", "Maca Powder ($0.50)", "Glutamine ($0.50)"],
          optionalOptions: [100, 100, 100, 100, 100, 50, 50, 100, 50, 75, 50, 50],
          specialInstructions: ""
        },
        {
          company: "Cafe Red Point",
          name: "British Junction Smoothie",
          description: "Almond milk, Equal Exchange organic chocolate, organic strawberries, organic blueberries, almonds.",
          amount: 750,
          requiredDescriptions: ["20 Oz ( $7.50 )", "12 Oz ( $5.50 )"],
          requiredOptions: [750, 550],
          optionalDescriptions: ["Gnarly Vanilla Whey ($1.00)", "Ascent Chocolate Whey ($1.00)", "Gnarly Vanilla Vegan ($1.00)", "Gnarly Chocolate Vegan ($1.00)", "Collagen Protein ($1.00)", "Banana ($0.50)", "Greens ($0.50)", "Microgreens ($1.00)", "Micronized Creatine ($0.50)", "Extra Almond Butter ($0.75)", "Maca Powder ($0.50)", "Glutamine ($0.50)"],
          optionalOptions: [100, 100, 100, 100, 100, 50, 50, 100, 50, 75, 50, 50],
          specialInstructions: ""
        },
        {
          company: "Cafe Red Point",
          name: "Tonsai Beach Smoothie",
          description: "Coconut water, pineapple, banana, lime, cashews.",
          amount: 750,
          requiredDescriptions: ["20 Oz ( $7.50 )", "12 Oz ( $5.50 )"],
          requiredOptions: [750, 550],
          optionalDescriptions: ["Gnarly Vanilla Whey ($1.00)", "Ascent Chocolate Whey ($1.00)", "Gnarly Vanilla Vegan ($1.00)", "Gnarly Chocolate Vegan ($1.00)", "Collagen Protein ($1.00)", "Banana ($0.50)", "Greens ($0.50)", "Microgreens ($1.00)", "Micronized Creatine ($0.50)", "Extra Almond Butter ($0.75)", "Maca Powder ($0.50)", "Glutamine ($0.50)"],
          optionalOptions: [100, 100, 100, 100, 100, 50, 50, 100, 50, 75, 50, 50],
          specialInstructions: ""
        },
        {
          company: "Cafe Red Point",
          name: "Strawberry",
          description: "Almond milk, organic strawberries, local organic honey, almonds.",
          amount: 750,
          requiredDescriptions: ["20 Oz ( $7.50 )", "12 Oz ( $4.50 )"],
          requiredOptions: [750, 450],
          optionalDescriptions: ["Gnarly Vanilla Whey ($1.00)", "Ascent Chocolate Whey ($1.00)", "Gnarly Vanilla Vegan ($1.00)", "Gnarly Chocolate Vegan ($1.00)", "Collagen Protein ($1.00)", "Banana ($0.50)", "Greens ($0.50)", "Microgreens ($1.00)", "Micronized Creatine ($0.50)", "Extra Almond Butter ($0.75)", "Maca Powder ($0.50)", "Glutamine ($0.50)"],
          optionalOptions: [100, 100, 100, 100, 100, 50, 50, 100, 50, 75, 50, 50],
          specialInstructions: ""
        },
        {
          company: "Cafe Red Point",
          name: "Banana",
          description: "Almond milk, banana, almonds, honey.",
          amount: 750,
          requiredDescriptions: ["20 Oz ( $7.50 )", "12 Oz ( $4.50 )"],
          requiredOptions: [750, 450],
          optionalDescriptions: ["Gnarly Vanilla Whey ($1.00)", "Ascent Chocolate Whey ($1.00)", "Gnarly Vanilla Vegan ($1.00)", "Gnarly Chocolate Vegan ($1.00)", "Collagen Protein ($1.00)", "Banana ($0.50)", "Greens ($0.50)", "Microgreens ($1.00)", "Micronized Creatine ($0.50)", "Extra Almond Butter ($0.75)", "Maca Powder ($0.50)", "Glutamine ($0.50)"],
          optionalOptions: [100, 100, 100, 100, 100, 50, 50, 100, 50, 75, 50, 50],
          specialInstructions: ""
        },
        {
          company: "Cafe Red Point",
          name: "Red Rocks Smoothie",
          description: "Coconut water, organic strawberries, organic blueberries, organic raspberries, almonds.",
          amount: 750,
          requiredDescriptions: ["20 Oz ( $7.50 )", "12 Oz ( $5.50 )"],
          requiredOptions: [750, 550],
          optionalDescriptions: ["Gnarly Vanilla Whey ($1.00)", "Ascent Chocolate Whey ($1.00)", "Gnarly Vanilla Vegan ($1.00)", "Gnarly Chocolate Vegan ($1.00)", "Collagen Protein ($1.00)", "Banana ($0.50)", "Greens ($0.50)", "Microgreens ($1.00)", "Micronized Creatine ($0.50)", "Extra Almond Butter ($0.75)", "Maca Powder ($0.50)", "Glutamine ($0.50)"],
          optionalOptions: [100, 100, 100, 100, 100, 50, 50, 100, 50, 75, 50, 50],
          specialInstructions: ""
        },
        {
          company: "Cafe Red Point",
          name: "Whipper Smoothie",
          description: "Almond milk, organic almond butter, banana, Equal Exchange organic chocolate.",
          amount: 750,
          requiredDescriptions: ["20 Oz ( $7.50 )", "12 Oz ( $5.50 )"],
          requiredOptions: [750, 550],
          optionalDescriptions: ["Gnarly Vanilla Whey ($1.00)", "Ascent Chocolate Whey ($1.00)", "Gnarly Vanilla Vegan ($1.00)", "Gnarly Chocolate Vegan ($1.00)", "Collagen Protein ($1.00)", "Banana ($0.50)", "Greens ($0.50)", "Microgreens ($1.00)", "Micronized Creatine ($0.50)", "Extra Almond Butter ($0.75)", "Maca Powder ($0.50)", "Glutamine ($0.50)"],
          optionalOptions: [100, 100, 100, 100, 100, 50, 50, 100, 50, 75, 50, 50],
          specialInstructions: ""
        },
        {
          company: "Cafe Red Point",
          name: "Green Machine Smoothie",
          description: "Organic kale, organic spinach, ginger, lime, pineapple, coconut water, local organic honey.",
          amount: 750,
          requiredDescriptions: ["20 Oz ( $7.50 )", "12 Oz ( $5.50 )"],
          requiredOptions: [750, 550],
          optionalDescriptions: ["Gnarly Vanilla Whey ($1.00)", "Ascent Chocolate Whey ($1.00)", "Gnarly Vanilla Vegan ($1.00)", "Gnarly Chocolate Vegan ($1.00)", "Collagen Protein ($1.00)", "Banana ($0.50)", "Greens ($0.50)", "Microgreens ($1.00)", "Micronized Creatine ($0.50)", "Extra Almond Butter ($0.75)", "Maca Powder ($0.50)", "Glutamine ($0.50)"],
          optionalOptions: [100, 100, 100, 100, 100, 50, 50, 100, 50, 75, 50, 50],
          specialInstructions: ""
        },
        {
          company: "Cafe Red Point",
          name: "Strawberry Banana",
          description: "Almond milk, organic strawberries, banana, local organic honey, almonds.",
          amount: 750,
          requiredDescriptions: ["20 Oz ( $7.50 )", "12 Oz ( $4.50 )"],
          requiredOptions: [750, 450],
          optionalDescriptions: ["Gnarly Vanilla Whey ($1.00)", "Ascent Chocolate Whey ($1.00)", "Gnarly Vanilla Vegan ($1.00)", "Gnarly Chocolate Vegan ($1.00)", "Collagen Protein ($1.00)", "Banana ($0.50)", "Greens ($0.50)", "Microgreens ($1.00)", "Micronized Creatine ($0.50)", "Extra Almond Butter ($0.75)", "Maca Powder ($0.50)", "Glutamine ($0.50)"],
          optionalOptions: [100, 100, 100, 100, 100, 50, 50, 100, 50, 75, 50, 50],
          specialInstructions: ""
        },
        {
          company: "Cafe Red Point",
          name: "Purple Pineberry",
          description: "Organic blueberries, pineapple, banana, cashews, coconut water.",
          amount: 750,
          requiredDescriptions: ["20 Oz ( $7.50 )", "12 Oz ( $5.50 )"],
          requiredOptions: [750, 550],
          optionalDescriptions: ["Gnarly Vanilla Whey ($1.00)", "Ascent Chocolate Whey ($1.00)", "Gnarly Vanilla Vegan ($1.00)", "Gnarly Chocolate Vegan ($1.00)", "Collagen Protein ($1.00)", "Banana ($0.50)", "Greens ($0.50)", "Microgreens ($1.00)", "Micronized Creatine ($0.50)", "Extra Almond Butter ($0.75)", "Maca Powder ($0.50)", "Glutamine ($0.50)"],
          optionalOptions: [100, 100, 100, 100, 100, 50, 50, 100, 50, 75, 50, 50],
          specialInstructions: ""
        },
      ]
    ],
    [
      "Bowls",
      [
        {
          company: "Cafe Red Point",
          name: "Traditional Acai Bowl",
          description: "Organic acai, coconut water, banana, organic strawberry, topped with granola and local organic honey.",
          amount: 825,
          optionalDescriptions: ["Extra Nicki's Local Granola ($0.50)", "Sliced Banana ($0.50)", "Almond Butter ($0.75)", "Spinach blended in ($0.50)", "Creatine ($0.50)", "Glutamine ($0.50)", "Maca Powder ($0.50)", "Ascent Chocolate Whey ($1.00)", "Gnarly Chocolate Vegan ($1.00)", "Gnarly Vanilla Vegan ($1.00)", "Gnarly Vanilla Whey ($1.00)"],
          optionalOptions: [50, 50, 75, 50, 50, 50, 50, 100, 100, 100, 100],
          specialInstructions: ""
        },
        {
          company: "Cafe Red Point",
          name: "Hot Breakfast Bowl",
          description: "Organic quinoa. Please put choice of two toppings in notes. Additional toppings are listed at prices below.",
          amount: 400,
          optionalDescriptions: ["Shredded Coconut ($0.50)", "Sliced Banana ($0.50)", "Almonds ($0.50)", "Cashews ($0.50)", "Walnuts ($0.50)", "Organic Rasins ($0.25)", "Local Jam ($0.50)", "Organic Maple Syrup ($0.25)", "Almond Butter ($0.75)", "Cacao Nibs ($0.75)", "Lockhart Honey ($0.25)", "Hemp Seeds ($0.75)", "Nicki's Local Granola ($0.50)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)"],
          optionalOptions: [50, 50, 50, 50, 50, 25, 50, 25, 75, 75, 25, 75, 50, 100, 100, 100, 100],
          specialInstructions: ""
        },
        {
          company: "Cafe Red Point",
          name: "Mediterranean Bowl",
          description: "Organic grape tomatoes, organic cucumbers, Kalamata olives, Napa Valley organic olive oil, organic apple cider vinegar, garnished with microgreens, Maldon finishing salt on organic quinoa.",
          amount: 750,
          optionalDescriptions: ["Humanely Raised Diced Chicken Breast ($4.00)", "Callicrate Beef Grilled Skirt Steak ($5.00)", "Feta ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Extra Callicrate Beef Grilled Skirt Steak ($5.00)", "Humanely Raised Diced Chicken Breast ($4.00)"],
          optionalOptions: [400, 500, 100, 100, 100, 100, 100, 500, 400],
          specialInstructions: ""
        },
        {
          company: "Cafe Red Point",
          name: "Power Egg Bowl",
          description: "2 free-range eggs from an Amish Farm in Yoder, organic grape tomatoes, organic quinoa.",
          amount: 500,
          requiredDescriptions: ["Over Easy", "Over Medium", "Over Hard", "Scrambled", "Sunny Side Up", "Hard Boiled"],
          requiredOptions: [500, 500, 500, 500, 500, 500],
          optionalDescriptions: ["Additional Egg ($1.00)", "Additional Egg ($1.00)", "Additional Egg ($1.00)", "Additional Egg ($1.00)", "Hormone Free Canadian Bacon ($1.50)", "Organic Spinach (Raw) ($1.50)", "Organic Spinach (Sauteed) ($1.50)", "Feta ($1.00)", "Callicrate Beef Grilled Skirt Steak ($5.00)", "Chicken Breast ($4.00)", "Cilantro Garlic Dip ($1.00)"],
          optionalOptions: [100, 100, 100, 100, 150, 150, 150, 100, 500, 400, 100],
          specialInstructions: ""
        },
        {
          company: "Cafe Red Point",
          name: "Bouldering Bowl",
          description: "Organic baby spinach, organic grape tomatoes, Napa Valley organic olive oil, organic apple cider vinegar, garnished with microgreens, Maldon finishing salt on organic quinoa.",
          amount: 750,
          optionalDescriptions: ["Humanely Raised Diced Chicken Breast ($4.00)", "Callicrate Beef Grilled Skirt Steak ($5.00)", "Feta ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Extra Callicrate Beef Grilled Skirt Steak ($5.00)", "Humanely Raised Diced Chicken Breast ($4.00)"],
          optionalOptions: [400, 500, 100, 100, 100, 100, 100, 500, 400],
          specialInstructions: ""
        },
      ]
    ],
    [
      "Salads",
      [
        {
          company: "Cafe Red Point",
          name: "Mediterranean Salad",
          description: "Organic baby spinach, organic grape tomatoes, organic cucumbers, Kalamata olives, Napa Valley organic olive oil, organic apple cider vinegar, garnished with microgreens, Maldon finishing salt.",
          amount: 750,
          optionalDescriptions: ["Humanely Raised Diced Chicken Breast ($4.00)", "Callicrate Beef Grilled Skirt Steak ($5.00)", "Feta ($1.00)", "Organic Quinoa ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Extra Callicrate Beef Grilled Skirt Steak ($5.00)", "Humanely Raised Diced Chicken Breast ($4.00)"],
          optionalOptions: [400, 500, 100, 100, 100, 100, 100, 100, 500, 400],
          specialInstructions: ""
        },
        {
          company: "Cafe Red Point",
          name: "California Salad",
          description: "Organic baby spinach, organic baby kale, organic grape tomatoes, walnuts, organic raisins, Napa Valley organic olive oil, organic apple cider vinegar, garnished with microgreens, Maldon finishing salt.",
          amount: 750,
          optionalDescriptions: ["Humanely Raised Diced Chicken Breast ($4.00)", "Callicrate Beef Grilled Skirt Steak ($5.00)", "Feta ($1.00)", "Organic Quinoa ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Extra Callicrate Beef Grilled Skirt Steak ($5.00)", "Humanely Raised Diced Chicken Breast ($4.00)"],
          optionalOptions: [400, 500, 100, 100, 100, 100, 100, 100, 500, 400],
          specialInstructions: ""
        },
        {
          company: "Cafe Red Point",
          name: "Half Salads",
          description: "Organic grape tomatoes, organic cucumbers, Kalamata olives, Napa Valley organic olive oil, organic apple cider vinegar, garnished with microgreens, Maldon finishing salt on organic quinoa.",
          amount: 450,
          requiredDescriptions: ["Mediterranean Salad", "California Salad"],
          requiredOptions: [450, 450],
          optionalDescriptions: ["Humanely Raised Diced Chicken Breast ($2.50)", "Callicrate Beef Grilled Skirt Steak ($2.75)", "Feta ($0.50)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)"],
          optionalOptions: [250, 275, 50, 100, 100],
          specialInstructions: ""
        },
      ]
    ],
    [
      "Entrees",
      [
        {
          company: "Cafe Red Point",
          name: "Overnight Oats Blueberry and Almonds",
          description: "Dairy free, contains nuts",
          amount: 400,
          specialInstructions: ""
        },
        {
          company: "Cafe Red Point",
          name: "Overnight Oats Banana Milk and Walnuts",
          description: "Dairy free, contains nuts",
          amount: 400,
          specialInstructions: ""
        },
        {
          company: "Cafe Red Point",
          name: "Grilled Steak Wrap",
          description: "Callicrate beef grilled skirt steak, organic baby kale, organic baby spinach, organic pickled onion, Sriracha mayo.",
          amount: 825,
          optionalDescriptions: ["Add Side California Salad ($3.00)", "Add Side Mediterranean Salad ($3.00)", "Chicken on side salad ($2.50)", "Steak on side salad ($2.75)", "Extra Callicrate Beef Grilled Skirt Steak ($5.00)", "Feta ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)"],
          optionalOptions: [300, 300, 250, 275, 500, 100, 100, 100],
          specialInstructions: ""
        },
        {
          company: "Cafe Red Point",
          name: "Tacos",
          description: "3 tortillas filled with your choice of protein, cabbage blend, organic pickled onions, lime and salsa on the side.",
          amount: 925,
          requiredDescriptions: ["Callicrate Beef Grilled Steak", "Humanely Raised Chicken Breast"],
          requiredOptions: [925, 925],
          optionalDescriptions: ["Cilantro Garlic Dipping Sauce ($1.00)", "Extra Salsa ($0.75)", "Feta ($1.00)"],
          optionalOptions: [100, 75, 100],
          specialInstructions: ""
        },
        {
          company: "Cafe Red Point",
          name: "Paleo Waffle",
          description: "Topped with organic maple syrup or organic whipped cream.",
          amount: 700,
          requiredDescriptions: ["Full", "Half"],
          requiredOptions: [700, 425],
          optionalDescriptions: ["Add Organic Almond Butter ($0.75)", "Maple Syrup", "Melted Butter", "Whipped Cream", "Sliced Banana ($0.50)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)"],
          optionalOptions: [75, 0, 0, 0, 50, 100, 100, 100, 100],
          specialInstructions: ""
        },
      ]
    ],
  ];

  const olaJuiceBarMenu = [
    [
      "Juice Blends",
      [
        {
          company: "Ola Juice Bar",
          name: "Green Clean",
          description: "celery, cucumber, greens, parsley, lemon",
          amount: 850,
        },
        {
          company: "Ola Juice Bar",
          name: "Green Master",
          description: "kale, apple, ginger, cayenne, lemon, maple syrup, water",
          amount: 850,
        },
        {
          company: "Ola Juice Bar",
          name: "Green Mojito",
          description: "pineapple, cucumber, apple, lime, mint, spinach",
          amount: 850,
        },
        {
          company: "Ola Juice Bar",
          name: "Sweet Veggie",
          description: "beet, carrot, greens, celery, cucumber, parsley, apple, lemon",
          amount: 850,
        },
        {
          company: "Ola Juice Bar",
          name: "The Energizer",
          description: "apple, beet, lemon, ginger",
          amount: 850,
        },
        {
          company: "Ola Juice Bar",
          name: "The Green",
          description: "cucumber, apple, ginger, lemon, greens",
          amount: 850,
        },
        {
          company: "Ola Juice Bar",
          name: "The Red",
          description: "beet, carrot, orange, apple, pineapple",
          amount: 850,
        },
      ]
    ],
    [
      "Shots",
      [
        {
          company: "Ola Juice Bar",
          name: "Cold Elixir",
          description: "ginger, lemon, cayenne",
          amount: 425,
        },
        {
          company: "Ola Juice Bar",
          name: "Ginger",
          description: "cold-pressed ginger root",
          amount: 425,
          currency: "usd",
          quantity: 1,
        },
        {
          company: "Ola Juice Bar",
          name: "Green Jolt",
          description: "wheatgrass and lime",
          amount: 425,
        },
        {
          company: "Ola Juice Bar",
          name: "The Obliterator",
          description: "turmeric, ginger, garlic, apple cider vinegar, lemon, cayenne",
          amount: 425,
        },
        {
          company: "Wheatgrass",
          name: "The Obliterator",
          description: "locally-grown, cold-pressed",
          amount: 425,
        },
      ]
    ],
    [
      "Acai Bowls",
      [
        {
          company: "Ola Juice Bar",
          name: "Classic Acai Bowl",
          description: "BASE: açai, blueberries, strawberries, bananas, almond milk ~~~ TOPPINGS: organic granola, blueberries, strawberries, banana",
          amount: 900,
          requiredDescriptions: ["Small ( $9.00 )", "Large ( $13.75 )"],
          requiredOptions: [900, 1375],
          optionalDescriptions: ["Paleo Granola ($2.00)"],
          optionalOptions: [200],
          specialInstructions: ""
        },
        {
          company: "Ola Juice Bar",
          name: "Estelle's Acai Bowl",
          description: "BASE: açai, strawberries, bananas, almondmilk, almond or peanut butter ~~~ TOPPINGS: organic granola, coconut, honey, strawberries, bananas, chocolate chips",
          amount: 900,
          requiredDescriptions: ["Small ( $9.00 )", "Large ( $13.75 )"],
          requiredOptions: [900, 1375],
          optionalDescriptions: ["Paleo Granola ($2.00)"],
          optionalOptions: [200],
          specialInstructions: ""
        },
        {
          company: "Ola Juice Bar",
          name: "Paleo Power Bowl",
          description: "BASE: açai, greens, chlorella, strawberries, banana, almond milk ~~~ TOPPINGS: grain-free granola, strawberries, pineapple, bananas, almond butter, hemp seeds",
          amount: 1000,
          requiredDescriptions: ["Small ( $10.00 )", "Large ( $15.00 )"],
          requiredOptions: [1000, 1500],
          optionalDescriptions: ["Paleo Granola ($2.00)"],
          optionalOptions: [200],
          specialInstructions: ""
        },
        {
          company: "Ola Juice Bar",
          name: "Tropical Protein",
          description: "BASE: açai, mango, banana, protein, coconutmilk ~~~ TOPPINGS: organic granola, strawberries, pineapple, coconut, goji berries, chocolate chips",
          amount: 1000,
          requiredDescriptions: ["Small ( $10.00 )", "Large ( $15.00 )"],
          requiredOptions: [1000, 1500],
          optionalDescriptions: ["Paleo Granola ($2.00)"],
          optionalOptions: [200],
          specialInstructions: ""
        },
      ]
    ],
    [
      "Food",
      [
        {
          company: "Ola Juice Bar",
          name: "Create Your Own",
          description: "choose one base, one dressing or sauce, and 5 additional items",
          amount: 1000,
          requiredDescriptions: ["Quinoa", "Brown Rice", "Salad", "Wrap"],
          requiredOptions: [1000, 1000, 1000, 1000],
          requiredDescriptions2: ["Caesar", "Chipotle Caesar", "Ginger Tamari", "Lemon Chive", "Oil and Vinegar", "Spicy Peanut", "Shitake Sesame"],
          requiredOptions2: [1000, 1000, 1000, 1000, 1000, 1000, 1000],
          optionalDescriptions: ["Argula", "Mixed Greens", "Spinach", "Black Beans", "Hummus", "Artichoke", "Bell Pepper", "Carrot", "Cucumber", "Cilantro", "Microgreens", "Red Onion", "Spiced Corn", "Apples", "Bananas", "Blueberries", "Dates", "Dried Cranberries", "Strawberries", "Cashews", "Chia Seeds", "Pumpkin Seeds", "Sunflower Seeds", "Walnuts", "Avocado ($1.50)", "Baked Tofu ($1.50)", "Coconut 'bacon' Bits ($1.50)", "Dill and Garlic Sauerkraut ($1.50)", "Fermented Beets and Cabbage ($1.50)", "Goji Berries ($1.50)", "Hemp Seeds ($1.50)",],
          optionalOptions: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 150, 150, 150, 150, 150, 150],
          specialInstructions: ""
        },
        {
          company: "Ola Juice Bar",
          name: "Breakfast Burrito",
          description: "Tofu scramble (organic, non-gmo tofu, quinoa, carrots, bell peppers, spinach, sunflower seeds, spices) wrapped in two flour tortillas",
          amount: 850,
          specialInstructions: ""
        },
        {
          company: "Ola Juice Bar",
          name: "Hummus and Veggies",
          description: "house-made hummus, corn chips, a variety of veggies",
          amount: 900,
        },
      ]
    ],
    [
      "Smoothies",
      [
        {
          company: "Ola Juice Bar",
          name: "Berry Banana",
          description: "strawberry, banana, vanilla, protein, coconutmilk, ricemilk",
          amount: 800,
          optionalDescriptions: ["Avocado ($1.50)", "Almond Butter ($1.50)", "Cacao ($1.50)", "Chlorella ($1.50)", "Coconut Water ($1.50)", "Coffee ($1.50)", "Dates ($1.50)", "Echinacea ($1.50)", "Ginger ($1.50)", "Goji Berries ($1.50)", "Hydrator ($1.50)", "Maca ($1.50)", "Performance Optimizer ($1.50)", "Protein ($1.50)", "Turmeric ($1.50)", "Wheatgrass ($1.50)"],
          optionalOptions: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
        },
        {
          company: "Ola Juice Bar",
          name: "Berry Mate",
          description: "strawberry, blueberry, yerbamaté, vanilla, vega energizer, raw agave",
          amount: 800,
          optionalDescriptions: ["Avocado ($1.50)", "Almond Butter ($1.50)", "Cacao ($1.50)", "Chlorella ($1.50)", "Coconut Water ($1.50)", "Coffee ($1.50)", "Dates ($1.50)", "Echinacea ($1.50)", "Ginger ($1.50)", "Goji Berries ($1.50)", "Hydrator ($1.50)", "Maca ($1.50)", "Performance Optimizer ($1.50)", "Protein ($1.50)", "Turmeric ($1.50)", "Wheatgrass ($1.50)"],
          optionalOptions: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
        },
        {
          company: "Ola Juice Bar",
          name: "Green Almond Banana",
          description: "banana, almond butter, greens, dates, vanilla, cinnamon, almond milk",
          amount: 800,
          optionalDescriptions: ["Avocado ($1.50)", "Almond Butter ($1.50)", "Cacao ($1.50)", "Chlorella ($1.50)", "Coconut Water ($1.50)", "Coffee ($1.50)", "Dates ($1.50)", "Echinacea ($1.50)", "Ginger ($1.50)", "Goji Berries ($1.50)", "Hydrator ($1.50)", "Maca ($1.50)", "Performance Optimizer ($1.50)", "Protein ($1.50)", "Turmeric ($1.50)", "Wheatgrass ($1.50)"],
          optionalOptions: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
        },
        {
          company: "Ola Juice Bar",
          name: "Tropical",
          description: "pineapple, mango, strawberry, banana, coconutmilk, housepressed OJ",
          amount: 800,
          optionalDescriptions: ["Avocado ($1.50)", "Almond Butter ($1.50)", "Cacao ($1.50)", "Chlorella ($1.50)", "Coconut Water ($1.50)", "Coffee ($1.50)", "Dates ($1.50)", "Echinacea ($1.50)", "Ginger ($1.50)", "Goji Berries ($1.50)", "Hydrator ($1.50)", "Maca ($1.50)", "Performance Optimizer ($1.50)", "Protein ($1.50)", "Turmeric ($1.50)", "Wheatgrass ($1.50)"],
          optionalOptions: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
        },
        {
          company: "Ola Juice Bar",
          name: "Chocolate Peanut Butter Recovery",
          description: "banana, peanut butter, cocoa, chocolate chips, maca root, vega protein, almond milk, sea salt",
          amount: 900,
          optionalDescriptions: ["Avocado ($1.50)", "Almond Butter ($1.50)", "Cacao ($1.50)", "Chlorella ($1.50)", "Coconut Water ($1.50)", "Coffee ($1.50)", "Dates ($1.50)", "Echinacea ($1.50)", "Ginger ($1.50)", "Goji Berries ($1.50)", "Hydrator ($1.50)", "Maca ($1.50)", "Performance Optimizer ($1.50)", "Protein ($1.50)", "Turmeric ($1.50)", "Wheatgrass ($1.50)"],
          optionalOptions: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
        },
        {
          company: "Ola Juice Bar",
          name: "Creamsicle Recovery",
          description: "mango, orange juice, protein, coconut water, maca, raw agave",
          amount: 900,
          optionalDescriptions: ["Avocado ($1.50)", "Almond Butter ($1.50)", "Cacao ($1.50)", "Chlorella ($1.50)", "Coconut Water ($1.50)", "Coffee ($1.50)", "Dates ($1.50)", "Echinacea ($1.50)", "Ginger ($1.50)", "Goji Berries ($1.50)", "Hydrator ($1.50)", "Maca ($1.50)", "Performance Optimizer ($1.50)", "Protein ($1.50)", "Turmeric ($1.50)", "Wheatgrass ($1.50)"],
          optionalOptions: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
        },
        {
          company: "Ola Juice Bar",
          name: "Golden Chai",
          description: "banana, chai, cashews, agave, ginger, turmeric, black pepper, almond milk",
          amount: 900,
          optionalDescriptions: ["Avocado ($1.50)", "Almond Butter ($1.50)", "Cacao ($1.50)", "Chlorella ($1.50)", "Coconut Water ($1.50)", "Coffee ($1.50)", "Dates ($1.50)", "Echinacea ($1.50)", "Ginger ($1.50)", "Goji Berries ($1.50)", "Hydrator ($1.50)", "Maca ($1.50)", "Performance Optimizer ($1.50)", "Protein ($1.50)", "Turmeric ($1.50)", "Wheatgrass ($1.50)"],
          optionalOptions: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
        },
        {
          company: "Ola Juice Bar",
          name: "Jeanine's",
          description: "wheatgrass, chlorella, greens, vanilla, protein, coconutmilk, banana, almond butter, turmeric, ginger, cayenne, cinnamon, raw agave",
          amount: 900,
          optionalDescriptions: ["Avocado ($1.50)", "Almond Butter ($1.50)", "Cacao ($1.50)", "Chlorella ($1.50)", "Coconut Water ($1.50)", "Coffee ($1.50)", "Dates ($1.50)", "Echinacea ($1.50)", "Ginger ($1.50)", "Goji Berries ($1.50)", "Hydrator ($1.50)", "Maca ($1.50)", "Performance Optimizer ($1.50)", "Protein ($1.50)", "Turmeric ($1.50)", "Wheatgrass ($1.50)"],
          optionalOptions: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
        },
        {
          company: "Ola Juice Bar",
          name: "Mega Green PB",
          description: "wheatgrass, chlorella, greens, banana, peanut butter, protein, vanilla, ricemilk, agave",
          amount: 900,
          optionalDescriptions: ["Avocado ($1.50)", "Almond Butter ($1.50)", "Cacao ($1.50)", "Chlorella ($1.50)", "Coconut Water ($1.50)", "Coffee ($1.50)", "Dates ($1.50)", "Echinacea ($1.50)", "Ginger ($1.50)", "Goji Berries ($1.50)", "Hydrator ($1.50)", "Maca ($1.50)", "Performance Optimizer ($1.50)", "Protein ($1.50)", "Turmeric ($1.50)", "Wheatgrass ($1.50)"],
          optionalOptions: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
        },
        {
          company: "Ola Juice Bar",
          name: "Mocha Almond",
          description: "coffee beans, almond butter, banana, protein, vegan chocolate ice cream, chocolate chips, vanilla, almondmilk",
          amount: 900,
          optionalDescriptions: ["Avocado ($1.50)", "Almond Butter ($1.50)", "Cacao ($1.50)", "Chlorella ($1.50)", "Coconut Water ($1.50)", "Coffee ($1.50)", "Dates ($1.50)", "Echinacea ($1.50)", "Ginger ($1.50)", "Goji Berries ($1.50)", "Hydrator ($1.50)", "Maca ($1.50)", "Performance Optimizer ($1.50)", "Protein ($1.50)", "Turmeric ($1.50)", "Wheatgrass ($1.50)"],
          optionalOptions: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
        },
        {
          company: "Ola Juice Bar",
          name: "Thai Avocado Medjool",
          description: "avocado, cashews, dates, lemongrass, vanilla, coconutmilk, coconut water, raw agave",
          amount: 900,
          optionalDescriptions: ["Avocado ($1.50)", "Almond Butter ($1.50)", "Cacao ($1.50)", "Chlorella ($1.50)", "Coconut Water ($1.50)", "Coffee ($1.50)", "Dates ($1.50)", "Echinacea ($1.50)", "Ginger ($1.50)", "Goji Berries ($1.50)", "Hydrator ($1.50)", "Maca ($1.50)", "Performance Optimizer ($1.50)", "Protein ($1.50)", "Turmeric ($1.50)", "Wheatgrass ($1.50)"],
          optionalOptions: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
        },
      ]
    ],
  ]

  const tenThousandCookiesMenu = [
    [
      "Cookies!",
      [
        {
          company: "Ten Thousand Cookies",
          imgURL: "/tenThousandCookiesMenu/cookie-crate.png",
          name: "The Cookie Crate",
          description: "A mix of our best sellers ~~~ 4 monster cookies (peanut butter, oats, chocolate, and sprinkles) 4 chocolate chip (so soft and delicious we swear you won't miss the dairy and gluten) 4 iced sugar cookies with rainbow sprinkles!",
          amount: 3000,
        },
        {
          company: "Ten Thousand Cookies",
          name: "1/2 Cookie Crate",
          imgURL: "/tenThousandCookiesMenu/cookie-crate.png",
          description: "The ultimate comfort food: 1 dozen gluten free & vegan monster cookies made with peanut butter, oats, LOTS of chocolate, and sprinkles (obviously)!",
          amount: 1700,
        },
        {
          company: "Ten Thousand Cookies",
          name: "Monster Cookie Crate",
          imgURL: "/tenThousandCookiesMenu/monster-cookies.jpg",
          description: "The ultimate comfort food: 1 dozen gluten free & vegan monster cookies made with peanut butter, oats, LOTS of chocolate, and sprinkles (obviously)!",
          amount: 2300,
        },
        {
          company: "Ten Thousand Cookies",
          name: "1/2 Monster Cookie Crate",
          imgURL: "/tenThousandCookiesMenu/monster-cookies.jpg",
          description: "cold-pressed ginger root",
          amount: 1300,
        },
        {
          company: "Ten Thousand Cookies",
          name: "DIY Cookie Decorating Kit",
          imgURL: "/tenThousandCookiesMenu/diy-kit.jpeg",
          description: "Decorate your own awesome cookies...with out the baking mess. Our kits come with: 12 gluten free sugar cookies in fun shapes, 3-4 colors of premade decorating icing, sprinkles, toothpick for spreading + instructions!",
          amount: 3100,
        },
      ]
    ],
  ]

  const handleClick = e => {
    const selectedPartnerName = e.target.innerText;
    setIsPartnerSelected(true);
    setSelectedPartner(selectedPartnerName);
    props.setIsPartnerSelected(!props.isPartnerSelected);
    switch (selectedPartnerName) {
      case "Building Three Coffee":
        setSelectedList(buildingThreeMenu);
        break;
      case "Nightingale Bread":
        setSelectedList(nightingGaleMenu);
        break;
      case "Cafe Red Point":
        setSelectedList(redPointCafeMenu);
        break;
      case "Ola Juice Bar":
        setSelectedList(olaJuiceBarMenu);
        break;
      case "Ten Thousand Cookies":
        setSelectedList(tenThousandCookiesMenu);
        break;
      case "Nightingale Bread":
        setSelectedList(nightingGaleMenu);
        break;
      default:
        return 0;
    }
  };

  const renderDisplay = () => {
    if (isPartnerSelected) {
      return (
        <>
          <ProductMenu
            setIsPartnerSelected={setIsPartnerSelected}
            isPartnerSelected={isPartnerSelected}
            name={selectedPartner}
            menuList={selectedList}
          />
          <CartBanner />
        </>
      );
    } else {
      return (
        <>
          <h2 className="local-partners-title">
            Order from our Local Partners
          </h2>
          <div className="image-name-card-container">
            {localPartnersList.map(partner => {
              return (
                <div onClick={handleClick} className="image-name-card">
                  <img src={partner.imgURL} />
                  <h3 className="image-name-card-name">{partner.name}</h3>
                </div>
              );
            })}
          </div>
          <h1 style={{textAlign: "center"}}> OR </h1>
          <h2 style={{textAlign: "center"}}>Call us at (719) 964-8627 to place an order</h2>
          <p className="phone-description">
          Request anything, from anyplace, and we'll deliver to you! You can pay
          after we deliver (in cash, Venmo, or we have a credit card reader)! After you Submit, we will deliver your order.
          </p>
          <h1 style={{textAlign: "center"}}> OR </h1>
          <CustomRequest />
        </>
      );
    }
  };

  useEffect(() => {
    renderDisplay();
  }, [])

  return (
    <>
      {renderDisplay()}
    </>
  )
};

export default LocalPartners;
