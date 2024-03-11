import React from 'react';
import heroimg from "../assets/heroimage.jpg";
import "./HeroImageSyles.css"

const HeroImage = ({ darkMode }) => {
  return (
    <div className="hero-image">
      <div className={`mask ${darkMode ? 'dark-mode' : ''}`}>
        <img className="heroimg" src={heroimg} alt="heroimg" />
        <div className="heading">
          <h1>This is a Heading</h1>
          <p>This is a paragraph</p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;