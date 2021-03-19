import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const CarouselFoundersContainer = styled.div`
  height: 1000px;
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
  width: 70%;
  height: 600px;
  @media screen and (max-width: 1200px) {
    align-items: flex-end;
  }
`;

export const CarouselH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 100px;
  top: 0;
  position: absolute;
  direction: ${({ rtl }) => (rtl ? `rtl` : `ltr`)};

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Card = styled.div`
  height: 400px;
  width: 620px;
  // padding-top: 0;
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
    height: 620px;
    width: 300px;
    padding-bottom: 60px;
    padding-right: 3px;
  }
`;

export const ArrowLeft = styled(MdKeyboardArrowLeft)`
  height: 30px;
  width: 30px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    margin-top: 20px;
    position: absolute;
  }
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  height: 30px;
  width: 30px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    margin-top: 20px;
    position: absolute;
  }
`;

export const Img = styled.img`
  width: 160px;
  height: 196px;
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 10px 40px 0 rgba(0, 0, 0, 0.5);
  margin-left: 0 15px;

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
  width: 60%;
  color: gray;
  margin-top: 10px;
  font-size: 10px;
  font-family: "Montserrat", sans-serif;
  direction: ${({ rtl }) => (rtl ? `rtl` : `ltr`)};

  @media screen and (max-width: 600px) {
    font-size: 8px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin-top: 20px;
`;

export const SocialIconLink = styled.a`
  color: gray;
  font-size: 24px;
  margin-top: 10px;
`;

export const LangIcons = styled.img`
  height: 40px;
  width: 40px;
  margin-bottom: 10px;
  @media screen and (max-width: 1128px) {
    height: 20px;
    width: 20px;
  }

  @media screen and (max-width: 490px) {
    height: 22px;
    width: 22px;
  }
`;

export const SpanText = styled.span`
  direction: ${({ rtl }) => (rtl ? `rtl` : `ltr`)};

  @media screen and (max-width: 550px) {
    font-size: 11px;
  }
`;

export const SpanContainer = styled.div`
  direction: ${({ rtl }) => (rtl ? `rtl` : `ltr`)};
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  margin-bottom: 100px;
`;
