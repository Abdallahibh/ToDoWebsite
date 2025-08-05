import React from "react";
import "../../assets/styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="terms">
        <a href="#">Terms of Use</a> |<a href="#">Privacy Policy</a> |
        <a href="#">Information Security Policy</a> |<a href="#">Site Map</a> |
        <a href="#">Cookie Settings</a>
      </h1>
      <div className="rights">
        <h3>Copyright © 2023 ToDist EG Inc.</h3>
      </div>
    </footer>
  );
};

export default Footer;
