const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  let lineItems = req.body.map((item) => {
    return {
      name: item.name,
      amount: item.amount,
      currency: "usd",
      quantity: item.quantity
    }
  })

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    success_url: "https://changingcapernaum.com/checkout-success",
    cancel_url: "https://changingcapernaum.com/order"
  });

  res.json(session);
};