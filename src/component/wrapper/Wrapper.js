import React from "react";
import "./wrapper.css";
import { Typewriter } from "react-simple-typewriter";

const Wrapper = () => {
  return (
    <div class="wrapper">
      <p class="word ">
        <span>
          <Typewriter
            words={["Systems Engineer.", "Software Engineer."]}
            loop={true}
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={4000}
          />
        </span>
      </p>
    </div>
  );
};

export default Wrapper;
