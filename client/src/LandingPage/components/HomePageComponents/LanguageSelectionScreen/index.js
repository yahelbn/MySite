import React from "react";

import {
  LanguageSelectionContainer,
  Icon,
  CloseIcon,
  LanguageSelectionContainerWrapper,
  LanguageSelectionMenu,
  LanguageSelectionLink,
} from "./LanguageElements";

const LanguageSelectionScreen = ({ languageOpen, toggleLanguage, props }) => {
  const setLocale = (newLocale) => {
    let url = "/" + newLocale + props.location.pathname.substring(3);
    props.history.push(url);
    props.changeLocale(newLocale);
  };

  return (
    <>
      <LanguageSelectionContainer
        languageOpen={languageOpen}
        onClick={toggleLanguage}
      >
        <Icon onClick={toggleLanguage}>
          <CloseIcon />
        </Icon>
        <LanguageSelectionContainerWrapper>
          <LanguageSelectionMenu>
            <LanguageSelectionLink onClick={() => setLocale("he")}>
              עברית
            </LanguageSelectionLink>
            <LanguageSelectionLink onClick={() => setLocale("en")}>
              English
            </LanguageSelectionLink>
          </LanguageSelectionMenu>
        </LanguageSelectionContainerWrapper>
      </LanguageSelectionContainer>
    </>
  );
};

export default LanguageSelectionScreen;
