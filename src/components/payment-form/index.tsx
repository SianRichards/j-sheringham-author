import React, { SyntheticEvent, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import styles from "./payment-form.module.scss";
import Button from "../button";

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const cardElement = elements?.getElement(CardElement);
    if (cardElement && stripe) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (!error) {
        try {
          const { id } = paymentMethod;
          const response = await axios.post("http://localhost:4000/payment", {
            amount: 1000,
            id,
          });
          if (response.data.success) {
            console.log("Successful payment");
            setSuccess(true);
          }
        } catch (error) {
          console.log("Error: ", error);
        }
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <div className={styles.payment}>
      {!success ? (
        <form onSubmit={handleSubmit} className={styles.paymentForm}>
          <p>Please enter your card details below</p>
          <fieldset>
            <CardElement />
          </fieldset>
          <Button title="Pay" />
        </form>
      ) : (
        <div>
          <h2>Purchase complete</h2>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
