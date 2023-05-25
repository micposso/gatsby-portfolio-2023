import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Profile from "../images/profile-full-engraving.png";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithubAlt } from "react-icons/fa";
import { VscFilePdf } from "react-icons/vsc";
import { css } from "@emotion/react";

import FOG from "vanta/dist/vanta.fog.min";

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

const About = () => {
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
        FOG({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x5c5643,
          midtoneColor: 0x110202,
          lowlightColor: 0x60597d,
          baseColor: 0x644e46,
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
      id="about"
    >
      <Container className="container-gradient container-text" css={isVisible ? fadeIn : null}
>
        <Row>
          <Col lg={4} md={12} className="d-flex justify-content-center align-items-center">
            <div className="about-image-container">
              <img
                className=""
                src={Profile}
                alt="michael posso profile picture"
              />
            </div>
          </Col>
          <Col lg={8} md={12}>
            <h3><i>About me</i></h3>
            <p>
            Experienced and dedicated JavaScript full-stack developer with over 10 years of expertise in creating enterprise online experiences. I prioritize writing maintainable code with a DevOps-first mindset. My formal art and design training ensures a user-centric approach, delivering valuable designs and applications. I have also taught workshops and courses both in-person and online at renowned institutions. The advent of virtual reality has opened new horizons, allowing me to explore immersive coding and user interfaces. Let's embark on a journey together, pushing the boundaries of web development with professionalism and passion.
            </p>
            <br />
            <h3><i>Contact</i></h3>
            <p>
              micposso@gmail.com
              <br />
              Code Ideas LLC
            </p>
            <h3><i>Socials</i></h3>
            <GrLinkedinOption className="tech-icons" />
            <FaGithubAlt className="tech-icons" />
            <VscFilePdf className="tech-icons" />
          </Col>
        </Row>
      </Container>
      {/* <div className="overlay"></div>*/}
    </div>
  );
};

export const Head = () => <title>About</title>;

export default About;
