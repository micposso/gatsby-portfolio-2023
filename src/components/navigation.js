import React from "react";
import Nav from 'react-bootstrap/Nav';

import * as navigationStyles from "./navigation.module.css";

const Navigation = ({ links }) => {
  console.log(links);
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      className={`${navigationStyles.navbarFixed} navbarFixed justify-content-end`}
    >
      {links.map((link, index) => (
        <Nav.Item key={index}>
          <Nav.Link href={link.to}>{link.label}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default Navigation;
