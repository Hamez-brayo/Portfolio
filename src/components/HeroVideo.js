import React from 'react';
import HeroVideoSrc from "../assets/herovideo.mp4";
import "./HeroVideoStyles.css";
import { Link } from 'react-router-dom';


const HeroVideo = ({ darkMode }) => {
  return (     
    <div className="hero">
      <div className={`mask ${darkMode ? 'dark-mode' : ''}`}>
        <video
          className={`hero-video ${darkMode ? 'dark-mode-video' : ''}`}
          autoPlay
          loop
          muted
          disablePictureInPicture
        >
          <source src={HeroVideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <p>The name's Brian; JAMES BRIAN😌</p>
        <img src={require('../assets/images/dp3.png')} alt="Profile" className='home_img'></img>
        <h1>Coding my way through life!</h1>
        <div>
          <Link to="/about" className='btn'>ABOUT</Link>
          <Link to="/contact" className='btn-light'>CONTACT</Link>
        </div>
      </div>
    </div>
    
  );
};

export default HeroVideo;

