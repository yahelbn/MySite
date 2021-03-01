import React, { useEffect } from "react";

import {
  NavItem,
  Nav,
  NavbarContainer,
  NavMenu,
  NavBtnLink,
} from "./NavbarElements";

import { useHistory } from "react-router-dom";

const Navbar = ({ toggle, locale, content }) => {
  const history = useHistory();

  useEffect(() => {}, []);

  const renderNavBarLinks = content.links.map((navItem, index) => {
    return (
      <React.Fragment key={index}>
        <NavItem>
          <NavBtnLink
            rtl={Boolean(content.rtl) ? true : false}
            to={"/" + locale + "/contoteqapp/customersinfo" + navItem.to}
            smooth={"true"}
            duration={500}
            spy={true}
            exact="true"
            // offset={-80}
            activeClass="active"
          >
            {navItem.content}
          </NavBtnLink>
        </NavItem>
      </React.Fragment>
    );
  });

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavMenu rtl={Boolean(content.rtl) ? true : false}>
            {renderNavBarLinks}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
