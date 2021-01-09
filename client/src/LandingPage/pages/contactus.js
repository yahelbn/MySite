import React from "react";
import ContactUs from "../components/ContactUs";
import ScrollToTop from "../components/ScrollToTop";
const ContactUsPage = (props) => {
  return (
    <div>
      <ScrollToTop />
      <ContactUs content={props.dataLanguages.contactus} />
    </div>
  );
};

export default ContactUsPage;
