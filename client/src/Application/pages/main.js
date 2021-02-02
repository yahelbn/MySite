import React from "react";
import MainPage from "../pageComponents/MainPageApp/index";
const MainPageApp = (props) => {
  return (
    <div>
      <MainPage content={props.dataLanguages.mainpage} />
    </div>
  );
};

export default MainPageApp;
