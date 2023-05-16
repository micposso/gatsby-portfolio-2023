import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { DiGithubAlt } from "react-icons/di";
import { TiSocialLinkedin } from "react-icons/ti";
import { TbPdf } from "react-icons/tb";

import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  const {
    site: {
      siteMetadata: { name, brand, siteUrl, description, menu, social },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
          brand
          siteUrl
          description
          menu {
            to
            label
          }
          social {
            to
            label
          }
        }
      }
    }
  `);

  return (
    <>
      <Nav activeKey="/home" className="navbarFixed justify-content-between">
        <div className="nav_brand-left vertical-text">
          <div className="nav_brand">
            <div className="nav_brand-name">{name}</div>
            <div className="nav_brand-subtitle">{brand}</div>
          </div>
        </div>
        <div className="nav_menu-items">
          {menu.map(({ to, label, index }) => (
            <Nav.Item key={index}>
              <Nav.Link href={`#${to}`}>{label} /</Nav.Link>
            </Nav.Item>
          ))}
        </div>
        <div className="nav_external-links-container">
          {console.log(social[0].to)}
          <a href={social[0].to}>
            <DiGithubAlt className="external-links-icons" />
          </a>
          <a href={social[1].to}><TiSocialLinkedin className="external-links-icons" /></a>
          <a href={social[2].to}><TbPdf className="external-links-icons" /></a>
        </div>
      </Nav>
    </>
  );
};

export default Navigation;
