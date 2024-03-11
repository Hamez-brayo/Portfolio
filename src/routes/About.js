import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutContent from '../components/AboutContent';
import HeroImage from '../components/HeroImage';

const About = () => {
  return (
    <>
      <Navbar />
      <HeroImage heading="JB IN A NUTSHELL" text="Experienced coder adept at crafting digital solutions. Let's collaborate and create innovative software that drives real-world success. 🚀💻" />
      <AboutContent/>
    </>
  );
};

export default About;