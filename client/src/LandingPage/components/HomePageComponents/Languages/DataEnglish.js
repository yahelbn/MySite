//InfoSection Images
import smartransaction from "../../../images/smartransaction.svg";
import checklistpayment from "../../../images/checklistpayment.svg";
import peoplewithcard from "../../../images/peoplewithcard.svg";

//Cards Images
import yahelphoto from "../../../images/yahelphoto.jpeg";

//Icons Services
import Icon1 from "../../../images/survey.svg";
import Icon2 from "../../../images/preferences.svg";

//Svg Advantages
import Thunder from "../../../images/svgs/thunder.svg";
import ConnectionPeople from "../../../images/svgs/connection.svg";
import Web from "../../../images/svgs/web.svg";
import Interactive from "../../../images/svgs/interactive.svg";
import Payday from "../../../images/svgs/payday.svg";
import Synchronize from "../../../images/svgs/synchronize.svg";
import Clock from "../../../images/svgs/clock.svg";
import Customerservice from "../../../images/svgs/customerservice.svg";

export const DataEnglish = {
  homeObjOne: {
    id: "whycontoteq",
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: "Why Contoteq?",
    headLine: "Simplify the process of accounting between businesses",
    description:
      "Contoteq is a fintech platform established to streamline business processes between suppliers and customers from end to end. In the first place we bring a complete, automatic and simple solution to all payment and collection processes - AR In the future we will allow additional process management between suppliers and customers. The company was established by entrepreneurs with many years of experience in the world of small and medium businesses, fintech and online systems and finance.",
    buttonLabel: "Start Now",
    imgStart: false,
    img: smartransaction,
    alt: "Car",
    dark: true,
    primary: true,
    darkText: true,
    rtl: false,
    routerlink: false,
  },

  homeObjTwo: {
    id: "howitworks",
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: "How It Works?",
    headLine: "Interfaces in a simple way",
    description:
      "<br> The ContoTeq system operates as a SAAS online service and allows access to the process for both suppliers and customers. It is built on a number of main principles:</br> <br> 1. Maintaining full online real-time contact between the supplier and the customer at all stages of the process. </br> <br> 2. Full tracking of transaction and payment history, based on blockchain ledger, which allows reliable and secure tracking of every transaction performed.</br> <br> 3. Integrates advanced fintech technologies including NLP and OCR systems.</br>",
    buttonLabel: "Start Now",
    imgStart: true,
    img: checklistpayment,
    alt: "Car",
    dark: false,
    primary: false,
    darkText: false,
    rtl: false,
    routerlink: false,
  },

  homeObjThree: {
    id: "prices",
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: "Prices?",
    headLine: "Free use of the system",
    description:
      "At this point the use of the system will be done without charge",
    buttonLabel: "Start Now",
    imgStart: false,
    img: peoplewithcard,
    alt: "Car",
    dark: true,
    primary: true,
    darkText: true,
    rtl: false,
    routerlink: false,
  },

  homeObjFour: {
    id: "signup",
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: "Sign up",
    headLine: "Sign up now for free",
    description:
      "Register and experience our services in your business or as a customer.",
    buttonLabel: "Start Now",
    imgStart: true,
    img: checklistpayment,
    alt: "Car",
    dark: false,
    primary: false,
    darkText: false,
    rtl: false,
    routerlink: true,
  },
  navBar: {
    rtl: false,
    links: [
      { content: "Why ContoTeq?", to: "whycontoteq" },
      { content: "How It Works?", to: "howitworks" },
      { content: "Prices", to: "prices" },
      { content: "Sign up", to: "signup" },
    ],
    loginbutton: "Log in",
  },

  heroSection: {
    heroh1: "Transactions between businesses have become easier",
    herop: "Sign up now and use for free",
    button: "Start now",
  },
  signin: {
    rtl: false,
    formh1: "Sign in to your account",
    formlabel1: "Email",
    forminput1: "email",
    formlabel2: "Password",
    forminput2: "password",

    formbutton: "Continue",
    text: "Forgot password",
  },
  signup: {
    rtl: false,
    formh1: "Create your account",
    formlabel1: "First name",
    forminput1: "text",
    formlabel2: "Last name",
    forminput2: "text",
    formlabel3: "E-mail",
    forminput3: "email",
    formlabel4: "Password",
    forminput4: "password",
    formlabel5: "re-password",
    forminput5: "password",
    formlabel6: "Phone Number",
    forminput6: "tel",
    formlabel7: "Pid (Optional)",
    forminput7: "number",

    formbutton: "Sign up",
    //text: "שכחתי סיסמא",
  },

  initorjoin: {
    rtl: false,
    formh1: "Company",
    formlabel1: "Company name",
    forminput1: "text",
    formlabel2: "Type of company",
    forminput2: "text",
    formlabel3: "CID",
    forminput3: "number",
    formlabel4: "Address",
    forminput4: "text",
    optionsSelect: ["Type", "LTD", "עוסק פטור"],

    buttonContent1: "Create Company",
    buttonContent2: "Join Company",
    //text: "שכחתי סיסמא",
  },

  services: {
    header: {
      content: "Our services",
      rtl: false,
    },

    cards: [
      {
        rtl: false,
        icon: Icon1,
        servicesh2: "For suppliers",
        servicesp:
          "Ongoing and easy management of business work processes with customers such as demand and collection of payments.",
      },

      {
        rtl: false,
        icon: Icon2,
        servicesh2: "For customers",
        servicesp:
          "Continuous monitoring of payment requirements: receipt, approval and execution In front of a variety of suppliers.",
      },
      // {
      //   rtl: false,
      //   icon: Icon3,
      //   servicesh2:
      //     "Full automation of credit billing processes between systems and companies",
      //   servicesp:
      //     "Interface of existing systems such as: ORACLE, PRIORITY, SAP",
      // },
    ],
  },
  advantages: {
    header: {
      content: "Our benefits for your business",
      rtl: false,
    },

    cards: [
      {
        rtl: false,
        icon: Thunder,
        servicesh2: "Improving efficiency and saving time",
        servicesp:
          "Automating tedious processes that give you time to focus on your business",
      },

      {
        rtl: false,
        icon: ConnectionPeople,
        servicesh2: "Improving relationships between suppliers and customers",
        servicesp:
          "Direct, reliable, and simple communication regarding payment, collection and tracking processes.",
      },
      {
        rtl: false,
        icon: Web,
        servicesh2: "Prevention of human error",
        servicesp:
          "Instant alerts when any information appears to be incorrect that allows immediate correction before confirmation, sending or payment",
      },
      {
        rtl: false,
        icon: Interactive,
        servicesh2: "Simple end-to-end process management",
        servicesp:
          "From creating invoices, certificates, payment and issuing receipts while interacting in real time between supplier and customer. Generate historical reports in various sections within minutes",
      },
      {
        rtl: false,
        icon: Payday,
        servicesh2: "Improving and streamlining payment and collection",
        servicesp:
          "Track payments, send reminders, and the option to pay instantly online.",
      },
      {
        rtl: false,
        icon: Synchronize,
        servicesh2: "Full synchronization with money management software",
        servicesp:
          "The system is automatically synchronized with advanced accounting systems (such as Accounting, Profitable and Priority) - Future",
      },
      {
        rtl: false,
        icon: Clock,
        servicesh2: "Registration and start of work within minutes",
        servicesp:
          "The system operates online and the registration process until the start of work takes minutes",
      },
      {
        rtl: false,
        icon: Customerservice,
        servicesh2: "Need Help? Excellent customer support",
        servicesp:
          "The system provides ongoing customer support and answers to any question at the touch of a button.",
      },
    ],
  },

  whoweare: {
    header: {
      content: "Who we are?",
      rtl: false,
    },

    cards: [
      {
        img: yahelphoto,
        headercard: "Yahel Barnoam",
        subtitle: "Software Engineer",
        content:
          "Software Engineering With Specialization in Software For Mobile and Web Systems.",
        rtl: false,
      },
    ],
  },

  footer: [["About us ", "Contact", "Address", "Terms of services"]],
};
