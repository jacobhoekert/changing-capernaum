import React from "react";
import Link from "next/link";
import { Button } from "reactstrap";
import "../../styles/global.scss";
import "../../styles/index/coffee_section.scss";

const CoffeeSection = () => {
  return (
    <section className="coffee-section">
      <div className="coffee-section-overlay">
        <div className="coffee-section-text text">
          <h1 className="display-4 grubhub title">
            Not just another GrubHub or DoorDash?
          </h1>
          <p className="lead">
            Here at Changing Capernaum, we are more than just a delivery
            service. In fact, we don't charge you anything! We are here to
            help out the amazing and passionate business owners here in
            Colorado Springs by bringing YOU their products on-demand in
            this time of uncertainty! We partner with businesses that are
            not currently on popular delivery service apps such as
            GrubHub, DoorDash, or UberEats. We want to give them a chance
            to stay afloat in a time when any cash flow is vital.
          </p>
          <Link href="/story">
            <Button className="button" color="primary">Our Story</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoffeeSection;
