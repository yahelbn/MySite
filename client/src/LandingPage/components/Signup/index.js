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
import { userPool } from "../cognitoUserPool";

import "../HomePageComponents/Modal/Modal.css";
import Modal from "../HomePageComponents/Modal/Modal";
import useModal from "../HomePageComponents/Modal/useModal";

const SignUp = ({ content }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const { isShowing, toggle } = useModal();

  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    setLoader(true);

    userPool.signUp(email, password, [], null, (err, data) => {
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
          <Form action="#" rtl={Boolean(content.rtl) ? true : false}>
            <Modal
              isShowing={isShowing}
              hide={toggle}
              modalContent={content.modalconfirm}
            />
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
