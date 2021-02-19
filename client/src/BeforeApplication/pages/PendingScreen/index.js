import React from "react";
import {
  FormWrap,
  FormH1,
  FormButton,
  Icon,
  Form,
  RowDiv,
  ColumnDiv,
  Container,
  Text,
  ImgWrap,
  Img,
} from "./PendingElements";
import { useHistory } from "react-router-dom";
import Envelope from "../../images/envelope.svg";

const PendingScreen = (props) => {
  const content = props.dataLanguages.pendingscreen;

  const history = useHistory();

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/"></Icon>
          <Form action="#" rtl={Boolean(content.rtl) ? true : false}>
            <FormH1>{content.formh1}</FormH1>
            <ImgWrap>
              <Img src={Envelope} alt={"happy"} />
            </ImgWrap>
            <RowDiv>
              <ColumnDiv>
                {/* <InfoCard> */}
                <Text> {content.information}</Text>
                {/* </InfoCard> */}
              </ColumnDiv>

              <ColumnDiv>
                <FormButton
                  type="submit"
                  onClick={() => history.push("searchcompany/")}
                >
                  {content.buttonContent}
                </FormButton>
              </ColumnDiv>
            </RowDiv>
          </Form>
        </FormWrap>
      </Container>
    </>
  );
};

export default PendingScreen;
