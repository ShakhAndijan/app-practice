import React from 'react'
import {
    Heading,
    InfoColumn,
    InfoRow,
    InfoSec,
    SubTitle,
    TextWrapper,
    TopLine,
    ImgWrapper,
    Img
} from './InfoSection.elements'
import { Button, Container } from '../../globalStyles'
import { Link } from 'react-router-dom'

const InfoSection = ({
    primary,
    lightBg,
    imgStart,
    lightTopLine,
    lightTest,
    lightTextDesc,
    buttonLabel,
    headLine,
    description,
    topLine,
    img,
    alt,
    start
}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightTest={lightTest}>{headLine}</Heading>
                                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                                <Link to='/sign-up'>
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
