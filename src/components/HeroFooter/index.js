import React from 'react'
// import { FaBars } from 'react-icons/fa'
import { Footer, HeroFooterContainer, Email, SocialIcons, SocialItem, SocialLinks } from './HeroFooterElements';
import linkedin_logo from '../../images/Linkedin logo.png';
import dribbble_logo from '../../images/Dribbble logo.png';
import github_logo from '../../images/Github logo.png';
import medium_logo from '../../images/Medium logo.png';

const HeroFooter = () => {
    return (
        <>
            <Footer>
                <HeroFooterContainer>
                    <SocialIcons>
                        <SocialItem>
                            <SocialLinks><img src={github_logo} alt="Github logo" /></SocialLinks>
                        </SocialItem>
                        <SocialItem>
                            <SocialLinks><img src={dribbble_logo} alt="Dribbble logo" /></SocialLinks>
                        </SocialItem>
                        <SocialItem>
                            <SocialLinks><img src={medium_logo} alt="Medium logo" /></SocialLinks>
                        </SocialItem>
                        <SocialItem>
                            <SocialLinks><img src={linkedin_logo} alt="Linkedin logo" /></SocialLinks>
                        </SocialItem>
                    </SocialIcons>

                    <Email to='/'>timotejiliev@findlay.edu</Email>
                </HeroFooterContainer>
            </Footer>
        </>
    );
};

export default HeroFooter
