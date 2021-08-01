import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AboutMeImage = styled.div`
    background-image: url("https://i.imgur.com/VfSnqjt.jpg");
    background-size: cover;
    background-position: center -80px;
    background-repeat: no-repeat;
    width: 100%;
    height: 300px;
    border-radius: 20px;
`

export const ImageDescription = styled.p`
    margin: 10px 0;
    opacity: 50%;
`

export const AboutMeInfo = styled.h4`
    font-size: 18px;
    font-weight: 500;
    margin: 25px 0;
`