import React from 'react'
import { 
    PreviewContainer,
    PreviewBox, 
    PreviewInfo, 
    PreviewText, 
    PreviewHeader, 
    PreviewDescription, 
    CaseStudyNumber,
    ImgWrap,
    ProjectPreviewImg,
    PreviewImg,
    Projects,
    PreviewTags,
    BtnWrap 
} from './ProjectPreviewElements';

const ProjectPreview = ({img, alt, header, description, work_for, tags, comingSoon}) => {
    return (
        <>
        <Projects id="projects">
            {/* <PreviewContainer> */}
                <PreviewBox comingSoon={comingSoon}>
                    <ImgWrap>
                        <img src={img} alt={alt}/>
                    </ImgWrap>

                    <PreviewInfo>
                        <PreviewText>
                            <PreviewHeader>{header}</PreviewHeader>
                            <PreviewDescription>{description} {work_for}</PreviewDescription>
                            <PreviewTags>{tags}</PreviewTags>
                        </PreviewText>
                    </PreviewInfo>
                </PreviewBox>
            {/* </PreviewContainer> */}
        </Projects>
        </>
    )
}

export default ProjectPreview
