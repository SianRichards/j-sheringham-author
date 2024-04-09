import React, { useState } from "react";
import Button from "../button";
import styles from "./bookitem.module.scss";

interface IProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  quantity: number;
  setItems: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        name: string;
        price: number;
        imgUrl: string;
        quantity: number;
      }[]
    >
  >;
}

const BookItem = (props: IProps) => {
  const { id, name, price, imgUrl, quantity, setItems } = props;

  const handleIncrement = () => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = () => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const handleAddToCart = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: 1 } : item
      )
    );
  };

  return (
    <div key={id} className={styles.card}>
      <h2>{name}</h2>
      <img src={imgUrl} />
      <p>£{price}</p>
      {quantity > 0 ? (
        <div className={styles.quantityAdjust}>
          <Button title="+" onClickFunction={handleIncrement} />
          {quantity}
          <Button title="-" onClickFunction={handleDecrement} />
        </div>
      ) : (
        <Button
          title="Add to cart"
          onClickFunction={() => handleAddToCart(id)}
        />
      )}
    </div>
  );
};

export default BookItem;
