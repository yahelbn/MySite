import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import { Account } from "../Authentication/Account";

import { Global } from "../Global/Global";

import { AttributesFunc } from "../Authentication/AttributesFunc";
import ContactUs from "./pages/contactus";
import ForgotPassword from "../LandingPage/components/ForgotPassword/index";

import ContoTeqApp from "../Application/pageComponents/LangRouter";

const App = (props) => {
  let { locale } = props;

  return (
    <Global>
      <Account>
        <AttributesFunc>
          <Switch>
            <Route
              path={"/" + locale + "/"}
              exact
              render={(propRouter) => <Home {...propRouter} {...props} />}
            />
            <Route
              path={"/" + locale + "/signin"}
              render={(propRouter) => <SigninPage {...propRouter} {...props} />}
            />
            <Route
              path={"/" + locale + "/forgotpassword"}
              render={(propRouter) => (
                <ForgotPassword {...propRouter} {...props} />
              )}
            />

            <Route
              path={"/" + locale + "/signup"}
              render={(propRouter) => <SignupPage {...propRouter} {...props} />}
            />

            <Route
              path={"/" + locale + "/contactus"}
              render={(propRouter) => <ContactUs {...propRouter} {...props} />}
            />

            <Route
              path={"/" + locale + "/contoteqapp"}
              render={(propRouter) => (
                <ContoTeqApp {...propRouter} {...props} />
              )}
            />
          </Switch>
        </AttributesFunc>
      </Account>
    </Global>
  );
};

export default App;
