import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
    height: 150px;
    margin-bottom: -150px; 

    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    z-index:10;
    // position: sticky;

    font-size: 1rem;
    
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    
    height: 150px;
    width: 100%;
    /* max-width: 1500px; */
    /* padding: 0 24px; */

    /* @media screen and (max-width: 480px) {
        width: 95%;;
    }  */
`;

export const NavLogo = styled(LinkRouter)`
    cursor: pointer;
    
    width: 40px;
    height: auto;
    
    display: flex;
    align-items: center;
    justify-self: center;

    /* figure out fill property */
`;

export const NavLogoWrap = styled.div`
    background: #9BD594;
    padding: 12px;
    border-radius: 50%;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 30px;
        right: 30px;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: left;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 100%;
    margin-left: 3rem;
    display: flex;
`

export const NavLinks = styled(LinkScroll)`
    color: #3A3A3A;
    opacity: 50%;
    text-decoration: none;

    display: flex;
    align-items: center;
    
    height: 100%;
    padding: 0 1 rem;

    cursor: pointer;

    :hover {
        opacity: 85%;
    }

    &.active {
        opacity: 100%;
        border-bottom: 3px solid #01bf71;
    }
`