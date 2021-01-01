import React, { useState } from "react";
import Sidebar from "../components/HomePageComponents/Sidebar";
import Navbar from "../components/HomePageComponents/Navbar";
import HeroSection from "../components/HomePageComponents/HeroSectionElements";
import InfoSection from "../components/HomePageComponents/InfoSection";
import Advantages from "../components/HomePageComponents/Advantages";
import Services from "../components/HomePageComponents/Services";
import Footer from "../components/HomePageComponents/Footer";
import LanguageSelectionScreen from "../components/HomePageComponents/LanguageSelectionScreen";
import CarouselFounders from "../components/HomePageComponents/CarouselFounders/index";

const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [languageOpen, setlanguageOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    setlanguageOpen(!languageOpen);
  };
  return (
    <>
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        toggleLanguage={toggleLanguage}
        locale={props.locale}
        content={props.dataLanguages.navBar}
      />
      <Navbar
        toggle={toggle}
        toggleLanguage={toggleLanguage}
        locale={props.locale}
        content={props.dataLanguages.navBar}
      />
      <LanguageSelectionScreen
        languageOpen={languageOpen}
        toggleLanguage={toggleLanguage}
        props={props}
      />
      <HeroSection content={props.dataLanguages.heroSection} />
      <InfoSection content={props.dataLanguages.homeObjOne} />
      <InfoSection content={props.dataLanguages.homeObjTwo} />
      <InfoSection content={props.dataLanguages.homeObjThree} />
      <Advantages content={props.dataLanguages.advantages} />

      <Services content={props.dataLanguages.services} />
      <CarouselFounders content={props.dataLanguages.whoweare} />
      <InfoSection
        content={props.dataLanguages.homeObjFour}
        locale={props.locale}
      />
      <Footer content={props.dataLanguages.footer} />
    </>
  );
};

export default Home;
