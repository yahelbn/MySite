import React from "react";
import SearchCompany from "../components/ApplicationScreens/BeforeAppScreens/SearchCompany";
const SearchCompanyPage = (props) => {
  return (
    <div>
      <SearchCompany content={props.dataLanguages.searchcompany} />
    </div>
  );
};

export default SearchCompanyPage;
