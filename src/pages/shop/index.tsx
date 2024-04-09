import React, { useState } from "react";
import { bookItems } from "./books";
import styles from "./shop.module.scss";
import BookItem from "../../components/bookItem";
import Button from "../../components/button";
import CheckoutForm from "../../components/payment-form";

const Shop = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [items, setItems] = useState(bookItems);

  return (
    <div className={styles.bookShop}>
      <h1>Book Shop</h1>
      <div className={styles.cardsContainer}>
        {items.map((item) => {
          return <BookItem key={item.id} {...item} setItems={setItems} />;
        })}
      </div>
      <div>
        <Button
          title="Checkout"
          onClickFunction={() => setShowPaymentForm(true)}
        />
      </div>
      {showPaymentForm && <CheckoutForm cart={items} />}
    </div>
  );
};

export default Shop;
