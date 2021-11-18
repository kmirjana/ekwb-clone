const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Jw4WwKk6MDQKEwfHAFqMEgkgCqf2EdDXrC0GdiAb4Mf3daG4SmFbOO24p8CWTdmR4Norc1gyJV6SaDtrhFzrt5N00YrpEjy0k"
);
// API -CONFIG
const app = express();
// MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());
// API ROUTES
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment requrest recieved !!!! for ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of currency
    currency: "eur",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/ekwb-f8682/us-central1/api
