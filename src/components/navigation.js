import React from "react";

import Nav from 'react-bootstrap/Nav';

const Navigation = ({ links }) => {
  console.log(links);
  return (
    <>
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      className="navbarFixed justify-content-between"
    >
      <div className="nav_brand-left vertical-text">
        <div className="nav_brand">
        <div className="nav_brand-name">michael posso</div>
      <div className="nav_brand-subtitle">Engineering Manager | Tech Educator | UI Developer</div>
        </div>
   
      </div>
      <div className="nav_menu-items">
      {links.map((link, index) => (
        <Nav.Item key={index}>
          <Nav.Link href={link.to}>{link.label}</Nav.Link>
        </Nav.Item>
      ))}
      </div>
    </Nav>

    </>
  );
};

export default Navigation;
