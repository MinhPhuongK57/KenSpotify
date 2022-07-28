import React from "react";
import { StyledNavBar } from "./StyledNavbar.js";
export default function Navbar() {
  return (
    <StyledNavBar>
      <div className="navbar">
        <div className="navbar__logo">
          <i className="fa fa-music"></i>
          KenSpotify
        </div>
        <div className="navbar__link">
          <a href="https://www.facebook.com/minhphuongk57">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://github.com/MinhPhuongK57/KenSpotify/">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </StyledNavBar>
  );
}
