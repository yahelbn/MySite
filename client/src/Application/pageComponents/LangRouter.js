import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { DataEnglish } from "../Languages/DataEnglish";
import { DataHebrew } from "../Languages/DataHebrew";

import App from "../App/App";

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
    <div>
      <Switch>
        <Route
          path="/"
          exact
          render={(propsRouter) => {
            return <Redirect to={locale + "/contoteqapp/"} />;
          }}
        />

        <Route
          path="/he/contoteqapp/*"
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
          path="/en/contoteqapp/*"
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
    </div>
  );
};

export default LangRouter;
