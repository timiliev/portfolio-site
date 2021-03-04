import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Timotej Iliev</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
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

export default Navbar
