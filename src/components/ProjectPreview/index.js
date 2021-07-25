import React from 'react'
import { 
    PreviewContainer,
    PreviewBox, 
    PreviewInfo, 
    PreviewText, 
    PreviewHeader, 
    PreviewDescription, 
    BtnWrap 
} from './ProjectPreviewElements';


const ProjectPreview = () => {
    return (
        <>
            <PreviewContainer>
                <PreviewBox>
                    <PreviewInfo>
                        <PreviewText>
                            <PreviewHeader>Header</PreviewHeader>
                            <PreviewDescription>Description</PreviewDescription>
                        </PreviewText>
                        <BtnWrap>
                        </BtnWrap>
                    </PreviewInfo>
                    {/* <ImgWrap> */}
                    {/* </ImgWrap> */}
                </PreviewBox>
            </PreviewContainer>
        </>
    )
}

export default ProjectPreview
