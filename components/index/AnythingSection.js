import React from "react";
import Link from "next/link";
import { Button } from "reactstrap";
import "../../styles/global.scss";
import "../../styles/index/anything_section.scss";

const AnythingSection = () => {
  return (
    <section className="anything-section">
      <div className="anything-section-text text2">
        <h1 className="display-4">Want anything else?</h1>
        <p className="lead">
          Have anything else you need? Running low on toothpaste? Maybe you want
          some gatorade? Just need a restock of granola bars? We are here to
          help! Drop a line in the custom request box and we will see what we
          can do!
        </p>
        <Link href="/order">
          <Button className="button" color="primary">
            Custom Request!
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default AnythingSection;
