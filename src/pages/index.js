import React from 'react'
import Home from './home'
import About from './about'

const IndexPage = () => {
  return (
    <div>
    <Home/>
    <About/>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
