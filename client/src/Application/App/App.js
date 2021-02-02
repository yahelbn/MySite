import React, { useState, useEffect, useContext } from "react";
import "../App/App.css";
import { Route, Switch } from "react-router-dom";
/* Import Components */
import NavBar from "../components/Navbar/index";
import SideBar from "../components/SideBar/index";
import { Row, Column, MainDiv, AppContainer } from "../App/AppElements";
import ProfileBar from "../components/ProfileBar";

/* Import Contexts */
import { Account } from "../../Authentication/Account";
import { AccountContext } from "../../Authentication/Account";
import { AttributesFuncContext } from "../../Authentication/AttributesFunc";

/* Import Pages */

import InitOrJoin from "../pages/initorjoin";
import MainPageApp from "../pages/main";
import SearchCustomer from "../components/ApplicationScreens/Customers/SearchCustomer/index";
import AddCustomer from "../components/ApplicationScreens/Customers/AddCustomer/index";

/* Import Functions */
import { useHistory } from "react-router-dom";

const App = (props) => {
  const history = useHistory();
  let { locale } = props;
  const [authenticationStatus, setAuthenticationStatus] = useState(false);
  const { getSession } = useContext(AccountContext);
  const { getAttribute } = useContext(AttributesFuncContext);
  const [userName, setuserName] = useState("");

  useEffect(() => {
    getSession()
      .then((session) => {
        if (session) {
          setAuthenticationStatus(true);
          getAttribute("custom:first_name").then((data) => {
            setuserName(data);
          });
        }
      })
      .catch((e) => {
        history.push(`/`);
      });
  });

  if (authenticationStatus) {
    return (
      <Account>
        <AppContainer>
          <Route
            path={"/" + locale + "/contoteqapp/initorjoin"}
            render={(propRouter) => <InitOrJoin {...propRouter} {...props} />}
          />

          <Row>
            <SideBar
              content={props.dataLanguages.sidebar}
              username={userName}
            />
            <Column>
              <NavBar />

              <MainDiv>
                <Switch>
                  <Route
                    path={"/" + locale + "/contoteqapp/mainpage"}
                    exact
                    render={(propRouter) => (
                      <MainPageApp {...propRouter} {...props} />
                    )}
                  />

                  <Route
                    path={"/" + locale + "/contoteqapp/searchcustomer"}
                    exact
                    render={(propRouter) => (
                      <SearchCustomer {...propRouter} {...props} />
                    )}
                  />
                  <Route
                    path={"/" + locale + "/contoteqapp/addcustomer"}
                    exact
                    render={(propRouter) => (
                      <AddCustomer {...propRouter} {...props} />
                    )}
                  />
                </Switch>
              </MainDiv>
            </Column>
            <ProfileBar />
          </Row>
        </AppContainer>
      </Account>
    );
  } else {
    return null;
  }
};

export default App;
