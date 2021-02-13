import React, { useState, useEffect } from "react";
import {
  FormWrap,
  FormContent,
  FormH1,
  FormInput,
  FormButton,
  Icon,
  Form,
  Container,
  IconExit,
  RowHead,
  AlertText,
} from "./ForgotPasswordElements";
import Loader from "react-loader-spinner";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { CognitoUser } from "amazon-cognito-identity-js";
import { userPool } from "../../../Authentication/cognitoUserPool";

const ForgotPassword = (props) => {
  const [stage, setStage] = useState(1); // 1 = email stage, 2 = code stage
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const content = props.dataLanguages.forgotPassword;
  const { locale } = props;
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const history = useHistory();

  const getUser = () => {
    return new CognitoUser({
      Username: email.toLowerCase(),
      Pool: userPool,
    });
  };

  const sendCode = (event) => {
    event.preventDefault();

    getUser().forgotPassword({
      onFailure: (err) => {
        setError(true);
        setMessage(err.message);
      },
      inputVerificationCode: () => {
        setStage(2);
        setMessage("");
      },
    });
  };

  const resetPassword = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError(true);
      setMessage(content.resetPassword.passwordsDontMatch);
      return;
    }

    getUser().confirmPassword(code, password, {
      onSuccess: () => {
        history.push(`/${locale}/signin`);
      },
      onFailure: (err) => {
        setError(true);
        if (err.code === `ExpiredCodeException`) {
          setMessage(content.resetPassword.invalidCode);
        } else {
          setMessage(content.resetPassword.passwordNotSupported);
        }
      },
    });
  };

  const handleUserKeyPress = (event) => {
    const { key, keyCode } = event;

    if (keyCode === 27) {
      history.push(`/${locale}/signin`);
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
          {stage === 1 && (
            <FormContent>
              <Form action="#" rtl={Boolean(content.rtl) ? true : false}>
                <FormH1>{content.formh1}</FormH1>
                <FormInput
                  placeholder={content.sendCode.formlabel1}
                  onChange={(e) => setEmail(e.target.value)}
                  type={content.sendCode.forminput1}
                  required
                />

                <FormButton onClick={(e) => sendCode(e)} type="submit">
                  {loader ? (
                    <Loader
                      type="Puff"
                      color="#DCD9C6"
                      height={35}
                      width={35}
                      timeout={10000}
                    />
                  ) : (
                    content.sendCode.formbutton
                  )}
                </FormButton>
                {message && <AlertText error={error}>{message}</AlertText>}
              </Form>
            </FormContent>
          )}

          {stage === 2 && (
            <FormContent>
              <Form action="#" rtl={Boolean(content.rtl) ? true : false}>
                <FormH1>שחזור סיסמא</FormH1>
                <FormInput
                  placeholder={content.resetPassword.formlabel2}
                  onChange={(e) => setCode(e.target.value)}
                  required
                />
                <FormInput
                  placeholder={content.resetPassword.formlabel3}
                  onChange={(e) => setPassword(e.target.value)}
                  type={content.resetPassword.forminput3}
                  required
                />
                <FormInput
                  placeholder={content.resetPassword.formlabel4}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type={content.resetPassword.forminput4}
                  required
                />

                <FormButton onClick={(e) => resetPassword(e)} type="submit">
                  {loader ? (
                    <Loader
                      type="Puff"
                      color="#DCD9C6"
                      height={35}
                      width={35}
                      timeout={10000}
                    />
                  ) : (
                    content.resetPassword.formbutton2
                  )}
                </FormButton>
                {message && <AlertText error={error}>{message}</AlertText>}
              </Form>
            </FormContent>
          )}
        </FormWrap>
      </Container>
    </>
  );
};

export default ForgotPassword;
