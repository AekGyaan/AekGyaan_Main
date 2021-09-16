import React from "react";
import logo from "../images/0.logo/1.jpg";
const Footer = () => {
  return (
    <>
      <div id="footer">
        <div class="footer">
          <div class="footer-box footer-box1">
            <div class="footer-box-img">
              <img src={logo} alt="" />
            </div>
            <div class="footer-text">
              The World of Great Opportunity is Available Now, as it has Always
              been, Only for Those With Great Vision <br />
              <br />
            </div>
          </div>
          <div class="footer-box footer-box2">
            <a href="https://goo.gl/maps/zSuBhQqCZrdXjzSaA" target="blank">
              <span>
                <i class="fas fa-map-marker-alt"></i>
              </span>
              GURUGRAM, HARYANA
            </a>
            <a href="tel:+91-9999800870">
              <span>
                <i class="fas fa-phone-alt"></i>
              </span>
              +91-9999800870
            </a>
            <a href="mailto:aekgyaan@gmail.com">
              <span>
                <i class="fas fa-envelope"></i>
              </span>
              aekgyaan@gmail.com
            </a>
          </div>
          <div class="footer-box footer-box3">
            <a href="/#about">ABOUT US</a>
            <a href="/#services">SERVICES</a>
            <a href="/contact">CONTACT US</a>
            <div class="social-media">
              <a
                href="https://www.linkedin.com/in/aekgyaan-house-of-research-427055209/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-linkedin-in circle-icon"></i>
              </a>
              <a
                href="https://www.instagram.com/aekgyaan_house_of_reseach/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-instagram circle-icon"></i>
              </a>
              <a
                href="mailto:aekgyaan@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i class="far fa-envelope circle-icon"></i>
              </a>
              <a
                href="https://twitter.com/AekGyaanHR?s=08"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-twitter circle-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="cr">© 2021 AEKGYAAN. All Rights Reserved.</div>
      </div>
    </>
  );
};

export default Footer;
