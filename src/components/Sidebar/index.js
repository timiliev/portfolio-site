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
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="work" onClick={toggle}>
                        Work
                    </SidebarLink>
                    <SidebarLink to="resume" onClick={toggle}>
                        Resume
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideSocialIconsWrap>
                    <SocialLinks><img src={github_logo} alt="Github logo" /></SocialLinks>
                    <SocialLinks><img src={dribbble_logo} alt="Dribbble logo" /></SocialLinks>
                    <SocialLinks><img src={medium_logo} alt="Medium logo" /></SocialLinks>
                    <SocialLinks><img src={linkedin_logo} alt="Linkedin logo" /></SocialLinks>
                </SideSocialIconsWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
