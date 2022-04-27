import React, { useState } from 'react';
import Video from '../videos/video.mp4'
import { Button } from './ButtonElements';
import { HeroCont, Background, VideoBg, HeroInfo, Heroh1, Herop, HeroBWrap, ArrowForward, ArrowRight} from './heroElements'

const Hero = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };

  return (
    <>
        <HeroCont>
            <Background>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </Background>
        <HeroInfo>
            <Heroh1> Hi, I'm Jacky :)</Heroh1>
            <Herop>
                Using my love for deisgn and my tech skills to become a front end devloper
            </Herop>   
            <HeroBWrap>
                <Button to="contact" onMouseEnter={onHover} onMouseLeave={onHover}>
                    Get in Touch  {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBWrap>
        </HeroInfo>
        </HeroCont>
    </>
  );
};

export default Hero;