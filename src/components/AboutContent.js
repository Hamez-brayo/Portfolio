import "./AboutContentStyles.css"

import React from 'react'
import JB1 from "../assets/images/dp.jpg"
import JB2 from "../assets/images/kicc image.jpg"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who is JB</h1>
        <p>James Brian Kariuki, is proficient in Java programming, web development, 
          and object-oriented programming, with expertise in consulting and troubleshooting.
           He possesses a strong foundation in Cisco networking, Android development, and machine learning, 
           coupled with skills in cybersecurity, data analysis, and server administration. 
           James has interned at the Communications Authority of Kenya and Eclectics INTL,
           gaining hands-on experience in cyber security and software development. His leadership and team player skills, 
          combined with excellent communication and problem-solving abilities, make him a valuable asset in any technological endeavor.</p>
        <a href="/contact">
          <button className="btn">Contact</button>
        </a>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={JB1}className="img" alt="true"/>
          </div>
          <div className="img-stack bottom">
            <img src={JB2}className="img" alt="true"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent