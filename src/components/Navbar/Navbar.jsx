import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/Context";

const Navbar = () => {
  const { cartCount } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="App Logo" />
        </Link>
      </div>
      <div className="menu-link">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/mens" style={{ textDecoration: "none" }}>
              MEN
            </Link>
          </li>
          <li>
            <Link to="/womens" style={{ textDecoration: "none" }}>
              WOMEN
            </Link>
          </li>
          <li>
            <Link to="/kids" style={{ textDecoration: "none" }}>
              KIDS
            </Link>
          </li>
          <li>
            <Link to="/product-list" style={{ textDecoration: "none" }}>
              PRODUCT
            </Link>
          </li>
        </ul>
      </div>
      <div className="right-nav">
        <ul className="rightnav-menu">
          <li>
            <Link to="/signup">
              <button className="btn-login">Sign Up</button>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <button className="cart-count">Cart({cartCount()})</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
