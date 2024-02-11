import React from "react";
import { Col, Row } from "react-bootstrap";
import { bookItems } from "./books";
import ShopItem from "../../components/shop-item";

const Shop = () => {
  return (
    <div className="">
      <h1>Bookshop</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {bookItems.map((item: any) => {
          return (
            <Col key={item.id}>
              <ShopItem item={item} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Shop;
