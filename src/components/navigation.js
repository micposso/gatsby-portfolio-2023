import React from "react";
import { DiGithubAlt } from 'react-icons/di'
import { TiSocialLinkedin } from 'react-icons/ti'
import { TbPdf } from 'react-icons/tb'

import Nav from "react-bootstrap/Nav";

const Navigation = ({ links }) => {
  console.log(links);
  return (
    <>
      <Nav
        activeKey="/home"
        className="navbarFixed justify-content-between"
      >
        <div className="nav_brand-left vertical-text">
          <div className="nav_brand">
            <div className="nav_brand-name">michael posso</div>
            <div className="nav_brand-subtitle">
              Engineering Manager | Tech Educator | UI Developer
            </div>
          </div>
        </div>
        <div className="nav_menu-items">
          {links.map((link, index) => (
            <Nav.Item key={index}>
              <Nav.Link href={`#${link.to}`}>{link.label} /</Nav.Link>
            </Nav.Item>
          ))}
        </div>
        <div className="nav_external-links-container">
<DiGithubAlt className="external-links-icons" />
<TiSocialLinkedin className="external-links-icons" />
<TbPdf className="external-links-icons" />
        </div>
      </Nav>
    </>
  );
};

export default Navigation;
