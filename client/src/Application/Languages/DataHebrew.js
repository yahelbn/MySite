export const DataHebrew = {
  mainpage: {
    firsttext: "שלום",
  },

  welcomescreen: {
    rtl: true,
    formh1: "ברוך הבא לContoTeq!",

    buttonContent1: "חפש והצטרף לחברה קיימת",
    buttonContent2: "יצירת חברה",
    information1:
      " חפש והצטרף לחברה קיימת- באמצעות חיפוש במאגר החברות הקיימות אצלנו תוכל/י למצוא את החברה שרלוונטית לך ולבקש להצטרף אליה ולצפות ולעבוד איתה. ",
    information2:
      "יצירת חברה- במידה ואינך משוייך לחברה ספציפית שקיימת במאגר,ברצונך ליצור אחת בחר באפשרות זו.",
  },
  searchcompany: {
    rtl: true,
    formh1: "חפש חברה",
    inputplaceholder: `שם חברה או ח"פ`,
    button1: "חפש",
    label: "הצטרף ללקוח זה",
    text: "במידה והחברה אותה חפשת אינה נמצאת ברשימה וברצונך ליצור ",
    link: "לחץ כאן",
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
    buttonContent2: "הוסף איש קשר",
    //text: "שכחתי סיסמא",
    formh2: "אנשי קשר",
    forminput4: "text",
    formlabel5: "שם פרטי (איש קשר)",
    forminput5: "text",
    formlabel6: "שם משפחה (איש קשר)",
    forminput6: "text",
    formlabel7: "אימייל",
    forminput7: "text",
  },
  searchcustomer: {
    rtl: true,
    formh1: "הוספת לקוח",
    inputplaceholder: 'הקלד ח"פ או שם חברה',
    button: "חפש",
    button2: "הוסף לקוח זה",
    text: "לקוח או חברה אינם קיימים האם אתה מעוניין להוסיף",
    link: "לחץ כאן",
    modalconfirm: {
      rtl: true,
      header: "הבקשה נשלחה לחברה",
      p:
        "לאחר שהחברה תאשר את בקשתך, תוכל לשתף פעולה יחד איתה ,והיא תתווסף לרשימת הלקוחות שלך.",
      button: "להמשך הוספה",
    },
  },

  existingcustomers: {
    rtl: true,
    formh1: "הלקוחות שלי",
    inputplaceholder: 'הקלד ח"פ או שם חברה',
    button: "חפש",
    button2: "צפייה בפרטי לקוח זה",
    text: "לקוח או חברה אינם קיימים האם אתה מעוניין להוסיף",
    link: "לחץ כאן",
  },

  addcustomer: {
    rtl: true,
    formh1: "יצירת לקוח",
    formlabel1: "שם חברה",
    forminput1: "text",
    formlabel2: "סוג חברה",
    forminput2: "text",
    formlabel3: "חפ",
    forminput3: "number",
    formlabel4: "כתובת",
    forminput4: "text",
    formlabel5: "שם פרטי (איש קשר)",
    forminput5: "text",
    formlabel6: "שם משפחה (איש קשר)",
    forminput6: "text",
    formlabel7: "אימייל",
    forminput7: "text",
    optionsSelect: ["סוג", 'בע"מ', "עוסק פטור"],
    formh2: "אנשי קשר",

    buttonContent1: "צור לקוח",
    buttonContent2: "איש קשר נוסף",
    //text: "שכחתי סיסמא",
    street: "רחוב",
    number: "מס' דירה",
    city: "עיר",
    zipcode: "מיקוד",
    country: "מדינה",
    address: "כתובת",
  },

  sidebar: {
    rtl: true,
    customer: "לקוח",
    vendor: "ספק",
    messages: "הודעות כלליות",
    customers: "לקוחות",
    addingacustomer: "הוספת לקוח",
    existingclients: "לקוחות קיימים",
    invoices: "חשבוניות",
    sendinginvoices: "שליחת חשבוניות",
    proformatax: "חשבונית מס",
    transactioninvoice: "חשבונית עסקה",
    invoicetracking: "מעקב חשבוניות",
    receipts: "קבלות",
    sendingreceipts: "שליחת קבלות",
    trackingreceipts: "מעקב קבלות",
    minimizemenu: "הקטנת תפריט",
    settings: "הגדרות",
    logout: "התנתק",
  },

  customerinfo: {
    rtl: true,
    formh1: "מידע אודות לקוח",
    balance: "יתרה:",
    lastpayment: "תשלום אחרון",
    edit: "עריכה",
    moreactions: "פעולות נוספות",
    navbar: {
      rtl: false,
      links: [
        { content: "חשבוניות", to: "/invoices" },
        { content: "קבלות", to: "/bills" },
        // { content: "תשלומים", to: "/payments" },
        { content: "פרטי לקוח", to: "/clientinfo" },
        { content: "אנשי קשר", to: "/pocs" },
        { content: "הערות", to: "/comments" },
      ],
    },
  },
};
