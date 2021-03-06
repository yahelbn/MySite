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
import { userCompanyStatusesEnum } from "../../../Global/Enums.json";
import axios from "axios";

const SignIn = ({ content, locale }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  let history = useHistory();

  const { authenticate, getStatus } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();
    setLoader(true);
    authenticate(email, password).then(
      async () => {
        //sending the user the relevant screen based on whether he is signed into a company or not
        const userCompanyData = await getUserStatusInCompany(email);
        console.log(userCompanyData);
        if (!userCompanyData) {
          //if doesnt exists on any company - go to welcome screen
          history.push(`/${locale}/beforeapp/welcomescreen`);
        } else {
          if (
            userCompanyData.UUserStatusInCompany ===
            userCompanyStatusesEnum.DEMOPOC
          ) {
            //send to initORJOin with filled values
            history.push({
              pathname: `/${locale}/beforeapp/initOrJoin`,
              state: { companyID: userCompanyData.UCompanyID },
            });
          } else if (
            userCompanyData.UUserStatusInCompany ===
              userCompanyStatusesEnum.LEAR ||
            userCompanyData.UUserStatusInCompany === userCompanyStatusesEnum.POC
          ) {
            //Send to contoteqapp customer/client view
            history.push(`/${locale}/contoteqapp/`);
          } else if (
            userCompanyData.UUserStatusInCompany ===
            userCompanyStatusesEnum.PENDINGS
          ) {
            //send to pending
          } else {
            //Send to beforeapp/welcomescreen
            //not part of a company
            history.push(`/${locale}/beforeapp/welcomescreen`);
          }
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

  const getUserStatusInCompany = async (email) => {
    const userCompany = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/userCompany/getByEmail`,
      { params: { email } }
    );
    return userCompany.data[0];
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
  });

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
                required
                placeholder={content.formlabel1}
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
                type={content.forminput1}
              />
              <FormInputPassword
                required
                placeholder={content.formlabel2}
                rtl={Boolean(content.rtl) ? true : false}
                onChange={(e) => setPassword(e.target.value)}
                type={content.forminput2}
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
