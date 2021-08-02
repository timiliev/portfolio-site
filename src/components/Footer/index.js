import React from 'react';
import { 
    FooterContainer, 
    SectionSubheaderEmail,
    ContactAdditionalInfo,
    SectionSubheader,
    CopyrightAndStuff,
    Message
} from './FooterElements';

import {
    SocialIcons,
    SocialItem,
    SocialLinks
} from '../HeroFooter/HeroFooterElements';

import linkedin_logo from '../../images/linkedin_logo_black.svg';
import dribbble_logo from '../../images/dribbble_logo_black.svg';
import github_logo from '../../images/github_logo_black.svg';
import medium_logo from '../../images/medium_logo_black.svg';

function Footer() {
    return (
        <>
            <FooterContainer id="footer">
                <SectionSubheader>Contact</SectionSubheader>
                <SectionSubheaderEmail><a href = "mailto: timotejiliev@gmail.com">timotejiliev@gmail.com</a></SectionSubheaderEmail>
                <ContactAdditionalInfo>I'm currently open for work. Seeking a year long opportunity to work in the United States.</ContactAdditionalInfo>

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

            </FooterContainer>
            <CopyrightAndStuff>
                <Message>Designed in Adobe XD. Developed with Reactjs.</Message>
            </CopyrightAndStuff>
        </>
    )
}

export default Footer
