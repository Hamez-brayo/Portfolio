import React from "react";
import HeroVideo from "../components/HeroVideo"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import About from "./About";
import Contact from "./Contact";


const Home = () => {
    return (<div>
        <Navbar/>
        <HeroVideo/>
        <About/>
        <Contact/>        
        <Footer/>
    </div>
    );
};

export default Home;    