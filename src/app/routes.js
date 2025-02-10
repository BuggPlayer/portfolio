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
      <AnimatedRoutes />
      <Socialicons />
      <About />

      {/* <Clients /> */}
      {/* <WhatWeDo /> */}
    
      <Portfolio /> 
        <Testimonial />
        <PricingComponent />
        <WhyChooseUsSection />
        <ContactUs />
        <WhatsAppPopup />
        <Footer />
    
    </div>
  );
}

export default AppRoutes;
