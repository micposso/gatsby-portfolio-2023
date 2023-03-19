import * as React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
  return (

    <Layout pageTitle="Home Page">

    <main>
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </main>

    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage