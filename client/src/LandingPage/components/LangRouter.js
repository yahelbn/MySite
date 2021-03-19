import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "../components/HomePageComponents/Languages/DataHebrew";
import "../components/HomePageComponents/Languages/DataEnglish";
import App from "../App";
import { DataHebrew } from "../components/HomePageComponents/Languages/DataHebrew";
import { DataEnglish } from "../components/HomePageComponents/Languages/DataEnglish";

const LangRouter = () => {
  const [locale, setLocale] = useState("");
  useEffect(() => {
    let localeStorage = window.localStorage.getItem("locale");

    if (localeStorage === null) {
      window.localStorage.setItem("locale", "he");
      localeStorage = "he";
    }
    setLocale(localeStorage);
  }, []);

  const changeLocale = (newLocale) => {
    window.localStorage.setItem("locale", newLocale);
    setLocale(newLocale);
  };

  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(propsRouter) => {
          return <Redirect to={locale + "/"} />;
        }}
      />
      <Route
        path="/he/*"
        render={(propsRouter) => (
          <App
            {...propsRouter}
            locale={locale}
            changeLocale={changeLocale}
            dataLanguages={DataHebrew}
          />
        )}
      />
      <Route
        path="/en/*"
        render={(propsRouter) => (
          <App
            {...propsRouter}
            locale={locale}
            changeLocale={changeLocale}
            dataLanguages={DataEnglish}
          />
        )}
      />
    </Switch>
  );
};

export default LangRouter;
