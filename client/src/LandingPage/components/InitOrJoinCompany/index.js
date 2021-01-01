import React from "react";
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
} from "./InitOrJoinElements";

const InitOrJoinCompany = ({ content }) => {
  const renderOptions = content.optionsSelect.map((option, index) => {
    if (index === 0) {
      return (
        <React.Fragment key={index}>
          <option value="" hidden>
            {option}
          </option>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment key={index}>
          <option value={index}>{option}</option>
        </React.Fragment>
      );
    }
  });
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
                <FormInput type={content.forminput1} required />
              </ColumnDiv>
              <ColumnDiv>
                <FormLabel htmlFor="for">{content.formlabel2}</FormLabel>
                <FormSelect type={content.forminput2} required>
                  {renderOptions}
                </FormSelect>
              </ColumnDiv>
            </RowDiv>

            <FormLabel htmlFor="for">{content.formlabel3}</FormLabel>
            <FormInput type={content.forminput3} required />

            <FormLabel htmlFor="for">{content.formlabel4}</FormLabel>
            <FormInput type={content.forminput4} required />

            <FormButton type="submit">{content.buttonContent1}</FormButton>
          </Form>
        </FormWrap>
      </Container>
    </>
  );
};

export default InitOrJoinCompany;
