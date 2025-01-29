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
    },
    // {
    //   title: "Digital Marketing",
    //   price: "$799+",
    //   features: [
    //     "Social Media Marketing",
    //     "SEO & Google Ads",
    //     "Content Marketing",
    //     "Brand Awareness Campaigns",
    //   ],
    // },
    // {
    //   title: "Graphic Designing",
    //   price: "$499+",
    //   features: [
    //     "Logo & Branding",
    //     "Business Cards & Flyers",
    //     "Social Media Graphics",
    //     "UI/UX Design",
    //   ],
    // },
  ];

  return (
    <div className="pricing-container">
      <h1 className="section-title">Our Pricing Plans</h1>
      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h2>{plan.title}</h2>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
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
