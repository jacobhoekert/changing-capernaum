import React from "react";
import "../../styles/story/who_section.scss";

const WhoSection = () => {
  return (
    <section className="who-section">
      <div className="who-section-overlay">
        <div id="who-section-text" className="who-section-text">
          <h1 className="display-4">Who are we?</h1>
          <p className="lead">
            We are a group of college students that grew up here in Colorado
            Springs. This past year we took a trip around the globe to Spain, Thailand, and
            Nicaragua to learn Entrepreneurship and Web App Development. While
            in Nicaragua, we were called back to the United States due to the
            coronavirus. While we are burdened with everything happening, we see huge
            oppurtunity for unifying our community and activating what we have
            learned over this past year and aim to inspire others to also take action,
            love others, and come together to support each other, both families and
            local business owners. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoSection;
