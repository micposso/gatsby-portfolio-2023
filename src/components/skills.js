import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { IoLogoJavascript } from "react-icons/io";
import { DiReact } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiD3Dotjs } from "react-icons/si";
import { DiSass } from "react-icons/di";

import { css } from "@emotion/react";

import MonsterSkills from "../assets/monster-3.svg";

import NET from "vanta/dist/vanta.net.min";

const fadeIn = css`
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fade-in 1s ease-out;
`;

const monsterIn = css`
@keyframes monster-in {
  from {
    right: -25%;
  }
  to {
    right: -10%;
  }
}

animation: monster-in 1s ease-out;
`

const Skills = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

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
    <div
      ref={myRef}
      className="scroll-child d-flex align-items-center justify-content-center"
      id="skills"
    >
      <Container
        className="container-gradient container-text"
        ref={ref}
        css={isVisible ? fadeIn : null}
      >
        <Row>
          <Col xs={12} md={12} lg={4}>
            <h1>
              <i>Skills</i>
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
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h3>Web Development</h3>
            </Accordion.Header>
            <Accordion.Body>
              <Container>
                <Row>
                  <Col>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </Col>
                  <Col>
                    <IoLogoJavascript className="tech-icons" />
                    <SiTailwindcss className="tech-icons" />
                    <DiSass className="tech-icons" />
                    <DiReact className="tech-icons" />
                    <SiTypescript className="tech-icons" />
                    <SiD3Dotjs className="tech-icons" />

                  </Col>
                </Row>
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h3>Technical Project Management</h3>
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
              <h3>Cloud & DevOps</h3>
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
              <h3>Digital Marketing</h3>
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

      <MonsterSkills className="monster-skills" ref={ref}
        css={isVisible ? monsterIn : null} />
    </div>
  );
};

export const Head = () => <title>About Me</title>;

export default Skills;
