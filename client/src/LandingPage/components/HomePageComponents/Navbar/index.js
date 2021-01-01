import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { MdLanguage } from "react-icons/md";

import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  NavBtn,
  LanguageButton,
  TextLanguage,
} from "./NavbarElements";
const Navbar = ({ toggle, toggleLanguage, locale, content }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const { rtl, links, loginbutton } = content;

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const renderNavBarLinks = links.map((navItem, index) => {
    return (
      <React.Fragment key={index}>
        <NavItem>
          <NavLinks
            rtl={Boolean(rtl) ? true : false}
            to={navItem.to}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            {navItem.content}
          </NavLinks>
        </NavItem>
      </React.Fragment>
    );
  });

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              ContoTeq
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu rtl={Boolean(rtl) ? true : false}>
              {renderNavBarLinks}

              <NavItem>
                <LanguageButton onClick={toggleLanguage}>
                  <MdLanguage />
                  <TextLanguage>{locale}</TextLanguage>
                </LanguageButton>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to={"/" + locale + "/signin"}>
                {loginbutton}
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
