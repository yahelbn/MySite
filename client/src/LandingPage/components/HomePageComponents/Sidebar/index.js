import React, { useState } from "react";
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
  MiniSideBarContainer,
  SidebarMiniLink,
} from "./SidebarElements";
import { MdLanguage } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";

const Sidebar = ({ isOpen, toggle, toggleLanguage, locale, content }) => {
  const { rtl, links, loginbutton } = content;
  const [toggleDropDown, setToggleDropDown] = useState(false);

  console.log(toggleDropDown);
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
