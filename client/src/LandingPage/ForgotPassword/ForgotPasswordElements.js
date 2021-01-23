import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
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

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #1b1924;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};
  @media screen and(max-width:400px) {
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

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const IconExit = styled(Link)`
  margin-right: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  transition: width 1s, height 1s, transform 0.7s;

  &:hover {
    //  width: 20px;
    //height: 20px;
    color: #ff6347;
    transform: rotate(-90deg);
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

export const FormInputPassword = styled.input`
  padding: 16px 16px;
  margin-bottom: 1px;
  border: none;
  border-radius: 4px;
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

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export const RowHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LinkForgotPassword = styled(Link)`
  text-align: ${({ rtl }) => (rtl ? "right" : "left")};
  margin-top: 10px;
  color: #fff;
  font-size: 14px;
  margin-bottom: 33px;
`;

export const AlertText = styled.span`
  direction: ltr;
  text-align: center;
  margin-top: 24px;
  color: ${({ error }) => (error ? "brown" : "#1d5630")};
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${({ error }) => (error ? "#f8d7da" : "#d3ebdb")};
  border: 0.5px solid ${({ error }) => (error ? "#f08080" : "#008080")};
  border-radius: 8px;
`;
