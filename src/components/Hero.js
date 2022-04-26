import React from 'react'
import Video from '../videos/video.mp4'
import { HeroCont, Background, VideoBg} from './heroElements'

const Hero = () => {
  return (
    <>
        <HeroCont>
            <Background>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </Background>
        </HeroCont>

    </>
  )
}

export default Hero