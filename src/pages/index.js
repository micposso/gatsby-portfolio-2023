import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import PreloaderComponent from "../components/preloader";
import Home from '../components/home'
import Navigation from '../components/navigation'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Resume from '../components/resume'
import Blog from '../components/blog'


const IndexPage = () => {

  const links = [
    { to: "#Skills", label: "skills" },
    { to: "#projects", label: "projects" },
    { to: "#teaching", label: "teaching" },
    { to: "#blog", label: "blog" },
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
      <Skills/>
      <Projects/>
      <Resume/>
      <Blog/>
      </>
      )};
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Michael Posso | Web Developer</title>
