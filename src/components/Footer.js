import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
import React from 'react'
import"./FooterStyles.css"


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={30} style={{color: "red", marginRight: "2rem"}}/>
                    <div>
                        <p>Montleng North Coast, </p>
                        <p>UpperHill</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={30} style={{color: "red", marginRight: "2rem"}}/>
                        <a href="tel:+254791617022">+254791617022</a>
                    </h4>
                    
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={30} style={{color: "red", marginRight: "2rem"}}/>
                        <a href="mailto:jamesbrian.kariuki@hotmail.com">jamesbrian.kariuki@hotmail.com</a> 
                    </h4>
                    
                </div>
            </div>
            <div className="right">
                <h4>Connect With Me</h4>
                <p>Let's collaborate on your next project! Reach out for seamless development and personalized solutions tailored to your needs.</p>
                <div className="social">
                    <a href="https://www.instagram.com/hamezzz.b__/" target="_blank"><FaInstagram size={35} style={{ color: "red", marginRight: "1rem" }} /></a>
                    <a href="https://www.linkedin.com/in/james-brian-40b12b19a/" target="_blank"><FaLinkedin size={35} style={{ color: "red", marginRight: "1rem" }} /></a>
                    <a href="https://github.com/Hamez-brayo" target="_blank"><FaGithub size={35} style={{ color: "red", marginRight: "1rem" }} /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer