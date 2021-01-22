import React from "react";
import SignIn from "../components/Signin";
import ScrollToTop from "../components/ScrollToTop";
const SigninPage = (props) => {
  return (
    <div>
      <ScrollToTop />
      <SignIn content={props.dataLanguages.signin} locale={props.locale}/>
    </div>
  );
};

export default SigninPage;
