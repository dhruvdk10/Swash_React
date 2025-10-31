import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // install: npm install react-icons

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/" // Replace with your WhatsApp number (include country code)
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
