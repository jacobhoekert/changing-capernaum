import React from "react";
import "../../styles/story/timeline_section.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";

const TimelineSection = () => {
  return (
    <section className="timeline-section">
      <h1 className="display-4 timeline-section-title">Where did we come from?</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="March 13th, 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Spain, Thailand, Nicaragua
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            September 2019 - March 2020
          </h4>
          <p>
            Travelled abroad on a life-changing trip, learning practical skills, leadership, and spiritual development.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="March 13th, 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Granada, Nicaragua
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            March 13th, 2020
          </h4>
          <p>
            Working and learning while on our global trip. Called back to the
            States amid Coronavirus outbreak.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="March 16th, 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Atlanta, GA</h3>
          <h4 className="vertical-timeline-element-subtitle">
            March 16th, 2020
          </h4>
          <p>After 2 flights, we landed in Georgia to start our self-quarantine.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="March 20th, 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Gainseville, GA</h3>
          <h4 className="vertical-timeline-element-subtitle">
            March 20th, 2020
          </h4>
          <p>
            Walked back and forth in the yard for 4 hours, developing the idea of Changing Capernaum. Bought $30.00 flight back
            to Denver.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="March 30th, 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Denver, CO</h3>
          <h4 className="vertical-timeline-element-subtitle">
            March 30th, 2020
          </h4>
          <p>
            We will land in Denver and drive home to the Springs to see our families for the
            first time in 180 days.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#7EE081", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="April 1st 2020"
          iconStyle={{ background: "#7EE081", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Colorado Springs, CO
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            April 1st, 2020
          </h4>
          <p>Delivery will begin!</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default TimelineSection;
