import React from "react";
import { Discord, Instagram, Twitter } from "./Icons";
import logo from "../assets/images/png/logo.png";
const Header = () => {
  return (
    <div className="header-section py-lg-2 py-2">
      <div className="container-fluid d-flex justify-content-between px-xl-4  px-lg-3 align-items-center">
        <div>
          <img className="logo-img" src={logo} alt="logo" />
        </div>
        <div>
          <a
            className="social-icon d-inline-block"
            target="_blank"
            href="https://twitter.com/BaboonBowlsClub"
          >
            <Twitter />
          </a>
          <a
            className="social-icon mx-sm-5 mx-2 d-inline-block"
            target="_blank"
            href="https://discord.com/invite/wbYcHDsxXR"
          >
            <Discord />
          </a>
          <a
            className="social-icon d-inline-block"
            target="_blank"
            href="https://www.instagram.com/baboonbowlsclub/?hl=en"
          >
            <Instagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
