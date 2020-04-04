import React from "react";
import Link from "next/link";
import { Button } from "reactstrap";
import "../../styles/index/gift_section.scss";

const OrderInstructions = () => {
  return (
    <section className="gift-section">
      <div className="gift-section-overlay">
        <div className="gift-section-text text">
          <h1 className="display-4 title">Send a gift to your neighbor!</h1>
          <p className="lead paragraph">
            We want you to spread the love and peace with us! You can send
            your neighbor, friend, or even a stranger a gift from those same
            locations! Send it with a note and know that a joyful driver
            will deliver it with a smile!
          </p>
          <Link href="/order">
            <Button className="button" color="primary">
              Send a gift!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderInstructions;
