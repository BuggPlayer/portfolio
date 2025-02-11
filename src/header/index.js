import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const Headermain = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site-header">
        <div className="header-container d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <span className="logo-text">{logotext}</span>
          </Link>

          {/* Theme Toggle & Menu Button */}
          <div className="d-flex align-items-center">
            <Themetoggle />
            <button className="menu-button" onClick={handleToggle}>
              {isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className={`site-navigation ${isActive ? "menu-opened" : ""}`}>
          <div className="menu-overlay" onClick={handleToggle}></div>
          <div className="menu-container">
            <ul className="menu-list">
              <li>
                <Link onClick={handleToggle} to="/">Home</Link>
              </li>
              <li>
                <Link onClick={handleToggle} to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link onClick={handleToggle} to="/about">About</Link>
              </li>
              <li>
                <Link onClick={handleToggle} to="/contact">Contact</Link>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="menu-footer">
              <div className="social-links">
                <a href={socialprofils.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="social-icon" />
                </a>
                <a href={socialprofils.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="social-icon" />
                </a>
                <a href={socialprofils.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="social-icon" />
                </a>
              </div>
              <p className="copyright">© {new Date().getFullYear()} {logotext}</p>
            </div>
          </div>
        </nav>
      </header>

      {/* Animated Borders */}
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;