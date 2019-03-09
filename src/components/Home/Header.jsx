import React from "react";
import "./Header.scss";
import logo from "../../assets/Path 1.svg";
import brand from "../../assets/Group 3.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header-branding">
        <img className="header-logo" src={logo} alt="logo" />
        <img className="header-brand" src={brand} alt="brand" />
      </div>
      <div className="header-nav">
        <p>BOOK AN APPOINTMENT</p>
        <div className='header-menu'>
          <div className="header-menu-lg-line" />
          <div className="header-menu-sm-line" />
          <div className="header-menu-lg-line" />
        </div>
      </div>
    </div>
  );
}
