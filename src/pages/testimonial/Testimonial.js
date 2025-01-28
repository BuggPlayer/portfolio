import React from "react";
import "./Testimonial.css";
import { Col, Row } from "react-bootstrap";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "Your attention to detail and innovative solutions are unmatched. A pleasure to work with!",
    role: "Project Manager",
    image: "https://via.placeholder.com/150", // Replace with real image URLs
  },
  {
    name: "Jane Smith",
    feedback:
      "An exceptional developer with a keen eye for design and functionality.",
    role: "Tech Lead",
    image: "https://via.placeholder.com/150", // Replace with real image URLs
  },
  {
    name: "Alex Johnson",
    feedback: "Delivered the project on time with exceptional quality!",
    role: "CEO, Startup Inc.",
    image: "https://via.placeholder.com/150", // Replace with real image URLs
  },
  {
    name: "Emily Carter",
    feedback: "Highly professional and extremely talented. Great experience!",
    role: "Product Owner",
    image: "https://via.placeholder.com/150", // Replace with real image URLs
  },
];

const TestimonialHorizontalScroll = () => {
  return (
    <div className="testimonial-container">
   <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Testimonial </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
      <div className="testimonial-scroll">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            {/* <img
              src={testimonial.image}
              alt={`${testimonial.name}'s picture`}
              className="testimonial-image"
              onError={(e) => {
                // e.target.src = "https://via.placeholder.com/150"; // Fallback image
              }}
            /> */}
            <div className="testimonial-content">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.role}</p>
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialHorizontalScroll;
