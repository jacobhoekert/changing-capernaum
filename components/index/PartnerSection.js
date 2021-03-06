import React, { useState } from "react";
import "../../styles/global.scss";
import "../../styles/index/partner_section.scss";
import axios from "axios";
import { db } from "../../firebaseConfig";

const PartnerSection = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    suggestion: ""
  });

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      suggestion: ""
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    if (form.name != "" && form.email != "" && form.suggestion != "") {
      setHasSubmitted(true);
      resetForm();
      db.collection("business-suggestions")
        .add(form)
        .then(console.log("Document Successfully written!"))
        .catch(err => console.log("Error writing document: ", err));
      axios({
        method: "POST",
        url: "https://changingcapernaum.com/api/sendMail",
        data: form
      });
    }
  };

  return (
    <section className="partner-section">
      <div className="partner-section-text">
        <h1 className="display-4">Our Current Partners</h1>
        <p className="lead">
          We will be delivering products from some of Colorado Springs' favorite
          places! Right now, we deliver from our friends at{" "}
          <a href="https://www.building3coffee.com/">Building Three Coffee</a>,{" "}
          <a href="https://www.nightingalebread.com/">Nightingale Bread</a>,{" "}
          <a href="https://caferedpoint.com/">Cafe Red Point</a>,{" "}
          <a href="https://www.olajuicebar.com/">Ola Juice Bar</a>,{" "}and{" "}
          <a href="https://www.tenthousandcookies.com/">Ten Thousand Cookies!{" "}</a>
          Stuck at home and want quality locally roasted coffee, organic bread,
          pastries, or refreshing smoothies? We want to expand to any and every
          small local business <em>that you love.</em> In fact, send us
          a suggestion that you believe would fit this vision, and we will add
          them and start delivering for them!
        </p>
        <div className="inputs">
          <input
            name="suggestion"
            className="suggestion-input"
            value={form.suggestion}
            onChange={e => handleChange(e)}
            placeholder="Suggest a local business"
          />
          <div className="name-email">
            <input
              name="name"
              className="name-input"
              value={form.name}
              onChange={e => handleChange(e)}
              placeholder="Your Name"
            />
            <input
              name="email"
              className="email-input"
              value={form.email}
              onChange={e => handleChange(e)}
              placeholder="Your Email"
            />
          </div>
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
          {hasSubmitted && (
            <p className="thanks-message">
              Thanks for your suggestion! We'll get back to you shortly!
            </p>
          )}
        </div>
      </div>
      <div className="businesses">
        <a href="https://www.building3coffee.com/">
          <img
            className="business-image building-three"
            src="/building.png"
            alt="building three"
          />
        </a>
        <a href="https://www.nightingalebread.com/">
          <img className="business-image" src="/nighting.jpg" alt="hello"></img>
        </a>
        <a href="https://caferedpoint.com/">
          <img
            className="business-image"
            src="/red-point-logo.png"
            alt="red point logo"
          ></img>
        </a>
        <a href="https://www.olajuicebar.com/">
          <img
            className="business-image"
            src="/ola-juice-bar-logo.png"
            alt="ola juice bar logo"
          ></img>
        </a>
        <a href="https://www.tenthousandcookies.com/">
          <img
            className="business-image"
            src="/ten-thousand-cookies-logo.png"
            alt="ten thousand cookies logo"
          ></img>
        </a>
      </div>
    </section>
  );
};

export default PartnerSection;
