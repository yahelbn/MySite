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

const App = (props) => {
  let { locale } = props;
  const [authenticationStatus, setAuthenticationStatus] = useState(false);

  const { getSession } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        setAuthenticationStatus(true);
        console.log("sdfsdf");
      }
    });
  }, []);

  // if (authenticationStatus) {
  return (
    <Account>
      <Row>
        <SideBar />
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
  // } else {
  //   return <div>sorry, you are not connected</div>;
  // }
};

export default App;
