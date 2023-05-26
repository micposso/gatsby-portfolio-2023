import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { IoLogoJavascript } from "react-icons/io";
import { DiReact } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiD3Dotjs } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { BsWordpress } from "react-icons/bs";
import { SiMysql } from "react-icons/si";

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
`;

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
              <i>~Skills</i>
            </h1>
          </Col>
          <Col xs={12} md={12} lg={8}>
            <p>
              <span className="text-uppercase">
                With a full dozen years of navigating the web development seas
              </span>
              , I've honed my skills in HTML, CSS, JavaScript, and React for
              responsive front-end designs. I adeptly use Node.js, PHP, SQL,
              NoSQL, and Docker, integrating project management and Scrum
              methodologies into my ship. My expertise also spans version
              control/Git, debugging, UX/UI principles, SEO optimization, and
              email marketing.
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
                      I employ WordPress and React to build responsive,
                      enterprise-level websites for Fortune 500 companies.
                      Leveraging my expertise in these tools, I transform
                      complex requirements into high-performance digital
                      experiences, ensuring cross-device compatibility, seamless
                      user journeys, robust security, and high scalability to
                      drive business growth.
                    </p>
                  </Col>
                  <Col>
                    <BsWordpress className="tech-icons" />
                    <IoLogoJavascript className="tech-icons" />
                    <SiTypescript className="tech-icons" />
                    <DiReact className="tech-icons" />
                    <SiTailwindcss className="tech-icons" />
                    <DiSass className="tech-icons" />
                    <SiD3Dotjs className="tech-icons" />
                    <SiMysql className="tech-icons" />
                  </Col>
                </Row>
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h3>Agile Project Management</h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                As a web developer and team leader, I excel in establishing
                high-performance development teams. Utilizing Agile and Scrum
                methodologies, we promote continuous improvement, fueled by
                tools like Jira for task tracking and clear communication. This
                framework optimizes development cycles, supports adaptability,
                and ensures quality deliverables. My leadership revolves around
                effective communication, problem-solving, and fostering
                innovation. We surpass our objectives through this comprehensive
                approach to project management, delivering top-tier, innovative
                digital solutions.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h3>Cloud & DevOps</h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                I leverage Docker and advanced Git workflows to establish
                continuous delivery pipelines for enterprise-level websites and
                applications. Docker streamlines development by creating a
                consistent, isolated environment, enhancing scalability and
                deployment speed. Git, with its advanced workflows, ensures
                smooth version control, facilitating collaboration. By
                integrating these tools, I automate and optimize delivery
                processes, enabling frequent, reliable releases, reducing the
                time to market, and increasing the ability to respond to
                changes, thus driving operational efficiency and business value.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h3>Digital Marketing</h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                I integrate my SEO and email marketing acumen into
                enterprise-level website creation, aligning digital strategies
                with business requirements. My SEO knowledge ensures optimized
                site structure, load speed, and content for better search engine
                rankings. Leveraging email marketing, I facilitate user
                engagement, retention, and conversion. This amalgamation of
                technical and digital marketing skills allows me to build
                robust, high-performing websites that boost online visibility,
                drive customer interaction, and ultimately contribute to
                business growth.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h3>Unity Development</h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                I leverage Unity and C# to create immersive VR, AR, and mixed
                reality experiences for educational and training simulations. By
                combining Unity's powerful development platform with C#'s
                flexibility, I build interactive environments that enhance
                learning. I utilize Blender for crafting intricate 3D models,
                ensuring visually captivating and realistic simulations.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

      <MonsterSkills
        className="monster-skills"
        ref={ref}
        css={isVisible ? monsterIn : null}
      />
    </div>
  );
};

export const Head = () => <title>Web Development</title>;

export default Skills;
