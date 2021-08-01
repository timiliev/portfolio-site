import React from 'react'
import {

} from './ThePulseCaseStudyElements';

import {
    CaseStudyContainer,
    ProjectHeader,
    ProjectSubheader,
    QuickInfoContainer,
    ProjectQuickInfo,
    QuickInfoHeader,
    QuickInfoSub,
    SectionHeader,
    Info,
    ImageSideInfoContainer,
    SideImageAndCaption,
    ImgCaption,
    NumberAndInfoItem,
    ImgExplanationContainer,
    CircleNumber,
    ExplanationItemInfo,
    ImageAndCaption,
    MoreCaseStudiesContainer,
    MoreCaseStudiesHeader,
    GoBackContainer,
    BackIcon,
    ImgContainer,
    GoBackText
} from '../CaseStudy/CaseStudyElements'

const ThePulseCaseStudy = () => {
    return (
        <>
            <CaseStudyContainer>

                <ProjectHeader>The Pulse</ProjectHeader>
                <ProjectSubheader>An award winning newspaper at The Univeristy of Findlay</ProjectSubheader>

                <QuickInfoContainer>
                    <ProjectQuickInfo>
                        <QuickInfoHeader>Company</QuickInfoHeader>
                        <QuickInfoSub>The Pulse / The University of Findlay</QuickInfoSub>
                    </ProjectQuickInfo>

                    <ProjectQuickInfo>
                        <QuickInfoHeader>Role</QuickInfoHeader>
                        <QuickInfoSub>Design Editor</QuickInfoSub>
                    </ProjectQuickInfo>

                    <ProjectQuickInfo>
                        <QuickInfoHeader>Platform</QuickInfoHeader>
                        <QuickInfoSub>Ediotrial Design / Social Media / Web</QuickInfoSub>
                    </ProjectQuickInfo>

                    <ProjectQuickInfo>
                        <QuickInfoHeader>Tools Used</QuickInfoHeader>
                        <QuickInfoSub>Adobe Creative Suite, WordPress</QuickInfoSub>
                    </ProjectQuickInfo>
                </QuickInfoContainer>

                <img class="full_screen_width" src="https://i.imgur.com/QpOrEU0.jpg" alt="The Pulse Newspaper mockup preview"/>
                <ImgCaption>A privew of the newspaper designs</ImgCaption>

                <SectionHeader>Goal</SectionHeader>
                <Info>Curabitur sed pellentesque lectus, vel dictum risus. Aenean eget leo quis urna ornare aliquam vitae sit amet mauris. Nunc sagittis nisl id justo tristique iaculis.</Info>

                <SectionHeader>Key focus areas</SectionHeader>
                <Info>Curabitur sed pellentesque lectus, vel dictum risus. Aenean eget leo quis urna ornare aliquam vitae sit amet mauris. Nunc sagittis nisl id justo tristique iaculis.</Info>

                <SectionHeader>Research</SectionHeader>
                <Info>Curabitur sed pellentesque lectus, vel dictum risus. Aenean eget leo quis urna ornare aliquam vitae sit amet mauris. Nunc sagittis nisl id justo tristique iaculis.</Info>

                <ImageSideInfoContainer>
                    <SideImageAndCaption>
                        <img src="https://i.imgur.com/UAax66Y.png" alt="Newspaper layout analysis" class=""/>
                        <ImgCaption>Newspaper layout analysis</ImgCaption>
                    </SideImageAndCaption>
                    <ImgExplanationContainer>
                        <NumberAndInfoItem>
                            <CircleNumber><img src="https://i.imgur.com/rcgsvzG.png" alt="1." class="ItemNum"/></CircleNumber>
                            <ExplanationItemInfo>Lacking in alignment.</ExplanationItemInfo>
                        </NumberAndInfoItem>

                        <NumberAndInfoItem>
                            <CircleNumber><img src="https://i.imgur.com/Atr8IXq.png" alt="2." class="ItemNum"/></CircleNumber>
                            <ExplanationItemInfo>Multiple fonts used. Inconsistent styling.</ExplanationItemInfo>        
                        </NumberAndInfoItem>

                        <NumberAndInfoItem>
                            <CircleNumber><img src="https://i.imgur.com/4KRGxm4.png" alt="3." class="ItemNum"/></CircleNumber>
                            <ExplanationItemInfo>Lack of white space.</ExplanationItemInfo>
                        </NumberAndInfoItem>
                    </ImgExplanationContainer>
                </ImageSideInfoContainer>

                <ImageSideInfoContainer>
                    <SideImageAndCaption>
                        <img src="https://i.imgur.com/RD0GOfL.png" alt="Old pulse logo on Instagram" class=""/>
                        <ImgCaption>Logo analysis #1</ImgCaption>
                    </SideImageAndCaption>
                    <ImgExplanationContainer>
                        <NumberAndInfoItem>
                            <CircleNumber><img src="https://i.imgur.com/Pw41BYr.png" alt="3." class="ItemNum"/></CircleNumber>
                            <ExplanationItemInfo>The former logo fails to adapt to smaller sizes, and it is not clearly visible.</ExplanationItemInfo>
                        </NumberAndInfoItem>
                    </ImgExplanationContainer>
                </ImageSideInfoContainer>

                <SectionHeader>Ideation</SectionHeader>
                <Info>Newer logos typically have variations that are easily deconstructed. For the redesign to be successful, we needed to identify the components that made The Pulse logo, and deconstruct the original. Two areas were identified. The redesign could either focus on minimal typography or highlight the pulse icon. While consulting the staff, it was agreed upon that the component of focus should be the icon itself.</Info>
                <ImageAndCaption>
                    <img src="https://i.imgur.com/RDCufyf.png" alt="Analysis of the old pulse logo" class="full_screen_width"/>
                    <ImgCaption>Logo analysis #2</ImgCaption>
                </ImageAndCaption>
                <Info>Furthermore, while looking at other newspapers for inspiration, there was a common pattern of serif fonts used in the title. We decided to explore this further in the design process.</Info>

                <SectionHeader>Solution</SectionHeader>
                <Info>Newer logos typically have variations that are easily deconstructed. For the redesign to be successful, we needed to identify the components that made The Pulse logo, and deconstruct the original. Two areas were identified. The redesign could either focus on minimal typography or highlight the pulse icon. While consulting the staff, it was agreed upon that the component of focus should be the icon itself.</Info>
                <ImageAndCaption>
                    <img src="https://i.imgur.com/I7yNBmz.png" alt="" class="max_width_sixty"/>
                    <ImgCaption>The Pulse logo redesign</ImgCaption>
                </ImageAndCaption>            
                <Info>The orange accent color used for the logo and throughout the magazine is inspired by The University of Findlay branding guidelines.</Info>
                <ImageAndCaption>
                    <img src="https://i.imgur.com/xM9zYiW.png" alt="The Pulse newspaper layout redesign " class="full_width_image"/>
                    <ImgCaption>The Pulse newspaper layout redesign</ImgCaption>
                </ImageAndCaption>
                <ImageAndCaption>
                    <img src="https://i.imgur.com/uG2SW09.png" alt="The Pulse newspaper redesign: Fonts" class="full_width_image"/>
                    <ImgCaption>The Pulse newspaper redesign: Font selection</ImgCaption>
                </ImageAndCaption>
                <Info>Leitura News Roman was used for all Headers and Sub-headers throughout the newspaper. Baskerville MT was used for all article text. Circular Std was used for Ads. Finally, SF Pro Display was the other sans-serif font, used mainly author attribution on articles.</Info>

                <ImageSideInfoContainer>
                    <SideImageAndCaption>
                        <img src="https://i.imgur.com/Py7m1Oz.png" alt="Updated pulse logo on social media" class="side_img"/>
                        <ImgCaption>The redesigned logo displayed as a profile picture on The Pulse's Instagram page</ImgCaption>
                    </SideImageAndCaption>
                    <ImgExplanationContainer>
                        <NumberAndInfoItem>
                            <CircleNumber><img src="https://i.imgur.com/gJu0nGV.png" alt="checkmark" class="ItemNum"/></CircleNumber>
                            <ExplanationItemInfo>The redesigned logo has variations that support smaller size???????</ExplanationItemInfo>
                        </NumberAndInfoItem>
                    </ImgExplanationContainer>
                </ImageSideInfoContainer>

                <SectionHeader>Social media redesign</SectionHeader>
                <Info>Along with the redesign of the logo and the layout of the newspaper, I also had the opportunity to work on the social media layout for The Pulse.

The Pulse had not introduced guidelines for their social media posts, nor did they have a particular social media strategy put in place. As a Design Editor, I was placed in charge of The Pulse's Instagram account. I decided to introduce three types of posts, being article posts, event posts and holiday posts. </Info>

                <ImageAndCaption>
                    <img src="https://imgur.com/KgEf8oB.png" alt="" class=""/>
                    <ImgCaption>Instagram redesign: Article summary post #1</ImgCaption>
                </ImageAndCaption>
                <ImageAndCaption>
                    <img src="https://imgur.com/Lk7kKfJ.png" alt="" class=""/>
                    <ImgCaption>Instagram redesign: Article summary post #2</ImgCaption>
                </ImageAndCaption>
                <ImageAndCaption>
                    <img src="https://imgur.com/DdeKH0f.png" alt="" class=""/>
                    <ImgCaption>Instagram redesign: Holiday post</ImgCaption>
                </ImageAndCaption>
                <ImageAndCaption>
                    <img src="https://imgur.com/cibL9cy.png" alt="" class=""/>
                    <ImgCaption>Instagram redesign: Event post</ImgCaption>
                </ImageAndCaption>
                <Info></Info>

                <MoreCaseStudiesContainer>
                    <MoreCaseStudiesHeader>More case studies coming soon!</MoreCaseStudiesHeader>
                    <GoBackContainer>
                        <BackIcon><img src="https://imgur.com/tyHxqwJ.png" alt="" class=""/></BackIcon>
                        <GoBackText>Back to home page</GoBackText>
                    </GoBackContainer>
                </MoreCaseStudiesContainer>

            </CaseStudyContainer>
        </>
    )
}

export default ThePulseCaseStudy
