import React, { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import "./header.scss";

const Header = () => {  
  return (
    <>
      <Menu id="Header-mainMenu" className="Header-mainMenu">
        <Menu.Item>New</Menu.Item>
        <Menu.Item>View</Menu.Item>
        <Menu.Item>Delete</Menu.Item>
        <Menu.Item>Refresh</Menu.Item>
      </Menu>
    </>
  );
};

export default Header;
