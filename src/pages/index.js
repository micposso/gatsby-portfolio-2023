import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet"


import PreloaderComponent from "../components/preloader";
import Navigation from "../components/navigation";
import Home from "../components/home";
import Intro from "../components/intro";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Teaching from "../components/teaching";
import Blog from "../components/blog";
import About from "../components/about";

const IndexPage = () => {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mainContentWrapper">
      <Helmet>
        <meta name="icon" href="../static/favicon.ico" />
      </Helmet>
      {loading ? (
        <PreloaderComponent />
      ) : (
      <>

      <Navigation />
      <Home/>
      <Intro/>
      <Skills/>
      {/* <Projects/> */}
      <Teaching/>
      {/* <Blog/> */}
      <About/>
      </>
      )};
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Michael Posso | Web Developer</title>;
