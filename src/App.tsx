import React from "react";
import "./App.css";
import Routes from "./pages/routes";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51NzeNXHXwdFy7OhgatAbMrcHWJT9nWrbrKT1zip0Y51TUZWnCwgVdM3miW2rDS6fSQgkLSyC1IeMD7Gk0LdVbIqG00cvas9fRY"
);

const App: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="App">
        <Routes />
      </div>
    </Elements>
  );
};

export default App;
