import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../component/Loader/Loader";
import "./About.css";
import LeftBar from "../../component/leftBar/LeftBar";
import RightBar from "../../component/rightBar/RightBar";
import Plane from "../../component/plane/Plane";
import AboutLanding from "../../component/AboutLanding/AboutLanding";
import wavy from "../../images/wavy.png";
import cyanEgypt from "../../images/cyanEgypt.png";
import cyanUsa from "../../images/cyanUSA.png";

function About() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };
    fakeDataFetch();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="About">
      <Plane />
      <LeftBar />
      <RightBar />
      <AboutLanding />
      <div className="about-text2">
        <h2>Develop, design, and implement engineered systems.</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio saepe
          obcaecati maxime nemo ipsam dignissimos aspernatur doloribus in
          sapiente dolor minima ab illum nam distinctio, vel, velit reiciendis
          facilis vero. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Optio saepe obcaecati maxime nemo ipsam dignissimos aspernatur
          doloribus in sapiente dolor minima ab illum nam distinctio.
        </p>
      </div>
      <img src={wavy} alt="" className="wavy"></img>
      <div className="travels">
        <div className="travel">
          <div className="flag">
            <img src={cyanEgypt} alt=""></img>
          </div>
          <h3>Egypt</h3>
          <h4>2010-2014</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            saepe obcaecati maxime nemo ipsam dignissimos aspernatur doloribus
            in sapiente dolor minima ab illum nam distinctio, vel, velit
            reiciendis facilis vero. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </div>
        <div className="travel">
          <div className="flag">
            <img src={cyanUsa} alt=""></img>
          </div>
          <h3>USA</h3>
          <h4>2014-2018</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            saepe obcaecati maxime nemo ipsam dignissimos aspernatur doloribus
            in sapiente dolor minima ab illum nam distinctio, vel, velit
            reiciendis facilis vero. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </div>
        <div className="travel">
          <div className="flag">
            <img src={cyanUsa} alt=""></img>
          </div>
          <h3>USA</h3>
          <h4>2018-Present</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            saepe obcaecati maxime nemo ipsam dignissimos aspernatur doloribus
            in sapiente dolor minima ab illum nam distinctio, vel, velit
            reiciendis facilis vero. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </div>
      </div>
      <div className="clients">
        <h2>I've had the pleasure of working with: </h2>
        <div className="clients-logo">
          <img
            src="https://www.pngall.com/wp-content/uploads/14/Nike-Swoosh-PNG.png"
            alt=""
          ></img>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pepsi_2023.svg/2048px-Pepsi_2023.svg.png"
            alt=""
          ></img>
          <img
            src="https://kirkfreeport.net/wp-content/uploads/2015/10/Calvin_Klein_Cosmetics.png"
            alt=""
          ></img>
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/Rolex-Logo.png"
            alt=""
          ></img>
        </div>
      </div>
      <div className="about-footer">
        <Link to="" className="work">
          <p>Check out my work</p>
        </Link>
      </div>
    </div>
  );
}

export default About;
