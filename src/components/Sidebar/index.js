import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarMenu, 
    SidebarWrapper, 
    SidebarLink, 
    SideSocialIconsWrap, 
    SocialLinks 
} from './SidebarElements'

import linkedin_logo from '../../images/linkedin_logo_black.svg';
import dribbble_logo from '../../images/dribbble_logo_black.svg';
import github_logo from '../../images/github_logo_black.svg';
import medium_logo from '../../images/medium_logo_black.svg';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' smooth={true} duration={500} spy={true} offset={-300} onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='projects' smooth={true} duration={500} spy={true} offset={-200} onClick={toggle}>
                        Work
                    </SidebarLink>
                    {/* <SidebarLink to="resume" onClick={toggle}>
                        Resume
                    </SidebarLink> */}
                    <SidebarLink to='footer' smooth={true} duration={500} spy={true} onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                
                <SideSocialIconsWrap>
                    <SocialLinks>
                        <a href="https://github.com/timiliev" target="_blank">
                            <img src={github_logo} alt="Github logo" />
                        </a>
                    </SocialLinks>
                    <SocialLinks>
                        <a href="https://dribbble.com/Tim_iliev" target="_blank">
                            <img src={dribbble_logo} alt="Dribbble logo" />
                        </a>
                    </SocialLinks>
                    <SocialLinks>
                        <a href="https://medium.com/@timiiliev" target="_blank">
                            <img src={medium_logo} alt="Medium logo" />
                        </a>
                    </SocialLinks>                            
                    <SocialLinks>
                        <a href="https://www.linkedin.com/in/timotejiliev/" target="_blank">
                            <img src={linkedin_logo} alt="Linkedin logo" />
                        </a>
                    </SocialLinks>
                </SideSocialIconsWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
