import React, {useEffect} from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import '../styles/global.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

const Contact = () => {

  useEffect(() => {
    config.autoAddCss = false;
  }, [])

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
