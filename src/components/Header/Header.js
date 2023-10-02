import React from "react";
import logo from "./logo.png";
import mobile from "./mobile.svg";
import desktop from "./desktop.svg";
import tooltip from "./Tooltip.svg";
import camera from "./camera.svg";
import "./Header.css";
import '../../pages/Index/Index.css'



const Header = () => {

  return (
    <div className="app">
      <img src={tooltip} id="tooltip" alt="share-btn" />
      <img src={desktop} id="desktop" alt="share-btn" />
      <img src={mobile} id="mobile" alt="share-btn" />
      <img src={logo} id="profile_img" alt="my-img" />

      <img src={camera} id="camera" alt="my-img" />

      <p>
        <b>
      Qaasim Umar</b>
      </p>
    </div>
  );
};

export default Header;
