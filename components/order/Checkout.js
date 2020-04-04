import { useState, useEffect } from "react";
import axios from 'axios';
import { db } from "../../firebaseConfig";

const Checkout = props => {
  const [stripe, setStripe] = useState(null);
  const [sessionId, setSessionId] = useState(null);

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
        const res = await axios.get('http://localhost:3000/api/build-checkout');
        setSessionId(res.data.id);
      } catch (err) {
        console.log(err);
      }
    }
    fetchStripeSession();
  }, []);

  const handleClick = () => {
    db.collection("orders")
        .add(form)
        .then(console.log("Document Successfully written!"))
        .catch(err => console.log("Error writing document: ", err));
    stripe
      .redirectToCheckout({
        sessionId: sessionId
      })
      .then(function(result) {
        console.log(result.error.message);
      });
  };

  return <button style={buttonStyle} onClick={handleClick}>CHECKOUT</button>;
};

export default Checkout;
