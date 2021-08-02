import React from 'react';
import { 
    AboutMeImage,
    ImageDescription,
    AboutMeInfo
} from './AboutElements';

const About = () => {
    return (
        <>
            <AboutMeImage id="about"></AboutMeImage>
            <ImageDescription>StartUp Weekend 2017 - Skopje, Macedonia.</ImageDescription>
            <AboutMeInfo>
                I am a recent Univeristy of Findlay alum. I graduated with a BSc. in Computer Science
                with an emphasis in Web and Database. <br/> <br/>
                
                During the last four years I have designed logos, newspaper, mobile applications, websites 
                and have created custom artwork for various organizations based in the United States and Europe. <br/> <br/>
                
                Although I have an understanding of back-end development, my skills lie in front-end. 
                I am able to convert designs into functional, responsive and scalable code. <br/> <br/>
            </AboutMeInfo>
        </>
    );
};

export default About
