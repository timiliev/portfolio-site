import styled from 'styled-components'
import the_pulse_preview from '../../images/The Pulse Newspaper Preview.png';

export const Projects = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PreviewContainer = styled.div`
    column-count: 2;
    column-gap: 60px;

    display: block;
`

export const PreviewBox = styled.div`
    /* background-color: green; */
    filter: ${({comingSoon}) => comingSoon ? "blur(4px)" : "none"};
    display: inline-block;
    z-index: 1;
    margin-bottom: 50px;

    /* padding: 0 24px; */

    /* @media screen and (max-width: 1180px) {
        width: 95%;
        height: 500px;
        justify-content: flex-start;
        flex-wrap: nowrap;
        flex-direction: column;
    } 

    @media screen and (max-width: 480px) {
        width: 100%;
    }  */
`

export const PreviewInfo = styled.div`

    /* @media screen and (max-width: 1180px) {
    } 

    @media screen and (max-width: 480px) {
    }  */
`

export const PreviewText = styled.div`
`

export const PreviewHeader = styled.h2`
    color: #3A3A3A;
    line-height: normal;
    margin-bottom: 10px;
    font-weight: bold;
    /* font-size: 25px; */

    /* font-size: 60px;
    text-align: center; 
    font-weight: bold;

    @media screen and (max-width: 768px) {
        font-size: 55px;
    }

    @media screen and (max-width: 480px) {
        font-size: 50px;
    }  */
`

export const PreviewDescription = styled.h3`
    color: #3A3A3A;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 10px;

    /* font-size: 24px;
    
    font-weight: 200;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }  */
`

export const PreviewTags = styled.h4`
    font-weight: 300;
    color: #3A3A3A;
    opacity: 50%;
`

export const ImgWrap = styled.div`
    margin-bottom: 15px;
`

export const PreviewImg = styled.div`
    /* bottom: 0;
    border: 5px black;
    height: 200px;
    background-color: red;
    background-image: url("https://i.imgur.com/QbLrVJd.png");
    /* background-image: url(require("../../images/paper-preview.png")); 
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    object-position: 40px 80px; */
`

export const ProjectPreviewImg = styled.div`
`