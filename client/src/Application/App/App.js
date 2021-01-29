import React, { useState, useEffect, useContext } from "react";
import "../App/App.css";
import { Route, Switch } from "react-router-dom";
import MainPageApp from "../pages/main";
import NavBar from "../components/Navbar/index";
import SideBar from "../components/SideBar/index";
import { Row, Column, MainDiv } from "../App/AppElements";
import ProfileBar from "../components/ProfileBar";
import { Account } from "../../Authentication/Account";
import { AccountContext } from "../../Authentication/Account";
import InitOrJoin from "../pages/initorjoin";
import { useHistory } from "react-router-dom";

const App = (props) => {
  const history = useHistory();
  let { locale } = props;
  const [authenticationStatus, setAuthenticationStatus] = useState(false);
  const { getSession, getConnectedUser } = useContext(AccountContext);

  useEffect(() => {
    getSession()
      .then((session) => {
        if (session) {
          setAuthenticationStatus(true);
          getConnectedUser().then((user) => {
            console.log(user);
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
        <Route
          path={"/" + locale + "/contoteqapp/initorjoin"}
          render={(propRouter) => <InitOrJoin {...propRouter} {...props} />}
        />

        <Row>
          <SideBar content={props.dataLanguages.sidebar} />
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
              </Switch>
            </MainDiv>
          </Column>
          <ProfileBar />
        </Row>
      </Account>
    );
  } else {
    return null;
  }
};

export default App;
