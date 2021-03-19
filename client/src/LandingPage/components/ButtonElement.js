import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const Button = styled(LinkS)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#5CDB95" : "#a33327")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#1b1924")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "white" : "white")};
  }
`;

export const ButtonRouter = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#5CDB95" : "#a33327")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#1b1924")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: tan;
    box-shadow: 0px 15px 20px #d2b48c;
    color: #fff;
    transform: translateY(-7px);
  }
`;
