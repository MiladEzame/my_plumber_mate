import React from 'react'
import Image from '../../images/image.jpg'
import {
  BannerContainer,
  BannerP,
  BannerH1,
  BannerContent,
  BannerBg,
  ImageBg
} from './BannerElements'

const Banner = () => {

  return (
    <BannerContainer>
      <BannerBg>
        <ImageBg autoPlay loop muter src={Image} type='Image/mp4'>

        </ImageBg>
      </BannerBg>
      <BannerContent>
        <BannerH1>Your Local Plumber</BannerH1>
        <BannerP>
          If i had to do it all over again, I'd have been a plumber.
        </BannerP>
        <BannerP>
          - Albert Einstein -
        </BannerP>
      </BannerContent>
    </BannerContainer>
  )
}

export default Banner
