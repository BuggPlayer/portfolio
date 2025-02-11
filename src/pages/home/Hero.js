import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTrophy, FaShieldAlt, FaClock } from "react-icons/fa";

const HeroSection = ({ meta, introdata }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="container-fluid">
        <div className="row align-items-center min-vh-100">
          {/* Text Content - Left Side */}
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="hero-content px-4 px-lg-5 py-5">
              <h6 className="text-uppercase text-accent mb-4" data-aos="fade-up">
                Award-Winning Web Agency
              </h6>
              <h1 className="display-3 mb-4" data-aos="fade-up" data-aos-delay="100">
                We Create Digital Experiences That{" "}
                <Typewriter
                  options={{
                    strings: [
                      "Convert Visitors",
                      "Boost Sales",
                      "Build Brands",
                      "Drive Growth",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 40,
                    cursor: "|",
                  }}
                />
              </h1>
              <p className="lead mb-5" data-aos="fade-up" data-aos-delay="200">
                Full-cycle web development & marketing solutions that deliver{" "}
                <span className="text-highlight">3x ROI</span> for ambitious
                businesses
              </p>

              {/* CTA Buttons */}
              <div className="d-flex flex-column flex-md-row gap-4 mb-5">
                <Link
                  to="/our-work"
                  className="btn btn-lg btn-primary px-5 py-3"
                  data-aos="zoom-in"
                >
                  See Client Results →
                </Link>
                <Link
                  to="/free-audit"
                  className="btn btn-lg btn-outline-light px-5 py-3"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  Get Free Audit
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="trust-badges d-flex gap-4 align-items-center" data-aos="fade-up" data-aos-delay="300">
                <div className="d-flex gap-3">
                  <FaTrophy className="text-warning" size={28} />
                  <FaShieldAlt className="text-info" size={28} />
                  <FaClock className="text-success" size={28} />
                </div>
                <small className="text-muted">
                  Trusted by 150+ businesses worldwide
                </small>
              </div>
            </div>
          </div>

          {/* Image/Visual - Right Side */}
          <div className="col-lg-6 order-1 order-lg-2">
            <div
              className="hero-visual position-relative"
              data-aos="fade-left"
            >
              <div className="animated-blob position-absolute top-50 start-50 translate-middle"></div>
              <img
                src={introdata.your_img_url}
                alt="Digital Strategy"
                className="img-fluid position-relative rounded-4 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;