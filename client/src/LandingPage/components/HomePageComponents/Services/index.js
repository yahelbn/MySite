import React, { useState } from "react";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

import "../../DiffrentModals/Modal/Modal.css";
import Modal from "../../DiffrentModals/Modal/Modal";
import useModal from "../../DiffrentModals/Modal/useModal";
import ModalShowService from "../../DiffrentModals/ModalShowService/index";

const Services = ({ content }) => {
  const [contentOfModal, setContentOfModal] = useState("");

  const { isShowing, toggle } = useModal();
  const renderServiceCards = content.cards.map((card, index) => {
    return (
      <React.Fragment key={index}>
        <ServicesCard
          rtl={Boolean(card.rtl) ? true : false}
          onClick={() => {
            toggle();
            setContentOfModal(card.modalinfo);
          }}
        >
          <ServicesIcon src={card.icon} />
          <ServicesH2>{card.servicesh2}</ServicesH2>
          <ServicesP>{card.servicesp}</ServicesP>
        </ServicesCard>
      </React.Fragment>
    );
  });

  return (
    <ServicesContainer id="services">
      <Modal
        isShowing={isShowing}
        hide={toggle}
        modalcomp={
          <ModalShowService
            modalContent={contentOfModal}
            // company={choseCompany}
            //locale={props.locale}
          />
        }
      />
      <ServicesH1 rtl={Boolean(content.header.rtl) ? true : false}>
        {content.header.content}
      </ServicesH1>
      <ServicesWrapper>{renderServiceCards}</ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
