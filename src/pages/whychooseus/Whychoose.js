import React from "react";
import "./whychooseus.css";

const WhyChooseUsSection = () => {
  const whyChooseUs = [
    {
      title: "Expertise in Startups and Small Businesses",
      description:
        "We specialize in working with early-stage startups and small businesses, so we know the challenges you face and how to overcome them. Our affordable solutions and fast turnaround times ensure you can start validating your ideas and growing your business quickly.",
    },
    {
      title: "MVP Development Experts",
      description:
        "We help you build a Minimum Viable Product (MVP) fast, so you can test your idea in the market without breaking the bank. Our focus on core features and user-centric design ensures your MVP is lean, functional, and ready to scale.",
    },
    {
      title: "SaaS Development Specialists",
      description:
        "We build SaaS platforms that grow with your business, ensuring long-term success. Our customizable architecture and cloud-ready designs make your platform secure, scalable, and accessible from anywhere.",
    },
    {
      title: "AI-Powered Innovation",
      description:
        "From chatbots to predictive analytics, we integrate AI to give your business a competitive edge. Our AI-driven Proof of Concept (PoC) development helps validate your ideas before full-scale implementation.",
    },
    {
      title: "End-to-End Support",
      description:
        "We’re with you every step of the way, from initial concept to post-launch support. Our ongoing maintenance packages and growth hacking strategies ensure your business continues to thrive.",
    },
    {
      title: "Transparent and Collaborative Approach",
      description:
        "We provide clear, upfront pricing and keep you informed throughout the project with regular updates. Our collaborative approach ensures your vision is brought to life exactly as you imagined.",
    },
    // {
    //   title: "Proven Track Record",
    //   description:
    //     "We’ve helped numerous startups and small businesses launch MVPs, build SaaS platforms, and grow their online presence. Our industry experience and client testimonials speak to our expertise and reliability.",
    // },
    // {
    //   title: "Free Bonuses and Value-Added Services",
    //   description:
    //     "We include basic SEO setup, free 1-hour consultations, and post-launch support with every project to ensure your success.",
    // },
  ];

  return (
    <div className="why-choose-us">
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="advantages-container">
        {whyChooseUs.map((advantage, index) => (
          <div key={index} className="advantage-card">
            <h3>{advantage.title}</h3>
            <p>{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
