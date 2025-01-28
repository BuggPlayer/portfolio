import React from "react";
import "./WhatWeDo.css";

const WhatWeDo = () => {
  return (
    <div className="what-we-do">
      <h1 className="section-title">What We Do</h1>
      <div className="services">
        <div className="service">
          <h2>Web Development</h2>
          <p>
            Do your company need a new website or an enterprise-class web app or a web portal to help align your employees' workflows? Our [COMPANY NAME]'s custom web developers have the know-how and experience to build it for you. With a combination of our expertise in IT and ecommerce development, we enable companies from different industries to increase sales and expand their customer base.
          </p>
        </div>
        <div className="service">
          <h2>Mobile Application Development</h2>
          <p>
            Enhance your brand’s reach with best-in-class cross-platform mobile app development services from [COMPANY NAME]. Our clients get the advantage of a diverse technology stack, dedicated teams of developers, and high-quality, functionally rich solutions aligned with their requirements. At [COMPANY NAME], we deliver not just an app but an entirely redefined mobile experience.
          </p>
        </div>
        <div className="service">
          <h2>Ecommerce</h2>
          <p>
            Do you want to gain a winning advantage for your business with an e-commerce store that delivers top-notch shopping experiences? Build one that excels in look and feel and gets you high conversions. To attract the desired audience, you need an e-commerce store that is visually stunning and conversion-focused. 
          </p>
          {/* <h3>Features:</h3>
          <ul>
            <li>Content management capabilities</li>
            <li>Promotion and Discount code tools</li>
            <li>An easy-to-use checkout</li>
            <li>Search engine optimized code and layout</li>
            <li>Multiple payment options</li>
            <li>The ability to scale up with your platform</li>
          </ul> */}
        </div>
        <div className="service">
          <h2>Digital Marketing</h2>
          <p>
            Digital Marketing Services is the top trending way to advertise the brand, products, services using technological components like the internet, computers, and mobile phones. This type of service helps small or big businesses market their brand name/product over the internet, reaching millions of possible customers.
          </p>
        </div>
        {/* <div className="service">
          <h2>Graphic Designing</h2>
          <p>
            Your social media presence matters most. To attract customers to your products and services, we provide all graphic designing services that will help you gain a larger digital audience. We design digital business cards, flyers, logos, and more.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default WhatWeDo;
