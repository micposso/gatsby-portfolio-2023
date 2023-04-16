import React from 'react'

import Home from './home'
import Resume from './resume'
import Blog from './blog'
import Navigation from '../components/navigation'

const IndexPage = () => {

  const links = [
    { to: "#home", label: "Home" },
    { to: "#resume", label: "resume" },
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
