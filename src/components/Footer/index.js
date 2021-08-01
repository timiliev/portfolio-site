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
            <FooterContainer>
                <SectionSubheader>Contact</SectionSubheader>
                <SectionSubheaderEmail>timotejiliev@gmail.com</SectionSubheaderEmail>
                <ContactAdditionalInfo>I'm currently open for work. Seeking a year long opportunity to work in the United States.</ContactAdditionalInfo>

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
            </FooterContainer>
            <CopyrightAndStuff>
                <Message>Designed in Adobe XD. Developed with Reactjs.</Message>
            </CopyrightAndStuff>
        </>
    )
}

export default Footer
