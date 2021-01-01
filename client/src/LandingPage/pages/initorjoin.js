import React from "react";
import InitOrJoinCompany from "../components/InitOrJoinCompany";
import ScrollToTop from "../components/ScrollToTop";
const InitOrJoinCompanyPage = (props) => {
  return (
    <div>
      <ScrollToTop />
      <InitOrJoinCompany content={props.dataLanguages.initorjoin} />
    </div>
  );
};

export default InitOrJoinCompanyPage;
