import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section" data-aos="fade-up">
          <h4 className="footer-title">About Me</h4>
          <p className="footer-text">
            Passionate software developer crafting seamless and efficient web applications.
            Let's build something amazing together! 🚀
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section" data-aos="fade-up" data-aos-delay="200">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-section" data-aos="fade-up" data-aos-delay="400">
          <h4 className="footer-title">Follow Me</h4>
          <ul className="footer-social">
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;