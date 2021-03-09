import React from 'react'
import Navbar from '../components/Navbar'
import { Router } from 'react-router-dom'
import HeroSection from '../components/HeroSection'

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
        </>
    )
}

export default Home
