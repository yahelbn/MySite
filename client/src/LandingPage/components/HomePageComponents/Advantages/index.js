import React from "react";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./AdvantagesElements";

const Advantages = ({ content }) => {
  const renderServiceCards = content.cards.map((card, index) => {
    return (
      <React.Fragment key={index}>
        <ServicesCard rtl={Boolean(card.rtl) ? true : false}>
          <ServicesIcon src={card.icon} />
          <ServicesH2>{card.servicesh2}</ServicesH2>
          <ServicesP>{card.servicesp}</ServicesP>
        </ServicesCard>
      </React.Fragment>
    );
  });

  return (
    <ServicesContainer
      id="advantages"
      rtl={Boolean(content.header.rtl) ? true : false}
    >
      <ServicesH1 rtl={Boolean(content.header.rtl) ? true : false}>
        {content.header.content}
      </ServicesH1>
      <ServicesWrapper>{renderServiceCards}</ServicesWrapper>
    </ServicesContainer>
  );
};

export default Advantages;
