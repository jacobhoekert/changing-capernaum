import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector} from "react-redux";
import "../styles/delivery_form.scss";
import ClipLoader from "react-spinners/ClipLoader";
import { db } from "../firebaseConfig";
import Firebase from 'firebase';


const DeliveryForm = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [updatedDatabase, setUpdatedDatabase] = useState(false);
  const [stripe, setStripe] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [isGift, setIsGift] = useState(false);

  const globalState = useSelector(state => state);

  const handleCheck = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setIsGift(true);
    } else {
      setIsGift(false);
    }
  }

  const [form, setForm] = useState({
    recipientName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressL1: "",
    addressL2: "",
    note: "",
    message: ""
  });

  const updateForm = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const buttonStyle = {
    margin: "auto",
    display: "block",
    width: "200px",
    border: "none",
    height: "50px",
    color: "white",
    backgroundColor: "#007bff",
    borderRadius: "10px",
    marginBottom: "100px"
  }

  useEffect(() => {
    setStripe(window.Stripe(process.env.STRIPE_PUBLISHABLE_KEY))
    async function fetchStripeSession() {
      try {
        const res = await axios({
          method: "POST",
          url: "https://changingcapernaum.com/api/build-checkout",
          data: globalState.order.order
        });
        console.log(res.data.id);
        setSessionId(res.data.id);
      } catch (err) {
        console.log(err);
      }
    }
    fetchStripeSession();
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    axios({
      method: "POST",
      url: "https://changingcapernaum.com/api/sendMail",
      data: form
    });
    try {
      let data = {
        timestamp: Firebase.firestore.Timestamp.now(),
        delivery: form,
        product: globalState.order.order,
      }
      const update = await db.collection("orders").add(data);
      console.log("Document Successfully written!");
      setIsLoading(false);
      stripe
        .redirectToCheckout({
          sessionId: sessionId
        })
        .then(function(result) {
          console.log(result.error.message);
        });
    } catch (err) {
      console.log("Error writing document: ", err);
    }
  };

  return (
    <div className="delivery">
      <h1>Fill out the Delivery Details, then click on the "Checkout" button to move on to the Payment Form to Finish</h1>
      <div className="checkbox-container">
        <p className="checkbox-text"> Check box if it's a gift</p>
        <input type="checkbox" id="isGift" name="isGift" onChange={(e) => handleCheck(e)}></input>
      </div>
      <form id="contact-form">
        <div id="questions">
          {isGift &&
            <input
              id="recipient-name"
              name="recipientName"
              value={form.recipientName}
              onChange={e => updateForm(e)}
              placeholder="Name of Gift Recipient"
            /> 
          }
          <div id="names" className="short-fields">
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
          </div>
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
          <textarea
            rows="5"
            id="request-note"
            name="details"
            value={form.details}
            onChange={e => updateForm(e)}
            placeholder="Optional note for delivery details?"
          ></textarea>
        </div>
      </form>
      <button style={buttonStyle} onClick={handleSubmit}>
      {isLoading ? (
                <ClipLoader
                  size={20}
                  color={"rgb(7, 156, 241)"}
                  loading={true}
                />
              ) : (
                <p>CHECKOUT</p>
              )}
      </button>
    </div>
  );
};

export default DeliveryForm;
