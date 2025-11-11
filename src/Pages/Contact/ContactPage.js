// import React from "react";
import { useEffect, useState } from "react";
import Loader from "../../component/Loader/Loader";
// import { Link } from "react-router-dom";
import "./contactPage.css";
import LeftBar from "../../component/leftBar/LeftBar";
import RightBar from "../../component/rightBar/RightBar";
import blacksplater from "../../images/BLACK SPLATTER.png";
import contactPlane from "../../images/contactplane.png";
import scrollDown from "../../images/scroll.svg";

export default function ContactPage() {
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
    <div className="contact-main">
      <LeftBar />
      <RightBar />
      <div className="contact-main-landing">
        <div className="contactLiquidShape">
          <img src={blacksplater} alt=""></img>
        </div>
        <img src={contactPlane} alt="" className="contactPlane"></img>
        <h1>Float me a note</h1>
        <img src={scrollDown} alt="" className="scrollDown"></img>
      </div>
      <div className="contactForm">
        <form className="form">
          <div className="form1">
            <div>
              <label>Your name</label>
              <input placeholder="What's your name?" type="text"></input>
            </div>
            <div>
              <label>Your email</label>
              <input
                placeholder="What's your email address?"
                type="email"
                required
              ></input>
            </div>
          </div>
          <div className="form2">
            <label>Message</label>
            <textarea
              placeholder="What's your message?"
              type="text"
              required
            ></textarea>
          </div>
          <input type="submit" value="Send Message" className="submit" />
        </form>
      </div>
    </div>
  );
}
