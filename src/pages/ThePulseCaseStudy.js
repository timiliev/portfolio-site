import React from 'react'

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
} from '../components/CaseStudy/CaseStudyElements'

import CaseStudyNavbar from '../components/CaseStudyNavbar'

const ThePulseCaseStudy = () => {
    return (
        <>
            <CaseStudyNavbar />
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
                <Info>
                    During my onboarding process, I was tasked with refreshing The Pulse brand. 
                    From redesigning the logo, the newspaper layout to implmenting responsive design to The Pulse's WordPress based website, 
                    the goal of the project was making the newspaper more recognizable and accessable to the University of Findlay's student population.
                </Info>

                <SectionHeader>Key focus areas</SectionHeader>
                <Info>
                    - Modernize The Pulse logo for digital usage. <br/>
                    - Refresh the look of the print edition of the newspaper. <br/>
                    - Update The Pulse's social media brand.
                </Info>

                <SectionHeader>Research</SectionHeader>
                <Info>
                    While joining this role, I decided to speak with the previous Design Editor, ask for guidance and
                    brainstorm areas of improvement. During our meeting we descussed the layout of The Pulse as well as 
                    the adaptability factor of the logo. 
                </Info>

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
                            <ExplanationItemInfo>The former logo fails to adapt to smaller sizes.</ExplanationItemInfo>
                        </NumberAndInfoItem>
                    </ImgExplanationContainer>
                </ImageSideInfoContainer>

                <SectionHeader>Ideation</SectionHeader>
                <Info>
                    Newer logos typically have variations that are easily deconstructed. 
                    For the redesign to be successful, we needed to identify the components that made The Pulse logo, 
                    and deconstruct the original. 
                    Two areas were identified. The redesign could either focus on minimal typography or highlight the pulse icon. 
                    While consulting The Pulse staff, it was agreed upon that the component of focus should be the icon itself.
                </Info>
                <ImageAndCaption>
                    <img src="https://i.imgur.com/RDCufyf.png" alt="Analysis of the old pulse logo" class="full_screen_width"/>
                    <ImgCaption>Logo analysis #2</ImgCaption>
                </ImageAndCaption>
                <Info>Furthermore, while looking at other newspapers for inspiration, there was a common pattern of serif fonts used in the title. I decided to explore this further in the design process.</Info>

                <SectionHeader>Solution</SectionHeader>
                <Info>
                    The logo redesign revolved around the ability of the cardiogram symbol to be easily sapareted 
                    from the text. In order do so the cardiogram symbol was encapsulated in a circle. The new form allowed it 
                    to stand on it's own in situations where this was required. 
                    Additionally, this allowed for different variants of the logo to be easily created.
                </Info>
                <ImageAndCaption>
                    <img src="https://imgur.com/oezjexS.png" alt="The Pulse logo redesign" class="full_screen_width"/>
                    <ImgCaption>The Pulse logo redesign</ImgCaption>
                </ImageAndCaption>          
                <Info>The orange accent color used for the logo and throughout the magazine was inspired by The University of Findlay branding guidelines.</Info>
                <ImageAndCaption>
                    <img src="https://i.imgur.com/xM9zYiW.png" alt="The Pulse newspaper layout redesign " class="full_width_image"/>
                    <ImgCaption>The Pulse newspaper layout redesign</ImgCaption>
                </ImageAndCaption>
                <ImageAndCaption>
                    <img src="https://i.imgur.com/uG2SW09.png" alt="The Pulse newspaper redesign: Fonts" class="full_width_image"/>
                    <ImgCaption>The Pulse newspaper redesign: Font selection</ImgCaption>
                </ImageAndCaption>
                <Info>
                    Leitura News Roman was used for all headers and sub-headers throughout the newspaper. 
                    Baskerville MT was used for all article text. 
                    Circular Std was used for The Pulse designed ads. 
                    Finally, SF Pro Display was the other sans-serif font, used mainly author attribution on articles.
                </Info>
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
                <Info>
                    Along with the redesign of the logo and the layout of the newspaper, 
                    I also had the opportunity to work on the social media layout for The Pulse. <br /> <br />

                    I had the liberty to experiment with different designs and 
                    esatblish the social media guidelines for the new Pulse brand. <br /> <br />
                    
                    I decided to introduce three types of posts, being article posts, event posts and holiday posts.
                    Each post having their own distinctive appearance, making them more recognizable at an initial glance.
                </Info>

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
                <Info>
                    The main font used for the social media posts is Akzidenz-Grotesk Extended Bold, 
                    while the supporting sans-serif used for paragraph text is SF Pro Display.
                </Info>

                <SectionHeader>Outcome</SectionHeader>
                <Info>
                    I was a part of The Pulse staff for almost two years, and during this time I was
                    able to extensively familiarze myself with Adobe InDesign, and expand my knowledge using 
                    the rest of the Adobe Suite. Additionally, I performed routine maintance on The Pulse's 
                    website, and experimented with WordPress theme creation. <br /> <br />

                    The rebranded Pulse won an Ohio News Media Association (ONMA) award for design for the school year 2019/2020.
                </Info>
                <ImageAndCaption>
                    <img src="https://imgur.com/DiziJGo.png" alt="" class=""/>
                    {/* <ImgCaption>Third place - OMNA award for design</ImgCaption> */}
                </ImageAndCaption>


                <MoreCaseStudiesContainer>
                    <MoreCaseStudiesHeader>More case studies coming soon!</MoreCaseStudiesHeader>
                    
                    <a href="/">
                        <GoBackContainer>
                            <BackIcon><img src="https://imgur.com/tyHxqwJ.png" alt="" class=""/></BackIcon>
                            <GoBackText>Back to home page</GoBackText>
                        </GoBackContainer>
                    </a>
                </MoreCaseStudiesContainer>

            </CaseStudyContainer>
        </>
    )
}

export default ThePulseCaseStudy
