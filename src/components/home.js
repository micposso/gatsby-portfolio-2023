import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

import MonsterHome from "../assets/monster-1.svg";

import HALO from "vanta/dist/vanta.halo.min";

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>

    {/* <div className="overlay"></div> */}

      <div ref={myRef}
        className="scroll-child d-flex justify-content-center align-items-center"
        id="home"
      >

        <Container className="home-hero">
          <Row>
            <Col>
              <div className="monster-container">
                <MonsterHome className="monster-home" />
              </div>
              <h1>
                <i>~Fearless UI engineer</i><br/>building next-generation<br/><i>digital experiences.</i>
                
              </h1>
              <div className="vertical_container">
                <div className="vertical_container-text scroll-down-indicator">scrolldown</div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="background-profile"></div>
      </div>
    </>
  );
};

export default Home;
