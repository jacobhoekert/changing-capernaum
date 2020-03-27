import React, {useEffect} from "react";
import Head from "next/head";
import { Button } from "reactstrap";
import '../styles/global.scss';
import '../styles/sanitary.scss';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

const Sanitation = () => {

  useEffect(() => {
    config.autoAddCss = false;
  }, [])

  return (
    <div>
      <Head>
        <title>Sanitation Practices - Changing Capernaum </title>
        <link rel="icon" href="" />
        <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet"></link>
      </Head>
      <NavBar />
      <div className="how-sanitary-section">
        <h1 className="display-3 how-sanitary-title">How are we staying sanitary?</h1>
        <p className="lead">
          According to the CDC, “It may be possible that a person can get
          COVID-19 by touching a surface or object that has the virus on it and
          then touching their own mouth, nose, or possibly their eyes, but this
          is not thought to be the main way the virus spreads.” That said, we
          take the precaution of either immediately throwing away packaging
          materials that come with your food delivery (e.g., paper or plastic
          bag, receipts, menus, etc.), or be prepared to disinfect the surfaces
          in your home that they come into contact with.
        </p>
        <hr />
        <p className="lead">
          Hand washing remains one of the single most important things people
          can do to protect themselves and others, Amy R. Sapkota, a professor
          of applied environmental health at the University of Maryland School
          of Public Health, says. Before and after touching any surfaces we wash
          our hands thoroughly with soap and water for at least 20 seconds. We
          clean the outside of the packages of food with a Clorox wipe. Through
          this entire process we are wearing gloves that are replaced after
          every order.
        </p>
        <iframe
          title="sanitation video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5JYhm9oa-DM"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="lead">
          We are continuously defaulting to any advising the CDC gives out to
          the public. We use them as our main resource to decide what is going
          to keep everyone healthy and protected from COVID-19.
        </p>
        <iframe
          title="sanitation video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9Ay4u7OYOhA"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="lead">
          For more information, visit cdc.gov/COVID19. Feel free to contact us
          to ask any questions you have about our sanitation standards!
        </p>
        <Button className="button" color="primary">Contact Us</Button>
      </div>
     <Footer />
    </div>
  );
}

export default Sanitation;
