import React from "react";
import "./PricingComponent.css";

const PricingComponent = () => {
  const pricingPlans = [
    {
      title: "Web Development",
      price: "₹10000+",
      features: [
        "Custom Website Design",
        "Responsive & SEO Friendly",
        "E-commerce Integration",
        "Admin Panel & CMS",
      ],
      freeBonuses: [
        "SEO Analysis & Report",
        "Basic SEO Setup",
        "Social Media Integration",
        "1-Hour Consultation",
      ],
    },
    {
      title: "Mobile App Development",
      price: "₹10000+",
      features: [
        "iOS & Android Apps",
        "Cross-Platform Support",
        "Push Notifications",
        "App Store Deployment",
      ],
      freeBonuses: [
        "SEO Analysis & Report",
        "Basic SEO Setup",
        "Social Media Integration",
        "1-Hour Consultation",
      ],
    },
    {
      title: "Ecommerce",
      price: "₹10000+",
      features: [
        "Custom E-commerce Store",
        "Payment Gateway Integration",
        "Product Management System",
        "SEO Optimized Store",
      ],
      freeBonuses: [
        "SEO Analysis & Report",
        "Basic SEO Setup",
        "Social Media Integration",
        "1-Hour Consultation",
      ],
    },
  ];

  return (
    <div className="pricing-container">
      <h1 className="section-title">Our Pricing Plans</h1>
      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h2>{plan.title}</h2>
            <p className="price">{plan.price}</p>
            <h3>Features:</h3>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <h3>Free Bonuses:</h3>
            <ul className="free-bonuses">
              {plan.freeBonuses.map((bonus, idx) => (
                <li key={idx}>{bonus}</li>
              ))}
            </ul>
            <button className="pricing-button">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingComponent;