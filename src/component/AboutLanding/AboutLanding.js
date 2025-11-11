import React from "react";
import "./AboutLanding.css";
import henawy from "../../images/henawy.png";
import splatter from "../../images/splatter.png";

function AboutLanding() {
  return (
    <div className="AboutLanding">
      <div className="aboutLiquidShape">
        <img className="splatter" src={splatter} alt=""></img>
        <img src={henawy} alt=""></img>
        <h1>Hello.</h1>
      </div>
    </div>
  );
}

export default AboutLanding;
