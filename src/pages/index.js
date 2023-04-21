import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './home'
import Resume from './resume'
import Blog from './blog'
import Navigation from '../components/navigation'

const IndexPage = () => {

  const links = [
    { to: "#home", label: "Home" },
    { to: "#Skills", label: "Skills" },
    { to: "#projects", label: "Projects" },
    { to: "#teaching", label: "Teaching" },
    { to: "#blog", label: "blog" },
  ];

  return (
    <div>
      <Navigation links={links}/>
      <Home/>
      <Resume/>
      <Blog/>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
