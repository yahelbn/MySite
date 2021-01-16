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

export const DataHebrew = {
  homeObjOne: {
    id: "whoweare",
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: "מי אנחנו?",
    //headLine: "פישוט תהליך התחשבנות בין עסקים",
    description:
      "קונטוטק היא פלטפורמת fintech שהוקמה על מנת ליעל תהליכים עסקיים בין ספקים ללקוחות מקצה לקצה.  בשלב הראשון אנו מביאים פתרון מלא, אוטומטי ופשוט לכלל תהליכי התשלום והגביה – AR בהמשך נאפשר ניהול תהליכים נוספים בין ספקים ללקוחות.החברה הוקמה על ידי יזמים שנים רבות של ניסיון בעולם של עסקים קטנים ובינוניים, מערכות fintech ואון-ליין ופיננסים.",
    buttonLabel: "התחל עכשיו",
    imgStart: false,
    img: smartransaction,
    alt: "Car",
    dark: true,
    primary: true,
    darkText: true,
    rtl: true,
    routerlink: true,
  },

  homeObjTwo: {
    id: "technology",
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: "טכנולוגיה",
    //headLine: "ממשק בצורה פשוטה",
    description:
      "מערכת קונטוטק פועלת כשירות SAAS אונליין ומאפשרת גישה לתהליך הן לספקים והן ללקוחות היא בנויה על בסיס מספר עקרונות עיקריים :<br> 1.שמירה על קשר מלא אונליין בזמן אמת בין הספק ללקוח בכל שלבי התהליך.<br> 2.מעקב מלא אחרי היסטוריית הפעולות והתשלומים, מבוסס blockchain ledger, אשר מאפשר מעקב אמין ומאובטח אחרי כל פעולה שבוצעה.<br> 3.משלבת טכנולוגיות fintech מתקדמות ובכללם מערכות NLP ו-OCR. ",
    buttonLabel: "התחל עכשיו",
    imgStart: true,
    img: checklistpayment,
    alt: "Car",
    dark: false,
    primary: false,
    darkText: false,
    rtl: true,
    routerlink: true,
  },

  homeObjThree: {
    id: "prices",
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: "מחירים?",
    headLine: "שימוש חינמי במערכת",
    description: "בשלב זה השימוש במערכת יעשה ללא חיוב.",
    buttonLabel: "התחל עכשיו",
    imgStart: false,
    img: peoplewithcard,
    alt: "Car",
    dark: true,
    primary: true,
    darkText: true,
    rtl: true,
    routerlink: true,
  },

  homeObjFour: {
    id: "signup",
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: "הירשם",
    headLine: "הירשם עכשיו ללא תשלום",
    description: "הירשם והתנסה בשירותים שלנו בעסקך או בתור לקוח.",
    buttonLabel: "התחל עכשיו",
    imgStart: true,
    img: checklistpayment,
    alt: "Car",
    dark: false,
    primary: false,
    darkText: false,
    rtl: true,
    routerlink: true,
  },

  navBar: {
    rtl: true,
    links: [
      {
        content: "החברה",
        dropdown: [
          { content: "מי אנחנו", to: "whoweare" },
          { content: "טכנולוגיה", to: "technology" },
          { content: "הצוות", to: "inventors" },
        ],
      },
      { content: "למה ContoTeq?", to: "advantages" },
      { content: "שירותים שלנו", to: "services" },
      // { content: "טכנולוגיה", to: "technology" },
      { content: "מחירים", to: "prices" },
      // { content: "הרשם", to: "signup" },
    ],
    loginbutton: "התחבר",
  },

  heroSection: {
    heroh1: "פעולות בין עסקים נהפכות לקלות יותר",
    herop: "הירשם עכשיו והשתמש בחינם",
    button: "התחל עכשיו",
  },
  contactus: {
    rtl: true,
    formh1: "השירות יעלה לאוויר בקרוב",
    formlabel1: "שם מלא",
    forminput1: "text",
    formlabel2: "אימייל",
    forminput2: "email",
    formlabel3: "טלפון",
    forminput3: "text",
    formbutton: "שלח",
    text: "לכל שאלה ניתן לפנות ל",
    email: "contoteq@gmail.com",

    text2: "תודה על התעניינותך ,<br>  אנא השאר פרטים וניצור קשר בהקדם:",
  },
  signin: {
    rtl: true,
    formh1: "התחבר לחשבונך ",
    formlabel1: "אימייל",
    forminput1: "email",
    formlabel2: "סיסמא",
    forminput2: "password",

    formbutton: "התחבר",
    text: "שכחתי סיסמא",
  },
  signup: {
    rtl: true,
    formh1: "צור את חשבונך",
    formlabel1: "שם פרטי",
    forminput1: "text",
    formlabel2: "שם משפחה",
    forminput2: "text",
    formlabel3: "אי-מייל",
    forminput3: "email",
    formlabel4: "סיסמא",
    forminput4: "password",
    formlabel5: "חזור על סיסמא",
    forminput5: "password",
    formlabel6: "מספר טלפון",
    forminput6: "tel",
    formlabel7: "תז (רשות)",
    forminput7: "number",

    formbutton: "הירשם",
    //text: "שכחתי סיסמא",
    modalconfirm: {
      rtl: true,
      header: "בדוק את האימייל שלך",
      p1: "תלחץ על הלינק במייל בכדי להמשיך את תהליך ההתחברות",
      p2b: "לא קבלת אימייל?",
      p2: "אנא בדוק את תיקיית הספאם שלך כדי לוודא שהיא לא שם",
    },
  },
  initorjoin: {
    rtl: true,
    formh1: "חברה",
    formlabel1: "שם חברה",
    forminput1: "text",
    formlabel2: "סוג חברה",
    forminput2: "text",
    formlabel3: "חפ",
    forminput3: "number",
    formlabel4: "כתובת",
    forminput4: "text",
    optionsSelect: ["סוג", 'בע"מ', "עוסק פטור"],

    buttonContent1: "צור חברה",
    buttonContent2: "הצטרף לחברה",
    //text: "שכחתי סיסמא",
  },

  prices: {
    tab1: "לקוח",
    tab2: "ספק",
    header: {
      content: "המחירים שלנו",
      rtl: true,
    },

    cards: [
      {
        greymode: false,

        rtl: true,
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

        rtl: true,
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

        rtl: true,
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
      content: "השירותים שלנו",
      rtl: true,
    },

    cards: [
      {
        rtl: true,
        icon: Icon1,
        servicesh2: "עבור ספקים",
        servicesp:
          "ניהול שוטף וקל של תהליכי עבודה עסקיים מול לקוחות כגון דרישה וגבית תשלומים.",
      },

      {
        rtl: true,
        icon: Icon2,
        servicesh2: "עבור לקוחות",
        servicesp:
          "מעקב רצוף אחרי דרישות תשלום: קבלה, אישור וביצוע מול מגוון ספקים",
      },
      // {
      //   rtl: true,
      //   icon: Icon3,
      //   servicesh2: "מיכון מלא של תהליכי חיוב זיכוי בין מערכות וחברות",
      //   servicesp: "התממשקותם של מערכות קיימות כגון:ORACLE,PRIORITY,SAP",
      // },
    ],
  },
  advantages: {
    header: {
      content: "למה Contoteq?",
      rtl: true,
    },

    cards: [
      {
        rtl: true,
        icon: Thunder,
        servicesh2: "שיפור יעילות וחיסכון בזמן",
        servicesp: "אוטומציה של תהליכים טרחניים המפנה לך זמן להתמקד בעסק שלך",
      },

      {
        rtl: true,
        icon: ConnectionPeople,
        servicesh2: "שיפור קשרים בין ספקים ללקוחות",
        servicesp:
          "תקשורת ישירה, אמינה, ופשוטה בכל הקשור לתהליכי התשלום, גביה ומעקב.",
      },
      {
        rtl: true,
        icon: Web,
        servicesh2: "מניעת טעויות אנוש",
        servicesp:
          "התרעות מיידיות כאשר מידע כלשהו נראה שגוי המאפשרות תיקון מיידי לפני אישור, שליחה או תשלום.",
      },
      {
        rtl: true,
        icon: Interactive,
        servicesh2: "ניהול פשוט של תהליך מקצה לקצה",
        servicesp:
          "מיצירת חשבוניות, אישורים, תשלום והוצאת קבלות תוך כדי אינטראקציה בזמן אמת בין ספק ללקוח. הפקת דוחות היסטוריים בחתכים שונים תוך דקות.",
      },
      {
        rtl: true,
        icon: Payday,
        servicesh2: "שיפור וייעול תשלום וגביה",
        servicesp:
          "מעקב אחרי תשלומים, שליחת תזכורות, ואפשרות תשלום מידי אונליין.",
      },
      {
        rtl: true,
        icon: Synchronize,
        servicesh2: "סנכרון מלא עם תוכנות ניהול כספים",
        servicesp:
          "המערכת מסונכרנת אוטומטית עם מערכות ניהול חשבונות מתקדמות (כגון חשבשבת, רווחית ופריוריטי) – עתידי!",
      },
      {
        rtl: true,
        icon: Clock,
        servicesh2: "רישום ותחילת עבודת תוך דקות",
        servicesp:
          "המערכת פועלת אונליין ותהליך הרישום עד תחילת עבודה לוקח דקות.",
      },
      {
        rtl: true,
        icon: Customerservice,
        servicesh2: "צריך עזרה? תמיכה מעולה בלקוחות",
        servicesp:
          "המערכת מספקת תמיכה שוטפת בלקוחות ומענה לכל שאלה בנגיעת כפתור.",
      },
    ],
  },

  whoweare: {
    header: {
      content: "הצוות",
      rtl: true,
    },

    cards: [
      {
        img: yahelphoto,
        headercard: "יהל בר-נועם",
        subtitle: "Software Engineer",
        content: "מהנדס תוכנה , התמחויות בפיתוח מובייל וווב.",
        rtl: true,
      },
    ],
  },

  footer: [["קצת עלינו", "צור קשר", "מיקום", "תנאי שירות"]],
};
