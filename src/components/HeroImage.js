import React, { Component } from 'react'; // Import Component from react
import "./HeroImageSyles.css";

class HeroImage extends Component {
  render() {
    const { darkMode } = this.props; // Destructure darkMode from props
    return (
      <div className={`hero-img ${darkMode ? 'dark-mode' : ''}`}>
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
};

export default HeroImage;