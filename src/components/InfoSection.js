import React from 'react';
//import { Button } from './ButtonElements';
import { InfoCont, InfoWrap, InfoRow, Column1, Column2, TextWrap, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './infoElements';

const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headline,darkText,description,img}) => {
  return (
    <>
         <InfoCont lightBg={lightBg} id={id}>
             <InfoWrap>
                 <InfoRow imgStart={imgStart}>
                     <Column1>
                     <TextWrap>
                         <TopLine>{topLine}</TopLine>
                         <Heading lightText={lightText}>{headline}</Heading> 
                         <Subtitle darkText={darkText}>{description}</Subtitle>
                         <BtnWrap>
                         </BtnWrap>
                     </TextWrap>
                     </Column1>
                     <Column2>
                     <ImgWrap>
                        <Img src={img}/>
                     </ImgWrap>
                     </Column2>
                 </InfoRow>
             </InfoWrap>
         </InfoCont>
        
    </>
  )
}

export default InfoSection