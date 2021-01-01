import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //z-index: 1;
  width: 100%;
  text-align: center;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  margin-top: 10px;
`;

export const IconContainer = styled.div`
  margin-top: 10px;

  display: block;
  margin-left: ${({ sideleft }) => (sideleft ? "0px" : "0px")};
  margin-right: ${({ sideleft }) => (sideleft ? "0px" : "10px")};

  top: 0;
  right: 0;
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;
`;
