import React, { useState, useEffect } from "react";
import {
  FormWrap,
  FormContent,
  FormH1,
  FormInput,
  FormButton,
  Icon,
  Form,
  Container,
  IconExit,
  RowHead,
  AlertText,
} from "./GalleryElements.js";
// import Loader from "react-loader-spinner";
import Gallery from "react-grid-gallery";
import { relative } from "path";

const GalleryComp = (props) => {
  // const content = props.dataLanguages.forgotPassword;
  const [width, setWidth] = useState(window.innerWidth);

  const { locale } = props;

  const Images = [];
  props.images.map((image) => {
    Images.push({
      src: image,
      thumbnail: image,
      thumbnailWidth: width > 600 ? 25 : 10,
      thumbnailHeight: width > 600 ? 25 : 10,
      caption: "",
    });
  });

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div style={{ marginTop: "10px" }}>
      ,
      <Gallery images={Images} />
    </div>
  );
};

export default GalleryComp;
