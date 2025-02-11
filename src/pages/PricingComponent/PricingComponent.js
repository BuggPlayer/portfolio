import React from "react";
import "./PricingComponent.css";

const PricingComponent = () => {

  const pricingPlans = [
    {
      title: "MVP Development",
      price: "₹1,00,000 – ₹5,00,000+",
      features: [
        "Rapid Prototyping",
        "Core Feature Development",
        "Scalable Architecture",
        "User Feedback Integration",
      ],
      freeBonuses: [
        "Free Initial Consultation",
        "1-Hour Post-Launch Support",
        "Basic SEO Setup",
      ],
    },
    {
      title: "SaaS Development",
      price: "₹5,00,000 – ₹20,00,000+",
      features: [
        "Custom SaaS Platform Development",
        "Multi-Tenant Architecture",
        "Subscription Management",
        "API Integrations",
        "Cloud Hosting & Scalability",
      ],
      freeBonuses: [
        "Free Hosting for 3 Months",
        "1-Hour Consultation",
        "Basic SEO Setup",
      ],
    },


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
      title: "Small Business Package",
      price: "₹30,000 – ₹1,50,000+",
      features: [
        "Custom Website Development",
        "E-commerce Integration (if needed)",
        "Social Media Integration",
        "Basic SEO Setup",
      ],
      freeBonuses: [
        "Free Website Audit",
        "1-Hour Consultation",
        "Basic SEO Setup",
      ],
    },
  
    {
      title: "Custom SaaS Solutions",
      price: "Custom Quote",
      features: [
        "Tailored SaaS Platform Development",
        "Scalable Cloud Architecture",
        "API Integrations",
        "Data Analytics & Reporting",
      ],
      freeBonuses: [
        "Free Requirement Analysis",
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