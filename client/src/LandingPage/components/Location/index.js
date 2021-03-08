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
  Col,
  TextMark,
} from "./LocationElements";
import ReactHtmlParser from "react-html-parser";
// import GoogleMap, { Marker } from "react-maps-google";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Location = ({ content }) => {
  const text = ReactHtmlParser(content.text2);
  const lat = 32.16135467304658;
  const lng = 34.93545170233536;

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

  const AnyReactComponent = ({ text }) => (
    <Col>
      <TextMark>{text}</TextMark>
      <FaMapMarkerAlt size={20} />
    </Col>
  );

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
                <MapWrapper>
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: process.env.REACT_APP_GOOGLE_MAP_KEY,
                    }}
                    defaultCenter={{ lat, lng }}
                    defaultZoom={12.5}
                  >
                    <AnyReactComponent lat={lat} lng={lng} text="ContoTeq" />
                  </GoogleMapReact>
                </MapWrapper>
              </WrapperLocation>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Location;
