import React, { useState } from "react";
import ReactCardCarousel from "react-card-carousel";

import {
  CarouselFoundersContainer,
  Card,
  CarouselH1,
  CarouselFoundersWrapper,
  ArrowLeft,
  ArrowRight,
  Img,
  HeaderCard,
  SubTitle,
  Content,
  SocialIconLink,
  SocialIcons,
  LangIcons,
  SpanText,
  SpanContainer,
} from "./CarouselElements";
import { FaGithub } from "react-icons/fa";
import GalleryComp from "../../Gallery/index";

const CarouselFounders = ({ content }) => {
  const { header, cards } = content;
  const [currentCarousel, setCurrentCarousel] = useState();

  const renderCarouselCards = cards.map((card, index) => {
    const rendericons = card.languagesicons.map((icon) => {
      return <LangIcons src={icon}></LangIcons>;
    });
    return (
      <React.Fragment key={index}>
        <Card>
          <GalleryComp images={card.images} />
          <HeaderCard>{card.headercard}</HeaderCard>
          <SubTitle>{card.subtitle}</SubTitle>
          <Content rtl={Boolean(card.rtl) ? true : false}>
            {card.content}
          </Content>

          <SocialIconLink
            href={`${card.gitlink}`}
            target="_blank"
            aria-label="Linkedin"
          >
            <FaGithub />
          </SocialIconLink>
          <SocialIcons>{rendericons}</SocialIcons>
        </Card>
      </React.Fragment>
    );
  });

  return (
    <CarouselFoundersContainer id="myprojects">
      <CarouselH1 rtl={Boolean(header.rtl) ? true : false}>
        {header.content}
      </CarouselH1>

      <CarouselFoundersWrapper>
        <div onClick={() => currentCarousel.prev()}>
          <ArrowLeft />
        </div>

        <ReactCardCarousel
          autoplay={true}
          autoplay_speed={5000}
          ref={(Carousel) => setCurrentCarousel(Carousel)}
        >
          {renderCarouselCards}
        </ReactCardCarousel>
        <div onClick={() => currentCarousel.next()}>
          <ArrowRight />
        </div>
      </CarouselFoundersWrapper>
      <SpanContainer rtl={Boolean(header.rtl) ? true : false}>
        <SpanText rtl={Boolean(header.rtl) ? true : false}>
          {header.text1}
        </SpanText>
        <SpanText rtl={Boolean(header.rtl) ? true : false}>
          {header.text2}{" "}
        </SpanText>
      </SpanContainer>
    </CarouselFoundersContainer>
  );
};

export default CarouselFounders;
