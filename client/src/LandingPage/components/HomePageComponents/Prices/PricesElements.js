import styled from "styled-components";

export const PricesContainer = styled.div`
  height: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 915px) {
    height: 1500px;
  }

  @media screen and (max-width: 768px) {
    height: 1900px;
  }

  /* @media screen and (max-width: 480px) {
    height: 1100px;
  } */
`;

export const PricesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  direction: ${({ rtl }) => (rtl ? `rtl` : `ltr`)};
  /* @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  } */

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const PricesCard = styled.div`
  background: linear-gradient(
    25deg,
    rgba(220, 217, 198, 1) 18%,
    rgba(242, 244, 242, 1) 91%
  );

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 600px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  direction: ${({ rtl }) => (rtl ? `rtl` : `ltr`)};

  @media screen and (max-width: 915px) {
    height: 520px;
  }

  @media screen and (max-width: 768px) {
    height: 470px;
    width: 260px;
  }

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const PricesH1 = styled.h1`
  font-size: 2.5rem;
  color: black;
  margin-bottom: 64px;
  direction: ${({ rtl }) => (rtl ? `rtl` : `ltr`)};

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const PricesH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: ${({ greymode }) => (greymode ? `grey` : `black`)};

  @media screen and (max-width: 915px) {
    font-size: 1rem;
  }
`;

export const PricesH3 = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: grey;
  @media screen and (max-width: 915px) {
    font-size: 1rem;
  }
`;

export const PricesP = styled.p`
  font-size: 0.8rem;
  text-align: center;
  color: grey;
`;

export const TabButtonContainer = styled.div`
  width: 70%;
  padding: 10px;
  //background: linear-gradient(to right, #dcd9c6 50%, white 50%);
  background: #dcd9c6;
  margin-bottom: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  &.active {
    border-bottom: 3px solid pink;
  }
`;

export const Tab = styled.div`
  color: ${({ choseLeftTab }) => (choseLeftTab ? "grey" : `black`)};
  font-weight: ${({ choseLeftTab }) => (choseLeftTab ? "normal" : `bold`)};
  width: 50%;
  justify-content: center;
  display: flex;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid pink;
  }

  &:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
  }
`;

export const VerticalLine = styled.div`
  border-left: 1px solid gray;
  height: 100%;
`;

export const PriceNumber = styled.h1`
  margin-bottom: 10px;
  font-weight: bold;
  color: ${({ greymode }) => (greymode ? `grey` : `black`)};
  @media screen and (max-width: 915px) {
    font-size: 1.4rem;
  }
`;

export const ServicesIcon = styled.img`
  height: 100px;
  width: 100px;
  margin-bottom: 10px;
`;

export const IncludedContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowIncluded = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContentOfInclude = styled.div`
  padding-bottom: 2px;
  margin-left: 4px;
  margin-right: 4px;
  color: ${({ greymode }) => (greymode ? `grey` : `black`)};
`;
