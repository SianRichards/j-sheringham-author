import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../payment-form";

// elements: wraps around other Stripe components

// loadStripe: asynchronously loads the Stripe JS library.
// With the API key passed in, it connects FE code to stripe 
// account. The function returns a promise which gives access
// to the Stripe object and methods

const PUBLIC_KEY =
  "pk_test_51NzeNXHXwdFy7OhgatAbMrcHWJT9nWrbrKT1zip0Y51TUZWnCwgVdM3miW2rDS6fSQgkLSyC1IeMD7Gk0LdVbIqG00cvas9fRY";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
  <Elements stripe={stripeTestPromise}>
    <PaymentForm />
  </Elements>);
};

export default StripeContainer;
