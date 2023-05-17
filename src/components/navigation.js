import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { DiGithubAlt } from "react-icons/di";
import { TiSocialLinkedin } from "react-icons/ti";
import { TbPdf } from "react-icons/tb";
import { Navbar, Nav, Container } from "react-bootstrap";

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
      <Navbar
        expand="lg"
        activeKey="/home"
        className="navbarFixed justify-content-between"
      >
        <Container fluid>
          <Navbar.Brand href="#home" className="nav_brand-left">
              <div className="nav_brand-name fs-1">{name}</div>
              <div className="nav_brand-subtitle fs-6">{brand}</div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse className="nav_menu-items" id="navbar-nav">
            <Nav className="ml-auto">
              {menu.map(({ to, label, index }) => (
                <Nav.Link href={`#${to}`}>{label} /</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="nav_external-links-container">
        {console.log(social[0].to)}
        <a href={social[0].to}>
          <DiGithubAlt className="external-links-icons" />
        </a>
        <a href={social[1].to}>
          <TiSocialLinkedin className="external-links-icons" />
        </a>
        <a href={social[2].to}>
          <TbPdf className="external-links-icons" />
        </a>
      </div>
    </>
  );
};

export default Navigation;
