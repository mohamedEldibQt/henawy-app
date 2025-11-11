import React from "react";
import "./loader.css";
import loading from "../../images/loading.png";

const Loader = () => {
  return (
    <div className="loading">
      <img src={loading} alt="loading"></img>
    </div>
  );
};

export default Loader;
