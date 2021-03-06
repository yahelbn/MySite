import React, { useState, useEffect, useContext } from "react";
import {
  FormWrap,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Icon,
  Form,
  RowDiv,
  ColumnDiv,
  Container,
  FormSelect,
  RowDivPoc,
  AddButton,
  RowDivAddress,
  FormH2,
} from "./InitOrJoinElements";

import UseAnimations from "react-useanimations";
// EVERY ANIMATION NEEDS TO BE IMPORTED FIRST -> YOUR BUNDLE WILL INCLUDE ONLY WHAT IT NEEDS
import trash2 from "react-useanimations/lib/trash2";
import { AiOutlinePlus } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../../../Global/Global";

import {
  companyInterface,
  userCompanyStatusesEnum,
  addressInterface,
  enumsTables,
} from "../../../Global/Enums.json";
import axios from "axios";

const InitOrJoinCompany = (props) => {
  const content = props.dataLanguages.initorjoin;

  const [contactPersons, setContactPersons] = useState([
    { firstname: null, lastname: null, email: null },
  ]);
  const [companyData, setCompanyData] = useState(companyInterface);
  const [addressData, setAddressData] = useState(addressInterface);
  const [enumsTable, setEnumsTable] = useState([]);
  const [disabledField, setDisabledField] = useState(false);

  const { getEnumsByTableName } = useContext(GlobalContext);

  const location = useLocation();
  useEffect(() => {
    //if some component passed company id here - we will show its data
    if (location.state) {
      setCompanyDataByCid(location.state.companyID);
      setCompanyAddress(location.state.companyID);
      checkIfCompanyHasLear(location.state.companyID);
    }
    setCompanyTypeEnums(enumsTables.CompanyTypeEnums);
  }, [location]);

  //renders company types for the selection menu
  const renderCompanyTypesSelections = () => {
    if (enumsTable) {
      return enumsTable.map((key, index) => {
        return (
          <React.Fragment key={index}>
            <option
              selected={
                companyData.CType === key.EName ? "selected" : undefined
              }
              value={key.EName}
            >
              {props.locale === "he" ? key.EHebrewName : key.EEnglishName}
            </option>
          </React.Fragment>
        );
      });
    }
  };

  const setCompanyDataByCid = async (cid) => {
    if (cid) {
      const companyData = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/companies/getByCid`,
        { params: { cid } }
      );
      setCompanyData(companyData.data[0]);
    }
  };

  const setCompanyAddress = async (cid) => {
    if (cid) {
      const companyAddressData = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/addresses/getById`,
        { params: { id: cid } }
      );
      console.log(companyAddressData);
      setAddressData(companyAddressData.data[0]);
    }
  };

  const checkIfCompanyHasLear = async (cid) => {
    if (cid) {
      const learsOfCompany = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/userCompany/getByIdAndStatus`,
        { params: { id: cid, status: userCompanyStatusesEnum.LEAR } }
      );
      console.log(learsOfCompany);
      if (learsOfCompany.data.length > 0) {
        setDisabledField(true);
      }
    }
  };

  const setCompanyTypeEnums = async (enumsTableName) => {
    let enums = await getEnumsByTableName(enumsTableName);
    setEnumsTable(enums);
  };

  const addCompany = async () => {
    await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/companies/add`,
      companyData
    );
    await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/companies/add`,
      companyData
    );
    await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/companies/add`,
      companyData
    );
  };

  const joinCompany = async () => {};

  function handleChange(i, type, event) {
    const values = [...contactPersons];
    if (type === 0) values[i].firstname = event.target.value;
    if (type === 1) values[i].lastname = event.target.value;
    if (type === 2) values[i].email = event.target.value;
    setContactPersons(values);
  }
  const handleAdd = () => {
    const values = [...contactPersons];
    values.push({ firstname: null, lastname: null, email: null });
    setContactPersons(values);
  };

  function handleRemove(i) {
    const values = [...contactPersons];
    values.splice(i, 1);
    setContactPersons(values);
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">ContoTeq</Icon>
          <Form action="#" rtl={Boolean(content.rtl) ? true : false}>
            <FormH1>{content.formh1}</FormH1>
            <RowDiv>
              <ColumnDiv>
                <FormLabel htmlFor="for">{content.formlabel1}</FormLabel>
                <FormInput
                  type={content.forminput1}
                  required
                  disabled={disabledField}
                  value={companyData.CName || ""}
                  onChange={(event) =>
                    setCompanyData({
                      ...companyData,
                      CName: event.target.value,
                    })
                  }
                />
              </ColumnDiv>
              <ColumnDiv>
                <FormLabel htmlFor="for">{content.formlabel2}</FormLabel>
                <FormSelect
                  type={content.forminput2}
                  required
                  disabled={disabledField}
                  onChange={(event) =>
                    setCompanyData({
                      ...companyData,
                      CType: event.target.value,
                    })
                  }
                >
                  {renderCompanyTypesSelections()}
                </FormSelect>
              </ColumnDiv>
            </RowDiv>

            <FormLabel htmlFor="for">{content.formlabel3}</FormLabel>
            <FormInput
              type={content.forminput3}
              required
              disabled={disabledField}
              value={companyData.CCompanyID || ""}
              onChange={(event) =>
                setCompanyData({
                  ...companyData,
                  CCompanyID: event.target.value,
                })
              }
            />
            <FormH2>{content.address}</FormH2>

            <RowDivAddress>
              <ColumnDiv>
                <FormLabel htmlFor="for">{content.country}</FormLabel>
                <FormInput
                  type={content.forminput4}
                  required
                  disabled={disabledField}
                  value={addressData.ACountry || ""}
                  onChange={(event) =>
                    setAddressData({
                      ...addressData,
                      ACountry: event.target.value,
                    })
                  }
                />
              </ColumnDiv>
              <ColumnDiv>
                <FormLabel htmlFor="for">{content.city}</FormLabel>
                <FormInput
                  type={content.forminput4}
                  required
                  disabled={disabledField}
                  value={addressData.ACity || ""}
                  onChange={(event) =>
                    setAddressData({
                      ...addressData,
                      ACity: event.target.value,
                    })
                  }
                />
              </ColumnDiv>

              <ColumnDiv>
                <FormLabel htmlFor="for">{content.zipcode}</FormLabel>
                <FormInput
                  type="number"
                  required
                  disabled={disabledField}
                  value={addressData.AZipCode || ""}
                  onChange={(event) =>
                    setAddressData({
                      ...addressData,
                      AZipCode: event.target.value,
                    })
                  }
                />
              </ColumnDiv>
            </RowDivAddress>
            <RowDiv>
              <ColumnDiv>
                <FormLabel htmlFor="for">{content.street}</FormLabel>
                <FormInput
                  type={content.forminput4}
                  required
                  disabled={disabledField}
                  value={addressData.AStreet || ""}
                  onChange={(event) =>
                    setAddressData({
                      ...addressData,
                      AStreet: event.target.value,
                    })
                  }
                />
              </ColumnDiv>
              <ColumnDiv>
                <FormLabel htmlFor="for">{content.number}</FormLabel>
                <FormInput
                  type={content.forminput4}
                  required
                  disabled={disabledField}
                  value={addressData.ANumber || ""}
                  onChange={(event) =>
                    setAddressData({
                      ...addressData,
                      ANumber: event.target.value,
                    })
                  }
                />
              </ColumnDiv>
            </RowDiv>
            <FormH2>{content.formh2}</FormH2>

            {contactPersons.map((field, idx) => {
              return (
                <div dir={content.rtl ? "rtl" : "ltr"} key={`${field}-${idx}`}>
                  <RowDivPoc>
                    <ColumnDiv>
                      <FormLabel htmlFor="for">{content.formlabel5}</FormLabel>
                      <FormInput
                        type={content.forminput5}
                        required
                        disabled={disabledField}
                        value={field.firstname || ""}
                        onChange={(e) => handleChange(idx, 0, e)}
                      />
                    </ColumnDiv>
                    <ColumnDiv>
                      <FormLabel htmlFor="for">{content.formlabel6}</FormLabel>
                      <FormInput
                        type={content.forminput6}
                        required
                        disabled={disabledField}
                        value={field.lastname || ""}
                        onChange={(e) => handleChange(idx, 1, e)}
                      />
                    </ColumnDiv>
                    <ColumnDiv>
                      <FormLabel htmlFor="for">{content.formlabel7}</FormLabel>
                      <FormInput
                        type={content.forminput7}
                        required
                        disabled={disabledField}
                        value={field.email || ""}
                        onChange={(e) => handleChange(idx, 2, e)}
                      />
                    </ColumnDiv>
                    <ColumnDiv>
                      <button
                        disabled={disabledField}
                        type="button"
                        onClick={() => handleRemove(idx)}
                      >
                        <UseAnimations animation={trash2} />
                      </button>
                    </ColumnDiv>
                  </RowDivPoc>
                </div>
              );
            })}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <AddButton
                disabled={disabledField}
                type="submit"
                onClick={handleAdd}
              >
                <div style={{ fontSize: "15px" }}>{content.buttonContent2}</div>
                <AiOutlinePlus
                  color={"#1b1924"}
                  style={{ marginLeft: "3px", marginRight: "3px" }}
                />
              </AddButton>
            </div>

            <FormButton type="submit">
              {disabledField ? content.buttonContent3 : content.buttonContent1}
            </FormButton>
          </Form>
        </FormWrap>
      </Container>
    </>
  );
};

export default InitOrJoinCompany;
