import React from "react";
import WelcomeScreen from "../components/ApplicationScreens/BeforeAppScreens/WelcomeScreen";
const WelcomeScreenPage = (props) => {
  return (
    <div>
      <WelcomeScreen content={props.dataLanguages.welcomescreen} />
    </div>
  );
};

export default WelcomeScreenPage;
