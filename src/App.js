import { useEffect, useState } from "react";
import "./App.css";
import LeftBar from "./component/leftBar/LeftBar";
import RightBar from "./component/rightBar/RightBar";
import Loader from "./component/Loader/Loader";
import { Link } from "react-router-dom";
import Landing from "./component/Landing/Landing";
import Plane from "./component/plane/Plane";
import LetsTalk from "./component/LetsTalk/LetsTalk";
import bubble1 from "./images/bubble1.png";
import bubble2 from "./images/bubble2.png";
// import bubble3 from "./images/bubble3.png.png";
import wavy from "./images/wavy.png";
import logo1 from "./images/direction.png";
import logo2 from "./images/LOGO2.png";
import logo3 from "./images/LOGO3.png";
import work1 from "./images/work1.png";
import work2 from "./images/work2.png";
import work3 from "./images/work3.png";

function App() {
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
    <div className="App">
      {/* <Link to="/contact" style={{ color: "white", display: "block" }}>
        contact
      </Link> */}
      <img className="bubble1" src={bubble1} alt="buble1"></img>
      <img className="bubble2" src={bubble2} alt="buble2"></img>
      <Plane />
      <LeftBar />
      <RightBar />
      <Landing />
      <div className="about">
        <div className="about-text">
          <h2>Hello, I'm Henawy</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            saepe obcaecati maxime nemo ipsam dignissimos aspernatur doloribus
            in sapiente dolor minima ab illum nam distinctio, vel, velit
            reiciendis facilis vero.
          </p>
        </div>
        <img src={wavy} alt="wavy" className="wavy"></img>
        <div className="skills">
          <div className="skill">
            <div className="logo">
              <img src={logo1} alt=""></img>
            </div>
            <h2>Project Management</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              saepe obcaecati maxime nemo ipsam dignissimos aspernatur doloribus
              in sapiente dolor minima ab illum nam distinctio, vel, velit
              reiciendis facilis vero.
            </p>
          </div>
          <div className="skill">
            <div className="logo">
              <img src={logo2} alt=""></img>
            </div>
            <h2>Technical proficiency</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              saepe obcaecati maxime nemo ipsam dignissimos aspernatur doloribus
              in sapiente dolor minima ab illum nam distinctio, vel, velit
              reiciendis facilis vero.
            </p>
          </div>
          <div className="skill">
            <div className="logo">
              <img src={logo3} alt=""></img>
            </div>
            <h2>Problem solving</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              saepe obcaecati maxime nemo ipsam dignissimos aspernatur doloribus
              in sapiente dolor minima ab illum nam distinctio, vel, velit
              reiciendis facilis vero.
            </p>
          </div>
        </div>
        <div className="works">
          <div className="work">
            <div className="image">
              <img src={work1} alt=""></img>
            </div>
            <div className="info">
              <h2>Project 1</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
                saepe obcaecati maxime nemo ipsam dignissimos aspernatur
                doloribus in sapiente dolor minima ab illum nam distinctio, vel,
                velit reiciendis facilis vero.
              </p>
              <Link to="/">View Work</Link>
            </div>
          </div>
          <div className="work">
            <div className="image">
              <img src={work2} alt=""></img>
            </div>
            <div className="info">
              <h2>Project 2</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
                saepe obcaecati maxime nemo ipsam dignissimos aspernatur
                doloribus in sapiente dolor minima ab illum nam distinctio, vel,
                velit reiciendis facilis vero.
              </p>
              <Link to="/">View Work</Link>
            </div>
          </div>
          <div className="work">
            <div className="image">
              <img src={work3} alt=""></img>
            </div>
            <div className="info">
              <h2>Project 3</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
                saepe obcaecati maxime nemo ipsam dignissimos aspernatur
                doloribus in sapiente dolor minima ab illum nam distinctio, vel,
                velit reiciendis facilis vero.
              </p>
              <Link to="/">View Work</Link>
            </div>
          </div>
        </div>
      </div>
      <img src={wavy} alt="" style={{ width: "100%" }}></img>
      <LetsTalk />
      <div className="footer"></div>
      {/* <Link className="App-link" to="/contact">
        Contact Page
      </Link> */}
      {/* <img src={ipad} alt="ipad" />
      <img src={iphone} alt="iphone" /> */}
    </div>
  );
}

export default App;
