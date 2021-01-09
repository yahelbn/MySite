import React from "react";
import {
  FormWrap,
  FormContent,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  Icon,
  Form,
  Container,
  TextHeader,
} from "./ContactUsElements";
import ReactHtmlParser from "react-html-parser";

const ContactUs = ({ content }) => {
  const text = ReactHtmlParser(content.text2);

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">ContoTeq</Icon>
          <FormContent>
            <Form action="#" rtl={Boolean(content.rtl) ? true : false}>
              <FormH1>{content.formh1}</FormH1>
              <TextHeader>{text}</TextHeader>

              <FormLabel htmlFor="for">{content.formlabel1}</FormLabel>
              <FormInput type={content.forminput1} required />
              <FormLabel htmlFor="for">{content.formlabel2}</FormLabel>
              <FormInput type={content.forminput2} required />
              <FormLabel htmlFor="for">{content.formlabel3}</FormLabel>
              <FormInput type={content.forminput3} required />
              <FormButton type="submit">{content.formbutton}</FormButton>
              <Text>
                {content.text}{" "}
                <a href="http://www.gmail.com">{content.email}</a>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default ContactUs;
