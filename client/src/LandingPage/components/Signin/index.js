import React, { useState } from "react";
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
import { userPool } from "../cognitoUserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

const SignIn = ({ content }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: userPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("success");
        setMessage("success");
      },
      onFailure: (err) => {
        setMessage(err.message);
      },
      newPasswordRequired: (data) => {
        setMessage(data.message);
      },
    });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">ContoTeq</Icon>
          <FormContent>
            <Form action="#" rtl={Boolean(content.rtl) ? true : false}>
              <FormH1>{content.formh1}</FormH1>
              <FormLabel htmlFor="for">{content.formlabel1}</FormLabel>
              <FormInput
                onChange={(e) => setEmail(e.target.value)}
                type={content.forminput1}
                required
              />
              <FormLabel htmlFor="for">{content.formlabel2}</FormLabel>
              <FormInput
                onChange={(e) => setPassword(e.target.value)}
                type={content.forminput2}
                required
              />
              <FormButton onClick={(e) => onSubmit(e)} type="submit">
                {content.formbutton}
              </FormButton>
              <Text>{content.text}</Text>
              <Text>{message}</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
