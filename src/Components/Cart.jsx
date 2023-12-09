import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import { Button, ListGroup, Row, Col, Image } from "react-bootstrap";
import Rating from "./Rating";
const Cart = () => {
  let [total, setTotal] = useState();
  console.log(total);
  const {
    state: { cart },
    dispatch,
  } = CartState();

  useEffect(() => {
    setTotal(
      cart.reduce((x, y) => {
        return x + y.price * y.qty;
      }, 0)
    );
  }, [cart]);
  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((x) => {
            return (
              <ListGroup.Item key={x.id}>
                <Row>
                  <Col md={2}>
                    <Image src={x.image} alt={x.product_name} fluid rounded />
                  </Col>
                  <Col md={2}>
                    {" "}
                    <span>{x.product_name}</span>
                  </Col>
                  <Col md={2}>
                    {" "}
                    <span>{x.price}</span>
                  </Col>
                  <Col md={2}>
                    {" "}
                    <Rating rating={x.rating} />
                  </Col>
                  <Col md={2}>
                    {" "}
                    <span>{x.stock}</span>
                  </Col>
                  <Col md={2}>
                    {" "}
                    <Button
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: x,
                        });
                      }}
                    >
                      Remove from cart
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>

      <div className="filters2 summary">
        <span className="title">Subtotal {cart.length} items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Toatl: ${total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceeed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
