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
                            <SocialLinks>
                                <a href="https://github.com/timiliev" target="_blank">
                                    <img src={github_logo} alt="Github logo" />
                                </a>
                            </SocialLinks>
                        </SocialItem>
                        <SocialItem>
                            <SocialLinks>
                                <a href="https://dribbble.com/Tim_iliev" target="_blank">
                                    <img src={dribbble_logo} alt="Dribbble logo" />
                                </a>
                            </SocialLinks>
                        </SocialItem>
                        <SocialItem>
                            <SocialLinks>
                                <a href="https://medium.com/@timiiliev" target="_blank">
                                    <img src={medium_logo} alt="Medium logo" />
                                </a>
                            </SocialLinks>
                        </SocialItem>
                        <SocialItem>
                            <SocialLinks>
                                <a href="https://www.linkedin.com/in/timotejiliev/" target="_blank">
                                    <img src={linkedin_logo} alt="Linkedin logo" />
                                </a>
                            </SocialLinks>
                        </SocialItem>
                    </SocialIcons>

                    <Email><a href = "mailto: timotejiliev@gmail.com">timotejiliev@gmail.com</a></Email>
                </HeroFooterContainer>
            </Footer>
        </>
    );
};

export default HeroFooter
