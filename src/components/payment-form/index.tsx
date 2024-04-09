import React, { SyntheticEvent, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import styles from "./payment-form.module.scss";
import Button from "../button";

type IProps = {
  cart?: any;
};

const PUBLIC_KEY =
  "pk_test_51NzeNXHXwdFy7OhgatAbMrcHWJT9nWrbrKT1zip0Y51TUZWnCwgVdM3miW2rDS6fSQgkLSyC1IeMD7Gk0LdVbIqG00cvas9fRY";

const PaymentForm = (props: IProps) => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  console.log("cart", props.cart)

  const calculateTotalAmount = () => {
    const totalAmount = props.cart.reduce(
      (acc: number, item: any) => acc + item.quantity * item.price,
      0
    );
    return totalAmount;
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const cardElement = elements?.getElement(CardElement);

    if (!cardElement || !stripe) {
      console.error("Card element or stripe object is not available");
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        console.error("Error creating payment method:", error.message);
        return;
      }

      const { id } = paymentMethod;
      const totalAmount = calculateTotalAmount();

      const response = await axios.post(
        "https://api.stripe.com/v1/payment_intents",
        {
          amount: totalAmount,
          id,
        },
        {
          headers: {
            Authorization: `Bearer ${PUBLIC_KEY}`,
          },
        }
      );

      if (response.data.success) {
        console.log("Successful payment");
        setSuccess(true);
      } else {
        console.error(
          "Payment failed:",
          response.data.error || "Unknown error"
        );
      }
    } catch (error: any) {
      console.error("Error during payment processing:", error?.message);
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
