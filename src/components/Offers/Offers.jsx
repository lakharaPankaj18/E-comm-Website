import React from "react";
import offer from "../Assets/offer.png";
import "./Offers.css";
import { Link } from "react-router-dom";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Summer Offer</h1>
        <h1>2022 Collection</h1>
        <Link to="/summer-collection">
          <button>SHOP NOW</button>
        </Link>
      </div>
      <div className="offers-right">
        <Link to="/summer-collection">
          <img src={offer} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Offers;
