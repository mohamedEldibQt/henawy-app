import { Link } from "react-router-dom";
import { useState } from "react";
import "./RightBar.css";
import menuIcon from "../../images/menu.svg";
import linkedinLogo from "../../images/linkedinLogo.svg";
import facebookLogo from "../../images/facebookLogo.svg";
import instagramLogo from "../../images/instagramLogo.svg";

export default function RightBar() {
  // const openedMenu = "opened-menu";
  const [display, setDisplay] = useState("opened-menu d-none");

  const changeDisplay = () => {
    if (display !== "opened-menu d-none") setDisplay("opened-menu d-none");
    else setDisplay("opened-menu d-flex");
  };
  return (
    <div className="rightBar">
      <div>
        <img
          src={menuIcon}
          alt="menu"
          className="menu-icon"
          onClick={changeDisplay}
        />
        <div className={display}>
          <div className="column ">
            <h2>ABOUT</h2>
            <Link to="/">Home</Link>
            <Link to="/About">My Story</Link>
          </div>
          <div className="column">
            <h2>WORK</h2>
            <Link>Work 1</Link>
            <Link>Work 2</Link>
            <Link>Work 3</Link>
          </div>
          <div className="column">
            <h2>CONTACT</h2>
            <Link to="/contact">Let's Talk</Link>
          </div>
        </div>
      </div>
      <Link className="contactMe" to="/contact">
        Contact Me
      </Link>
      <div className="socialmedia">
        <Link target="_blank" to="https://www.linkedin.com/in/henawy/">
          <img src={linkedinLogo} alt="Linkedin" />
        </Link>
        <Link target="_blank" to="https://www.facebook.com/Henawy94">
          <img src={facebookLogo} alt="Facebook" />
        </Link>
        <Link target="_blank" to="https://www.instagram.com/henawy/">
          <img src={instagramLogo} alt="Instagram" />
        </Link>
      </div>
    </div>
  );
}
