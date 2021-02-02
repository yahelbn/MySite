import { text } from "body-parser";
import React from "react";

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
} from "./SearchCustomerElements";
const SearchCustomer = (props) => {
  const content = props.dataLanguages.searchcustomer;

  const urlAddCustomer = window.location.href.replace(
    "searchcustomer",
    "addcustomer"
  );
  return (
    <Container>
      <FormWrap>
        {/* <FormContent> */}
        <Form action="#" rtl={content.rtl}>
          <FormH1>{content.formh1}</FormH1>
          <TextHeader>{""}</TextHeader>

          <FormInput
            type={text}
            placeholder={content.inputplaceholder}
            required
          />

          <FormButton type="submit">{content.button}</FormButton>
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
