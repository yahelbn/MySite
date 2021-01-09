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
} from "./CarouselElements";

const CarouselFounders = ({ content }) => {
  const { header, cards } = content;
  const [currentCarousel, setCurrentCarousel] = useState();

  const renderCarouselCards = cards.map((card, index) => {
    return (
      <React.Fragment key={index}>
        <Card>
          <Img src={card.img} />
          <HeaderCard>{card.headercard}</HeaderCard>
          <SubTitle>{card.subtitle}</SubTitle>
          <Content rtl={Boolean(card.rtl) ? true : false}>
            {card.content}
          </Content>
        </Card>
      </React.Fragment>
    );
  });

  return (
    <CarouselFoundersContainer id="inventors">
      <CarouselH1 rtl={Boolean(header.rtl) ? true : false}>
        {header.content}
      </CarouselH1>

      <CarouselFoundersWrapper>
        <div onClick={() => currentCarousel.prev()}>
          <ArrowLeft />
        </div>

        <ReactCardCarousel
          autoplay={true}
          autoplay_speed={3500}
          ref={(Carousel) => setCurrentCarousel(Carousel)}
        >
          {renderCarouselCards}
        </ReactCardCarousel>
        <div onClick={() => currentCarousel.next()}>
          <ArrowRight />
        </div>
      </CarouselFoundersWrapper>
    </CarouselFoundersContainer>
  );
};

export default CarouselFounders;
