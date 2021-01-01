import React from "react";
import "../App/App.css";
import { Route, Switch } from "react-router-dom";
import MainPageApp from "../pages/main";
import NavBar from "../components/Navbar/index";
import SideBar from "../components/SideBar/index";
import { Row, Column, MainDiv } from "../App/AppElements";

const App = (props) => {
  let { locale } = props;

  return (
    <div>
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
      </Row>
    </div>
  );
};

export default App;
