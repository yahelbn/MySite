import React, { useState } from "react";
import Video from "../../../videos/video.mp4";
import { Button } from "../../ButtonElement";
import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Img,
} from "./HeroSectionElements";

const HeroSection = ({ content }) => {
  const [hover, setHover] = useState(false);
  const { heroh1, herop, button } = content;
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>{heroh1}</HeroH1>
        <HeroP>{herop}</HeroP>
        <HeroBtnWrapper>
          <Button
            to="probackground"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="false"
            smooth={"true"}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            {button} {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
