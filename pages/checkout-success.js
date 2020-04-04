import React, {useState, useEffect} from "react";
import Head from "next/head";
import '../styles/checkout_success.scss';
import NavBar from '../components/NavBar';

const CheckoutSuccess = () => {

  return (
    <div>
      <Head>
        <title>Checkout SUCCESS</title>
        <link rel="icon" href="" />
        <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet"></link>
      </Head>
      <NavBar />
      <h1 className="success-text"> <span>Success!</span> <br /> We'll contact you shortly and deliver your order. Thank you for helping spread joy and supporting local business!</h1>
      <Link href="/order"><Button style={{margin: "auto", marginBottom: "200px"}}className="d-block" color="primary">Make another order</Button></Link>
    </div>
  );
}

export default CheckoutSuccess;
