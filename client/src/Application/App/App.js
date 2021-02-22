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
import { Global } from "../../Global/Global";

/* Pages */
import MainPageApp from "../pages/main";
import SearchCustomer from "../pages/Customers/SearchCustomer/index";
import AddCustomer from "../pages/Customers/AddCustomer/index";
import ExistingCustomers from "../pages/Customers/ExistingCustomers/index";
import CustomersInfo from "../../Application/pages/Customers/CustomersInfo/index";

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
          <AppContainer>
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
                    <Route
                      path={"/" + locale + "/contoteqapp/existingcustomers"}
                      exact
                      render={(propRouter) => (
                        <ExistingCustomers {...propRouter} {...props} />
                      )}
                    />

                    <Route
                      path={"/" + locale + "/contoteqapp/customersinfo"}
                      exact
                      render={(propRouter) => (
                        <CustomersInfo {...propRouter} {...props} />
                      )}
                    />
                  </Switch>
                </MainDiv>
              </Column>
              <ProfileBar />
            </Row>
          </AppContainer>
        </Account>
      </Global>
    );
  } else {
    return null;
  }
};

export default App;
