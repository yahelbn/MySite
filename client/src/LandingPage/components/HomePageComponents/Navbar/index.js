import React, { useState, useEffect, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { MdLanguage } from "react-icons/md";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { FaBusinessTime } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  LanguageButton,
  TextLanguage,
  LinksDrop,
  DropdownNew,
} from "./NavbarElements";

import { Button } from "styled-button-component";
import { DropdownItem, DropdownMenu } from "styled-dropdown-component";
import { useHistory } from "react-router-dom";

const Navbar = ({ toggle, toggleLanguage, locale, content }) => {
  const history = useHistory();

  const [scrollNav, setScrollNav] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [userName, setuserName] = useState("");

  const { rtl, links, loginbutton, goToApp, logoutbutton } = content;

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
    if (index === 0) {
      const renderDropDownItems = navItem.dropdown.map((link, index) => {
        return (
          <React.Fragment key={index}>
            <DropdownItem>
              <LinksDrop
                to={link.to}
                smooth={"true"}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                {link.content}
              </LinksDrop>
            </DropdownItem>
          </React.Fragment>
        );
      });

      return (
        <React.Fragment key={index}>
          <NavItem>
            <DropdownNew rtl={rtl}>
              <Button
                activeClass="active"
                style={{
                  backgroundColor: "transparent",
                  letterSpacing: "0.04em",
                  border: "0px",
                }}
                dropdownToggle
                onClick={() => setHidden(!hidden)}
              >
                {navItem.content + "  "}
              </Button>
              <DropdownMenu
                style={{ direction: "rtl" }}
                hidden={hidden}
                toggle={() => setHidden(!hidden)}
              >
                {renderDropDownItems}
              </DropdownMenu>
            </DropdownNew>
          </NavItem>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment key={index}>
          <NavItem>
            <NavLinks
              rtl={Boolean(rtl) ? true : false}
              to={navItem.to}
              smooth={"true"}
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
    }
  });

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Yahel Barnoam
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
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
