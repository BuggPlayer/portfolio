import React, { useEffect, useRef } from "react";
import "./TestimonialUP.css";
import { Col, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import avatar from '../../assets/images/avatar.svg'
const testimonials = [
  {
    name: "John Doe",
    feedback: "Your attention to detail and innovative solutions are unmatched. A pleasure to work with!",
    role: "Project Manager",
    image: "https://via.placeholder.com/150", // Replace with actual image URLs
  },
  {
    name: "Jane Smith",
    feedback: "An exceptional developer with a keen eye for design and functionality.",
    role: "Tech Lead",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Alex Johnson",
    feedback: "Delivered the project on time with exceptional quality!",
    role: "CEO, Startup Inc.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Emily Carter",
    feedback: "Highly professional and extremely talented. Great experience!",
    role: "Product Owner",
    image: "https://via.placeholder.com/150",
  },
];

const TestimonialUP = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="testimonial-container">
      <Row className="mb-5 mt-3 pt-md-3 text-center">
        <Col lg="12">
          <h1 className="section-title" data-aos="fade-up">Testimonials</h1>
          <hr className="section-divider" data-aos="fade-up" data-aos-delay="100" />
        </Col>
      </Row>

      <div className="testimonial-scroll-wrapper">
        <div className="testimonial-scroll" ref={scrollRef}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={avatar}
                alt={`${testimonial.name}'s picture`}
                className="testimonial-image"
                onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
              />
              <div className="testimonial-content">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-role">{testimonial.role}</p>
                <div className="testimonial-feedback">
                  <FaQuoteLeft className="quote-icon" />
                  <p>{testimonial.feedback}</p>
                  <FaQuoteRight className="quote-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialUP;