import React, { useEffect } from "react";
import "./Portfolio.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import AOS from "aos";
import "aos/dist/aos.css";

export const PortfolioUp= () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <HelmetProvider>
      <Container className="portfolio-section">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Section Title */}
        <Row className="mb-5 mt-3 pt-md-3 text-center">
          <Col lg="12">
            <h1 className="section-title">Our Work</h1>
            <hr className="section-divider" />
          </Col>
        </Row>

        {/* Portfolio Grid */}
        <Row className="portfolio-grid">
          {dataportfolio.map((data, i) => (
            <Col lg={4} md={6} sm={12} key={i} data-aos="zoom-in">
              <div className="portfolio-item">
                <img src={data.img} alt={data.title || "Portfolio Image"} className="portfolio-image" />
                <div className="portfolio-overlay">
                  <h5 className="portfolio-title">{data.title}</h5>
                  <p className="portfolio-description">{data.description}</p>
                  <a href={data.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                    View Project
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </HelmetProvider>
  );
};
