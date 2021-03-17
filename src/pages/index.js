import React from 'react'
import HeroNavbar from '../components/HeroNavbar'
import { Router } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import ProjectPreview from '../components/ProjectPreview'

const Home = () => {
    return (
        <>
            <HeroSection />
            <ProjectPreview></ProjectPreview>
        </>
    )
}

export default Home
