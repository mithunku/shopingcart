import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { cartReducer } from "./Reducers";
import { productreducer } from "./Reducers";
const Cart = createContext();

const Context = ({ children }) => {
  const products = [
    {
      id: 1,
      image:
        "https://jasystore.com/wp-content/uploads/2021/12/apple-iphone-15-1-500x500.jpg",
      product_name: "Product A",
      rating: 4,
      stock: 5,
      fast_delivery: true,
      price: 24.99,
    },
    {
      id: 2,
      image:
        "https://tse1.mm.bing.net/th?id=OIP.ZqyKfUxUNz-vRNHjiO6oXgHaHa&pid=Api&P=0&h=180",
      product_name: "Product B",
      rating: 2,
      stock: 3,
      fast_delivery: false,
      price: 14.99,
    },
    {
      id: 3,
      image:
        "https://1.bp.blogspot.com/-_iQv9PpBYE4/XbA7P3fFNZI/AAAAAAAAAHg/edeY24SJEGQ8wIGY2VEnDFztuc55a8W7wCLcBGAsYHQ/s1600/boat%2Brockerz%2B400%2BOn-ear%2Bbluetooth%2Bheadphones%2Breview.jpg",
      product_name: "Product C",
      rating: 5,
      stock: 7,
      fast_delivery: true,
      price: 34.99,
    },
    {
      id: 4,
      image:
        "https://cdn1.smartprix.com/rx-i1VhPejGo-w1200-h1200/hp-pavilion-15-dk005.jpg",
      product_name: "Product D",
      rating: 3,
      stock: 0,
      fast_delivery: true,
      price: 19.99,
    },
    {
      id: 5,
      image:
        "https://tse4.mm.bing.net/th?id=OIP.ffpzASkvA_qAHTBXzn5Q0wHaJ4&pid=Api&P=0&h=180",
      product_name: "Product E",
      rating: 1,
      stock: 6,
      fast_delivery: false,
      price: 9.99,
    },
    {
      id: 4,
      image:
        "https://cdn1.smartprix.com/rx-i1VhPejGo-w1200-h1200/hp-pavilion-15-dk005.jpg",
      product_name: "Product D",
      rating: 3,
      stock: 0,
      fast_delivery: true,
      price: 19.99,
    },
  ];
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productstate, productdispatch] = useReducer(productreducer, {
    stock: false,
    byFastDelivery: false,
    byrating: 0,
    searchQuery: "",
  });
  console.log(products);
  return (
    <div>
      <Cart.Provider value={{ state, dispatch, productdispatch, productstate }}>
        {children}
      </Cart.Provider>
    </div>
  );
};

export default Context;
export const CartState = () => {
  return useContext(Cart);
};
