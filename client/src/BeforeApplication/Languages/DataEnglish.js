export const DataEnglish = {
  mainpage: {
    firsttext: "Hello",
  },
  pendingscreen: {
    rtl: false,
    formh1: "Wait for company approval",

    buttonContent: "Look for another company",
    information:
      "To start using ContoTeq, you must wait for the approval of the company that will approve your joining it. If you want to give up the application and apply to join another company click the button below.",
  },
  welcomescreen: {
    rtl: false,
    formh1: "Welcome to ContoTeq!",

    buttonContent1: "Search and join an existing company",
    buttonContent2: "Creating a company",
    information1:
      "Search and join an existing company - by searching the database of existing companies with us, you can find the company that is relevant to you and ask to join it and watch and work with it.",
    information2:
      "Create a company - If you are not associated with a specific company that exists in the database, you want to create one. Select this option.",
  },
  searchcompany: {
    rtl: false,
    formh1: "Search a company",
    inputplaceholder: "Company name/cid",
    button1: "Search",
    label: "Join this company",
    text:
      "If the company you are looking for is not on the list and you want to create",
    link: "Click here",
    modalconfirm: {
      rtl: false,
      header: "Do you want to join to work with a company",
      p: ` If you choose to cooperate with this company, you will wait for approval of your request for cooperation by
      The directors of the company from which you applied to join If the company approves your application, you can expect
      In invoices, send receipts / invoices to customers with whom the company works.`,
      button: "Join",
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
    optionsSelect: ["Partnership", "NonProfit", "LTD", "SoleProp"],
    formh2: "Contacts",
    formlabel5: "First name (contact)",
    forminput5: "text",
    formlabel6: "Last name (contact)",
    forminput6: "text",
    formlabel7: "Email",
    forminput7: "text",

    buttonContent1: "Create Company",
    buttonContent2: "Add Person of contact",
    //text: "שכחתי סיסמא",
    street: "Street",
    number: "Number",
    city: "City",
    zipcode: "Zip Code",
    country: "Country",
    address: "Address",
  },

  searchcustomer: {
    rtl: false,
    formh1: "Add a customer",
    inputplaceholder: "type CID or Company name",
    button: "Search",
    button2: "add this company",

    text: "Customer/Company not exist ,would you like to add",
    link: "Click here",
  },
  addcustomer: {
    rtl: false,
    formh1: "Create a customer",
    formlabel1: "Company name",
    forminput1: "text",
    formlabel2: "Company type",
    forminput2: "text",
    formlabel3: "CID",
    forminput3: "number",
    formlabel4: "Address",
    forminput4: "text",
    formlabel5: "First name (contact)",
    forminput5: "text",
    formlabel6: "Last name (contact)",
    forminput6: "text",
    formlabel7: "Email",
    forminput7: "text",
    optionsSelect: ["סוג", 'בע"מ', "עוסק פטור"],
    formh2: "Contacts",

    buttonContent1: "Create",
    buttonContent2: "Add a contact",
    //text: "שכחתי סיסמא",
  },

  sidebar: {
    rtl: false,

    customer: "Customer",
    vendor: "Vendor",
    messages: "Messages",
    customers: "Customers",
    addingacustomer: "Adding a customer",
    existingclients: "Existing clients",
    invoices: "Invoices",
    sendinginvoices: "Sending invoices",
    proformatax: "Proforma tax",
    transactioninvoice: "Transaction invoice",
    invoicetracking: "Invoice tracking",
    receipts: "Receipts",
    sendingreceipts: "Sending receipts",
    trackingreceipts: "Tracking receipts",
    minimizemenu: "Minimize menu",
    settings: "Settings",
    logout: "Log-out",
  },
};
