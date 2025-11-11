import React from "react";
import "./letsTalk.css";
import USPic from "../../images/US.png";
import { Link } from "react-router-dom";

const LetsTalk = () => {
  return (
    <div className="letsTalk">
      <div className="container">
        <div className="liquid_shape"></div>
        <div className="mini-liquid_shape">
          <img src={USPic} alt="USA"></img>
        </div>
        <div class="talk">
          <p class="word ">
            I've landed, let's <Link to="/contact">talk</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
