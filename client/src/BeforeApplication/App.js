import React, { useState, useEffect, useContext } from "react";
// import "../App/App.css";
import { Route, Switch } from "react-router-dom";
/* Import Components */
// import NavBar from "../components/Navbar/index";
// import SideBar from "../components/SideBar/index";
// // import { Row, Column, MainDiv, AppContainer } from "../App/AppElements";
// import ProfileBar from "../components/ProfileBar";

/* Import Contexts */
import { Account } from "../Authentication/Account";
import { AccountContext } from "../Authentication/Account";
import { AttributesFuncContext } from "../Authentication/AttributesFunc";
import { Global } from "../Global/Global";

/* Import Pages */

import InitOrJoin from "./pages/InitOrJoinCompany/index";
import WelcomeScreen from "./pages/WelcomeScreen/index";
import SearchCompanyPage from "./pages/SearchCompany/index";

/* Import Functions */
import { useHistory } from "react-router-dom";

const App = (props) => {
  const history = useHistory();
  let { locale } = props;
  const [authenticationStatus, setAuthenticationStatus] = useState(false);
  const { getSession } = useContext(AccountContext);
  const { getAttribute } = useContext(AttributesFuncContext);
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getSession()
      .then((session) => {
        if (session) {
          getAttribute("custom:first_name").then((data) => {
            setuserName(data);
          });
          getAttribute("email").then((data) => {
            setEmail(data);
            setAuthenticationStatus(true);
          });
        }
      })
      .catch((e) => {
        history.push(`/`);
      });
  });

  if (authenticationStatus) {
    return (
      <Global email={email}>
        <Account>
          {/* <AppContainer> */}
          <Route
            path={"/" + locale + "/beforeapp/initorjoin"}
            render={(propRouter) => <InitOrJoin {...propRouter} {...props} />}
          />

          <Route
            path={"/" + locale + "/beforeapp/welcomescreen"}
            render={(propRouter) => (
              <WelcomeScreen {...propRouter} {...props} />
            )}
          />

          <Route
            path={"/" + locale + "/beforeapp/searchcompany"}
            render={(propRouter) => (
              <SearchCompanyPage {...propRouter} {...props} />
            )}
          />
          {/* </AppContainer> */}
        </Account>
      </Global>
    );
  } else {
    return null;
  }
};

export default App;
