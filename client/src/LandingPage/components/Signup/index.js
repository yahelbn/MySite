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
import { userInterface, UProgramEnum } from "../../../Global/Enums.json";

import "../HomePageComponents/Modal/Modal.css";
import Modal from "../HomePageComponents/Modal/Modal";
import useModal from "../HomePageComponents/Modal/useModal";

import axios from "axios";

const SignUp = ({ content }) => {
  /*Attributes of the user  */
  const [password, setPassword] = useState(undefined);
  const [rePassword, setRePassword] = useState(undefined);
  const [userData, setUserData] = useState(userInterface);

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

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);

    if (comparePass) {
      userPool.signUp(
        userData.UEmail,
        password,
        [],
        null,
        async (err, data) => {
          if (err) {
            console.log(err.message.message);
            setLoader(false);
            setMessage(err.message);
            setError(true);
          } else {
            setMessage("Success");
            setLoader(false);
            setError(false);
            await addUserToDB(userData.UEmail);
            toggle();
          }
        }
      );
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

  //if the user already exists in our db(someone set him as poc), we only update him, else adding new.
  const addUserToDB = async (email) => {
    const user = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/users/getByEmail`,
      { params: { email } }
    );

    if (user.data.length !== 0) {
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/users/updateByEmail`,
        {
          email: userData.UEmail,
          userData,
        }
      );
    } else {
      //adding a new user
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/users/add`,
        userData
      );
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

  useEffect(() => {
    setUserData({
      ...userData,
      UProgram: UProgramEnum.GUEST,
      UInCognito: "true",
    });
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
                  onChange={(event) =>
                    setUserData({ ...userData, UFirstName: event.target.value })
                  }
                />
              </ColumnDiv>
              <ColumnDiv>
                <FormLabel htmlFor="for">{content.formlabel2}</FormLabel>
                <FormInput
                  type={content.forminput2}
                  required
                  onChange={(event) =>
                    setUserData({ ...userData, ULastName: event.target.value })
                  }
                />
              </ColumnDiv>
            </RowDiv>

            <FormLabel htmlFor="for">{content.formlabel3}</FormLabel>
            <FormInput
              // value={email}
              onChange={(event) =>
                setUserData({ ...userData, UEmail: event.target.value })
              }
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
              onChange={(event) =>
                setUserData({ ...userData, UPhone: event.target.value })
              }
            />
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
