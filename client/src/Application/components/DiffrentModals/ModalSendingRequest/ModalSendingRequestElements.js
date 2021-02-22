import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormButton = styled.button`
  height: fit-content;
  margin-top: 20px;
  margin-bottom: 20px;
  background: #dcd9c6;
  padding: 11px 12px;
  border: none;
  border-radius: 4px;
  color: black;
  font-size: 20px;
  cursor: pointer;
`;

export const Paragraph = styled.p``;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  margin-bottom: 50px;
  direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};
`;

export const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImgWrap = styled.div`
  max-width: 280px;
  height: 60%;
  margin-bottom: 35px;
  margin-left: 15px;
`;

export const Img = styled.img`
  width: 70%;
  // margin: 0 0 10px 0;
  padding-right: 0;
`;
