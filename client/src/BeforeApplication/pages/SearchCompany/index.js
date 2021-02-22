import React, { useState } from "react";
import {
  FormWrap,
  FormH1,
  FormButton,
  Icon,
  Form,
  ColumnDiv,
  Container,
  Text,
  FormLabel,
  FormInput,
  CompaniesContainer,
  CompanyRow,
} from "./SearchCompanyElements";
import { BsInfoSquare } from "react-icons/bs";
import { useHistory, Link } from "react-router-dom";
import { FiUserPlus } from "react-icons/fi";

/* Modal */
import "../../components/Modal/Modal.css";
import Modal from "../../components/Modal/Modal";
import useModal from "../../components/Modal/useModal";
import ModalSearchCompany from "../../components/DiffrentModals/ModalSearchCompany";

const SearchCompany = (props) => {
  const content = props.dataLanguages.searchcompany;

  const history = useHistory();
  const [searchWord, setSearchWord] = useState("");
  const [arrayComp, setArrayComp] = useState("");
  const [fields, setFields] = useState("");
  const [choseCompany, setChoseCompany] = useState("");

  /**Contexts */
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
      name: "Clalit",
      cid: "111111",
      poc: [
        { name: "iris", telephone: "054-6609925", email: "iris@gmail.com" },
        { name: "rafi", telephone: "054-6609930", email: "rafi@gmail.com" },
      ],
    },
  ];

  const urlAddCustomer = window.location.href.replace(
    "searchcompany",
    "initorjoin"
  );

  const searchCompany = () => {
    console.log(searchWord);
    setArrayComp(searchWord);
    setFields(arrayTempCompanies);
  };
  const handleTheSelectedOption = (i) => {
    console.log(fields[i]);
    setChoseCompany(fields[i]);
    toggle();
  };

  return (
    <>
      <Container>
        <Modal
          isShowing={isShowing}
          hide={toggle}
          modalcomp={
            <ModalSearchCompany
              modalContent={content.modalconfirm}
              company={choseCompany}
            />
          }
        />
        <FormWrap>
          <Icon to="/">ContoTeq</Icon>
          <Form action="#" rtl={Boolean(content.rtl) ? true : false}>
            <FormH1>{content.formh1}</FormH1>
            <FormInput
              list="companies"
              type={"text"}
              placeholder={content.inputplaceholder}
              required
              onChange={(e) => setSearchWord(e.target.value)}
            />
            <datalist id="companies">
              <option>Shen-zen</option> <option>Clalit</option>
              <option>Dr.ahdot</option>
            </datalist>

            <FormButton type="submit" onClick={() => searchCompany()}>
              {content.button1}
            </FormButton>
            {
              <CompaniesContainer>
                {fields &&
                  fields.map((field, idx) => {
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
                                width: "100%",
                              }}
                              onClick={() => handleTheSelectedOption(idx)}
                            >
                              <FormLabel dark={true} htmlFor="for">
                                {content.label}
                              </FormLabel>

                              <FiUserPlus />
                            </button>
                          </ColumnDiv>
                        </CompanyRow>
                      </div>
                    );
                  })}
              </CompaniesContainer>
            }

            <Text>
              {content.text} <a href={urlAddCustomer}>{content.link}</a>
            </Text>
          </Form>
        </FormWrap>
      </Container>
    </>
  );
};

export default SearchCompany;
