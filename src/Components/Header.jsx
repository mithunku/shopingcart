import React from "react";
import { CartState } from "../context/Context";
import {
  Navbar,
  Container,
  FormControl,
  Dropdown,
  Nav,
  Badge,
  Button,
} from "react-bootstrap";
import { FaCartShopping } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import "./stylesheet2.css";
import { Link } from "react-router-dom";

function Header() {
  const {
    state: { cart },
    dispatch,
    productdispatch,
  } = CartState();
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <a href="/"> Shoping cart</a>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              placeholder="search product"
              className="m-auto"
              onChange={(e) => {
                productdispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            ></FormControl>
          </Navbar.Text>

          <Nav>
            <Dropdown align={{ lg: "end" }} alignLeft>
              <Dropdown.Toggle variant="success">
                <FaCartShopping color="white" fontSize={25} />
                <Badge>{cart.length}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: 370 }}>
                {cart.length > 0 ? (
                  <>
                    {cart.map((prod) => {
                      return (
                        <div className="cartItem">
                          <span key={prod.id} style={{ display: "flex" }}>
                            <img
                              src={prod.image}
                              className="cartItemImg"
                              alt={prod.product_name}
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          </span>
                          <div className="cartItemDetail">
                            <span>{prod.product_name}</span>
                            <span>${prod.price}</span>
                          </div>
                          <AiFillDelete
                            fontSize={20}
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: prod,
                              });
                            }}
                          />
                          <Link to="/cart">
                            <Button style={{ width: "95%", margin: "0,10px" }}>
                              go to cart
                            </Button>
                          </Link>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is empty!</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
