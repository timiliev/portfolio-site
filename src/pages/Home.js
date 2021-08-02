import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProjectPreview from '../components/ProjectPreview';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import About from "../components/About";
import Footer from "../components/Footer"

import { 
    ThePulseInfo, 
    RavensInfo,
    WoodCountyInfo,
    BrewWithTheCrewInfo
} from "../components/ProjectPreview/Data";
import { Info, Slim } from "../components/CaseStudy/CaseStudyElements";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>

            <HeroSection />
            
            <h2 class="section_header">My projects</h2>
            <h3 class="section_subheader">A collection of selected work</h3>
            <div class="projects">
                <div class="preview_container">
                    <a href="/the-pulse-case-study"><ProjectPreview {...ThePulseInfo}/></a>
                    <ProjectPreview {...RavensInfo}/>
                    <ProjectPreview {...WoodCountyInfo}/>
                    <ProjectPreview {...BrewWithTheCrewInfo}/>
                </div>
            </div>

            <h2 class="section_header">About me</h2>
            <h3 class="section_subheader">
                A short bio
            </h3>
            <About />

            <h2 class="section_header">Skills</h2>
            <Info>
                Engineering 
                <Slim> 
                    Expertise in HTML, CSS, JavaScript, WordPress, C++. <br/>
                    Proficient with ReactJS, jQuery, PHP, SCSS, Bootstrap, Python, Django, Java. <br/>
                    Familiar with ES6, SQL, Git. <br/><br/>
                </Slim>
                Design 
                <Slim>
                    Expertise in Adobe Photoshop, Illustrator, XD, InDesign, After Effects, 
                    Interaction Design, User Research, Usability Testing. <br/>
                    
                    Proficient with Figma, InVision.
                </Slim>
            </Info>
            
        </>
    )
}

export default Home
