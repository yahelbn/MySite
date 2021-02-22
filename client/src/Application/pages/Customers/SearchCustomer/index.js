import { text } from "body-parser";
import React, { useState, useEffect } from "react";

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
/* Modal */
import Modal from "../../../components/Modal/Modal";
import useModal from "../../../components/Modal/useModal";
import ModalSendingRequest from "../../../components/DiffrentModals/ModalSendingRequest";

const SearchCustomer = (props) => {
  const content = props.dataLanguages.searchcustomer;
  const [searchWord, setSearchWord] = useState("");
  const [arrayComp, setArrayComp] = useState("");
  const [fields, setFields] = useState("");
  const { isShowing, toggle } = useModal();

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

  useEffect(() => {
    const searchByWordTheCustomers = async () => {
      //here we are going to make axios request with the searchWord and setFields   /171 lesson on udemy course
      setArrayComp(searchWord);
      setFields(arrayTempCompanies);
    };
    //Provide start with search
    if (searchWord && !fields.length) {
      searchByWordTheCustomers();
    } else {
      //Timer for every search
      const timeoutId = setTimeout(() => {
        if (searchWord) {
          searchByWordTheCustomers();
        }
      }, 700);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [searchWord]);

  const searchCompany = () => {
    console.log(searchWord);
    setArrayComp(searchWord);
    setFields(arrayTempCompanies);
  };

  return (
    <Container>
      <FormWrap>
        {/* <FormContent> */}
        <Form rtl={content.rtl}>
          <Modal
            isShowing={isShowing}
            hide={toggle}
            modalcomp={
              <ModalSendingRequest
                modalContent={content.modalconfirm}
                toggle={toggle}
              />
            }
          />
          <FormH1>
            {content.formh1}{" "}
            <FiUserPlus style={{ marginLeft: "3px", marginRight: "3px" }} />
          </FormH1>
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
                          onClick={() => toggle()}
                          type="button"
                          style={{
                            cursor: "pointer",
                            WebkitBorderRadius: "20px",
                            width: "100%",
                          }}
                        >
                          <FormLabel dark={true} htmlFor="for">
                            {content.button2}
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
