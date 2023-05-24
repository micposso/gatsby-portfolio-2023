import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import MonsterTeaching from "../assets/monster-4.svg";

import BIRDS from "vanta/dist/vanta.birds.min";

const Teaching = ({ links }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
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
      id="teaching"
    >
      <Container className="container-gradient container-text">
        <Row>
          <Col xs={12} md={12} lg={4}>
            <h1>
              <i>Teaching</i>
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
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h3>Technology Curriculum Development</h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h3>Fashion Institute of Technology</h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h3>New York Institute of Technology</h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h3>Miami University</h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Row></Row>
      </Container>
      <MonsterTeaching className="monster-teaching" />
    </div>
  );
};

export const Head = () => <title>About Me</title>;

export default Teaching;
