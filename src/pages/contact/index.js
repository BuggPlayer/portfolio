import React, { useState, useEffect } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import { meta, contactConfig } from "../../content_option";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";

export const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    show: false,
    alertMessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, show: false });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          setStatus({
            loading: false,
            alertMessage: "✅ Thank you! Your message has been sent successfully.",
            variant: "success",
            show: true,
          });
          setFormData({ email: "", name: "", message: "" });
        },
        (error) => {
          setStatus({
            loading: false,
            alertMessage: `❌ Failed to send! ${error.text}`,
            variant: "danger",
            show: true,
          });
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <HelmetProvider>
      <Container className="contact-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Header Section */}
        <Row className="mb-5 mt-3 pt-md-3 text-center">
          <Col lg="12">
            <h1 className="section-title" data-aos="fade-up">
              Get in Touch
            </h1>
            <hr className="section-divider" data-aos="fade-up" data-aos-delay="100" />
            <p
              className="section-subtitle"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              🚀 Let’s build something extraordinary together!
            </p>
          </Col>
        </Row>

        {/* Alert Message */}
        <Row>
          <Col lg="12">
            <Alert
              variant={status.variant}
              className={`rounded-0 contact-alert ${status.show ? "d-block" : "d-none"}`}
              onClose={() => setStatus({ ...status, show: false })}
              dismissible
            >
              <p className="my-0">{status.alertMessage}</p>
            </Alert>
          </Col>
        </Row>

        {/* Contact Form & Details */}
        <Row className="contact-section">
          {/* Contact Details */}
          <Col lg="5" className="contact-info" data-aos="fade-right">
            <h3 className="info-title">📩 Contact Information</h3>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>{contactConfig.YOUR_EMAIL}</a>
            </div>
            {contactConfig.YOUR_FONE && (
              <div className="info-item">
                <FaPhone className="info-icon" />
                <span>{contactConfig.YOUR_FONE}</span>
              </div>
            )}
            <p className="info-description">{contactConfig.description}</p>
          </Col>

          {/* Contact Form */}
          <Col lg="7" className="contact-form-container" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="contact-form">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    type="email"
                    value={formData.email}
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control"
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn contact-btn" type="submit" disabled={status.loading}>
                    {status.loading ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                      <>
                        <FaPaperPlane className="btn-icon" /> Send Message
                      </>
                    )}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};