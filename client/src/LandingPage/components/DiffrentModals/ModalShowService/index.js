import React from "react";
// import girlsend from "../../../images/girlsend.svg";

import {
  FormButton,
  Paragraph,
  Row,
  Column,
  HeaderService,
  SubHeaderService,
} from "./ModalShowServiceElements";
import { HiClipboardCheck } from "react-icons/hi";

const ModalShowService = ({ modalContent, toggle }) => {
  const renderRowsSerivces = modalContent.content.map((row, index) => {
    return (
      <React.Fragment key={index}>
        <Column rtl={modalContent.rtl} style={{ padding: "15px" }}>
          <Row rtl={modalContent.rtl} style={{ marginBottom: "5px" }}>
            <HiClipboardCheck size={21} />
            <SubHeaderService>{row.header}</SubHeaderService>
          </Row>
          <Paragraph rtl={modalContent.rtl}>{row.content}</Paragraph>
        </Column>
      </React.Fragment>
    );
  });

  return (
    <Column>
      <HeaderService>{modalContent.header}</HeaderService>

      {renderRowsSerivces}

      <FormButton type="submit">{modalContent.button}</FormButton>
    </Column>
  );
};

export default ModalShowService;
