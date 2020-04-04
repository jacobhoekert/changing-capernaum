import React, {useState, useEffect} from "react";
import Head from "next/head";
import '../styles/global.scss';
import '../styles/order/order_instructions.scss';
import NavBar from "../components/NavBar";
import LocalPartners from "../components/order/LocalPartners";

const Order = () => {
  const [isPartnerSelected, setIsPartnerSelected] = useState(false);

  return (
    <div>
      <Head>
        <title>Order Now - Changing Capernaum </title>
        <link rel="icon" href="" />
        <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet"></link>
      </Head>
      <NavBar order={true} href="/cart"/>
      <div className="order-instructions">
        <div className="order-instructions-overlay">
          <div className="order-instructions-text">
            <h1 className="display-4 order-instructions-title">Order for Delivery</h1>
            <h3 className="hours">CURRENT DELIVERY HOURS: 9:00 AM to 4:00 PM</h3>
            <p className="lead">
              As of now, we have menu options from Building Three Coffee. We are currently adding more menus. You can also make a custom request for anything from anywhere you'd like!
            </p>
            <hr />
          </div>
        </div>
      </div>
      <LocalPartners 
        isPartnerSelected={isPartnerSelected}
        setIsPartnerSelected={setIsPartnerSelected}
      />
    </div>
  );
}

export default Order;
