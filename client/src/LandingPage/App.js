import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import { Account } from "./components/Account";
import InitOrJoin from "./pages/initorjoin";
import ContactUs from "./pages/contactus";
import Status from "./components/Status";

import ContoTeqApp from "../Application/pageComponents/LangRouter";

import React from "react";

const App = (props) => {
  let { locale } = props;

  // let urlLocale = props.location.pathname.substring(1, 3);
  // useEffect(() => {
  //   if (locale !== urlLocale) {
  //     props.changeLocale(urlLocale);
  //     locale = urlLocale;
  //   }
  // });

  return (
    <Account>
      <Status />
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
          path={"/" + locale + "/signup"}
          render={(propRouter) => <SignupPage {...propRouter} {...props} />}
        />

        <Route
          path={"/" + locale + "/initorjoin"}
          render={(propRouter) => <InitOrJoin {...propRouter} {...props} />}
        />

        <Route
          path={"/" + locale + "/contactus"}
          render={(propRouter) => <ContactUs {...propRouter} {...props} />}
        />

        <Route
          path={"/" + locale + "/contoteqapp"}
          render={(propRouter) => <ContoTeqApp {...propRouter} {...props} />}
        />
        {/* <Route
          path="*"
          render={(propRouter) => <NoFound {...propRouter} {...props} />}
        /> */}
      </Switch>
    </Account>
  );
};

export default App;

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" component={Home} exact />
//         <Route path="/signin" component={SigninPage} exact />
//       </Switch>
//     </Router>
//   );
// }
