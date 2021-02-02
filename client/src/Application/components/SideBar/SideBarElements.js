import styled from "styled-components";

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.h3`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const SubHeader = styled.h4`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const RowSwitch = styled.div`
  flex-direction: ${({ rtl }) => (rtl ? "row-reverse" : "row")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const textSwitch = styled.div`
  /* margin-right: 20px;
  margin-left: 20px; */
`;

export const SideBarContainer = styled.div`
  height: 100vh;
`;
