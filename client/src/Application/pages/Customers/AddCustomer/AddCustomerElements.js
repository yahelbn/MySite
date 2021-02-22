import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  /* min-height: 692px; */
  height: 100%;
  //position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  /* background-image: linear-gradient(
      90deg,
      rgba(220, 217, 198, 0.7) 22%,
      rgba(181, 193, 180, 0.5) 100%
    ),
    url("../../images/survey.svg"); */
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
`;

export const FormWrap = styled.div`
  height: 95.5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  overflow-y: auto;

  background: #1b1924;
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
  @media screen and (max-width: 600px) {
    padding: 32px 32px;
    /* width: 80%;
    margin-left: 10px;
    margin-top: 20px; */
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
  margin-bottom: 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormH2 = styled.h2`
  margin-top: 20px;
  margin-bottom: 20px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormSelect = styled.select`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const FormButton = styled.button`
  background: #74593d;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const AddButton = styled.button`
  margin-bottom: 10px;
  height: fit-content;
  width: 30%;
  background: #dcd9c6;
  padding: 8px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1b1924;
  margin-bottom: 30px;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 15px;
  color: #fff;
  font-size: 14px;
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

export var RowDivPoc = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

export var RowDivAddress = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
