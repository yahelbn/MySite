import React from "react";
import Location from "../components/Location";
import ScrollToTop from "../components/ScrollToTop";
const ContactUsPage = (props) => {
  return (
    <div>
      <ScrollToTop />
      <Location content={props.dataLanguages.location} />
    </div>
  );
};

export default ContactUsPage;
