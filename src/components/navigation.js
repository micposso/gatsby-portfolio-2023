import React from "react";
import { Link } from "gatsby";

const Navigation = ({ links }) => {
  console.log(links);
  return (
    <div class="container-fluid top-navigation">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {links.map((link, index) => (
          <li key={index}>
            <a className="navbar-brand" href={link.to}>{link.label}</a>
          </li>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
