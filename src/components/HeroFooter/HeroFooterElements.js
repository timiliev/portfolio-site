import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Footer = styled.footer`
    /* background: #000; */
    height: 150px;
    margin-top: -150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    z-index: 10;

    /* @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    } */
`;

export const HeroFooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;

    width: 100%;
    /* max-width: 1500px; */
    height: 150px;
    /* padding: 0 24px; */

    /* @media screen and (max-width: 480px) {
        width: 95%;;
    }  */
`;

export const Email = styled(Link)`
    color: #3A3A3A;
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

export const SocialIcons = styled.ul`
    display: flex;
    align-items: center;
    justify-content: left;
    padding-left: 0;
    
    /* @media screen and (max-width: 768px) {
        display: none;
    } */
`

export const SocialItem = styled.li`
    width: 25px;
    height: 25px;
    margin-right: 3rem;
    display: flex;
`

export const SocialLinks = styled.li`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1 rem;
    height: 100%;
    cursor: pointer;
`