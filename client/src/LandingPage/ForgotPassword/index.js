import React, { useState, useEffect, useContext } from "react";
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
} from "./ForgotPasswordElements";
import Loader from "react-loader-spinner";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { AccountContext } from "../../Authentication/Account";

const ForgotPassword = (props) => {
  const content=props.dataLanguages.forgotPassword;
  const {locale}=props;
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const history = useHistory();

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();
    setLoader(true);

    /**
     * ofir to complete
     */
    // authenticate(email, password).then(
    //   (data) => {
    //     setMessage("מיד תועבר");
    //     setError(false);
    //     setLoader(false);
    //   },
    //   (err) => {
    //     setError(true);
    //     setMessage(err.message);
    //     setLoader(false);
    //   }
    // );
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
          <FormContent>
            <Form action="#" rtl={Boolean(content.rtl) ? true : false}>
              <FormH1>{content.formh1}</FormH1>
              <FormInput placeholder={content.formlabel1}
                onChange={(e) => setEmail(e.target.value)}
                type={content.forminput1}
                required
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
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default ForgotPassword;
