import React, { useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import "../styles/contact_form.scss";

const ContactForm = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const updateForm = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    axios({
      method: "POST",
      url: "http://localhost:3000/api/sendMail",
      data: form
    })
      .then(function() {
        console.log("Email successfully sent!");
        resetForm();
        setHasSubmitted(true);
        setIsLoading(false);
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };

  const DisplayMessage = () => {
    if (hasSubmitted) {
      return (
        <div className="display-message">
          Thank you for contacting us! We will get back to you shortly.
        </div>
      );
    } else {
      return <div className="display-message"></div>;
    }
  };

  return (
    <section id="contact">
      <form id="contact-form" onSubmit={handleSubmit} method="POST">
        <h1>Any Questions? Suggestions? How can we help?</h1>
        <p id="description">
          Text us today at <strong>719-964-8627</strong>, Insta DM us @changingcapernaum or send an
          email message below.
        </p>
        <div id="questions">
          <div id="names">
            <input
              className="name-inputs"
              name="firstName"
              value={form.firstName}
              onChange={e => updateForm(e)}
              placeholder="First Name"
            />
            <input
              className="name-inputs"
              name="lastName"
              value={form.lastName}
              onChange={e => updateForm(e)}
              placeholder="Last Name"
            />
          </div>
          <input
            id="contact-email"
            name="email"
            value={form.email}
            onChange={e => updateForm(e)}
            placeholder="Email Address"
          />
          <textarea
            rows="5"
            id="contact-message"
            name="message"
            value={form.message}
            onChange={e => updateForm(e)}
            placeholder="Message"
          ></textarea>
          <div id="submit-row">
            <DisplayMessage />
            <button type="submit">
              {isLoading ? (
                <ClipLoader
                  size={40}
                  color={"rgb(7, 156, 241)"}
                  loading={true}
                />
              ) : (
                <p>Send</p>
              )}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
