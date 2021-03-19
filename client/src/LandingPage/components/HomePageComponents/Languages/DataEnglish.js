//InfoSection Images
import codeman from "../../../images/codeman.svg";
import checklistpayment from "../../../images/checklistpayment.svg";
import peoplewithcard from "../../../images/peoplewithcard.svg";

//Cards Images
import yahelphoto from "../../../images/yahelphoto.jpeg";

//Icons Services
import Icon1 from "../../../images/survey.svg";
import Icon2 from "../../../images/preferences.svg";

//Svg Advantages
import reacticon from "../../../images/svgs/react.svg";
import nodejsicon from "../../../images/svgs/nodejs.svg";
import htmlicon from "../../../images/svgs/html.svg";
import cssicon from "../../../images/svgs/css.svg";
import javascripticon from "../../../images/svgs/javascript.svg";
import pythonicon from "../../../images/svgs/python.svg";
import javaicon from "../../../images/svgs/java.svg";
import cicon from "../../../images/svgs/c.svg";
import mysqlicon from "../../../images/svgs/mysql.svg";
import androidstudioicon from "../../../images/svgs/androidstudio.svg";
import awsicon from "../../../images/svgs/aws.svg";
import firebase from "../../../images/svgs/firebase.svg";
import quiz from "../../../images/quiz.svg";

//images to gallery of projects

import d1 from "../../../images/Imagesapplications/ditapp/dit1.png";
import d2 from "../../../images/Imagesapplications/ditapp/dit2.png";
import d3 from "../../../images/Imagesapplications/ditapp/dit3.png";

import inst1 from "../../../images/Imagesapplications/insta/inst1.png";
import inst2 from "../../../images/Imagesapplications/insta/inst2.png";
import inst3 from "../../../images/Imagesapplications/insta/inst3.png";
import inst4 from "../../../images/Imagesapplications/insta/inst4.png";
import inst5 from "../../../images/Imagesapplications/insta/inst5.png";

import p1 from "../../../images/Imagesapplications/package/p1.png";
import p2 from "../../../images/Imagesapplications/package/p2.png";
import p3 from "../../../images/Imagesapplications/package/p3.png";
import p4 from "../../../images/Imagesapplications/package/p4.png";
import p5 from "../../../images/Imagesapplications/package/p5.png";
import p6 from "../../../images/Imagesapplications/package/p6.png";
import p7 from "../../../images/Imagesapplications/package/p7.png";
import p8 from "../../../images/Imagesapplications/package/p8.png";

import reduxreact1 from "../../../images/Imagesapplications/reduxandreact/reduxreact1.png";
import reduxreact2 from "../../../images/Imagesapplications/reduxandreact/reduxreact2.png";
import reduxreact3 from "../../../images/Imagesapplications/reduxandreact/reduxreact3.png";

import shen1 from "../../../images/Imagesapplications/shenzen/shen1.png";
import shen2 from "../../../images/Imagesapplications/shenzen/shen2.png";
import shen3 from "../../../images/Imagesapplications/shenzen/shen3.png";
import shen4 from "../../../images/Imagesapplications/shenzen/shen4.png";
import shen5 from "../../../images/Imagesapplications/shenzen/shen5.png";

import shop1 from "../../../images/Imagesapplications/Shop/shop1.png";
import shop2 from "../../../images/Imagesapplications/Shop/shop2.png";
import shop3 from "../../../images/Imagesapplications/Shop/shop3.png";
import shop4 from "../../../images/Imagesapplications/Shop/shop4.png";
import shop5 from "../../../images/Imagesapplications/Shop/shop5.png";
import shop6 from "../../../images/Imagesapplications/Shop/shop6.png";
import shop7 from "../../../images/Imagesapplications/Shop/shop7.png";
// import shop8 from "../../../images/Imagesapplications/Shop/shop8.png";

import space1 from "../../../images/Imagesapplications/spacegame/space1.png";
import space2 from "../../../images/Imagesapplications/spacegame/space2.png";
import space3 from "../../../images/Imagesapplications/spacegame/space3.png";
import space4 from "../../../images/Imagesapplications/spacegame/space4.png";
import space5 from "../../../images/Imagesapplications/spacegame/space5.png";
import space6 from "../../../images/Imagesapplications/spacegame/space6.png";
import space7 from "../../../images/Imagesapplications/spacegame/space7.png";

export const DataEnglish = {
  homeObjOne: {
    id: "probackground",
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: "So...",
    description:
      "Right now I have one last semester left for a degree in software engineering, I am studying independent online enrichment courses, in addition to offering private lessons and small projects for companies. I specialize in mobile and web development. User interface development for me is beyond the profession The artistic and creative side of me. ",
    buttonLabel: "Start",
    imgStart: false,
    img: codeman,
    circleimg: false,
    alt: "Car",
    dark: true,
    primary: true,
    darkText: true,
    rtl: false,
    routerlink: true,
  },

  homeObjTwo: {
    id: "whoiam",
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: "A little beyond ...",
    headLine: "Who am I?",
    description:
      "I, Yahel Barnoam, grew up in Moshav Neve Yarak in the center of the country, very fond of music, playing, surfing and traveling in Israel and around the world. Eldest brother to 5 brothers. I served in the army in combat engineering. Then I decided to start studying software engineering at Afeka College. ",
    buttonLabel: "Start",
    imgStart: true,
    img: yahelphoto,
    circleimg: true,

    alt: "Car",
    dark: true,
    primary: true,
    darkText: true,
    rtl: false,
    routerlink: true,
  },

  homeObjFour: {
    id: "privatelessons",
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: "Need help with lessons?",
    headLine: "private lessons",
    description:
      "From basic languages ​​(Java, C, Python) to more advanced languages ​​and libraries (Javascript, CSS, Html, Android studio, Reactjs) and more. During the lesson I will focus on and analyze the root of the problem, Your chances of success. Favorable prices! You can meet frontally / zoom, according to your personal preference.",
    buttonLabel: "התחל עכשיו",
    imgStart: true,
    img: quiz,
    alt: "Car",
    dark: false,
    primary: true,
    darkText: false,
    rtl: false,
    routerlink: true,
  },

  navBar: {
    rtl: false,
    links: [
      {
        content: "Professional",
        dropdown: [
          { content: "Background", to: "probackground" },
          { content: "Languages ​​/ Technologies", to: "technologylanguage" },

          { content: "Projects", to: "myprojects" },
        ],
      },
      { content: "Who am I?", to: "whoiam" },
      { content: "Private lessons", to: "privatelessons" },
      { content: "Web Development", to: "webdev" },
    ],
  },

  heroSection: {
    heroh1: "Welcome to my site",
    herop: "Hear a little about me",
    button: "Start",
  },
  contactus: {
    rtl: false,
    formh1: " Contact Us",
    formlabel1: "Full name",
    forminput1: "text",
    formlabel2: "E-mail",
    forminput2: "email",
    formlabel3: "Telephone",
    forminput3: "text",
    formbutton: "Send",
    text: "For any question you can contact",
    email: "yahelbn3123@gmail.com",

    text2:
      "Thank you for your interest, <br> Please leave details and contact us soon:",
  },

  advantages: {
    header: {
      content: "The main languages ​​and technologies",
      rtl: false,
    },

    cards: [
      {
        rtl: false,
        icon: reacticon,
        servicesh2: "React Js",
      },

      {
        rtl: false,
        icon: nodejsicon,
        servicesh2: "Node Js",
      },
      {
        rtl: false,
        icon: htmlicon,
        servicesh2: "Html",
      },
      {
        rtl: false,
        icon: cssicon,
        servicesh2: "Css",
      },
      {
        rtl: false,
        icon: javascripticon,
        servicesh2: "Java Script",
      },
      {
        rtl: false,
        icon: pythonicon,
        servicesh2: "Python",
      },
      {
        rtl: false,
        icon: javaicon,
        servicesh2: "Java",
      },
      {
        rtl: false,
        icon: cicon,
        servicesh2: "C",
      },
      {
        rtl: false,
        icon: firebase,
        servicesh2: "Firebase",
      },
      {
        rtl: false,
        icon: awsicon,
        servicesh2: "AWS",
      },
      {
        rtl: false,
        icon: androidstudioicon,
        servicesh2: "Android Studio",
      },
      {
        rtl: false,
        icon: mysqlicon,
        servicesh2: "SQL",
      },
    ],
  },

  whoweare: {
    header: {
      content: "My projects",
      rtl: false,
      text1:
        "There are several other projects that exist on Github and on the computer that have not been shown.",
      text2: `Some of the details presented above are hidden due to customer privacy concerns`,
    },

    cards: [
      {
        headercard: `Web Application -"Communicato" `,
        subtitle: "Supplier contact app between customers and customers",
        content:
          "This app was developed using client-side libraries -ReactJs server-side -NodeJs. Authentication and database management using AWS services. Developed for Shen-Zen.",
        languagesicons: [reacticon, awsicon, nodejsicon, cssicon, htmlicon],
        gitlink: "/",
        rtl: false,
        images: [shen1, shen2, shen3, shen4],
      },
      {
        headercard: `Mobile Application- "PackageCenter"`,
        subtitle: "A mission tracking app and couriers in the company",
        content:
          "The Android-based mobile app aims to track couriers by scanning a barcode that appears on the package, which during the scan will store relevant information about the package collection, in addition, tasks can be given to couriers through the app and they can view them.",
        languagesicons: [firebase, androidstudioicon, javaicon],
        gitlink:
          "https://github.com/yahelbn/PackageCenter-Android-Application-java-",
        rtl: false,
        images: [p1, p2, p3, p4],
      },
      {
        headercard: `Mobile Application- "Shopy"`,
        subtitle: "A store app with an emphasis on design",
        content:
          "The store app, which takes the store data from Api shows the products and sorts when needed according to the customer's classification, the app was created for the benefit of design and development practice in React native which is very similar to React.",
        languagesicons: [reacticon, htmlicon, cssicon],
        gitlink: "https://github.com/yahelbn/ShopApp/tree/yahel",
        rtl: false,
        images: [shop1, shop2, shop3, shop4],
      },
      {
        headercard: `Mobile Game- "Galaxy Guard"`,
        subtitle: "Game -space in space",
        content:
          "A game I developed as part of an application development course during the degree, during which you can choose to play with difficulty levels: easy or hard and you can play using a displacement sensor of the cellphone and the spacecraft moves accordingly. It will reach the results screen and the results will appear according to the players' rank and position. ",
        languagesicons: [reacticon, htmlicon, cssicon],
        gitlink:
          "https://github.com/yahelbn/GalaxyGuard-Application-Android-game-java-",
        rtl: false,
        images: [space1, space2, space3, space4],
      },

      {
        headercard: `CRUD -Location and Categories"`,
        subtitle: "Category management app by location",
        content:
          "The user will be presented with two screens that he can switch between at any time, the categories screen - which handles viewing, adding, deleting and editing categories to the list. That he could select the address on it by clicking. ",
        languagesicons: [reacticon, htmlicon, cssicon],
        gitlink: "https://github.com/yahelbn/ReactReduxCRUD/tree/yahel",
        rtl: false,
        images: [reduxreact1, reduxreact2, reduxreact3],
      },
      {
        headercard: `Insta Image"`,
        subtitle: "Photo management and sharing app",
        content:
          "The user can upload photos from his gallery and in addition to taking photos through the app, the apps will be shared with all users of the system, by clicking on a photo you can view comments and comment.",
        languagesicons: [firebase, androidstudioicon, javaicon],
        // gitlink: "https://github.com/yahelbn/ReactReduxCRUD/tree/yahel",
        rtl: false,
        images: [inst1, inst2, inst3, inst4],
      },
    ],
  },

  footer: [[{ name: "More info" }, { name: "Contact Us", link: "contactus" }]],
};
