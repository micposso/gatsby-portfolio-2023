import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import MonsterSkills from "../assets/monster-2.svg";
import MonsterProjects from "../assets/monster-3.svg";
import MonsterTeaching from "../assets/monster-4.svg";
import MonsterMarketing from "../assets/monster-5.svg";
import Monster6 from "../assets/monster-6.svg";

import WAVES from "vanta/dist/vanta.waves.min";

const Intro = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x0,
          shininess: 6.0,
          waveHeight: 11.0,
          waveSpeed: 0.55,
          zoom: 1.13,
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
    >
      <Container className="container-gradient container-text">
        <Row>
          <Col xs={12} md={12} lg={4}>
            <h1>
              <i>The Code<br/>Monsters</i>
            </h1>
          </Col>
          <Col xs={12} md={12} lg={8}>
            <p>
            <span className="text-uppercase">As a web developer</span>, I am an intrepid sailor charting the vast digital ocean. With a compass of HTML, CSS, and JavaScript, I navigate the turbulent waves of coding challenges. Equipped with problem-solving tools like debugging and unit testing, I brave a sea of monsters like bugs, outdated documentation, and tight deadlines, taming them with skillful precision. I specialized in the following eras for front-end development and digital marketing:
            </p>
          </Col>
        </Row>
        <Row className="introCards py-4">
          <Col xs={12} md={6} lg={3} className="text-center">
            <MonsterProjects className="monster-item" />
            <h4>
            UX/UI 
              <br />
              <i>Engineering</i>
            </h4>
          </Col>
          
          <Col xs={12} md={6} lg={3} className="text-center">
            <MonsterTeaching className="monster-item" />
            <h4>
            Agile Project
              <br />
              <i> Management</i>
            </h4>
          </Col>
          <Col xs={12} md={6} lg={3} className="text-center">
            <MonsterMarketing className="monster-item" />
            <h4>
            Email<br />
              <i>Marketing & SEO</i>
            </h4>
          </Col>
          <Col xs={12} md={6} lg={3} className="text-center">
            <Monster6 className="monster-item" />
            <h4>
            Performance              <br />
              <i>& a11y</i>
            </h4>
          </Col>
        </Row>
      </Container>
      {/* <div className="overlay"></div>*/}
    </div>
  );
};

export const Head = () => <title>Intro</title>;

export default Intro;
