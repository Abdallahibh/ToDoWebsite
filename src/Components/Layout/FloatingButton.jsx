import React from "react";
import "../../assets/styles/FloatingButton.css";

const FloatingButton = () => {
  const scrollToSection = () => {
    const section = document.getElementById("add-t-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className="floating-button" onClick={scrollToSection}>
      +
    </button>
  );
};

export default FloatingButton;
