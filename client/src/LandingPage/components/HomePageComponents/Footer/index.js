import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinkWrapper,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialLogo,
  WebsiteRights,
  SocialMediaWrap,
  SocialIconLink,
  SocialIcons,
} from "./FooterElements";

//Import Modal

import "../../DiffrentModals/Modal/Modal.css";
import Modal from "../../DiffrentModals/Modal/Modal";
import useModal from "../../DiffrentModals/Modal/useModal";
import ModalContactUs from "../../DiffrentModals/ModalContactUs/index";

const Footer = ({ content, locale }) => {
  const { isShowing, toggle } = useModal();
  const [contentOfModal, setContentOfModal] = useState("");

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  useEffect(() => {});

  const renderFooterLinks = content.map((footerCol, index) => {
    return (
      <React.Fragment key={index}>
        <FooterLinkItems>
          {footerCol.map((footerLink, index) => {
            if (index === 0) {
              return (
                <React.Fragment key={index}>
                  <FooterLinkTitle to="/signin">
                    {footerLink.name}
                  </FooterLinkTitle>
                </React.Fragment>
              );
            }
            return (
              <React.Fragment key={index}>
                <FooterLink to={`/${locale}/${footerLink.link}`}>
                  {footerLink.name}
                </FooterLink>
              </React.Fragment>
            );
          })}
        </FooterLinkItems>
      </React.Fragment>
    );
  });
  return (
    <FooterContainer>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        modalcomp={
          <Modal
            modalContent={contentOfModal}
            // company={choseCompany}
            //locale={props.locale}
          />
        }
      />
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinkWrapper>{renderFooterLinks}</FooterLinkWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              ContoTeq
            </SocialLogo>
            <WebsiteRights>
              ContoTeq © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
