import React from "react";
import { CartState } from "../context/Context";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";
import "./stylesheet2.css";
const Home = () => {
  const {
    state: { products },
    productstate: { sort, stock, byFastDelivery, byrating, searchQuery },
  } = CartState();
  console.log(products);
  const transformProduct = () => {
    let sortedproducts = products;
    if (sort) {
      sortedproducts = sortedproducts.sort((a, b) => {
        return sort === "lowToHigh" ? a.price - b.price : b.price - a.price;
      });
    }
    console.log(sortedproducts);
    if (!stock) {
      sortedproducts = sortedproducts.filter((prod) => {
        return prod.stock;
      });
    }
    if (byrating) {
      sortedproducts = sortedproducts.filter((prod) => {
        return prod.rating >= byrating;
      });
    }
    if (searchQuery) {
      sortedproducts = sortedproducts.filter((prod) => {
        return prod.product_name.toLowerCase().includes(searchQuery);
      });
    }
    if (byFastDelivery) {
      sortedproducts = sortedproducts.filter((prod) => {
        return prod.fast_delivery;
      });
    }
    return sortedproducts;
  };

  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {transformProduct().map((prods) => {
          return (
            <>
              <SingleProduct prod={prods} key={prods.id} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
