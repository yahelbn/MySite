import React, { useState, useEffect } from "react";
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
  IconExit,
  RowHead,
  AlertText,
} from "./SignupElements";
import { AiOutlineClose } from "react-icons/ai";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";
import { userPool } from "../../../Authentication/cognitoUserPool";

import "../HomePageComponents/Modal/Modal.css";
import Modal from "../HomePageComponents/Modal/Modal";
import useModal from "../HomePageComponents/Modal/useModal";

//CongitoAttributes
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

const SignUp = ({ content }) => {
  /*Attributes of the user  */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(undefined);
  const [rePassword, setRePassword] = useState(undefined);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");

  /*Loaders and messages */
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [errorPasswordMessage, setErrorPasswordMessage] = useState(false);

  const [error, setError] = useState(false);
  const [comparePass, setComparePass] = useState(false);

  /* Contexts */
  const { isShowing, toggle } = useModal();
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    setLoader(true);

    var userAttributes = userSignUpAttributes();
    console.log(userAttributes);
    if (comparePass) {
      userPool.signUp(email, password, userAttributes, null, (err, data) => {
        if (err) {
          console.log(err.message.message);
          setLoader(false);
          setMessage(err.message);
          setError(true);
        } else {
          console.log(data);
          setMessage("Success");
          setLoader(false);
          setError(false);
          toggle();
        }
      });
    } else {
      setMessage("Passwords not the same, try again");
      setError(true);
      setLoader(false);
    }
  };

  const handleUserKeyPress = (event) => {
    const { key, keyCode } = event;

    if (keyCode === 27) {
      history.push("/");
    }
  };

  const checkCompatibilityPasswords = () => {
    if (rePassword !== undefined) {
      if (rePassword !== password) {
        setPasswordMessage("Password not the equals");
        setErrorPasswordMessage(true);
        return false;
      } else {
        setPasswordMessage("Password equals");
        setErrorPasswordMessage(false);
        return true;
      }
    }
  };

  const userSignUpAttributes = () => {
    var attributeList = [];

    var attributeFirstName = new CognitoUserAttribute({
      Name: "custom:first_name",
      Value: firstName,
    });

    var attributeLastName = new CognitoUserAttribute({
      Name: "custom:last_name",
      Value: lastName,
    });

    var attributeTelephone = new CognitoUserAttribute({
      Name: "custom:telephone",
      Value: telephone,
    });

    attributeList.push(attributeFirstName);
    attributeList.push(attributeLastName);
    attributeList.push(attributeTelephone);
    return attributeList;
  };

  useEffect(() => {
    setComparePass(checkCompatibilityPasswords());

    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [rePassword]);

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
          <Form action="#" rtl={Boolean(content.rtl) ? true : false}>
            <Modal
              isShowing={isShowing}
              hide={toggle}
              modalContent={content.modalconfirm}
            />
            <FormH1>{content.formh1}</FormH1>
            <RowDiv>
              <ColumnDiv>
                <FormLabel htmlFor="for">{content.formlabel1}</FormLabel>
                <FormInput
                  type={content.forminput1}
                  required
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </ColumnDiv>
              <ColumnDiv>
                <FormLabel htmlFor="for">{content.formlabel2}</FormLabel>
                <FormInput
                  type={content.forminput2}
                  required
                  onChange={(event) => setLastName(event.target.value)}
                />
              </ColumnDiv>
            </RowDiv>

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
              <ColumnDiv>
                <FormLabel htmlFor="for">{content.formlabel5}</FormLabel>
                <FormInput
                  type={content.forminput5}
                  required
                  onChange={(event) => setRePassword(event.target.value)}
                />
              </ColumnDiv>
            </RowDiv>
            {passwordMessage && (
              <AlertText error={errorPasswordMessage}>
                {passwordMessage}
              </AlertText>
            )}

            <FormLabel htmlFor="for">{content.formlabel6}</FormLabel>
            <FormInput
              type={content.forminput6}
              required
              onChange={(event) => setTelephone(event.target.value)}
            />
            {/* <FormLabel htmlFor="for">{content.formlabel7}</FormLabel>
            <FormInput type={content.forminput7} required /> */}
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
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
