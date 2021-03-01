import React from "react";
import girlsend from "../../../images/girlsend.svg";

import {
  FormButton,
  Paragraph,
  Row,
  Column,
  ImgWrap,
  Img,
} from "./ModalSendingRequestElements";

const ModalSendingRequest = ({ modalContent, toggle }) => (
  <Column>
    <ImgWrap>
      <Img src={girlsend} alt={"girlsend"} />
    </ImgWrap>
    <Row rtl={modalContent.rtl}>
      <Paragraph>{modalContent.header}</Paragraph>
      <Paragraph>{/* <b>{company.name}</b>? */}</Paragraph>
    </Row>

    <Row rtl={modalContent.rtl}>
      <Paragraph>{modalContent.p}</Paragraph>
    </Row>

    <FormButton type="submit" onClick={toggle}>
      {modalContent.button}
    </FormButton>
  </Column>
);

export default ModalSendingRequest;
