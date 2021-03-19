import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { Button as ButtonComp } from "styled-button-component";
import { Dropdown } from "styled-dropdown-component";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#907163" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1800px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const RowBttns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 1040px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  flex-direction: ${({ rtl }) => (rtl ? "row-reverse" : "row")};

  margin-right: 22px;

  @media screen and (max-width: 1040px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};

  &.active {
    border-bottom: 3px solid #b5c1b4;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "0px")};

  @media screen and (max-width: 1040px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: ${({ color }) => (color ? "#F5B7B1" : "#D5F5E3")};
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const LanguageButton = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  direction: rtl;

  &.active {
    border-bottom: 3px solid #b5c1b4;
  }
`;

export const TextLanguage = styled.div`
  margin-right: 2px;
`;

export const NavButton = styled(ButtonComp)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};

  &.active {
    border-bottom: 3px solid #b5c1b4;
  }
`;

export const DropdownNew = styled(Dropdown)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};

  &.active {
    border-bottom: 3px solid #b5c1b4;
  }
`;

export const LinksDrop = styled(LinkS)`
  justify-content: center;
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};

  &.active {
    border-bottom: 3px solid #b5c1b4;
  }
`;

export const UserNameHeader = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  @media screen and (max-width: 1040px) {
    display: none;
  }
`;
