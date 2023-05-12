import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import MonsterSkills from "../assets/monster-2.svg";
import MonsterProjects from "../assets/monster-3.svg";
import MonsterTeaching from "../assets/monster-4.svg";

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
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x0,
          shininess: 6.00,
          waveHeight: 11.00,
          waveSpeed: 0.55,
          zoom: 1.13
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
          <Col>
            <h1>
              <i>The Monsters</i>
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
  
        </Row>
      </Container>
      {/* <div className="overlay"></div>*/}

      <MonsterSkills className="monster-skills" />
      <MonsterProjects className="monster-projects" />
      <MonsterTeaching className="monster-teaching" />
    </div>
  );
};

export const Head = () => <title>Intro</title>;

export default Intro;
