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
  NavBtnLink,
  NavBtn,
  LanguageButton,
  TextLanguage,
  LinksDrop,
  DropdownNew,
  RowBttns,
  UserNameHeader,
} from "./NavbarElements";

import { Button } from "styled-button-component";
import { DropdownItem, DropdownMenu } from "styled-dropdown-component";
import { AccountContext } from "../../../../Authentication/Account";
import { useHistory } from "react-router-dom";

const Navbar = ({ toggle, toggleLanguage, locale, content }) => {
  const history = useHistory();
  const { getSession, getConnectedUser, logout } = useContext(AccountContext);
  const [authenticationStatus, setAuthenticationStatus] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [hidden, setHidden] = useState(true);

  const { rtl, links, loginbutton, goToApp, logoutbutton } = content;

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const logoutLogin = () => {
    if (authenticationStatus) {
      logout();
    } else {
      history.push(`/${locale}/signin`);
    }
  };

  useEffect(() => {
    getSession()
      .then((session) => {
        if (session) {
          setAuthenticationStatus(true);
          getConnectedUser().then((user) => {
            console.log(user);
          });
        }
      })
      .catch((e) => {});

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
            <RowBttns>
              <NavBtn onClick={logoutLogin}>
                <NavBtnLink color={authenticationStatus}>
                  {authenticationStatus ? logoutbutton : loginbutton}
                  {authenticationStatus ? (
                    <FiLogOut
                      style={{ marginLeft: "5px" }}
                      size={17}
                      color={"black"}
                    />
                  ) : (
                    <FiLogIn
                      style={{ marginLeft: "5px" }}
                      size={17}
                      color={"black"}
                    />
                  )}
                </NavBtnLink>
              </NavBtn>
              {authenticationStatus && (
                <NavBtn marginLeft={"10px"}>
                  <NavBtnLink to={"/" + locale + "/signin"}>
                    {goToApp}
                    <FaBusinessTime
                      style={{ marginLeft: "5px" }}
                      size={17}
                      color={"black"}
                    />
                  </NavBtnLink>
                </NavBtn>
              )}

              {authenticationStatus && <UserNameHeader>Yahel</UserNameHeader>}
            </RowBttns>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
