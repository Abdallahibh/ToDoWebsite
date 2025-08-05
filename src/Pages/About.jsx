import React from "react";
import "../assets/styles/About.css";

const About = () => {
  return (
    <div className="story">
      <div>How We Started & Our Goal</div>
      <div className="concept">
        <p>
          Welcome to Todist, where simplicity and efficiency meet! Our journey
          began with a shared frustration over complex and cluttered task
          management tools. We wanted to create a space where managing tasks is
          not just efficient but also enjoyable. In this narrative, we will
          share how Todist came to life and what drives us to enhance your to-do
          list experience.
          <br />
          <b style={{ color: "#ff7777" }}>We Started:</b> Todist was conceived
          by a group of productivity enthusiasts who, after struggling with
          various cumbersome task management solutions, decided to build a tool
          that focuses on clarity and ease of use. Our founders, passionate
          about organizing and optimizing daily tasks, aimed to develop a
          platform that would simplify task management for individuals and teams
          alike.
          <br />
          <b style={{ color: "#ff7777" }}>Our Goal:</b> At Todist, our goal is
          to transform the way you approach your tasks. We strive to provide a
          clean, intuitive interface that helps you stay on top of your to-dos
          without unnecessary distractions. Our mission is to empower you with a
          tool that makes task management straightforward, so you can focus on
          what truly matters.
        </p>
      </div>
    </div>
  );
};

export default About;
