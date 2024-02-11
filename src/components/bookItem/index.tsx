import React, { useState } from "react";
import Button from "../button";
import styles from "./bookitem.module.scss";

interface IProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const BookItem = (props: IProps) => {
  const { id, name, price, imgUrl } = props;
  const [quantity, setQuantity] = useState(0);

  return (
    <div key={id} className={styles.card}>
      <h2>{name}</h2>
      <img src={imgUrl} />
      <p>£{price}</p>
      {quantity > 0 ? (
        <div className={styles.quantityAdjust}>
          <Button
            title="+"
            onClickFunction={() => setQuantity((prevState) => prevState + 1)}
          />
          {quantity}
          <Button
            title="-"
            onClickFunction={() => setQuantity((prevState) => prevState - 1)}
          />
        </div>
      ) : (
        <Button title="Add to cart" onClickFunction={() => setQuantity(1)} />
      )}
    </div>
  );
};

export default BookItem;
