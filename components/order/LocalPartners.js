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
          currency: "usd",
          quantity: 1,
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-drip.jpeg",
          name: "Americano",
          description: "Espresso + hot water",
          amount: 300,
          currency: "usd",
          quantity: 1,
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-pourover.jpeg",
          name: "Pourover",
          description: "El Salvador Coffee. Handpoured with a V60.",
          amount: 450,
          currency: "usd",
          quantity: 1,
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-espresso.jpeg",
          name: "Espresso",
          description: "2 shots of Long Cap Espresso",
          amount: 250,
          currency: "usd",
          quantity: 1,
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-latte.png",
          name: "Latte",
          description: "Double shot w/ steamed milk",
          amount: 425,
          currency: "usd",
          quantity: 1,
          coffeeOptions: ""
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-latte.png",
          name: "Mocha",
          description: "Double shot w/ steamed milk + chocolate",
          amount: 425,
          currency: "usd",
          quantity: 1,
          coffeeOptions: ""
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-espresso.jpeg",
          name: "Macchiato",
          description: "Double shot w/ dollop of steamed milk",
          amount: 300,
          currency: "usd",
          quantity: 1,
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-espresso.jpeg",
          name: "Cortado",
          description: "Double shot w/ steamed milk",
          amount: 300,
          currency: "usd",
          quantity: 1,
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-cappuccino.jpeg",
          name: "Cappuccino",
          description: "Double shot w/ steamed milk + froth",
          amount: 350,
          currency: "usd",
          quantity: 1,
          coffeeOptions: ""
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-coldbrew.jpeg",
          name: "Cold Brew",
          description: "",
          amount: 400,
          currency: "usd",
          quantity: 1,
          coffeeOptions: ""
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-nitro.png",
          name: "Nitro",
          description: "Nitrogen infused cold brew",
          amount: 400,
          currency: "usd",
          quantity: 1,
          coffeeOptions: ""
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-hotcocoa.jpg",
          name: "Hot Chocolate",
          description: "",
          amount: 300,
          currency: "usd",
          quantity: 1,
          coffeeOptions: ""
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-chai.jpg",
          name: "Chai",
          description: "",
          amount: 400,
          currency: "usd",
          quantity: 1,
          coffeeOptions: ""
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-oj.jpeg",
          name: "Orange Juice",
          description: "Naked Orange Juice",
          amount: 350,
          currency: "usd",
          quantity: 1,
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-kombucha.jpeg",
          name: "Kombucha",
          description: "",
          amount: 400,
          currency: "usd",
          quantity: 1,
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
          currency: "usd",
          quantity: 1,
          foodOptions: "Lemon Poppy Seed Muffin (v, gf), Chocolate Chip Cookie (v, gf), Almond Rasberry Fanancier (v, gf), Rasberry Oat Bar (gf), Scone"
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-pastypie.jpeg",
          name: "Pasty Pie",
          description: "Our pasty pies are made by the Pasty Company. We have 3 options that are all great and a good tummy filler. There is a vegan option which is the springs.",
          amount: 700,
          currency: "usd",
          quantity: 1,
          foodOptions: "The Capitol, The Springs, Fruit"
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-quiche.jpeg",
          name: "Quiche",
          description: "",
          amount: 350,
          currency: "usd",
          quantity: 1,
          foodOptions: "Veggie (Green Chili and Cheese), Meat - Lorraine Bacon & Shallot, Blueberries optional"
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-bagel.jpeg",
          name: "Bagel & Cream Cheese",
          description: "",
          amount: 325,
          currency: "usd",
          quantity: 1,
          foodOptions: "Types: Plain, Jalapeño, Blueberry, Everything, Cinnamon Raisin | Options: Cream Cheese, Butter, Toasted"
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-granola.png",
          name: "Granola + Milk",
          description: "",
          amount: 400,
          currency: "usd",
          quantity: 1,
          foodOptions: "Milk: Normal, Almond, Coconut, Oat, Breve"
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/b3-burrito.jpeg",
          name: "Breakfast Burrito",
          description: "",
          amount: 650,
          currency: "usd",
          quantity: 1,
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
          currency: "usd",
          quantity: 1,
          beanGrind: "Whole Bean"
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/ethiopia-natural-amaro.jpg",
          name: "Guatemala Teanzul Natural",
          description: "Process: Natural ~~~ Impressions: Almond, Raspberry, Croissant",
          amount: 1700,
          currency: "usd",
          quantity: 1,
          beanGrind: "Whole Bean"
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/ethiopia-natural-amaro.jpg",
          name: "Guatemala El Durazno",
          description: "Process: Washed ~~~ Impressions: White peach, caramel, dark chocolate",
          amount: 1700,
          currency: "usd",
          quantity: 1,
          beanGrind: "Whole Bean"
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/ethiopia-natural-amaro.jpg",
          name: "Long Cap Espresso",
          description: "Espresso Blend: Guatemala Piedra Partida & Ethiopia Yirgacheffe ~~~ Process: Washed",
          amount: 1700,
          currency: "usd",
          quantity: 1,
          beanGrind: "Whole Bean"
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/ethiopia-natural-amaro.jpg",
          name: "Decaf Columbia",
          description: "Process: Sugar Cane ~~~ Impressions: Smooth Creamy Chocolates, Full Body",
          amount: 1700,
          currency: "usd",
          quantity: 1,
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
          currency: "usd",
          quantity: 1,
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/v60.jpg",
          name: "Hario V60 Brewer",
          description: "",
          amount: 2300,
          currency: "usd",
          quantity: 1,
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/aeropress.png",
          name: "Aeropress",
          description: "",
          amount: 3200,
          currency: "usd",
          quantity: 1,
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/chemex-filters.jpg",
          name: "Chemex Filters",
          description: "100 Count",
          amount: 1050,
          currency: "usd",
          quantity: 1,
        },
        {
          company: "Building Three Coffee",
          imgURL: "/buildingThreeMenu/v60-filters.jpg",
          name: "Hario V60 Filters",
          description: "60 Count",
          amount: 700,
          currency: "usd",
          quantity: 1,
        },
      ]
    ]
  ];

  const nightingGaleMenu = [
    {
      company: "Nightingale Bread",
      imgURL: "/buildingThreeMenu/ethiopia-natural-amaro.jpg",
      name: "Ethiopia Natural Amaro",
      description: "Process: Natural ~~~ Impressions: Syrupy, Coconut Sugar, Hawaiian Punch",
      amount: 1900,
      currency: "usd",
      quantity: 1,
      beanGrind: "Whole Bean"
    },
    {
      company: "Nightingale Bread",
      imgURL: "/buildingThreeMenu/ethiopia-natural-amaro.jpg",
      name: "Guatemala Teanzul Natural",
      description: "",
      images: ["https://example.com/t-shirt.png"],
      amount: 1800,
      currency: "usd",
      quantity: 1,
      beanGrind: "Whole Bean"
    }
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
          currency: "usd",
          quantity: 1,
          requiredDescriptions: ["20 Oz ( $7.50 )", "12 Oz ( $5.50 )"],
          requiredOptions: [750, 550],
          optionalDescriptions: ["Gnarly Vanilla Whey ($1.00)", "Ascent Chocolate Whey ($1.00)", "Gnarly Vanilla Vegan ($1.00)", "Gnarly Chocolate Vegan ($1.00)", "Collagen Protein ($1.00)", "Banana ($0.50)", "Greens ($0.50)", "Microgreens ($1.00)", "Micronized Creatine ($0.50)", "Extra Almond Butter ($0.75)", "Maca Powder ($0.50)", "Glutamine ($0.50)"],
          optionalOptions: [100, 100, 100, 100, 100, 50, 50, 100, 50, 75, 50, 50],
        },
        {
          company: "Cafe Red Point",
          name: "British Junction Smoothie",
          description: "Almond milk, Equal Exchange organic chocolate, organic strawberries, organic blueberries, almonds.",
          amount: 750,
          currency: "usd",
          quantity: 1,
          requiredDescriptions: ["20 Oz ( $7.50 )", "12 Oz ( $5.50 )"],
          requiredOptions: [750, 550],
          optionalDescriptions: ["Gnarly Vanilla Whey ($1.00)", "Ascent Chocolate Whey ($1.00)", "Gnarly Vanilla Vegan ($1.00)", "Gnarly Chocolate Vegan ($1.00)", "Collagen Protein ($1.00)", "Banana ($0.50)", "Greens ($0.50)", "Microgreens ($1.00)", "Micronized Creatine ($0.50)", "Extra Almond Butter ($0.75)", "Maca Powder ($0.50)", "Glutamine ($0.50)"],
          optionalOptions: [100, 100, 100, 100, 100, 50, 50, 100, 50, 75, 50, 50],
        },
        {
          company: "Cafe Red Point",
          name: "Tonsai Beach Smoothie",
          description: "Coconut water, pineapple, banana, lime, cashews.",
          amount: 750,
          currency: "usd",
          quantity: 1,
          requiredDescriptions: ["20 Oz ( $7.50 )", "12 Oz ( $5.50 )"],
          requiredOptions: [750, 550],
          optionalDescriptions: ["Gnarly Vanilla Whey ($1.00)", "Ascent Chocolate Whey ($1.00)", "Gnarly Vanilla Vegan ($1.00)", "Gnarly Chocolate Vegan ($1.00)", "Collagen Protein ($1.00)", "Banana ($0.50)", "Greens ($0.50)", "Microgreens ($1.00)", "Micronized Creatine ($0.50)", "Extra Almond Butter ($0.75)", "Maca Powder ($0.50)", "Glutamine ($0.50)"],
          optionalOptions: [100, 100, 100, 100, 100, 50, 50, 100, 50, 75, 50, 50],
        },
        {
          company: "Cafe Red Point",
          name: "Strawberry",
          description: "Almond milk, organic strawberries, local organic honey, almonds.",
          amount: 750,
          currency: "usd",
          quantity: 1,
          requiredDescriptions: ["20 Oz ( $7.50 )", "12 Oz ( $4.50 )"],
          requiredOptions: [750, 450],
          optionalDescriptions: ["Gnarly Vanilla Whey ($1.00)", "Ascent Chocolate Whey ($1.00)", "Gnarly Vanilla Vegan ($1.00)", "Gnarly Chocolate Vegan ($1.00)", "Collagen Protein ($1.00)", "Banana ($0.50)", "Greens ($0.50)", "Microgreens ($1.00)", "Micronized Creatine ($0.50)", "Extra Almond Butter ($0.75)", "Maca Powder ($0.50)", "Glutamine ($0.50)"],
          optionalOptions: [100, 100, 100, 100, 100, 50, 50, 100, 50, 75, 50, 50],
        },
        {
          company: "Cafe Red Point",
          name: "Banana",
          description: "Almond milk, banana, almonds, honey.",
          amount: 750,
          currency: "usd",
          quantity: 1,
          requiredDescriptions: ["20 Oz ( $7.50 )", "12 Oz ( $4.50 )"],
          requiredOptions: [750, 450],
          optionalDescriptions: ["Gnarly Vanilla Whey ($1.00)", "Ascent Chocolate Whey ($1.00)", "Gnarly Vanilla Vegan ($1.00)", "Gnarly Chocolate Vegan ($1.00)", "Collagen Protein ($1.00)", "Banana ($0.50)", "Greens ($0.50)", "Microgreens ($1.00)", "Micronized Creatine ($0.50)", "Extra Almond Butter ($0.75)", "Maca Powder ($0.50)", "Glutamine ($0.50)"],
          optionalOptions: [100, 100, 100, 100, 100, 50, 50, 100, 50, 75, 50, 50],
        },
        {
          company: "Cafe Red Point",
          name: "Red Rocks Smoothie",
          description: "Coconut water, organic strawberries, organic blueberries, organic raspberries, almonds.",
          amount: 750,
          currency: "usd",
          quantity: 1,
          requiredDescriptions: ["20 Oz ( $7.50 )", "12 Oz ( $5.50 )"],
          requiredOptions: [750, 550],
          optionalDescriptions: ["Gnarly Vanilla Whey ($1.00)", "Ascent Chocolate Whey ($1.00)", "Gnarly Vanilla Vegan ($1.00)", "Gnarly Chocolate Vegan ($1.00)", "Collagen Protein ($1.00)", "Banana ($0.50)", "Greens ($0.50)", "Microgreens ($1.00)", "Micronized Creatine ($0.50)", "Extra Almond Butter ($0.75)", "Maca Powder ($0.50)", "Glutamine ($0.50)"],
          optionalOptions: [100, 100, 100, 100, 100, 50, 50, 100, 50, 75, 50, 50],
        },
        {
          company: "Cafe Red Point",
          name: "Whipper Smoothie",
          description: "Almond milk, organic almond butter, banana, Equal Exchange organic chocolate.",
          amount: 750,
          currency: "usd",
          quantity: 1,
          requiredDescriptions: ["20 Oz ( $7.50 )", "12 Oz ( $5.50 )"],
          requiredOptions: [750, 550],
          optionalDescriptions: ["Gnarly Vanilla Whey ($1.00)", "Ascent Chocolate Whey ($1.00)", "Gnarly Vanilla Vegan ($1.00)", "Gnarly Chocolate Vegan ($1.00)", "Collagen Protein ($1.00)", "Banana ($0.50)", "Greens ($0.50)", "Microgreens ($1.00)", "Micronized Creatine ($0.50)", "Extra Almond Butter ($0.75)", "Maca Powder ($0.50)", "Glutamine ($0.50)"],
          optionalOptions: [100, 100, 100, 100, 100, 50, 50, 100, 50, 75, 50, 50],
        },
        {
          company: "Cafe Red Point",
          name: "Green Machine Smoothie",
          description: "Organic kale, organic spinach, ginger, lime, pineapple, coconut water, local organic honey.",
          amount: 750,
          currency: "usd",
          quantity: 1,
          requiredDescriptions: ["20 Oz ( $7.50 )", "12 Oz ( $5.50 )"],
          requiredOptions: [750, 550],
          optionalDescriptions: ["Gnarly Vanilla Whey ($1.00)", "Ascent Chocolate Whey ($1.00)", "Gnarly Vanilla Vegan ($1.00)", "Gnarly Chocolate Vegan ($1.00)", "Collagen Protein ($1.00)", "Banana ($0.50)", "Greens ($0.50)", "Microgreens ($1.00)", "Micronized Creatine ($0.50)", "Extra Almond Butter ($0.75)", "Maca Powder ($0.50)", "Glutamine ($0.50)"],
          optionalOptions: [100, 100, 100, 100, 100, 50, 50, 100, 50, 75, 50, 50],
        },
        {
          company: "Cafe Red Point",
          name: "Strawberry Banana",
          description: "Almond milk, organic strawberries, banana, local organic honey, almonds.",
          amount: 750,
          currency: "usd",
          quantity: 1,
          requiredDescriptions: ["20 Oz ( $7.50 )", "12 Oz ( $4.50 )"],
          requiredOptions: [750, 450],
          optionalDescriptions: ["Gnarly Vanilla Whey ($1.00)", "Ascent Chocolate Whey ($1.00)", "Gnarly Vanilla Vegan ($1.00)", "Gnarly Chocolate Vegan ($1.00)", "Collagen Protein ($1.00)", "Banana ($0.50)", "Greens ($0.50)", "Microgreens ($1.00)", "Micronized Creatine ($0.50)", "Extra Almond Butter ($0.75)", "Maca Powder ($0.50)", "Glutamine ($0.50)"],
          optionalOptions: [100, 100, 100, 100, 100, 50, 50, 100, 50, 75, 50, 50],
        },
        {
          company: "Cafe Red Point",
          name: "Purple Pineberry",
          description: "Organic blueberries, pineapple, banana, cashews, coconut water.",
          amount: 750,
          currency: "usd",
          quantity: 1,
          requiredDescriptions: ["20 Oz ( $7.50 )", "12 Oz ( $5.50 )"],
          requiredOptions: [750, 550],
          optionalDescriptions: ["Gnarly Vanilla Whey ($1.00)", "Ascent Chocolate Whey ($1.00)", "Gnarly Vanilla Vegan ($1.00)", "Gnarly Chocolate Vegan ($1.00)", "Collagen Protein ($1.00)", "Banana ($0.50)", "Greens ($0.50)", "Microgreens ($1.00)", "Micronized Creatine ($0.50)", "Extra Almond Butter ($0.75)", "Maca Powder ($0.50)", "Glutamine ($0.50)"],
          optionalOptions: [100, 100, 100, 100, 100, 50, 50, 100, 50, 75, 50, 50],
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
          currency: "usd",
          quantity: 1,
          optionalDescriptions: ["Extra Nicki's Local Granola ($0.50)", "Sliced Banana ($0.50)", "Almond Butter ($0.75)", "Spinach blended in ($0.50)", "Creatine ($0.50)", "Glutamine ($0.50)", "Maca Powder ($0.50)", "Ascent Chocolate Whey ($1.00)", "Gnarly Chocolate Vegan ($1.00)", "Gnarly Vanilla Vegan ($1.00)", "Gnarly Vanilla Whey ($1.00)"],
          optionalOptions: [50, 50, 75, 50, 50, 50, 50, 100, 100, 100, 100],
        },
        {
          company: "Cafe Red Point",
          name: "Hot Breakfast Bowl",
          description: "Organic quinoa. Please put choice of two toppings in notes. Additional toppings are listed at prices below.",
          amount: 400,
          currency: "usd",
          quantity: 1,
          optionalDescriptions: ["Shredded Coconut ($0.50)", "Sliced Banana ($0.50)", "Almonds ($0.50)", "Cashews ($0.50)", "Walnuts ($0.50)", "Organic Rasins ($0.25)", "Local Jam ($0.50)", "Organic Maple Syrup ($0.25)", "Almond Butter ($0.75)", "Cacao Nibs ($0.75)", "Lockhart Honey ($0.25)", "Hemp Seeds ($0.75)", "Nicki's Local Granola ($0.50)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)"],
          optionalOptions: [50, 50, 50, 50, 50, 25, 50, 25, 75, 75, 25, 75, 50, 100, 100, 100, 100],
        },
        {
          company: "Cafe Red Point",
          name: "Mediterranean Bowl",
          description: "Organic grape tomatoes, organic cucumbers, Kalamata olives, Napa Valley organic olive oil, organic apple cider vinegar, garnished with microgreens, Maldon finishing salt on organic quinoa.",
          amount: 750,
          currency: "usd",
          quantity: 1,
          optionalDescriptions: ["Humanely Raised Diced Chicken Breast ($4.00)", "Callicrate Beef Grilled Skirt Steak ($5.00)", "Feta ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Extra Callicrate Beef Grilled Skirt Steak ($5.00)", "Humanely Raised Diced Chicken Breast ($4.00)"],
          optionalOptions: [400, 500, 100, 100, 100, 100, 100, 500, 400],
        },
        {
          company: "Cafe Red Point",
          name: "Power Egg Bowl",
          description: "2 free-range eggs from an Amish Farm in Yoder, organic grape tomatoes, organic quinoa.",
          amount: 500,
          currency: "usd",
          quantity: 1,
          requiredDescriptions: ["Over Easy", "Over Medium", "Over Hard", "Scrambled", "Sunny Side Up", "Hard Boiled"],
          requiredOptions: [500, 500, 500, 500, 500, 500],
          optionalDescriptions: ["Additional Egg ($1.00)", "Additional Egg ($1.00)", "Additional Egg ($1.00)", "Additional Egg ($1.00)", "Hormone Free Canadian Bacon ($1.50)", "Organic Spinach (Raw) ($1.50)", "Organic Spinach (Sauteed) ($1.50)", "Feta ($1.00)", "Callicrate Beef Grilled Skirt Steak ($5.00)", "Chicken Breast ($4.00)", "Cilantro Garlic Dip ($1.00)"],
          optionalOptions: [100, 100, 100, 100, 150, 150, 150, 100, 500, 400, 100],
        },
        {
          company: "Cafe Red Point",
          name: "Bouldering Bowl",
          description: "Organic baby spinach, organic grape tomatoes, Napa Valley organic olive oil, organic apple cider vinegar, garnished with microgreens, Maldon finishing salt on organic quinoa.",
          amount: 750,
          currency: "usd",
          quantity: 1,
          optionalDescriptions: ["Humanely Raised Diced Chicken Breast ($4.00)", "Callicrate Beef Grilled Skirt Steak ($5.00)", "Feta ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Extra Callicrate Beef Grilled Skirt Steak ($5.00)", "Humanely Raised Diced Chicken Breast ($4.00)"],
          optionalOptions: [400, 500, 100, 100, 100, 100, 100, 500, 400],
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
          currency: "usd",
          quantity: 1,
          optionalDescriptions: ["Humanely Raised Diced Chicken Breast ($4.00)", "Callicrate Beef Grilled Skirt Steak ($5.00)", "Feta ($1.00)", "Organic Quinoa ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Extra Callicrate Beef Grilled Skirt Steak ($5.00)", "Humanely Raised Diced Chicken Breast ($4.00)"],
          optionalOptions: [400, 500, 100, 100, 100, 100, 100, 100, 500, 400],
        },
        {
          company: "Cafe Red Point",
          name: "California Salad",
          description: "Organic baby spinach, organic baby kale, organic grape tomatoes, walnuts, organic raisins, Napa Valley organic olive oil, organic apple cider vinegar, garnished with microgreens, Maldon finishing salt.",
          amount: 750,
          currency: "usd",
          quantity: 1,
          optionalDescriptions: ["Humanely Raised Diced Chicken Breast ($4.00)", "Callicrate Beef Grilled Skirt Steak ($5.00)", "Feta ($1.00)", "Organic Quinoa ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Extra Callicrate Beef Grilled Skirt Steak ($5.00)", "Humanely Raised Diced Chicken Breast ($4.00)"],
          optionalOptions: [400, 500, 100, 100, 100, 100, 100, 100, 500, 400],
        },
        {
          company: "Cafe Red Point",
          name: "Half Salads",
          description: "Organic grape tomatoes, organic cucumbers, Kalamata olives, Napa Valley organic olive oil, organic apple cider vinegar, garnished with microgreens, Maldon finishing salt on organic quinoa.",
          amount: 450,
          currency: "usd",
          quantity: 1,
          requiredDescriptions: ["Mediterranean Salad", "California Salad"],
          requiredOptions: [450, 450],
          optionalDescriptions: ["Humanely Raised Diced Chicken Breast ($2.50)", "Callicrate Beef Grilled Skirt Steak ($2.75)", "Feta ($0.50)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)"],
          optionalOptions: [250, 275, 50, 100, 100],
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
          currency: "usd",
          quantity: 1,
        },
        {
          company: "Cafe Red Point",
          name: "Overnight Oats Banana Milk and Walnuts",
          description: "Dairy free, contains nuts",
          amount: 400,
          currency: "usd",
          quantity: 1,
        },
        {
          company: "Cafe Red Point",
          name: "Grilled Steak Wrap",
          description: "Callicrate beef grilled skirt steak, organic baby kale, organic baby spinach, organic pickled onion, Sriracha mayo.",
          amount: 825,
          currency: "usd",
          quantity: 1,
          optionalDescriptions: ["Add Side California Salad ($3.00)", "Add Side Mediterranean Salad ($3.00)", "Chicken on side salad ($2.50)", "Steak on side salad ($2.75)", "Extra Callicrate Beef Grilled Skirt Steak ($5.00)", "Feta ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)"],
          optionalOptions: [300, 300, 250, 275, 500, 100, 100, 100],
        },
        {
          company: "Cafe Red Point",
          name: "Tacos",
          description: "3 tortillas filled with your choice of protein, cabbage blend, organic pickled onions, lime and salsa on the side.",
          amount: 925,
          currency: "usd",
          quantity: 1,
          requiredDescriptions: ["Callicrate Beef Grilled Steak", "Humanely Raised Chicken Breast"],
          requiredOptions: [925, 925],
          optionalDescriptions: ["Cilantro Garlic Dipping Sauce ($1.00)", "Extra Salsa ($0.75)", "Feta ($1.00)"],
          optionalOptions: [100, 75, 100],
        },
        {
          company: "Cafe Red Point",
          name: "Paleo Waffle",
          description: "Topped with organic maple syrup or organic whipped cream.",
          amount: 700,
          currency: "usd",
          quantity: 1,
          requiredDescriptions: ["Full", "Half"],
          requiredOptions: [700, 425],
          optionalDescriptions: ["Add Organic Almond Butter ($0.75)", "Maple Syrup", "Melted Butter", "Whipped Cream", "Sliced Banana ($0.50)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)", "Egg, put style in special instructions ($1.00)"],
          optionalOptions: [75, 0, 0, 0, 50, 100, 100, 100, 100],
        },
      ]
    ],
  ];

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
                  <h3 className="image-name-card-name">{partner.name == "Nightingale Bread" ? partner.name + " CLOSED UNTIL APRIL 6th" : partner.name}</h3>
                </div>
              );
            })}
          </div>
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
