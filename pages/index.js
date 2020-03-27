import React, {useEffect} from "react";
import Head from "next/head";
import NavBar from '../components/NavBar';
import TopSection from "../components/index/TopSection";
import PartnerSection from "../components/index/PartnerSection";
import CoffeeSection from "../components/index/CoffeeSection";
import SanitationSection from "../components/index/SanitationSection";
import GiftSection from "../components/index/GiftSection";
import AnythingSection from "../components/index/AnythingSection";
import Footer from "../components/Footer";
import '../styles/global.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

const Home = () => {

  useEffect(() => {
    config.autoAddCss = false;
  }, [])
  
  return (
    <div>
      <Head>
        <title>Changing Capernaum</title>
        <link rel="icon" href="" />
        <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet"></link>
      </Head>
      <main>
        <nav>
          <NavBar />
        </nav>
        <body>
          <TopSection />
          <PartnerSection />
          <CoffeeSection />
          <SanitationSection />
          <GiftSection />
          <AnythingSection />
          <Footer />
        </body>
      </main>
    </div>
  );
};

export default Home;
