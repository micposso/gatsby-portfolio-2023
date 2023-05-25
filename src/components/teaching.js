import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import MonsterTeaching from "../assets/monster-4.svg";
import { css } from "@emotion/react";

import BIRDS from "vanta/dist/vanta.birds.min";

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

const Teaching = () => {
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
              With 7 years of education experience, I chart courses in the vast
              sea of tech education for eager learners and college students. My
              compass? A meticulously crafted curriculum filled with fundamental
              skills and the latest technological advancements. My teachings,
              filled with sailor wisdom, set sail in the minds of learners,
              equipping them to confidently navigate the ever-changing digital
              seascape.
            </p>
          </Col>
        </Row>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h3>Fashion Institute of Technology</h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                As an instructor in the Creative Technology department at FIT, I
                lead an array of courses on cutting-edge topics. In UX/UI
                Design, I guide students in leveraging virtual reality to create
                immersive experiences. For Web Development, I teach the nuances
                of WordPress and Webflow, empowering students to build and
                manage modern websites. Lastly, in my 3D Brand Design course,
                students learn to use Blender and Unity for creating compelling
                brand assets. My curriculum blends theory with hands-on
                practice, preparing students to excel in these dynamic fields.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h3>New York Institute of Technology</h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                As an adjunct professor in the Master's program for UX/UI, I
                orchestrate in-depth courses marrying coding, design, and user
                interface principles. Through instructive modules on HTML, CSS,
                JavaScript, and React, I empower students to build visually
                captivating, user-friendly digital interfaces. I also teach Git
                and GitHub, ensuring students master version control and
                collaborative development practices. My curriculum fuses theory
                with hands-on application, fostering a deep understanding of
                user-centric design and modern development workflows. My mission
                is to cultivate future UX/UI professionals who excel in creating
                engaging, seamless digital experiences.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h3>Curriculum Development</h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                With my extensive web development expertise, I harness
                technology and industry knowledge to craft curriculum for high
                school, college, and graduate courses. I dissect intricate
                concepts into digestible lessons, integrating emerging tech
                trends to keep the content current. My curriculum aims to bridge
                the gap between theory and practice, offering students hands-on
                experience and a profound understanding of real-world
                applications. I'm dedicated to fostering an innovative learning
                environment that prepares students for future tech careers.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Row></Row>
      </Container>
      <MonsterTeaching className="monster-teaching" ref={ref}
        css={isVisible ? monsterIn : null}/>
    </div>
  );
};

export const Head = () => <title>Teaching Experience</title>;

export default Teaching;
