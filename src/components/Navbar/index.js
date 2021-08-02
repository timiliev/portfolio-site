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
import signature from "../../images/signature-black.png"

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars style={{ fill: 'black' }}/>
                    </MobileIcon>

                    <NavLogo to='/'><NavLogoWrap><img src={signature} class="signature-small" alt="Home Icon"/></NavLogoWrap></NavLogo>
                    
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={500} spy={true} offset={-200}>About me</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects' smooth={true} duration={500} spy={true} offset={-170}>Projects</NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to='resume'>Resume</NavLinks>
                        </NavItem> */}
                        <NavItem>
                            <NavLinks to='footer' smooth={true} duration={500} spy={true}>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar
