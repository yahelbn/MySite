import React from "react";
import InitOrJoinCompany from "../components/ApplicationScreens/BeforeAppScreens/InitOrJoinCompany";
const InitOrJoinCompanyPage = (props) => {
  return (
    <div>
      <InitOrJoinCompany content={props.dataLanguages.initorjoin} />
    </div>
  );
};

export default InitOrJoinCompanyPage;
