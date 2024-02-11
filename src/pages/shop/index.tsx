import React, { useState } from "react";
import { bookItems } from "./books";
import styles from "./shop.module.scss";
import BookItem from "../../components/bookItem";
import Button from "../../components/button";
import CheckoutForm from "../../components/payment-form";

const Shop = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  return (
    <div className={styles.bookShop}>
      <h1>Book Shop</h1>
      <div className={styles.cardsContainer}>
        {bookItems.map((bookitem) => {
          return <BookItem key={bookitem.id} {...bookitem} />;
        })}
      </div>
      <div>
        <Button
          title="Checkout"
          onClickFunction={() => setShowPaymentForm(true)}
        />
      </div>
      {showPaymentForm && <CheckoutForm />}
    </div>
  );
};

export default Shop;
