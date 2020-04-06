import React from "react";
import Link from "next/link";
import { Button } from "reactstrap";
import "../../styles/global.scss";
import "../../styles/index/top_section.scss";

const TopSection = () => {
  return (
    <section className="top-section">
      <div className="top-section-overlay">
        <div className="top-section-text">
          <h1 className="display-3 title">
            Spreading Joy and Peace in Colorado Springs. Supporting families and small businesses through free local delivery.
          </h1>
          <Link href="/order">
            <Button className="button" color="primary">
              Order Now!
            </Button>
          </Link>
          <p className="lead paragraph">
            We are a group of college students set out to love and unify our
            community through local business delivery. Our mission is to be a
            catalyst for the unification of our city especially during this
            COVID-19 crisis. We want to be a voice of positivity, empowerment,
            excitement, and joy. We offer free delivery to Colorado Springs from
            some of your favorite local coffee shops, bakeries, florists, and
            more! We also offer a gifting service to give YOU the opportunity to
            support and love your neighbor. Together, we truly believe we are{" "}
            <Link href="/story#capernaum-section">Changing Capernaum (click for definition).</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
