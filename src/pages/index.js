import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './home'
import Skills from './skills'
import Projects from './projects'
import Resume from './resume'
import Blog from './blog'
import Navigation from '../components/navigation'

const IndexPage = () => {

  const links = [
    { to: "#Skills", label: "skills" },
    { to: "#projects", label: "projects" },
    { to: "#teaching", label: "teaching" },
    { to: "#blog", label: "blog" },
  ];

  return (
    <div>
      <Navigation links={links}/>
      <Home/>
      <Skills/>
      <Projects/>
      <Resume/>
      <Blog/>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
