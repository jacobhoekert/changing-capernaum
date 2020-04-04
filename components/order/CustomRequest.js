import React, { useState } from "react";
import "../../styles/custom_request.scss";
import "../../styles/delivery_form.scss";
import '../../styles/checkout_success.scss';
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';
import { useSelector} from "react-redux";
import { db } from "../../firebaseConfig";
import { Button } from "reactstrap";
import Link from "next/link";

const CustomRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isGift, setIsGift] = useState(false);

  const handleCheck = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setIsGift(true);
    } else {
      setIsGift(false);
    }
  }

  const [form, setForm] = useState({
    item: "",
    place: "",
    details: "",
    recipientName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressL1: "",
    addressL2: "",
    note: ""
  });

  const updateForm = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    axios({
      method: "POST",
      url: "https://changingcapernaum.com/api/sendMail",
      data: form
    });
    try {
      let data = {
        customRequest: form,
      };
      const update = await db.collection("orders").add(data);
      console.log("Document Successfully written!");
      setIsLoading(false);
      setHasSubmitted(true);
    } catch (err) {
      console.log("Error writing document: ", err);
    }
    
  };

  return (
    <>
      {hasSubmitted ? <>
                        <h1 className="success-text"> <span>Success!</span> <br /> We'll contact you shortly and deliver your order. Thank you for helping spread joy and supporting local business!</h1>
                        <Link href="/order"><Button style={{margin: "auto", marginBottom: "200px"}}className="d-block" color="primary">Make another order</Button></Link>
                      </>
      :

      <div className="custom-request">
        <h1>Custom Request</h1>
        <p>
          Request anything, from anyplace, and we'll deliver to you! You can pay
          after we deliver (in cash, Venmo, or we have a credit card reader)! After you Submit, we will deliver your order.
        </p>
        <div className="fields">
          <input
            id="request-item"
            name="item"
            value={form.item}
            onChange={e => updateForm(e)}
            placeholder="What do you want?"
          />
          <input
            id="request-place"
            name="place"
            value={form.place}
            onChange={e => updateForm(e)}
            placeholder="From where?"
          />
          <textarea
            rows="5"
            id="request-note"
            name="details"
            value={form.details}
            onChange={e => updateForm(e)}
            placeholder="Optional note for delivery details?"
          ></textarea>
          <div className="gift-question">
            <p className="gift-text"> Check box if it's a gift</p>
            <input type="checkbox" id="isGift" name="isGift" onChange={(e) => handleCheck(e)}></input>
          </div>
          {isGift &&
            <input
              className="short-input"
              name="recipientName"
              value={form.recipientName}
              onChange={e => updateForm(e)}
              placeholder="Name of Gift Recipient"
            /> 
          }
          <input
            className="short-input"
            name="firstName"
            value={form.firstName}
            onChange={e => updateForm(e)}
            placeholder="Your First Name"
          />
          <input
            className="short-input"
            name="lastName"
            value={form.lastName}
            onChange={e => updateForm(e)}
            placeholder="Your Last Name"
          />
          <input
            id="contact-email"
            name="email"
            value={form.email}
            onChange={e => updateForm(e)}
            placeholder="Your Email Address"
          />
          <input
            id="phone-number"
            name="phone"
            value={form.phone}
            onChange={e => updateForm(e)}
            placeholder="Your Phone Number"
          />
          <input
            id="address-line-1"
            name="addressL1"
            value={form.addressL1}
            onChange={e => updateForm(e)}
            placeholder={isGift ? "Gift Recipient's Address Line 1" : "Address Line 1"}
          />
          <input
            id="address-line-2"
            name="addressL2"
            value={form.addressL2}
            onChange={e => updateForm(e)}
            placeholder={isGift ? "Gift Recipient's Address Line 2" : "Address Line 2"}
          />
          {isGift && 
            <textarea
              rows="5"
              id="contact-message"
              name="note"
              value={form.note}
              onChange={e => updateForm(e)}
              placeholder="Gift Note for the recipient (optional)"
            ></textarea> 
          }
        </div> 
        <button onClick={handleSubmit}>
          {isLoading ? (
            <ClipLoader size={20} color={"rgb(7, 156, 241)"} loading={true} />
          ) : (
            <p>SUBMIT</p>
          )}
        </button>
      </div>
      } 
    </>
  );
};

export default CustomRequest;
