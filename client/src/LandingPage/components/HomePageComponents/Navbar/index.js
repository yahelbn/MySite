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
  LinksDrop,
  DropdownNew,
} from "./NavbarElements";

import { Button } from "styled-button-component";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownDivider,
} from "styled-dropdown-component";
const Navbar = ({ toggle, toggleLanguage, locale, content }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [hidden, setHidden] = useState(true);

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
                {/* <DropdownItem>
                  <LinksDrop to="whoweare">מי אנחנו</LinksDrop>
                </DropdownItem>
                <DropdownItem>
                  <LinksDrop to="whoweare">טגנולוגיה</LinksDrop>
                </DropdownItem> */}
                {/* <DropdownDivider /> */}
                {/* <DropdownItem>
                  <LinksDrop to="whoweare">צוות</LinksDrop>
                </DropdownItem> */}
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

// const [hidden, setHidden] = useState(true);

// import { Button } from "styled-button-component";
// import {
//   Dropdown,
//   DropdownItem,
//   DropdownMenu,
//   DropdownDivider,
// } from "styled-dropdown-component";

{
  /* <Dropdown>
<Button
  style={{ background: "blue" }}
  dropdownToggle
  onClick={() => setHidden(!hidden)}
>
  Dropdown Button
</Button>
<DropdownMenu hidden={hidden} toggle={() => setHidden(!hidden)}>
  <DropdownItem>Action</DropdownItem>
  <DropdownItem>Another action</DropdownItem>
  <DropdownDivider />
  <DropdownItem>Action after divider</DropdownItem>
</DropdownMenu>
</Dropdown> */
}
