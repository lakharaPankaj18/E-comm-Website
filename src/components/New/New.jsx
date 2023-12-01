import React from "react";
import "./New.css";
import logo1 from "../Assets/logo1.png";
const New = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="new">
      <div className="new-left">
        <h1>NEW STOCK</h1>
        <div className="new-btn">
          <button onClick={scrollToBottom}>TAP TO REVEAL</button>
        </div>
      </div>
      <div className="new-right">
        <img src={logo1} alt="New Stock" />
      </div>
    </div>
  );
};

export default New;
