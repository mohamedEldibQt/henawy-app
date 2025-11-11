import React from "react";
import "./landing.css";
import USPic from "../../images/US.png";
import Wrapper from "../wrapper/Wrapper";

const Landing = () => {
  return (
    <div className="landing">
      <div className="container">
        <div className="liquid_shape"></div>
        <div className="mini-liquid_shape">
          <img src={USPic} alt="USA"></img>
        </div>
        <Wrapper />
      </div>
    </div>
  );
};

export default Landing;
