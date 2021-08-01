import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px 0;
`

export const SectionSubheader = styled.h3`
    font-size: 25px;
    color: #22A6FF;
    margin-bottom: 10px;
`

export const SectionSubheaderEmail = styled.h2`
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 10px;
    line-height: normal;

    @media only screen and (max-width: 800px) {
        font-size: 30px;
    }

    @media only screen and (max-width: 800px) {
        font-size: 25px;
    }
`

export const ContactAdditionalInfo = styled.h3`
    color: #3A3A3A;
    font-weight: 500;
    line-height: normal;
    max-width: 50%;
    margin-bottom: 20px;

    @media only screen and (max-width: 800px) {
        max-width: 80%;
    }

    @media only screen and (max-width: 500px) {
        font-size: 90%;
    }
`

export const CopyrightAndStuff = styled.div``

export const Message = styled.p`
    margin-bottom: 40px;
`