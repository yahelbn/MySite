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
import {} from "./SideBarElements";
import Hamburger from "hamburger-react";
import gradient from "../../images/gradient.png";
import { IoIosPeople } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { BiReceipt } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { HiDocumentDownload } from "react-icons/hi";
const SideBar = ({ toggle }) => {
  const [hamburgerIsOpen, setHamburgerOpen] = useState(false);

  return (
    <>
      <div style={{ height: "100vh" }}>
        <ProSidebar collapsed={!hamburgerIsOpen} image={gradient} rtl={true}>
          <SidebarHeader>
            <Menu>
              <MenuItem
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
                תפריט
              </MenuItem>
            </Menu>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="circle">
              <MenuItem icon={<TiMessages size={17} />}>הודעות כלליות</MenuItem>
              <SubMenu title="לקוחות" icon={<IoIosPeople size={17} />}>
                <MenuItem>הוספת לקוח</MenuItem>
                <MenuItem>לקוחות קיימים</MenuItem>
              </SubMenu>

              <SubMenu title="חשבוניות" icon={<HiDocumentDownload size={17} />}>
                <SubMenu
                  title="שליחת חשבוניות"
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
                  <MenuItem>חשבונית מס</MenuItem>
                  <MenuItem>חשבונית עסקה</MenuItem>
                </SubMenu>
                <MenuItem>מעקב חשבוניות</MenuItem>
              </SubMenu>

              <SubMenu title="קבלות" icon={<BiReceipt size={17} />}>
                <MenuItem>שליחת קבלות</MenuItem>
                <MenuItem>מעקב קבלות</MenuItem>
              </SubMenu>
            </Menu>
          </SidebarContent>

          <SidebarFooter>
            <Menu>
              <MenuItem icon={<FiSettings size={19} />}>הגדרות</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBar;
