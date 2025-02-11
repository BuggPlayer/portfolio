import React, { useEffect } from "react";
import "./about.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Card } from "react-bootstrap";
import { dataabout, meta, services } from "../../content_option";
import AOS from "aos";
import "aos/dist/aos.css";

export const Aboutus = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <HelmetProvider>
      <Container className="about-section">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Intro Section */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="section-title">How We Help</h1>
            <hr className="section-divider" />
          </Col>
        </Row>

        <Row className="about-content">
          <Col lg="5">
            <h3 className="about-title" data-aos="fade-right">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <p className="about-text" data-aos="fade-left">{dataabout.aboutme}</p>
          </Col>
        </Row>

        {/* Services Section */}
        <Row className="services-section">
          <Col lg="5">
            <h3 className="about-title" data-aos="fade-right">Our Expertise</h3>
          </Col>
          <Col lg="7">
            {services.map((service, i) => (
              <Card className="service-card" key={i} data-aos="fade-up">
                <Card.Body>
                  <h5 className="service-title">{service.title}</h5>
                  <p className="service-desc">{service.description}</p>
                  <ul className="service-features">
                    {service.packageDetails.features.map((feature, index) => (
                      <li key={index} className="feature-item">✔ {feature}</li>
                    ))}
                  </ul>
                  <h6 className="bonus-title">Free Bonuses:</h6>
                  <ul className="bonus-list">
                    {service.packageDetails.freeBonuses.map((bonus, index) => (
                      <li key={index} className="bonus-item">🎁 {bonus}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
