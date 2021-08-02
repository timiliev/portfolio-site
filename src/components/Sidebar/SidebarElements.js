import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: white;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    display: block;
    position: absolute;
    top: 30px;
    right: 30px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    cursor: pointer;
    outline: none;
`

export const SidebarMenu = styled.div`
    margin-bottom: 8rem;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #3A3A3A;
    cursor: pointer;
    
    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

export const SideSocialIconsWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SocialLinks = styled.li`
    width: 25px;
    height: 25px;
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 0 1.5rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`