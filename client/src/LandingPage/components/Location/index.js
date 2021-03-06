import React from "react";
import {
  FormWrap,
  FormContent,
  FormH1,
  Icon,
  Form,
  Container,
  MapWrapper,
  Content,
  WrapperLocation,
  InfoWrap,
  Header,
  Para,
} from "./LocationElements";
import ReactHtmlParser from "react-html-parser";

const Location = ({ content }) => {
  const text = ReactHtmlParser(content.text2);

  const renderInfo = content.content.map((contentinfo, index) => {
    return (
      <React.Fragment key={index}>
        <InfoWrap rtl={Boolean(content.rtl) ? true : false}>
          <Header>{contentinfo.header}</Header>
          <Para>{contentinfo.info}</Para>
        </InfoWrap>
      </React.Fragment>
    );
  });

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">ContoTeq</Icon>
          <FormContent>
            <Form action="#" rtl={Boolean(content.rtl) ? true : false}>
              <FormH1>{content.formh1}</FormH1>
              <WrapperLocation>
                <Content rtl={Boolean(content.rtl) ? true : false}>
                  {renderInfo}
                </Content>
                <MapWrapper></MapWrapper>
              </WrapperLocation>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Location;
