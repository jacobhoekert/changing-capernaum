import React from "react";
import Link from "next/link";
import { Button } from "reactstrap";
import "../styles/global.scss";
import "../styles/footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const GiftSection = () => {
  return (
    <div className="footer">
      <div className="footer-overlay">
        <div className="footer-text">
          <h1 className="display-4 footer-title">We love the Springs!</h1>
          <p className="lead">
            Welcome to Changing Capernaum! We are so excited to help foster the
            community of Colorado Springs in the midst of this crazy time!
          </p>
          <p className="lead">
            Support local businesses and have their amazing products delivered to
            your doorstep with the same smiles you get in-store!
          </p>
          <p className="question">
            Have any questions, suggestions, comments? We would love to talk with you!
          </p>
          <p className="lead">
            <Link href="/contact"><Button className="button" color="primary">Contact Us!</Button></Link>
          </p>
          <div className="social-icons">
            <a href="https://www.instagram.com/changingcapernaum/"><FontAwesomeIcon icon={faInstagramSquare} /></a>
            <a href="https://www.facebook.com/Changing-Capernaum-104204577901003/?modal=admin_todo_tour"><FontAwesomeIcon icon={faFacebook} /></a>
          </div>
          <p className="copyright">
            © Changing Capernaum 2020
          </p>
        </div>
      </div>
    </div>
  );
};

export default GiftSection;
