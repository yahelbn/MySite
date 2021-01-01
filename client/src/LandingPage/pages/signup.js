import React from "react";
import SignUp from "../components/Signup";
import ScrollToTop from "../components/ScrollToTop";
const SignUpPage = (props) => {
  return (
    <div>
      <ScrollToTop />
      <SignUp content={props.dataLanguages.signup} />
    </div>
  );
};

export default SignUpPage;
