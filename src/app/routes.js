import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Testimonial from "../pages/testimonial/Testimonial";
import Footer from "../pages/footer/Footer";
import Clients from "../pages/Client/Clients";
import WhatWeDo from "../pages/WhatWeDo/WhatWeDo";
import PricingComponent from "../pages/PricingComponent/PricingComponent";
import WhatsAppPopup from "../components/WhatsAppPopup/WhatsAppPopup";
import WhyChooseUsSection from "../pages/whychooseus/Whychoose";
import HeroSection from "../pages/home/Hero";
import img from '../assets/images/homepage.png'
import { Aboutus } from "../pages/about/About";
import { PortfolioUp } from "../pages/portfolio/Portfolio";
import TestimonialUP from "../pages/testimonial/TestimonialUP";
import PricingPlan from "../pages/PricingComponent/PricingPlan";
import Whychooseme from "../pages/whychooseus/Whychooseme";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
        {/* <AnimatedRoutes /> */}
      <HeroSection
  // meta={{ title: "Techora", description: "Your digital transformation partner" }}
  introdata={{ your_img_url: img}}
/>
    
      <Socialicons />
      {/* <About /> */}
<Aboutus />
      {/* <Clients /> */}
      {/* <WhatWeDo /> */}
    
      {/* <Portfolio />  */}
      <PortfolioUp />
        {/* <Testimonial /> */}
        <TestimonialUP />
        {/* <PricingComponent /> */}
        <PricingPlan />

        {/* <WhyChooseUsSection /> */}
        <Whychooseme />
        <ContactUs />
        <WhatsAppPopup />
        <Footer />
    
    </div>
  );
}

export default AppRoutes;
