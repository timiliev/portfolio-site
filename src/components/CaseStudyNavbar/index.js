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
} from "../Navbar/NavbarElements"

import signature from "../../images/signature-black.png"

const CaseStudyNavbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <NavLogoWrap>
                            <img src={signature} class="signature-small" alt="Home Icon"/>
                        </NavLogoWrap>
                    </NavLogo>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default CaseStudyNavbar
