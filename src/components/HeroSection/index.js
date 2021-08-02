import React from 'react'
import { 
    HeroContainer, 
    HeroContent, 
    ProfileImageWrap,
    HeroH1, 
    HeroSubtext,
    HighlightedText 
} from './HeroElements';

import HeroFooter from '../HeroFooter'
import Navbar from '../Navbar'
import profile_picture from '../../images/profile_picture.jpg';

const HeroSection = () => {
    return (
        <>
            <HeroContainer id="home">
                <HeroContent>
                    <ProfileImageWrap><img class="profile_picture" src={profile_picture} alt="Profile picture" /></ProfileImageWrap>
                    {/* <HeroSubtext>My name is Timotej Iliev. You can call me Tim</HeroSubtext> */}
                    <HeroH1>
                        My name is Timotej Iliev. You can call me Tim.
                        I'm a designer and developer. Currently perusing a front-end development role. 
                    </HeroH1>
                </HeroContent>
            </HeroContainer>
            <HeroFooter />
        </>
    )
}

export default HeroSection
