import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  //min-height: 692px;
  //position: fixed;
  height: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  //background: no-repeat center center fixed;
  /* background-image: linear-gradient(
      90deg,
      rgba(220, 217, 198, 0.7) 22%,
      rgba(181, 193, 180, 0.5) 100%
    ),
    url("../../images/survey.svg"); */
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FormWrap = styled.div`
  height: 95.5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #1b1924;
  max-width: 700px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};
  @media screen and (max-width: 400px) {
    /* padding: 32px 32px;
    width: 80%;
    margin-left: 1px; */
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

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
  align-items: center;
  @media screen and(max-width:480px) {
    padding: 10px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  color: ${({ dark }) => (dark ? "black" : "white")};
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  width: 70%;

  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

export const FormButton = styled.button`
  background: #74593d;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  width: 30%;
  cursor: pointer;
  width: fit-content;
  padding: 2px 10px;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export const TextHeader = styled.span`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 40px;
  color: #fff;
  font-size: 14px;
`;

export const CompaniesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 700px;
  height: auto;
  margin: 0 auto;
  margin-top: 30px;
`;

export var RowDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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

export const CompanyRow = styled.div`
  margin-top: 20px;
  border-radius: 20px;
  width: 100%;
  background-color: #dcd9c6;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
