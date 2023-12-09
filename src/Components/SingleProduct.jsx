import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);
  return (
    <div className="products">
      <Card>
        <Card.Img
          variant="top"
          src={prod.image}
          alt={prod.title}
          style={{ width: "300px" }}
        />
        <Card.Body>
          <Card.Title>{prod.product_name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>{prod.price}</span>
            {prod.fast_delivery ? (
              <div>Fast delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.rating} />
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                });
              }}
              variant="danger"
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                });
              }}
              disabled={!prod.stock}
            >
              {" "}
              {!prod.stock ? "Out of Stock" : "Add to cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
