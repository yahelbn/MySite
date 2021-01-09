import React, { useState } from "react";

import {
  PricesContainer,
  PricesH1,
  PricesWrapper,
  PricesCard,
  PricesH2,
  PricesP,
  TabButtonContainer,
  Tab,
  VerticalLine,
  PricesH3,
  PriceNumber,
  ServicesIcon,
  IncludedContainer,
  RowIncluded,
  ContentOfInclude,
} from "./PricesElements";
import { ButtonRouter } from "../../ButtonElement";
import { BsCheckCircle } from "react-icons/bs";

const Prices = ({ content, locale }) => {
  const [choseLeftTab, setChoseLeftTab] = useState(true);

  const renderServiceCards = content.cards.map((card, index) => {
    const includedRows = card.included.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <RowIncluded>
            <BsCheckCircle size={20} color={card.greymode ? "grey" : "green"} />
            <ContentOfInclude>{item}</ContentOfInclude>
          </RowIncluded>
        </React.Fragment>
      );
    });

    return (
      <React.Fragment key={index}>
        <PricesCard rtl={Boolean(card.rtl) ? true : false}>
          <ServicesIcon src={card.icon} />

          <PricesH2 greymode={card.greymode}>{card.servicesh2}</PricesH2>
          <PricesH3 greymode={card.greymode}>{card.servicesh3}</PricesH3>
          <PriceNumber greymode={card.greymode}>{card.price}</PriceNumber>

          <PricesP greymode={card.greymode}>{card.servicesp}</PricesP>
          <IncludedContainer>{includedRows}</IncludedContainer>
          <ButtonRouter
            style={{ marginTop: "20px" }}
            to={"/" + locale + "/contactus"}
            smooth={"true"}
            duration={500}
            spy="true"
            exact="true"
            offset={-80}
            primary={card.primary ? 1 : 0}
            dark={card.dark ? 1 : 0}
            dart2={card.dark2 ? 1 : 0}
          >
            {card.buttonLabel}
          </ButtonRouter>
        </PricesCard>
      </React.Fragment>
    );
  });
  const toggleTrueFalse = () => setChoseLeftTab(!choseLeftTab);

  return (
    <PricesContainer id="prices">
      <PricesH1 rtl={Boolean(content.header.rtl) ? true : false}>
        {content.header.content}
      </PricesH1>

      <TabButtonContainer onClick={toggleTrueFalse}>
        <Tab
          activeClass="active"
          choseLeftTab={choseLeftTab}
          smooth={"true"}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          activeClass="active"
        >
          {content.tab1}
        </Tab>
        <VerticalLine />

        <Tab
          activeClass="active"
          choseLeftTab={!choseLeftTab}
          smooth={"true"}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          activeClass="active"
        >
          {content.tab2}
        </Tab>
      </TabButtonContainer>

      <PricesWrapper rtl={content.header.rtl}>
        {renderServiceCards}
      </PricesWrapper>
    </PricesContainer>
  );
};

export default Prices;
