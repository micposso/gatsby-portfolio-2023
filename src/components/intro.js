import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import MonsterSkills from "../assets/monster-2.svg";
import MonsterProjects from "../assets/monster-3.svg";
import MonsterTeaching from "../assets/monster-4.svg";
import Monster5 from "../assets/monster-5.svg";
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
          <Col>
            <h1>
              <i>The Monsters</i>
            </h1>
          </Col>
          <Col>
            <p>
            <span className="text-uppercase">As a web developer</span>, I am an intrepid sailor charting the vast digital ocean. With a compass of strong foundations, I navigate the turbulent waves of coding challenges. Equipped with problem-solving tools, I brave a sea of monsters of bugs, outdated documentation, and tight deadline,  taming them with skillful precision. Forever a student of the craft, I set sail on a never-ending voyage of learning, seeking to conquer new horizons and master the ever-changing tides of technology.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <MonsterProjects className="monster-item" />
            <h4>
              Technical 
              <br />
              <i>Leardership</i>
            </h4>
          </Col>
          <Col className="text-center">
            <Monster6 className="monster-item" />
            <h4>
              Problem
              <br />
              <i>Solving</i>
            </h4>
          </Col>
          <Col className="text-center">
            <MonsterTeaching className="monster-item" />
            <h4>
              Knowledge
              <br />
              <i>& Learning</i>
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
