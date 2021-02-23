import React from "react";
import { useHistory } from "react-router-dom";
//import mailbox from "../../../images/mailbox.svg";

import {
  FormButton,
  Paragraph,
  Row,
  Column,
} from "./ModalSearchCompanyElements";

const ModalSearchCompany = ({ modalContent, company, locale }) => {
  const history = useHistory();

  return (
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

      <FormButton
        type="submit"
        onClick={() => {
          history.push(`/${locale}/${modalContent.link}`);
        }}
      >
        {modalContent.button}
      </FormButton>
    </Column>
  );
};

export default ModalSearchCompany;
