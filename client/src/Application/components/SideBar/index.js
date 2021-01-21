import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {
  SwitchContainer,
  Header,
  SubHeader,
  RowSwitch,
  textSwitch,
} from "./SideBarElements";
import Hamburger from "hamburger-react";
import gradient from "../../images/gradient.png";
import { IoIosPeople } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { BiReceipt } from "react-icons/bi";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { HiDocumentDownload } from "react-icons/hi";
import Switch from "react-switch";

const SideBar = ({ logOutPressed, content }) => {
  const [hamburgerIsOpen, setHamburgerOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div style={{ height: "100vh" }}>
        <ProSidebar
          collapsed={!hamburgerIsOpen}
          image={gradient}
          rtl={content.rtl}
        >
          <SidebarHeader>
            <Menu>
              <MenuItem
                icon={
                  <Hamburger
                    rounded
                    toggled={hamburgerIsOpen}
                    toggle={setHamburgerOpen}
                    // direction="right"
                    duration={0.8}
                  />
                }
              >
                <SwitchContainer>
                  <Header>שם משתמש</Header>
                  <SubHeader>שם חברה</SubHeader>
                  <RowSwitch rtl={content.rtl}>
                    <textSwitch>{content.customer}</textSwitch>
                    <div style={{}}>
                      <Switch
                        checked={checked}
                        onChange={setChecked}
                        onColor="#dcd9c6"
                        onHandleColor="#D0CCB5"
                        offHandleColor="#D0CCB5"
                        handleDiameter={30}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={48}
                      />
                    </div>
                    <textSwitch>{content.vendor}</textSwitch>
                  </RowSwitch>
                </SwitchContainer>
              </MenuItem>
            </Menu>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="circle">
              <MenuItem icon={<TiMessages size={17} />}>
                {content.messages}
              </MenuItem>
              <SubMenu
                title={content.customers}
                icon={<IoIosPeople size={17} />}
              >
                <MenuItem>{content.addingacustomer}</MenuItem>
                <MenuItem>{content.existingclients}</MenuItem>
              </SubMenu>

              <SubMenu
                title={content.invoices}
                icon={<HiDocumentDownload size={17} />}
              >
                <SubMenu
                  title={content.sendinginvoices}
                  icon={
                    <Hamburger
                      rounded
                      toggled={hamburgerIsOpen}
                      toggle={setHamburgerOpen}
                      direction="right"
                      duration={0.8}
                    />
                  }
                >
                  <MenuItem>{content.transactioninvoice}</MenuItem>
                  <MenuItem>{content.proformatax}</MenuItem>
                </SubMenu>
                <MenuItem>{content.invoicetracking}</MenuItem>
              </SubMenu>

              <SubMenu title={content.receipts} icon={<BiReceipt size={17} />}>
                <MenuItem>{content.sendingreceipts}</MenuItem>
                <MenuItem>{content.trackingreceipts}</MenuItem>
              </SubMenu>
              <div onClick={() => setHamburgerOpen(!hamburgerIsOpen)}>
                <MenuItem
                  icon={
                    hamburgerIsOpen ? (
                      <BsArrowLeftShort
                        rounded
                        toggled={hamburgerIsOpen}
                        toggle={setHamburgerOpen}
                        size={20}
                        duration={0.8}
                      />
                    ) : (
                      <BsArrowRightShort
                        rounded
                        toggled={hamburgerIsOpen}
                        toggle={setHamburgerOpen}
                        size={20}
                        duration={0.8}
                      />
                    )
                  }
                >
                  {content.minimizemenu}
                </MenuItem>
              </div>

              <MenuItem icon={<FiSettings size={17} />}>
                {content.settings}
              </MenuItem>
            </Menu>
          </SidebarContent>

          <SidebarFooter>
            <Menu>
              <div onClick={logOutPressed}>
                <MenuItem icon={<FiLogOut size={17} />}>
                  {content.logout}
                </MenuItem>
              </div>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBar;
