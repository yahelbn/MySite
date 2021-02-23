import React, { useState } from "react";

import {
  FormWrap,
  FormH1,
  Form,
  Container,
  RowDiv,
  ColumnDiv,
  FormButton,
  LinksDrop,
  DropdownNew,
  Row,
} from "./CustomersInfoElements";

/* Components */
import { DropdownItem, DropdownMenu } from "styled-dropdown-component";
import { Button } from "styled-button-component";
import Navbar from "../CustomersInfo/Navbar/index";

import { Route, Switch, BrowserRouter } from "react-router-dom";

//Icons
import { RiContactsLine } from "react-icons/ri";

//Tables
import InvoicesTable from "./InfoTables/InvoicesTable/index";

const CustomersInfo = (props) => {
  const content = props.dataLanguages.customerinfo;
  const [hidden, setHidden] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const dropdown = {
    dropdown: [
      { content: "איחוד", to: "whoweare" },
      { content: "מחיקה", to: "technology" },
    ],
  };
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const renderDropDownItems = dropdown.dropdown.map((link, index) => {
    return (
      <React.Fragment key={index}>
        <DropdownItem>
          <LinksDrop
            to={link.to}
            smooth={"true"}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            {link.content}
          </LinksDrop>
        </DropdownItem>
      </React.Fragment>
    );
  });

  return (
    <BrowserRouter>
      <Container>
        <FormWrap>
          <Form rtl={content.rtl}>
            <FormH1>
              {content.formh1}
              <RiContactsLine
                size={23}
                style={{ marginLeft: "6px", marginRight: "6px" }}
              />
            </FormH1>
            <RowDiv
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                padding: "20px 20px",
              }}
            >
              <ColumnDiv>
                <span style={{ fontSize: "20px" }}>ד"ר חיים</span>
                <span style={{ marginTop: "15px" }}>haim13@gmail.com</span>
                <RowDiv>
                  <ColumnDiv>
                    <span style={{ fontWeight: "bold" }}>
                      {content.balance}
                    </span>
                    <spn>0.00</spn>
                  </ColumnDiv>
                  <ColumnDiv>
                    <span style={{ fontWeight: "bold" }}>
                      {content.lastpayment}
                    </span>
                    <spn>0.00</spn>
                  </ColumnDiv>
                </RowDiv>
              </ColumnDiv>
              <ColumnDiv>
                <RowDiv>
                  <ColumnDiv>
                    <FormButton>{content.edit}</FormButton>
                  </ColumnDiv>
                  <ColumnDiv>
                    <React.Fragment>
                      <DropdownNew rtl={content.rtl}>
                        <Button
                          activeClass="active"
                          style={{
                            backgroundColor: "transparent",
                            letterSpacing: "0.04em",
                            border: "1px solid grey",
                            color: "grey",
                          }}
                          dropdownToggle
                          onClick={() => setHidden(!hidden)}
                        >
                          {content.moreactions + "  "}
                        </Button>
                        <DropdownMenu
                          style={{ direction: content.rtl }}
                          hidden={hidden}
                          toggle={() => setHidden(!hidden)}
                        >
                          {renderDropDownItems}
                        </DropdownMenu>
                      </DropdownNew>
                    </React.Fragment>
                  </ColumnDiv>
                </RowDiv>
              </ColumnDiv>
            </RowDiv>
            <Navbar
              toggle={toggle}
              locale={props.locale}
              content={content.navbar}
            />
            <Row>
              <Switch>
                <Route
                  path={
                    "/" + props.locale + "/contoteqapp/customersinfo/invoices"
                  }
                  exact
                  render={(propRouter) => (
                    <InvoicesTable {...propRouter} {...props} />
                  )}
                />
              </Switch>
            </Row>
          </Form>
        </FormWrap>
      </Container>
    </BrowserRouter>
  );
};

export default CustomersInfo;
