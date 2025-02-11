import React, { useEffect } from "react";
import "./whychooseus.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaRocket, FaCogs, FaCode, FaBrain, FaHandsHelping, FaHandshake } from "react-icons/fa";

const whyChooseUs = [
  {
    title: "Expertise in Startups & Small Businesses",
    description:
      "We specialize in early-stage startups and small businesses, helping overcome challenges with affordable solutions and fast turnaround times.",
    icon: <FaRocket />,
  },
  {
    title: "MVP Development Experts",
    description:
      "Build your MVP fast and test your idea without breaking the bank. We focus on core features, user-centric design, and scalability.",
    icon: <FaCogs />,
  },
  {
    title: "SaaS Development Specialists",
    description:
      "We build scalable SaaS platforms that ensure long-term success. Our cloud-ready solutions grow with your business.",
    icon: <FaCode />,
  },
  {
    title: "AI-Powered Innovation",
    description:
      "We integrate AI to give your business a competitive edge, from chatbots to predictive analytics and intelligent automation.",
    icon: <FaBrain />,
  },
  {
    title: "End-to-End Support",
    description:
      "From initial concept to post-launch maintenance, we’re with you every step of the way to ensure your success.",
    icon: <FaHandsHelping />,
  },
  {
    title: "Transparent & Collaborative Approach",
    description:
      "We believe in clear pricing, regular updates, and collaboration to bring your vision to life exactly as you imagined.",
    icon: <FaHandshake />,
  },
];

const Whychooseme = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="why-choose-us">
      <h2 className="section-title" data-aos="fade-up">Why Choose Us?</h2>
      <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
        We combine cutting-edge technology, expertise, and transparency to help your business succeed.
      </p>
      <div className="advantages-container">
        {whyChooseUs.map((advantage, index) => (
          <div className="advantage-card" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
            <div className="icon">{advantage.icon}</div>
            <h3 className="advantage-title">{advantage.title}</h3>
            <p className="advantage-description">{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whychooseme;
