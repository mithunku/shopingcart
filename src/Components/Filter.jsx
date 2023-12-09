import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";
const Filter = () => {
  const {
    productstate: { stock, byFastDelivery, sort, byrating, searchQuery },
    productdispatch,
  } = CartState();
  console.log(stock, byFastDelivery, sort, byrating, searchQuery);
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() => {
            productdispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            });
          }}
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() => {
            productdispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            });
          }}
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() => {
            productdispatch({
              type: "FILTER_BY_STOCK",
            });
          }}
          checked={stock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() => {
            productdispatch({
              type: "FILTER_BY_DELIVERY",
            });
          }}
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Rating
          rating={byrating}
          handleChange={(i) => {
            console.log(i);
            productdispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            });

            console.log("onclick filler");
          }}
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button
        variant="light"
        onClick={() => {
          productdispatch({
            type: "CLEAR_FILTERS",
          });
        }}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filter;
