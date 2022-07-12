import React from 'react'
import Video from '../../videos/video.mp4'
import {
  BannerContainer,
  BannerBg,
  VideoBg
} from './BannerElements'

const Banner = () => {
  return (
    <BannerContainer>
      <BannerBg>
        <VideoBg autoPlay loop muter src={Video} type='video/mp4'>

        </VideoBg>
      </BannerBg>
    </BannerContainer>
  )
}

export default Banner
