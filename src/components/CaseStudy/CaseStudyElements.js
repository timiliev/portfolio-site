import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CaseStudyContainer = styled.div`
    margin-top: 150px;
`

export const ProjectHeader = styled.h1`
    font-size: 50px;
    margin-bottom: 15px;
`

export const ProjectSubheader = styled.h2`
    font-size: 30px;
    margin-bottom: 6rem;
    font-weight: 500;

    @media only screen and (max-width: 800px) {
        font-size: 25px;
    }
`

export const SectionHeader = styled.h2`
    font-size: 25px;
    color: #22A6FF;
    margin-bottom: 10px;
    margin-top: 4rem;
`

export const QuickInfoContainer = styled.div`
    /* width: 100%; */
    display: grid;
    grid-template-columns: repeat(4, auto);
    /* grid-auto-flow: column; */
    margin-bottom: 40px;
    //display: block;

    @media only screen and (max-width: 1180px) {
        grid-template-columns: repeat(2, auto);
        row-gap: 12px;
    }

    @media only screen and (max-width: 800px) {
        grid-template-columns: repeat(1, auto);
        row-gap: 12px;
    }
` 

export const ProjectQuickInfo = styled.div`
    display: inline-block;
`

export const QuickInfoHeader = styled.h3`
    font-size: 15px;
    font-weight: 700;
`

export const QuickInfoSub = styled.h3`
    font-size: 15px;
    font-weight: 500;
`

export const Info = styled.h3`
    font-size: 18px;
    font-weight: 500;
`
export const Slim = styled.h3`
    font-size: 18px;
    font-weight: 300;
`

export const ImageSideInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    align-items: center;
    margin: 2rem 0;

    @media only screen and (max-width: 800px) {
        flex-direction: column;
    }
`

export const SideImageAndCaption = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    min-width: 350px;

    @media only screen and (max-width: 800px) {
        width: 100%;
    }
`

export const ImgCaption = styled.p`
    opacity: 50%;
    margin-top: 5px;
`

export const NumberAndInfoItem = styled.div`
    display: flex;
    flex-direction: row;
    margin: 8px 0;
    /* align-items: center; */
    /* margin-bottom: 1rem; */
`

export const ImgExplanationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    margin-left: 10px;
    width: 30vw;
    /* height: 400px; */

    @media only screen and (max-width: 800px) {
        width: 100%;
        margin-top: 40px;
    }
`

export const CircleNumber = styled.div`
    /* justify-content: center; */
    /* align-items: center; */
`

export const ExplanationItemInfo = styled.h3`
    font-weight: 500;
    margin-left: 10px;
    /* width: 30%; */
`

export const ImageAndCaption = styled.div`
    margin: 20px 0;
`

export const MoreCaseStudiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 90px;
`

export const MoreCaseStudiesHeader = styled.h2`
    font-size: 30px;
    opacity: 40%;
`

export const GoBackContainer = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    opacity: 40%;

    &:hover {
        opacity: 80%;
        cursor: pointer;
    }
`

export const BackIcon = styled.div`
    width: 23px;
    height: 23px;
    margin-right: 10px;
`

export const GoBackText = styled.h3``



