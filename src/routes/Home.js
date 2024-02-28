import React from "react";
import HeroVideo from "../components/HeroVideo"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";


const Home = () => {
    return (<div>
        <Navbar/>
        <div>
            <HeroVideo/>
            
        </div>   
        <Footer/>
    </div>
    );
};

export default Home;    