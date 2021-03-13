import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const HeroNavbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>

                    <NavLogo to='/'>Timotej Iliev</NavLogo>
                    
                    <NavMenu>
                        <NavItem>
                            <NavLinks>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Work</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Resume</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default HeroNavbar
