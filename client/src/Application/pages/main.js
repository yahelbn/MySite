import React from "react";
import MainPage from "../pageComponents/MainPageApp/index";
const MainPageApp = (props) => {
  console.log("hello");
  return (
    <div>
      <MainPage content={props.dataLanguages.mainpage} />
    </div>
  );
};

export default MainPageApp;
