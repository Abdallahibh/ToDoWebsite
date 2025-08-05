import React from "react";
import "../assets/styles/LandingPage.css";
import pngImage from "../assets/Photos/landimg2.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="landing-page">
      <div className="text-container">
        <h1>
          Welcome to <span>Todist</span>
        </h1>
        <p>Manage your tasks efficiently</p>
        {user && (
          <Link to="/tasks">
            <button className="navigate-tasks-btn">Manage Your Tasks</button>
          </Link>
        )}
      </div>
      <img src={pngImage} alt="Productivity" />
    </div>
  );
};

export default LandingPage;
