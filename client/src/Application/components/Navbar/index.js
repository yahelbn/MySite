import React from "react";
// import { FaBars } from "react-icons/fa";
// import { IconContext } from "react-icons/lib";
// import { MdLanguage } from "react-icons/md";
// import { RiAccountCircleLine } from "react-icons/ri";

import { NavbarContainer, NavLogo } from "./NavbarElements";
const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <NavLogo to="/">ContoTeq</NavLogo>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
