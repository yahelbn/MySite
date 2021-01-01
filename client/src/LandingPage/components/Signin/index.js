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
} from "./SigninElements";

const SignIn = ({ content }) => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">ContoTeq</Icon>
          <FormContent>
            <Form action="#" rtl={Boolean(content.rtl) ? true : false}>
              <FormH1>{content.formh1}</FormH1>
              <FormLabel htmlFor="for">{content.formlabel1}</FormLabel>
              <FormInput type={content.forminput1} required />
              <FormLabel htmlFor="for">{content.formlabel2}</FormLabel>
              <FormInput type={content.forminput2} required />
              <FormButton type="submit">{content.formbutton}</FormButton>
              <Text>{content.text}</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
