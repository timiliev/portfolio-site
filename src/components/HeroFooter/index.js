import React from 'react'
// import { FaBars } from 'react-icons/fa'
import { Footer, HeroFooterContainer, Email, SocialIcons, SocialItem, SocialLinks } from './HeroFooterElements';
import linkedin_logo from '../../images/linkedin_logo_black.svg';
import dribbble_logo from '../../images/dribbble_logo_black.svg';
import github_logo from '../../images/github_logo_black.svg';
import medium_logo from '../../images/medium_logo_black.svg';

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

                    <Email to='/'>timotejiliev@gmail.com</Email>
                </HeroFooterContainer>
            </Footer>
        </>
    );
};

export default HeroFooter
