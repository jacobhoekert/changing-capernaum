import React, {useEffect} from "react";
import Head from "next/head";
import { Button } from "reactstrap";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import '../styles/global.scss';
import '../styles/movement.scss';
import { config } from '@fortawesome/fontawesome-svg-core';

const Movement = () => {

  useEffect(() => {
    config.autoAddCss = false;
  }, [])

  return (
    <div>
      <Head>
        <title>Join the Movement - Changing Capernaum </title>
        <link rel="icon" href="" />
        <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet"></link>
      </Head>
      <NavBar />
      <div className="movement-top-section">
        <div className="movement-top-overlay">
          <div className="movement-top-text movement-text">
            <h1 className="display-4">Do you want to help unify our community?</h1>
            <p className="lead">
              With all of the new social media movements and trends flaring up due to the increase of downtime and
              people on their phones, we want to take advantage of this oppurtunity to spread positivity and inspire action amidst 
              this time of confusion. We will be sharing stories on our Instagram and Facebook from those we impact, both from those
              in the community and the local businesses we love. We also want to share content around the topics of entrepreneurship,
              hope, oppurtunity, and passion.
            </p>
          </div>
        </div>
      </div>
      
      <div className="movement-text">
        <h1 className="display-4">Livestreaming and Social Media</h1>
        <p className="lead">
          We Instagram live-stream all of our delivery rides, and make use of the driving time to talk about 
          what we're passionate about, answer any questions from you guys, dance to music, and discuss topics around
          the ideas of how we can make a difference in our community. Follow our Instagram to join us in this 
          crazy and fun endeavor!
        </p>
        <a href="https://www.instagram.com/changingcapernaum/"><Button className="button" color="primary">Instagram</Button></a>
      </div>
      <section className="movement-text social-media-section">
        <p className="lead">
          When posting on any platform, we want you to use our hashtags so that we
          can share your experiences with our followers!
        </p>
        <h2 className="display-4">#fortheCOS #peacebypiece</h2>
        <div className="movement-images">
          <img width="300px" height="auto" alt="Instagram Post" className="posts" src="/CoffeeHEart.png"></img>
          <img width="300px" height="auto" alt="Instagram Post" className="posts" src="/CoffeeCommunity.png"></img>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Movement;
