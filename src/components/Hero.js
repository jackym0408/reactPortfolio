import React from 'react'
//import images from '../../images/doodleTrans.png'
import { HeroCont, Background,} from './heroElements'

const Hero = () => {
  return (
    <>
        <HeroCont>
            <Background>
                <VideoBg autoplay loop muted src={video} type='video/mp4' />
            </Background>

        </HeroCont>

    </>
  )
}

export default Hero