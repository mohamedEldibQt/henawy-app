import { Link } from "react-router-dom";
import "./LeftBar.css";
import homeLogo from "../../images/home.svg";

export default function LeftBar() {
  return (
    <div className="leftBar">
      <Link to="/">
        <img src={homeLogo} alt="home" />
      </Link>
      <Link className="aboutMe" to="/About">
        About Me
      </Link>
      <p>
        <span>&copy;</span>Shedaaa 2024
      </p>
    </div>
  );
}
