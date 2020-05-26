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
            <h1 className="display-4 order-instructions-title">We are done with delivery, sadly.</h1>
            <p className="lead">
              Thanks for spreading love and joy with us during the last month and half. We had a blast while it lasted –– we decided to close down Changing Capernaum
              as the market now is shifting and people don't need as much delivery, and we both have gotten busy with other jobs. Sorry to dissapoint you today!
              Thanks so much!
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
