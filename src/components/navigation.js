import React from "react";
import * as navigationStyles from "./navigation.module.css"

const Navigation = ({ links }) => {
  console.log(links);
  return (

<header className={navigationStyles.navigation}>
    <div className="container d-flex align-items-center justify-content-between">

      <h1 className="logo"><a href="index.html">DevFolio</a></h1>
      <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>

      <nav id="navbar" className="navbar">
        <ul>

        {links.map((link, index) => (
          <li key={index}>
            <a className="nav-link scrollto active" href={link.to}>{link.label}</a>
          </li>
        ))}



        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  );
};

export default Navigation;
