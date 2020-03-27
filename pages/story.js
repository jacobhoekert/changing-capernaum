import React, {useEffect} from "react";
import Head from "next/head";
import NavBar from '../components/NavBar';
import WhoSection from "../components/story/WhoSection";
import CapernaumSection from "../components/story/CapernaumSection";
import TimelineSection from "../components/story/TimelineSection";
import Footer from "../components/Footer";
import { config } from '@fortawesome/fontawesome-svg-core';

const Story = () => {
  
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
      <WhoSection />
      <CapernaumSection />
      <hr />
      <TimelineSection />
      <Footer />
    </div>
  );
};

export default Story;
