import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages";
import ContactUs from "./pages/contactus";

const App = (props) => {
  let { locale } = props;

  return (
    <Switch>
      <Route
        path={"/" + locale + "/"}
        exact
        render={(propRouter) => <Home {...propRouter} {...props} />}
      />

      <Route
        path={"/" + locale + "/contactus"}
        render={(propRouter) => <ContactUs {...propRouter} {...props} />}
      />
    </Switch>
  );
};

export default App;
