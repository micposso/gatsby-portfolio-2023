import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Link } from "gatsby";
import MonsterProjects from "../assets/monster-6.svg";

import RINGS from "vanta/dist/vanta.rings.min";

const colors = [
  {
    NodeJs: "#ac4b8d",
    Cloud: "#16ffff",
    ReactJs: "#ff255c",
    TypeScript: "#ffee25"
  }
]

const projects = [
  {
    src: "http://via.placeholder.com/640x360",
    link: "/page1",
    title: "Curabitur et mi metus",
    description:
      "Curabitur et mi metus. Quisque dignissim et lacus sit amet blandit. Aenean id consectetur quam.",
    technologies: ["NodeJS", "Cloud", "ReactJS", "TypeScript"],
    image: require("../static/project-image-1.jpg").default
  },
  {
    src: "http://via.placeholder.com/640x360",
    link: "/page2",
    title: "Curabitur et mi metus",
    description:
      "Curabitur et mi metus. Quisque dignissim et lacus sit amet blandit. Aenean id consectetur quam.",
    technologies: ["NodeJS", "Cloud", "ReactJS", "TypeScript"],
    image: require("../static/project-image-2.jpg").default
  },
  {
    src: "http://via.placeholder.com/640x360",
    link: "/page3",
    title: "Curabitur et mi metus",
    description:
      "Curabitur et mi metus. Quisque dignissim et lacus sit amet blandit. Aenean id consectetur quam.",
    technologies: ["NodeJS", "Cloud", "ReactJS", "TypeScript"],
    image: require("../static/project-image-1.jpg").default
  },
  {
    src: "http://via.placeholder.com/640x360",
    link: "/page4",
    title: "Curabitur et mi metus",
    description:
      "Curabitur et mi metus. Quisque dignissim et lacus sit amet blandit. Aenean id consectetur quam.",
    technologies: ["NodeJS", "Cloud", "ReactJS", "TypeScript"],
    image: require("../static/project-image-1.jpg").default
  },
];

function getColor(str) {
  for (let i = 0; i < colors.length; i++) {
    const colorObj = colors[i]
    for (const key in colorObj) {
      if (key.toLowerCase() === str.toLowerCase()) {
        return colorObj[key]
      }
    }
  }
  return null
}

const Projects = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={myRef}
      className="scroll-child d-flex align-items-center justify-content-center"
      id="projects"
    >
      <Container className="container-gradient container-text">
        <Row>
          <Col xs={12} md={12} lg={4}>
            <h1>
              <i>Projects</i>
            </h1>
          </Col>
          <Col xs={12} md={12} lg={8}>
            <p>
              In hac habitasse platea dictumst. Phasellus tristique lacus quis
              eros cursus faucibus. Proin odio velit, pulvinar at rhoncus non,
              tempor ac erat. Fusce congue augue vitae volutpat scelerisque.
              Aliquam et vehicula tortor. Curabitur in volutpat risus, eget
              mollis leo. Donec non placerat urna. Pellentesque tincidunt
              venenatis imperdiet. Fusce sodales enim eget ipsum commodo
              eleifend.
            </p>
          </Col>
        </Row>
        <Row className="projectCards">
          {projects.map((project, index) => (
            <Col key={index} xs={12} md={6} lg={4} xl={3}>
              <Card style={{ width: "100%", backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${project.image})` }}>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Text>
                    {project.technologies.map((technology, index) => (
                      <Badge bg="" style={{ backgroundColor: getColor(technology) }} className="me-2" key={index}>{technology}</Badge>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {/* <div className="overlay"></div>*/}

      <MonsterProjects className="monster-projects" />
    </div>
  );
};

export const Head = () => <title>About Me</title>;

export default Projects;
