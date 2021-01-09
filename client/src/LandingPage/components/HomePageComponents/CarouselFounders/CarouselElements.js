import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const CarouselFoundersContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #dcd6c6;
  position: relative;
`;

export const CarouselFoundersWrapper = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  // background-color: red;
  //justify-content: center;
  width: 60%;
  height: 600px;
  @media screen and (max-width: 1200px) {
    align-items: flex-end;
  }
`;

export const CarouselH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 30px;
  direction: ${({ rtl }) => (rtl ? `rtl` : `ltr`)};

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Card = styled.div`
  height: 400px;
  width: 400px;
  padding-top: 80px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  color: #fff;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 10px;
  padding-bottom: 30px;

  @media screen and (max-width: 600px) {
    height: 220px;
    width: 220px;
    padding-bottom: 60px;
  }
`;

export const ArrowLeft = styled(MdKeyboardArrowLeft)`
  height: 30px;
  width: 30px;
  cursor: pointer;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  height: 30px;
  width: 30px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 160px;
  height: 196px;
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 10px 40px 0 rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 600px) {
    height: 100px;
    width: 80px;
  }
`;

export const HeaderCard = styled.h1`
  color: black;
  margin-top: 10px;
  font-size: 15px;
  font-family: "Montserrat", sans-serif;
  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const SubTitle = styled.h1`
  color: black;
  margin-top: 10px;
  font-size: 10px;
  font-family: "Montserrat", sans-serif;
  @media screen and (max-width: 600px) {
    font-size: 8px;
  }
`;

export const Content = styled.h1`
  text-transform: capitalize;
  width: 65%;
  color: gray;
  margin-top: 10px;
  font-size: 10px;
  font-family: "Montserrat", sans-serif;
  direction: ${({ rtl }) => (rtl ? `rtl` : `ltr`)};

  @media screen and (max-width: 600px) {
    font-size: 8px;
  }
`;
