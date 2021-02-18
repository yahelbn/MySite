import React from "react";
import ReactDOM from "react-dom";
//import mailbox from "../../../images/mailbox.svg";

import {
  FormButton,
  Paragraph,
  Row,
  Column,
} from "./ModalSearchCompanyElements";

const ModalSearchCompany = ({ modalContent, company }) => (
  <Column>
    <Row rtl={modalContent.rtl}>
      {modalContent.rtl}
      <Paragraph>{modalContent.header}</Paragraph>
      <Paragraph>
        <b>{company.name}</b>?
      </Paragraph>
    </Row>

    <Row rtl={modalContent.rtl}>
      <Paragraph>{modalContent.p}</Paragraph>
    </Row>

    <FormButton type="submit">{modalContent.button}</FormButton>
  </Column>
);

export default ModalSearchCompany;
