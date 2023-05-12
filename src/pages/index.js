import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import PreloaderComponent from "../components/preloader";
import Navigation from '../components/navigation'
import Home from '../components/home'
import Intro from '../components/intro'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Teaching from '../components/teaching'
import Blog from '../components/blog'


const IndexPage = () => {

  const links = [
    { to: "skills", label: "skills" },
    { to: "projects", label: "projects" },
    { to: "teaching", label: "teaching" },
    { to: "blog", label: "blog" },
  ];

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <PreloaderComponent />
      ) : (
      <>
      <Navigation links={links}/>
      <Home/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Teaching/>
      <Blog/>
      </>
      )};
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Michael Posso | Web Developer</title>
