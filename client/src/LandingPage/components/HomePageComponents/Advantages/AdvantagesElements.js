import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #dcd9c6;

  @media screen and (max-width: 1000px) {
    height: 1600px;
  }

  @media screen and (max-width: 520px) {
    height: ${({ rtl }) => (rtl ? `1600px` : "2000px")};
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  min-width: 150px;
  height: 330px;
  padding: 19px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  direction: ${({ rtl }) => (rtl ? `rtl` : `ltr`)};

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    height: 250px;
  }

  @media screen and (max-width: 618px) {
    height: 330px;
  }

  @media screen and (max-width: 520px) {
    height: ${({ rtl }) => (rtl ? `310px` : "400px")};
  }
`;

export const ServicesIcon = styled.img`
  height: 130px;
  width: 130px;
  margin-bottom: 10px;
  @media screen and (max-width: 1128px) {
    height: 110px;
    width: 110px;
  }

  @media screen and (max-width: 490px) {
    height: 90px;
    width: 90px;
  }
`;

export const ServicesH1 = styled.h1`
  text-align: center;
  font-size: 2.2rem;
  color: #fff;
  margin-bottom: 64px;
  direction: ${({ rtl }) => (rtl ? `rtl` : `ltr`)};
  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  // text-align: center;

  @media screen and (max-width: 1005px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
