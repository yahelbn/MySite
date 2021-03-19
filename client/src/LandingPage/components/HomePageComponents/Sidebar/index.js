import React, { useState, useContext, useEffect } from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarMenu,
  SidebarWrapper,
  SidebarLink,
  LanguageButton,
  TextLanguage,
  MiniSideBarContainer,
  SidebarMiniLink,
  RowBttns,
} from "./SidebarElements";
import { MdLanguage } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";

const Sidebar = ({ isOpen, toggle, toggleLanguage, locale, content }) => {
  const history = useHistory();

  const { rtl, links, loginbutton, logoutbutton, goToApp } = content;
  const [toggleDropDown, setToggleDropDown] = useState(false);

  useEffect(() => {}, []);

  const renderSideBarLinks = links.map((navItem, index) => {
    if (index === 0) {
      const renderMiniSideBarLinks = navItem.dropdown.map((link) => {
        return (
          <SidebarMiniLink
            to={link.to}
            onClick={toggle}
            rtl={Boolean(rtl) ? true : false}
          >
            {link.content}
          </SidebarMiniLink>
        );
      });

      return (
        <React.Fragment key={index}>
          <SidebarLink
            onClick={({ toggle }, () => setToggleDropDown(!toggleDropDown))}
            rtl={Boolean(rtl) ? true : false}
          >
            {navItem.content}
            {toggleDropDown ? <RiArrowUpSLine /> : <MdKeyboardArrowDown />}
          </SidebarLink>
          {toggleDropDown && (
            <MiniSideBarContainer toggleDropDown={toggleDropDown}>
              {renderMiniSideBarLinks}
            </MiniSideBarContainer>
          )}
        </React.Fragment>
      );
    } else {
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
    }
  });

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu toggleDropDown={toggleDropDown}>
          {renderSideBarLinks}
          <LanguageButton onClick={toggleLanguage}>
            <MdLanguage />
            <TextLanguage>{locale}</TextLanguage>
          </LanguageButton>
        </SidebarMenu>
        <RowBttns></RowBttns>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
