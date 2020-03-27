import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.scss';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Our Story - Changing Capernaum</title>
        <link rel="icon" href="" />
        <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet"></link>
      </Head>
      <NavBar />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
