import React from 'react';
import { 
    AboutMeImage,
    ImageDescription,
    AboutMeInfo
} from './AboutElements';

const About = () => {
    return (
        <>
            <AboutMeImage></AboutMeImage>
            <ImageDescription>StartUp Weekend 2017 - Skopje, Macedonia.</ImageDescription>
            <AboutMeInfo>
                Cras condimentum, ex imperdiet eleifend porttitor, felis nisl facilisis neque, 
                sit amet condimentum tellus nisi a purus. Curabitur porttitor mi ac ligula semper malesuada. 
                Curabitur laoreet luctus purus ut tincidunt. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur risus quam, fermentum at ultricies ac, porta nec libero. 
                Nunc fringilla, nisl at eleifend feugiat, erat ex hendrerit augue, 
                ac faucibus ante tellus sit amet dui. Vivamus euismod ultricies convallis. 
                Proin nec nunc fringilla, vulputate risus molestie, dapibus nisl. 
                Nunc ut dignissim neque. Maecenas maximus scelerisque metus, eu fermentum odio consectetur quis. 
                Aenean vitae imperdiet leo. Ut a eros elit. Nam tincidunt massa enim, at dictum leo tincidunt at. 
                Fusce a elementum orci.
            </AboutMeInfo>
        </>
    );
};

export default About
