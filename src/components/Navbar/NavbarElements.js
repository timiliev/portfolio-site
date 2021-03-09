import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    /* background: #000; */
    height: 150px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index:10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 150px;
    z-index: 1;
    width: 90%;
    padding: 0 24px;
    max-width: 1500px;
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5 rem;
    display: flex;
    align-items: center;
    /* margin-left: 24px; */
    font-weight: 600;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 150px;
    margin-left: 4rem;
    display: flex;
`

export const NavLinks = styled.li`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1 rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`