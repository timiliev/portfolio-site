import React from 'react'
import { HeroContainer, HeroContent, HeroH1, HighlightedText } from './HeroElements';
import HeroFooter from '../HeroFooter'
import HeroNavbar from '../HeroNavbar'

const HeroSection = () => {
    return (
        <>
            <HeroNavbar />
            <HeroContainer>
                <HeroContent>
                    <HeroH1>
                        👋 Hi, I'm Tim. <br /> I
                        <HighlightedText> design </HighlightedText> and
                        <HighlightedText> develop </HighlightedText> elegant <br />
                        interfaces that are easy to use.
                    </HeroH1>
                </HeroContent>
            </HeroContainer>
            <HeroFooter />
        </>
    )
}

export default HeroSection
