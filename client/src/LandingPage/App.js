import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import InitOrJoin from "./pages/initorjoin";
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
  console.log(process.env.REACT_APP_DEV_SERVER_URL);
  return (
    <div>
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
          path={"/" + locale + "/contoteqapp"}
          render={(propRouter) => <ContoTeqApp {...propRouter} {...props} />}
        />
        {/* <Route
          path="*"
          render={(propRouter) => <NoFound {...propRouter} {...props} />}
        /> */}
      </Switch>
    </div>
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
