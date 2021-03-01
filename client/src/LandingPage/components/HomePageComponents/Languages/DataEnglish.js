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
    id: "whoweare",
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: "about us",
    //headLine: "Simplify the process of accounting between businesses",
    description:
      "ContoTeq is an innovative fintech platform that streamlines business processes between suppliers and customers. We bring a complete and simple solution to all payment processes and collection between supplier and customer (AR). In the future we will manage additional processes between suppliers and customers. Small and medium-sized businesses, fintech and online systems and finance. ",
    buttonLabel: "Start Now",
    imgStart: false,
    img: smartransaction,
    alt: "Car",
    dark: true,
    primary: true,
    darkText: true,
    rtl: false,
    routerlink: true,
  },

  homeObjTwo: {
    id: "technology",
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: "Technology",
    //headLine: "Interfaces in a simple way",
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
    routerlink: true,
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
    routerlink: true,
  },

  homeObjFour: {
    id: "signup",
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: "Sign up",
    headLine: "Sign up now for a free trial",
    // description:
    //   "Register and experience our services in your business or as a customer.",
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
      { content: "Why ContoTeq?", to: "advantages" },
      { content: "Our services", to: "services" },
      {
        content: "Company",
        dropdown: [
          { content: "About us", to: "whoweare" },
          { content: "Technology", to: "technology" },
          { content: "Inventors", to: "inventors" },
        ],
      },
      // { content: "Technology", to: "technology" },
      { content: "Prices", to: "prices" },
    ],
    loginbutton: "Log in",
    logoutbutton: "Log out",

    goToApp: "Go to Application",
  },

  heroSection: {
    heroh1: "Transactions between businesses have become easier",
    herop: "Feel free to try us - sign up now",
    button: "Start now",
  },
  contactus: {
    rtl: false,
    formh1: "The service will be up soon",
    formlabel1: "Full name",
    forminput1: "text",
    formlabel2: "E-mail",
    forminput2: "email",
    formlabel3: "Phone",
    forminput3: "text",
    formbutton: "Send",
    text: "For any question you can contact ",
    email: "contoteq@gmail.com",
    text2:
      "Thank you for your interest,<br> please leave details and we will contact you soon:",
  },
  signin: {
    rtl: false,
    formh1: "Sign in to your account",
    formlabel1: "Email",
    forminput1: "email",
    formlabel2: "Password",
    forminput2: "password",

    formbutton: "Sign in",
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
    modalconfirm: {
      rtl: false,
      header: "Please check your email",
      p1: "Just click the link to complete the sign-up proccess",
      p2b: "Haven't received an email?",
      p2: "Please check your spam folder to make sure it's not in there",
    },
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

  prices: {
    tab1: "Customer",
    tab2: "Vendor",
    header: {
      content: "Our prices",
      rtl: false,
    },

    cards: [
      {
        greymode: false,
        rtl: false,
        icon: Icon1,
        servicesh2: "תוכנית ניסיונית",
        servicesh3: "ניהול....",
        price: "ללא תשלום",
        servicesp:
          "ניהול שוטף וקל של תהליכי עבודה עסקיים מול לקוחות כגון דרישה וגבית תשלומים.",
        included: ["בלה בלה בלה", "בלה בלה בלה", "בלה בלה בלה"],
        primary: true,
        dark: true,
        dark2: true,
        buttonLabel: "בחר",
      },
      {
        greymode: true,

        rtl: false,
        icon: Icon1,
        servicesh2: "תוכנית ניסיונית",
        servicesh3: "ניהול....",
        price: "ללא תשלום",
        servicesp:
          "ניהול שוטף וקל של תהליכי עבודה עסקיים מול לקוחות כגון דרישה וגבית תשלומים.",
        included: ["בלה בלה בלה", "בלה בלה בלה", "בלה בלה בלה"],
        primary: true,
        dark: true,
        dark2: true,
        buttonLabel: "בחר",
      },
      {
        greymode: true,

        rtl: false,
        icon: Icon1,
        servicesh2: "תוכנית ניסיונית",
        servicesh3: "ניהול....",
        price: "ללא תשלום",
        servicesp:
          "ניהול שוטף וקל של תהליכי עבודה עסקיים מול לקוחות כגון דרישה וגבית תשלומים.",
        included: ["בלה בלה בלה", "בלה בלה בלה", "בלה בלה בלה"],
        primary: true,
        dark: true,
        dark2: true,
        buttonLabel: "בחר",
      },

      // {
      //   rtl: true,
      //   icon: Icon3,
      //   servicesh2: "מיכון מלא של תהליכי חיוב זיכוי בין מערכות וחברות",
      //   servicesp: "התממשקותם של מערכות קיימות כגון:ORACLE,PRIORITY,SAP",
      // },
    ],
  },
  services: {
    header: {
      content: "Our services",
      rtl: false,
      button: "Continue",
    },

    cards: [
      {
        rtl: false,
        icon: Icon1,
        servicesh2: "For suppliers",
        servicesp:
          "Ongoing and easy management of business work processes with customers such as demand and collection of payments.",
        modalinfo: {
          rtl: false,
          header: "System services for suppliers",
          button: "Continue",

          content: [
            { header: "Client management", content: "" },
            {
              header:
                "Create, upload and send tax invoices, transaction invoices, and receipts inclusive",
              content:
                "Process management, obtaining customer approval of the contents and the amount to be charged, and performing real-time interaction between the parties",
            },
            {
              header: "Tracking approvals, payments and collection",
              content: "",
            },
            { header: "Sending reminders", content: "" },
            {
              header: "Create periodic reports in different sections",
              content: "",
            },
            {
              header: "Transparency and information sharing",
              content:
                "The system allows all parties involved in the process, at the supplier and the customer, to work on the same information platform. Information recovery",
            },
          ],
        },
      },

      {
        rtl: false,
        icon: Icon2,
        servicesh2: "For customers",
        servicesp:
          "Continuous monitoring of payment requirements: receipt, approval and execution In front of a variety of suppliers.",
        modalinfo: {
          rtl: true,
          header: "System services for customers",
          button: "Continue",
          content: [
            {
              header:
                "Receiving documents for viewing, and downloading, approving and paying online",
              content: "",
            },
            {
              header:
                "View all charges, futures and histories, payments, receipts and more",
              content: "",
            },
            {
              header: "Payment through the system",
              content:
                "The system allows all parties involved in the process, at the supplier and the customer, to work on the same information platform",
            },
            { header: "Payment tracking", content: "" },
            { header: "Information recovery", content: "" },
          ],
        },
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
      content: "Why ContoTeq?",
      rtl: false,
    },

    cards: [
      {
        rtl: false,
        icon: Thunder,
        servicesh2: "Saving time",
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
  forgotPassword: {
    rtl: false,
    formh1: "Renew Password",
    sendCode: {
      formlabel1: "insert your verified E-mail address",
      forminput1: "email",
      formbutton: "Send code",
    },
    resetPassword: {
      formlabel2: "Enter verification code",
      forminput2: "email",

      formlabel3: "Enter new password",
      forminput3: "password",

      formlabel4: "Re-Enter new password",
      forminput4: "password",

      formbutton2: "Renew Password",
      passwordsDontMatch: "Passwords do not match",
      passwordNotSupported:
        "Password must be at least 8 characters, lowercase, uppercase, and numbers for greater security",
      invalidCode: "Invalid Code was entered, or an old one",
    },
  },

  whoweare: {
    header: {
      content: "Inventors",
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
