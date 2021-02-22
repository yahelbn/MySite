import React, { useState, useEffect } from "react";
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
import {
  companyInterface,
  companyTypes,
  addressInterface,
} from "../../../Global/Enums.json";
import axios from "axios";

const InitOrJoinCompany = (props) => {
  const content = props.dataLanguages.initorjoin;

  const [fields, setFields] = useState([
    { firstname: null, lastname: null, email: null },
  ]);
  const [companyData, setCompanyData] = useState(companyInterface);
  const [addressData, setAddressData] = useState(addressInterface);

  const location = useLocation();
  useEffect(() => {
    //if some component passed company id here - we will show its data
    if (location.state) {
      setCompanyDataByCid(location.state.companyID);
    }
  }, [location]);

  //renders company types for the selection menu
  const renderCompanyTypesSelections = () => {
    const typesObject = companyTypes[props.locale];
    return Object.keys(typesObject).map((key, index) => {
      return (
        <React.Fragment key={index}>
          <option
            selected={companyData.CType === key ? true : false}
            value={key}
          >
            {typesObject[key]}
          </option>
        </React.Fragment>
      );
    });
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

  function handleChange(i, type, event) {
    const values = [...fields];
    if (type === 0) values[i].firstname = event.target.value;
    if (type === 1) values[i].lastname = event.target.value;
    if (type === 2) values[i].email = event.target.value;
    setFields(values);
  }
  const handleAdd = () => {
    const values = [...fields];
    values.push({ firstname: null, lastname: null, email: null });
    setFields(values);
  };

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
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
              value={companyData.CompanyID || ""}
              onChange={(event) =>
                setCompanyData({
                  ...companyData,
                  CompanyID: event.target.value,
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
                  value={companyData.CAddress || ""}
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
                  value={companyData.CAddress || ""}
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
                  value={companyData.CAddress || ""}
                  onChange={(event) =>
                    setAddressData({
                      ...addressData,
                      AZIPCode: event.target.value,
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
                  value={companyData.CAddress || ""}
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
                  value={companyData.CAddress || ""}
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

            {fields.map((field, idx) => {
              return (
                <div dir={content.rtl ? "rtl" : "ltr"} key={`${field}-${idx}`}>
                  <RowDivPoc>
                    <ColumnDiv>
                      <FormLabel htmlFor="for">{content.formlabel5}</FormLabel>
                      <FormInput
                        type={content.forminput5}
                        required
                        value={field.firstname || ""}
                        onChange={(e) => handleChange(idx, 0, e)}
                      />
                    </ColumnDiv>
                    <ColumnDiv>
                      <FormLabel htmlFor="for">{content.formlabel6}</FormLabel>
                      <FormInput
                        type={content.forminput6}
                        required
                        value={field.lastname || ""}
                        onChange={(e) => handleChange(idx, 1, e)}
                      />
                    </ColumnDiv>
                    <ColumnDiv>
                      <FormLabel htmlFor="for">{content.formlabel7}</FormLabel>
                      <FormInput
                        type={content.forminput7}
                        required
                        value={field.email || ""}
                        onChange={(e) => handleChange(idx, 2, e)}
                      />
                    </ColumnDiv>
                    <ColumnDiv>
                      <button type="button" onClick={() => handleRemove(idx)}>
                        <UseAnimations animation={trash2} />
                      </button>
                    </ColumnDiv>
                  </RowDivPoc>
                </div>
              );
            })}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <AddButton type="submit" onClick={handleAdd}>
                <div style={{ fontSize: "15px" }}>{content.buttonContent2}</div>
                <AiOutlinePlus
                  color={"#1b1924"}
                  style={{ marginLeft: "3px", marginRight: "3px" }}
                />
              </AddButton>
            </div>

            <FormButton type="submit">{content.buttonContent1}</FormButton>
          </Form>
        </FormWrap>
      </Container>
    </>
  );
};

export default InitOrJoinCompany;
