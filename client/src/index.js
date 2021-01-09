import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router } from "react-router-dom";
import LangRouter from "./LandingPage/components/LangRouter";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LangRouter />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
