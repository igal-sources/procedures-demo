import React, { useState } from "react";
import { Menu, Icon, Image } from "semantic-ui-react";
import new_procedure from "../../../images/32_new_procedure.png";
import view_procedure from "../../../images/32_view_procedure.png";
import delete_procedure from "../../../images/32_delete_procedure.png";
import refresh_procedure from "../../../images/refresh_32x32.png";
import "./header.scss";

const Header = () => {
  return (
    <>
      <Menu className="Header-mainMenu">
        <Menu.Item as="a">
          <div>
          <Image src={new_procedure} />   
          <span className="Header-title">New</span>
          </div>
        </Menu.Item>
        <Menu.Item as="a">
          <div>
          <Image src={view_procedure} />   
          <span className="Header-title">View</span>
          </div>
        </Menu.Item>
        <Menu.Item as="a">
          <div>
          <Image src={delete_procedure} />   
          <span className="Header-title">Delete</span>
          </div>
        </Menu.Item>
        <Menu.Item as="a">
          <div>
          <Image src={refresh_procedure} />   
          <span className="Header-title">Refresh</span>
          </div>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Header;
