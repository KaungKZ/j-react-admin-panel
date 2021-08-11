import React from "react";
import logo from "../assets/Getbak-logo-only1.png";

export default function AsideMenu() {
  return (
    <div className="menu">
      <div className="menu__logo-wrapper">
        <img src={logo} alt="logo" className="menu__logo" />
      </div>
      <div className="menu__list">
        <nav>
          <ul className="menu__ul">
            <li className="menu__li">
              <a href="/#" className="menu__link">
                <i className="fi fi-rr-home menu__icon" />
              </a>
            </li>
            <li className="menu__li">
              <a href="/#" className="menu__link">
                <i className="fi fi-rr-user menu__icon" />
              </a>
            </li>
            <li className="menu__li">
              <a href="/#" className="menu__link">
                <i className="fi fi-rr-credit-card menu__icon" />
              </a>
            </li>
            <li className="menu__li">
              <a href="/#" className="menu__link">
                <i className="fi fi-rr-folder menu__icon" />
              </a>
            </li>
            <li className="menu__li">
              <a href="/#" className="menu__link">
                <i className="fi fi-rr-settings menu__icon" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
