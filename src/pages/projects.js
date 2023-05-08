import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Link } from "gatsby";
import MonsterProjects from "../assets/monster-3.svg";

import RINGS from "vanta/dist/vanta.rings.min";

const projects = [
  {
    src: "http://via.placeholder.com/640x360",
    link: "/page1",
    title: "Curabitur et mi metus",
    description:
      "Curabitur et mi metus. Quisque dignissim et lacus sit amet blandit. Aenean id consectetur quam.",
    technologies: ["NodeJS", "Cloud", "ReactJS", "TypeScript"],
  },
  {
    src: "http://via.placeholder.com/640x360",
    link: "/page2",
    title: "Curabitur et mi metus",
    description:
      "Curabitur et mi metus. Quisque dignissim et lacus sit amet blandit. Aenean id consectetur quam.",
    technologies: ["NodeJS", "Cloud", "ReactJS", "TypeScript"],
  },
  {
    src: "http://via.placeholder.com/640x360",
    link: "/page3",
    title: "Curabitur et mi metus",
    description:
      "Curabitur et mi metus. Quisque dignissim et lacus sit amet blandit. Aenean id consectetur quam.",
    technologies: ["NodeJS", "Cloud", "ReactJS", "TypeScript"],
  },
  {
    src: "http://via.placeholder.com/640x360",
    link: "/page4",
    title: "Curabitur et mi metus",
    description:
      "Curabitur et mi metus. Quisque dignissim et lacus sit amet blandit. Aenean id consectetur quam.",
    technologies: ["NodeJS", "Cloud", "ReactJS", "TypeScript"],
  },
];

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
      id="resume"
    >
      <Container className="container-gradient container-text">
        <Row>
          <Col>
            <h1>
              <i>Projects</i>
            </h1>
          </Col>
          <Col>
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
        <Row>
          {projects.map((project, index) => (
            <Col key={index} xs={6} md={4} lg={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={project.src} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Text>
                    {project.technologies.map((technology, index) => (
                      <Badge bg="secondary" key={index}>{technology}</Badge>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="background-monsters">
        <MonsterProjects className="monster-skills" />
      </div>
    </div>
  );
};

export const Head = () => <title>About Me</title>;

export default Projects;
