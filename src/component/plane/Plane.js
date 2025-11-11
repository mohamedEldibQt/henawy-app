import React, { useEffect, useState } from "react";
import "./plane.css";
import plane from "../../images/plane.png";

const Plane = () => {
  const [width, setWidth] = useState(310);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newWidth = Math.max(250, 310 - scrollPosition / 13);
      setWidth(newWidth);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="plane">
      <img
        src={plane}
        alt="plane"
        style={{ width: `${width}px` }}
        className="plane-image"
      />
    </div>
  );
};

export default Plane;
