// About.js
import React from "react";
import "./about.css"; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our About page. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam vestibulum enim sit amet lacus tincidunt, id tincidunt elit tincidunt.
        Curabitur non neque ac velit tincidunt fermentum non sit amet nulla.
      </p>
      <p>
        Suspendisse potenti. Proin et urna eget elit tincidunt ullamcorper vel ut velit.
        Integer congue, neque non accumsan eleifend, massa nisl vestibulum est,
        non dictum magna justo a felis.
      </p>
      <p>
        Check out our project on GitHub for more details and contributions:
        <a href="https://github.com/your-username/your-project" target="_blank" rel="noopener noreferrer">
          Project Repository
        </a>
      </p>
    </div>
  );
};

export default About;
