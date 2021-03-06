import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #131325;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0 30px; */
    height: 100vh;
    position: relative;
    z-index: 0;
    /* Add before styles */
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #ffffff;
    font-size: 48px;
    text-align: center;
    font-weight: 500;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 28px;
    } 
`

export const HighlightedText = styled.span`
    color: #89A1DE;
`