import React from 'react';
import { FaBars } from 'react-icons/fa';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavLogoWrap 
} from './NavbarElements';

import home_icon from "../../images/home_icon.svg";

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavLogo to='/'><NavLogoWrap><img src={home_icon} alt="Home Icon"/></NavLogoWrap></NavLogo>
                    
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About me</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='work'>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='resume'>Resume</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar
