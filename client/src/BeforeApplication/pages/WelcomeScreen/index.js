import React, { useState } from "react";
import {
  FormWrap,
  FormH1,
  FormButton,
  Icon,
  Form,
  RowDiv,
  ColumnDiv,
  Container,
  InfoCard,
  Text,
  ImgWrap,
  Img,
} from "./WelcomeScreenElements";
import { BsInfoSquare } from "react-icons/bs";
import { useHistory, Link } from "react-router-dom";

import Hapypeople from "../../images/happypeople.svg";

const WelcomeScreen = (props) => {
  const content = props.dataLanguages.welcomescreen;

  const history = useHistory();

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/"></Icon>
          <Form action="#" rtl={Boolean(content.rtl) ? true : false}>
            <FormH1>{content.formh1}</FormH1>
            <ImgWrap>
              <Img src={Hapypeople} alt={"happy"} />
            </ImgWrap>
            <RowDiv>
              <ColumnDiv>
                <InfoCard>
                  <BsInfoSquare style={{ marginTop: "5px" }} size={25} />
                  <Text> {content.information1}</Text>
                  <Text> {content.information2}</Text>
                </InfoCard>
              </ColumnDiv>

              <ColumnDiv
                style={{
                  borderRight: content.rtl ? "" : "3px solid #b5c1b4",
                  borderLeft: content.rtl ? "3px solid #b5c1b4" : "",
                }}
              ></ColumnDiv>

              <ColumnDiv>
                <FormButton
                  type="submit"
                  onClick={() => history.push("searchcompany/")}
                >
                  {content.buttonContent1}
                </FormButton>
                <FormButton
                  type="submit"
                  onClick={() => history.push("initorjoin/")}
                >
                  {content.buttonContent2}
                </FormButton>
              </ColumnDiv>
            </RowDiv>
          </Form>
        </FormWrap>
      </Container>
    </>
  );
};

export default WelcomeScreen;
