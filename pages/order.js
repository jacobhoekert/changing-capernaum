import React from "react";
import Head from "next/head";
import { Button } from "reactstrap";
import '../styles/global.scss';
import '../styles/sanitary.scss';
import NavBar from "../components/NavBar";
import Link from "next/link";

const Order = () => {
  return (
    <div>
      <Head>
        <title>Order Now - Changing Capernaum </title>
        <link rel="icon" href="" />
        <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet"></link>
      </Head>
      <NavBar />
      <div style={{marginTop: "140px"}} className="how-sanitary-section">
        <h1 className="display-4 how-sanitary-title">Order/Delivery Coming Soon!</h1>
        <h2 className="display-6">Start ordering on April 1st!</h2>
        <p className="lead">
          We are currently making the transition from Georgia to back home in Colorado, and once we get back to the 719 we'll have two days to buld out our online ordering, delivery system, and payment processing. Check out <Link href="/story">our story</Link> to read about who we are and to see our timeline to see where we've been
          and how Changing Capernaum was birthed.
        </p>
        <hr />
        <p className="lead">
          
        </p>
        <Button className="button" color="primary">Contact Us</Button>
      </div>
    </div>
  );
}

export default Order;
