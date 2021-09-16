import React from "react";
import logo from "../images/0.logo/0.png";
const Navbar = () => {
  return (
    <div class="navv" id="navvbar">
      <input type="checkbox" id="navv-check" />
      <div class="navv-header">
        <div class="navv-title">
          <a href="/">
            <img src={logo} alt="" />
            AekGyaan
          </a>
        </div>
      </div>
      <div class="navv-btn">
        <label for="navv-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="navv-links">
        <a href="/#about">ABOUT US</a>
        <a href="/#vision">VISION</a>
        <a href="/#services">SERVICES</a>
        <a href="/#articles">ARTICLES</a>
        <a href="/team">OUR TEAM</a>
        <a href="/contact">CONTACT US</a>
      </div>
    </div>
  );
};

export default Navbar;
