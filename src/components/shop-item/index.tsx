import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "../button";

interface IItem {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

type IProps = {
  item: IItem;
};

const ShopItem = (props: IProps) => {
  const { id, name, price, imgUrl } = props.item;
  const [quantity, setQuantity] = useState(0);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">£{price}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-50"
              title="Add to cart"
              onClickFunction={() => setQuantity(1)}
            />
          ) : (
            <div className="d-flex align-items-center flex-column">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button
                  title="+"
                  onClickFunction={() =>
                    setQuantity((prevQuantity: number) => prevQuantity + 1)
                  }
                />
                <span className="fs-3">{quantity}</span> in cart
                <Button
                  title="-"
                  onClickFunction={() =>
                    setQuantity((prevQuantity: number) => prevQuantity - 1)
                  }
                />
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ShopItem;
