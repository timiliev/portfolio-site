import styled from 'styled-components'

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 0;

    height: 100vh;
    /* Add before styles */
`

export const HeroContent = styled.div`
    width: 100%;
    max-width: 1500px;
    padding: 8px 24px;

    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 3;

    /* @media screen and (max-width: 480px) {
        width: 95%;;
    }  */
`

export const ProfileImageWrap = styled.div`
    width: 100px;
    margin-bottom: 20px;
`

export const HeroSubtext = styled.h2`
    color: #131325;
    margin-bottom: 10px;
`

export const HeroH1 = styled.h1`
    color: #9BD594;
    font-size: 50px;
    line-height: 60px;
    text-align: center;
    font-weight: 600;

    /* @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 30px;
    }  */
`

export const HighlightedText = styled.span`
    color: #89A1DE;
`