import React from 'react'
import { useState } from 'react'
import { Button } from '../Sidebar/buttonElements'

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ArrowForward,
  ArrowRight,
  ImgWrap,
  Img,
  BtnWrap
} from './InfoElements'

const Info = ({lightBg, id, ImgStart, topLine, lightText, lightTextDescription, darkText, description, buttonLabel, headLine, img, alt, primary, dark1, dark2}) => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }


  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={ImgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button to='home>'
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark1={dark1 ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                  >{buttonLabel} {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Info
