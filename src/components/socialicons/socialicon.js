import React, { useEffect } from "react";
import "./Socialicons.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
  FaCircle,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";
import AOS from "aos";
import "aos/dist/aos.css";

const ICON_MAPPING = {
  default: FaCircle,
  facebook: FaFacebookF,
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  snapchat: FaSnapchatGhost,
  tiktok: FaTiktok,
  twitter: FaTwitter,
  twitch: FaTwitch,
  youtube: FaYoutube,
};

export const Socialicons = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="social-icons-container" data-aos="fade-up" data-aos-delay="300">
      <div className="stick_follow_icon">
        <ul>
          {Object.entries(socialprofils).map(([platform, url]) => {
            const IconComponent = ICON_MAPPING[platform] || ICON_MAPPING.default;
            return (
              <li key={platform}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform}
                >
                  <IconComponent className="social-icon" />
                </a>
              </li>
            );
          })}
        </ul>
        <p className="follow-text">Let's Connect</p>
      </div>
    </div>
  );
};