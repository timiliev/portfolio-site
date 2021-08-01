import React, { useEffect, useState } from "react";
import { Router } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProjectPreview from '../components/ProjectPreview';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import About from "../components/About";
import Footer from "../components/Footer"
import ThePulseCaseStudy from "../components/ThePulseCaseStudy"

import { 
    ThePulseInfo, 
    RavensInfo,
    WoodCountyInfo,
    BrewWithTheCrewInfo
} from "../components/ProjectPreview/Data";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>

            {/* <ThePulseCaseStudy/> */}

            <HeroSection />
            
            <h2 class="section_header">My projects</h2>
            <h3 class="section_subheader">A collection of selected work</h3>
            <div class="projects">
                <div class="preview_container">
                    <a href=""><ProjectPreview {...ThePulseInfo}/></a>
                    <a href=""><ProjectPreview {...RavensInfo}/></a>
                    <a href=""><ProjectPreview {...WoodCountyInfo}/></a>
                    <a href=""><ProjectPreview {...BrewWithTheCrewInfo}/></a>
                </div>
            </div>

            <h2 class="section_header">About me</h2>
            <h3 class="section_subheader">
                This is a short bio about who I am. A somewhat long-ish cool sentence that tells you I am an awesome designer
            </h3>
            <About />

            <Footer />
        </>
    )
}

export default Home
