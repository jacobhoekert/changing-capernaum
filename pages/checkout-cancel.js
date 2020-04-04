import React, {useState, useEffect} from "react";
import Head from "next/head";
import '../styles/checkout_success.scss';
import NavBar from '../components/NavBar';

const CheckoutCancel = () => {

  return (
    <div>
      <Head>
        <title>Checkout Cancel</title>
        <link rel="icon" href="" />
        <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet"></link>
      </Head>
      <NavBar />
      <h1 className="success-text"> Cancel!</h1>
    </div>
  );
}

export default CheckoutCancel;
