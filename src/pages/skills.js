import React, { useState, useEffect, useRef } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";

import MonsterSkills from "../assets/monster-2.svg";

import NET from "vanta/dist/vanta.net.min";

const Skills = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={myRef}>
      <div
        className="scroll-child d-flex align-items-center justify-content-center"
        id="skills"
      >
        <Container
          className="container-gradient container-text"
        >
          <Row>
            <Col>
              <h1><i>Skills</i></h1>
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
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h3>Web Development</h3>
              </Accordion.Header>
              <Accordion.Body>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h3>Technical Project Management</h3>
              </Accordion.Header>
              <Accordion.Body>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h3>Cloud & DevOps</h3>
              </Accordion.Header>
              <Accordion.Body>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h3>Digital Marketing</h3>
              </Accordion.Header>
              <Accordion.Body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Row></Row>
        </Container>
        <div className="background-monsters">
          <MonsterSkills className="monster-skills" />
        </div>
      </div>
    </div>
  );
};

export const Head = () => <title>About Me</title>;

export default Skills;
