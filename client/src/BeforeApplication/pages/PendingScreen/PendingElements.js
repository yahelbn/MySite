import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 1000px;
  //position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    rgba(220, 217, 198, 1) 22%,
    rgba(181, 193, 180, 1) 100%
  );
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #1b1924;
  align-items: center;

  max-width: 770px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};
  @media screen and(max-width:600px) {
    padding: 32px 32px;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 1085px) {
    padding-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and(max-width:480px) {
    padding: 10px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormButton = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  background: #dcd9c6;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: black;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.p`
  padding-left: 4px;
  padding-right: 4px;

  text-align: center;
  margin-top: 24px;
  color: white;
  font-size: 15px;
`;

export var RowDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100%;
  border-radius: 20px;

  @media screen and (max-width: 550px) {
    height: 110%;
  }
`;

export const ImgWrap = styled.div`
  max-width: 280px;
  height: 100%;
  margin-bottom: 35px;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
