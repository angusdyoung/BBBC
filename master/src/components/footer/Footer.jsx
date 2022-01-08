import React from "react";
import footerimg from "../assets/images/png/footerlogo.png";
import {
  Discord,
  DiscordIcon,
  Instagram,
  InstagramIcon,
  Twitter,
  TwitterIcon,
} from "../common/Icons";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container-fluid px-xl-4 px-lg-3">
        <div className="row align-items-start py-lg-5 py-2">
          <div className="col-lg-4 order-lg-1 order-2">
            <p className="loading-heading text-lg-start text-center py-lg-0 py-3 mb-0 animate__animated animate__slideInLeft animate__slow">
              ABOUT US
            </p>
            <p className="footer-text text-lg-start text-center px-lg-0 px-sm-5 mx-lg-0 mx-sm-5 mb-0 animate__animated animate__slideInLeft animate__slow">
              SWING INTO THE WORLD OF WEALTHY BABOONS. THE MOST PRPOSTEROUS
              PROJECT ON ETHEREUM IS COMING SOON. FROM INCORPORTING MUSIC TO
              HELPING WITH BABOON CONSERVATION, GET READY TO GO BANANAS AT THE
              BOWLS CLUB!
            </p>
          </div>
          <div className="col-lg-4 order-lg-2 order-1">
            <div className=" text-center animate__animated animate__slideInUp animate__slow">
              <img className="footer-img  " src={footerimg} alt="footerimg" />
            </div>
          </div>
          <div className="col-lg-4  order-lg-3 order-3">
            <div className="animate__animated animate__slideInRight animate__slow">
              <p className="footer-heading text-lg-start text-center  py-lg-0 py-3 mb-0 ">
                SOCIALS
              </p>
              <div className="text-lg-start text-center d-flex justify-content-lg-start pt-4 justify-content-center">
                <span className="social-icon">
                  <a target="_blank" href="https://twitter.com/BaboonBowlsClub">
                    {" "}
                    <TwitterIcon />
                  </a>
                </span>
                <span className="mx-5 social-icon">
                  <a
                    target="_blank"
                    href="https://discord.com/invite/wbYcHDsxXR"
                  >
                    {" "}
                    <DiscordIcon />
                  </a>
                </span>
                <span className="social-icon">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/baboonbowlsclub/?hl=en"
                  >
                    <InstagramIcon />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
