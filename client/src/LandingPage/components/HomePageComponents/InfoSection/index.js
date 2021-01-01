import React from "react";
import { Button, ButtonRouter } from "../../ButtonElement";
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
  BtnWrap,
  ImgWrap,
  Img,
} from "./infoElements";

const InfoSection = ({ content, locale }) => {
  const {
    lightBg,
    id,
    headLine,
    description,
    darkText,
    lightText,
    buttonLabel,
    alt,
    img,
    topLine,
    imgStart,
    primary,
    dark,
    dark2,
    rtl,
    routerlink,
  } = content;

  const linkButton = createButton();

  function createButton() {
    if (routerlink) {
      return (
        <ButtonRouter
          to={"/" + locale + "/signup"}
          smooth={true}
          duration={500}
          spy="true"
          exact="true"
          offset={-80}
          primary={primary ? 1 : 0}
          dark={dark ? 1 : 0}
          dart2={dark2 ? 1 : 0}
        >
          {buttonLabel}
        </ButtonRouter>
      );
    } else {
      return (
        <Button
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          primary={primary ? 1 : 0}
          dark={dark ? 1 : 0}
          dart2={dark2 ? 1 : 0}
        >
          {buttonLabel}
        </Button>
      );
    }
  }

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper rtl={Boolean(rtl) ? true : false}>
                <TopLine>{topLine} </TopLine>
                <Heading lightText={lightText}>{headLine} </Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>{linkButton}</BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
