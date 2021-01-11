import React, { useState } from "react";
import {
  FormWrap,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Icon,
  Form,
  RowDiv,
  ColumnDiv,
  Container,
} from "./SignupElements";

import { userPool } from "../cognitoUserPool";

const SignUp = ({ content }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    userPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.log(err);
      else console.log(data);
    });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">ContoTeq</Icon>
          <Form action="#" rtl={Boolean(content.rtl) ? true : false}>
            <FormH1>{content.formh1}</FormH1>
            {/* <RowDiv>
              <ColumnDiv>
                <FormLabel htmlFor="for">{content.formlabel1}</FormLabel>
                <FormInput type={content.forminput1} required />
              </ColumnDiv>
              <ColumnDiv>
                <FormLabel htmlFor="for">{content.formlabel2}</FormLabel>
                <FormInput type={content.forminput2} required />
              </ColumnDiv>
            </RowDiv> */}

            <FormLabel htmlFor="for">{content.formlabel3}</FormLabel>
            <FormInput
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type={content.forminput3}
              required
            />
            <RowDiv>
              <ColumnDiv>
                <FormLabel htmlFor="for">{content.formlabel4}</FormLabel>
                <FormInput
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type={content.forminput4}
                  required
                />
              </ColumnDiv>
              {/* <ColumnDiv>
                <FormLabel htmlFor="for">{content.formlabel5}</FormLabel>
                <FormInput type={content.forminput5} required />
              </ColumnDiv> */}
            </RowDiv>

            {/* <FormLabel htmlFor="for">{content.formlabel6}</FormLabel>
            <FormInput type={content.forminput6} required />
            <FormLabel htmlFor="for">{content.formlabel7}</FormLabel>
            <FormInput type={content.forminput7} required /> */}
            <FormButton onClick={(e) => onSubmit(e)} type="submit">
              {content.formbutton}
            </FormButton>
          </Form>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
