import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarRoute,
  SidebarMenu,
  SideBtnWrap,
  SidebarWrapper,
  SidebarLink,
  LanguageButton,
  TextLanguage,
} from "./SidebarElements";
import { MdLanguage } from "react-icons/md";

const Sidebar = ({ isOpen, toggle, toggleLanguage, locale, content }) => {
  const { rtl, links, loginbutton } = content;

  const renderSideBarLinks = links.map((navItem, index) => {
    return (
      <React.Fragment key={index}>
        <SidebarLink
          to={navItem.to}
          onClick={toggle}
          rtl={Boolean(rtl) ? true : false}
        >
          {navItem.content}
        </SidebarLink>
      </React.Fragment>
    );
  });

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {renderSideBarLinks}
          <LanguageButton onClick={toggleLanguage}>
            <MdLanguage />
            <TextLanguage>{locale}</TextLanguage>
          </LanguageButton>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to={"/" + locale + "/signin"}>
            {loginbutton}
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
