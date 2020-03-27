import React from "react";
import Link from "next/link";
import { Button } from "reactstrap";
import "../../styles/global.scss";
import "../../styles/index/sanitation_section.scss";

const SanitationSection = () => {
  return (
    <section className="sanitation-section">
      <div className="sanitation-section-text">
        <h1 className="display-4 title">Worried about sanitation?</h1>
        <p className="lead paragraph">
          No need to worry! We've got you covered on all our sanitation
          standards! If you want to read more about how we ensure safety,
          see our sanitation documentation.
        </p>
        <Link href="/sanitation">
          <Button className="button" color="success">
            Sanitation Doc
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default SanitationSection;
