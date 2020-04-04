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
    }
  ];

  const buildingThreeMenu = [
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
    },
    {
      company: "Building Three Coffee",
      imgURL: "/buildingThreeMenu/b3-drip.jpeg",
      name: "Drip Coffee",
      description: "Good Ole Drip.",
      amount: 300,
      currency: "usd",
      quantity: 1,
      details: ""
    },
    {
      company: "Building Three Coffee",
      imgURL: "/buildingThreeMenu/b3-drip.jpeg",
      name: "Americano",
      description: "Espresso + hot water",
      amount: 300,
      currency: "usd",
      quantity: 1,
      details: ""
    },
    {
      company: "Building Three Coffee",
      imgURL: "/buildingThreeMenu/b3-pourover.jpeg",
      name: "Pourover",
      description: "El Salvador Coffee. Handpoured with a V60.",
      amount: 450,
      currency: "usd",
      quantity: 1,
      details: ""
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
      details: ""
    },
    {
      company: "Building Three Coffee",
      imgURL: "/buildingThreeMenu/b3-latte.png",
      name: "Mocha",
      description: "Double shot w/ steamed milk + chocolate",
      amount: 425,
      currency: "usd",
      quantity: 1,
      details: ""
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
    },
    {
      company: "Building Three Coffee",
      imgURL: "/buildingThreeMenu/b3-coldbrew.jpeg",
      name: "Cold Brew",
      description: "Delicous. Cold. Coffee.",
      amount: 400,
      currency: "usd",
      quantity: 1,
      details: ""
    },
    {
      company: "Building Three Coffee",
      imgURL: "/buildingThreeMenu/b3-nitro.png",
      name: "Nitro",
      description: "Nitrogen infused cold brew",
      amount: 400,
      currency: "usd",
      quantity: 1,
      details: ""
    },
    {
      company: "Building Three Coffee",
      imgURL: "/buildingThreeMenu/b3-hotcocoa.jpg",
      name: "Hot Chocolate",
      description: "",
      amount: 300,
      currency: "usd",
      quantity: 1,
      details: ""
    },
    {
      company: "Building Three Coffee",
      imgURL: "/buildingThreeMenu/b3-chai.jpg",
      name: "Chai",
      description: "",
      amount: 400,
      currency: "usd",
      quantity: 1,
      details: ""
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
    {
      company: "Building Three Coffee",
      imgURL: "/buildingThreeMenu/chemex.jpg",
      name: "Chemex",
      description: "",
      amount: 4600,
      currency: "usd",
      quantity: 1,
    },

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
    {
      company: "Red Point Cafe",
      imgURL: "/buildingThreeMenu/ethiopia-natural-amaro.jpg",
      name: "Smoothies",
      description: "",
      amount: 500,
      currency: "usd",
      quantity: 1,
    }
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
      case "Red Point Cafe":
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
