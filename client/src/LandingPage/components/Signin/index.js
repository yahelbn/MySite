import React, { useState, useEffect } from "react";
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
  IconExit,
  RowHead,
  LinkForgotPassword,
  FormInputPassword,
  AlertText,
} from "./SigninElements";
import Loader from "react-loader-spinner";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from "react-router-dom";

import { userPool } from "../cognitoUserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

const SignIn = ({ content }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    setMessage("Loading");
    setLoader(true);

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
        setError(false);
        setMessage("success");
        setLoader(false);
      },
      onFailure: (err) => {
        setError(true);
        setMessage(err.message);
        setLoader(false);
      },
      newPasswordRequired: (data) => {
        setMessage(data.message);
      },
    });
  };

  const handleUserKeyPress = (event) => {
    const { key, keyCode } = event;

    if (keyCode === 27) {
      history.push("/");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, []);

  return (
    <>
      <Container>
        <FormWrap>
          <RowHead>
            <Icon to="/">ContoTeq</Icon>
            <IconExit to="/">
              <AiOutlineClose />
            </IconExit>
          </RowHead>
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
              <FormInputPassword
                rtl={Boolean(content.rtl) ? true : false}
                onChange={(e) => setPassword(e.target.value)}
                type={content.forminput2}
                required
              />
              <LinkForgotPassword>{content.text}</LinkForgotPassword>

              <FormButton onClick={(e) => onSubmit(e)} type="submit">
                {loader ? (
                  <Loader
                    type="Puff"
                    color="#DCD9C6"
                    height={35}
                    width={35}
                    timeout={10000}
                  />
                ) : (
                  content.formbutton
                )}
              </FormButton>
              {message && <AlertText error={error}>{message}</AlertText>}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
