import React, { useState } from "react";
import "./WhatsAppPopup.css";

const WhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/", "_blank"); // Replace with your WhatsApp link
  };

  return (
    <div className="whatsapp-popup-container">
      {/* WhatsApp Icon */}
      <div className="whatsapp-icon" onClick={togglePopup}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </div>

      {/* Popup */}
      {isOpen && (
        <div className="popup">
          <p>Need help? Chat with us on WhatsApp!</p>
          <div className="popup-buttons">
            <button className="whatsapp-button" onClick={handleWhatsAppClick}>
              Open WhatsApp
            </button>
            <button className="close-button" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppPopup;