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

const App = (props) => {
  let { locale } = props;
  const [authenticationStatus, setAuthenticationStatus] = useState(false);
  const [userConnected, setUserConnected] = useState("");

  const { getSession, logout, getUserConnected } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        console.log(session);
        setAuthenticationStatus(true);
        getUserConnected().then((user) => {
          var username = user.username;
          setUserConnected(username);
        });
      }
    });
  }, []);

  const logOutPressed = () => {
    logout();
    setAuthenticationStatus(false);
  };

  if (authenticationStatus) {
    return (
      <Account>
        <Route
          path={"/" + locale + "/contoteqapp/initorjoin"}
          render={(propRouter) => <InitOrJoin {...propRouter} {...props} />}
        />

        <Row>
          <SideBar
            logOutPressed={logOutPressed}
            content={props.dataLanguages.sidebar}
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
              </Switch>
            </MainDiv>
          </Column>
          <ProfileBar />
        </Row>
      </Account>
    );
  } else {
    return <div>sorry, you are not connected</div>;
  }
};

export default App;
