import React, { useState, useEffect, useContext } from "react";
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
  LinkForgotPassword,
  FormInputPassword,
  AlertText,
} from "./SigninElements";
import Loader from "react-loader-spinner";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { AccountContext } from "../../../Authentication/Account";
import axios from "axios";

const SignIn = ({ content, locale }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const history = useHistory();

  const { authenticate, getStatus } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();
    setLoader(true);
    authenticate(email, password).then(
      async (data) => {
        const userCompany = await getUserStatusInCompany();
        if (userCompany.length > 0) {
          history.push("/he/contoteqapp/");
        } else {
          history.push("/he/contoteqapp/initorjoin");
        }
        setMessage("מיד תועבר");
        setError(false);
        setLoader(false);
      },
      (err) => {
        setError(true);
        setMessage(err.message);
        setLoader(false);
      }
    );
  };

  const getUserStatusInCompany = async () => {
    const userCompany = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/userCompany/getByEmailAndStatuses`,
      { params: { email: email, statuses: ["lear", "poc"] } }
    );
    return userCompany.data;
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
              <FormInput
                placeholder={content.formlabel1}
                onChange={(e) => setEmail(e.target.value)}
                type={content.forminput1}
                required
              />
              <FormInputPassword
                placeholder={content.formlabel2}
                rtl={Boolean(content.rtl) ? true : false}
                onChange={(e) => setPassword(e.target.value)}
                type={content.forminput2}
                required
              />
              <LinkForgotPassword to={`/${locale}/forgotpassword`}>
                {content.text}
              </LinkForgotPassword>

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
