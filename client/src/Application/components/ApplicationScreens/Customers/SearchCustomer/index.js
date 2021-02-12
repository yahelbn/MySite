import { text } from "body-parser";
import React, { useState } from "react";

import {
  FormWrap,
  FormContent,
  FormH1,
  FormInput,
  FormButton,
  Text,
  Form,
  Container,
  TextHeader,
  CompaniesContainer,
  CompanyRow,
  ColumnDiv,
  RowDiv,
  FormLabel,
} from "./SearchCustomerElements";

import { FiUserPlus } from "react-icons/fi";

const SearchCustomer = (props) => {
  const content = props.dataLanguages.searchcustomer;
  const [searchWord, setSearchWord] = useState("");
  const [arrayComp, setArrayComp] = useState("");
  const [fields, setFields] = useState("");

  //Example array of companies
  const arrayTempCompanies = [
    {
      name: "Shen-Zen",
      cid: "12345678",
      poc: [
        { name: "iris", telephone: "054-6609925", email: "iris@gmail.com" },
        { name: "rafi", telephone: "054-6609930", email: "rafi@gmail.com" },
      ],
    },
    {
      name: "Shen-Zen",
      cid: "12345678",
      poc: [
        { name: "iris", telephone: "054-6609925", email: "iris@gmail.com" },
        { name: "rafi", telephone: "054-6609930", email: "rafi@gmail.com" },
      ],
    },
  ];

  const urlAddCustomer = window.location.href.replace(
    "searchcustomer",
    "addcustomer"
  );

  const searchCompany = () => {
    console.log(searchWord);
    setArrayComp(searchWord);
    setFields(arrayTempCompanies);
  };

  return (
    <Container>
      <FormWrap>
        {/* <FormContent> */}
        <Form action="#" rtl={content.rtl}>
          <FormH1>{content.formh1}</FormH1>
          <TextHeader>{""}</TextHeader>

          <FormInput
            list="companies"
            type={text}
            placeholder={content.inputplaceholder}
            required
            onChange={(e) => setSearchWord(e.target.value)}
          />
          <datalist id="companies">
            <option>Shen-zen</option> <option>Clalit</option>
            <option>Dr.ahdot</option>
          </datalist>

          <FormButton type="submit" onClick={() => searchCompany()}>
            {content.button}
          </FormButton>
          {fields && (
            <CompaniesContainer>
              {" "}
              {fields.map((field, idx) => {
                return (
                  <div
                    style={{ width: "100%" }}
                    dir={content.rtl ? "rtl" : "ltr"}
                    key={`${field}-${idx}`}
                  >
                    <CompanyRow>
                      <ColumnDiv>
                        <FormLabel dark={true} htmlFor="for">
                          {field.name}
                        </FormLabel>
                      </ColumnDiv>
                      <ColumnDiv>
                        <FormLabel dark={true} htmlFor="for">
                          {field.cid}
                        </FormLabel>
                      </ColumnDiv>
                      <ColumnDiv>
                        <FormLabel dark={true} htmlFor="for">
                          {field.cid}
                        </FormLabel>
                      </ColumnDiv>
                      <ColumnDiv>
                        <button
                          type="button"
                          style={{
                            cursor: "pointer",
                            WebkitBorderRadius: "20px",
                          }}
                        >
                          <FormLabel dark={true} htmlFor="for">
                            add Customer
                          </FormLabel>

                          <FiUserPlus />
                        </button>
                      </ColumnDiv>
                    </CompanyRow>
                  </div>
                );
              })}
            </CompaniesContainer>
          )}

          <Text>
            {content.text} <a href={urlAddCustomer}>{content.link}</a>
          </Text>
        </Form>
        {/* </FormContent> */}
      </FormWrap>
    </Container>
  );
};

export default SearchCustomer;
