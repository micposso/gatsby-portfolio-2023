import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import Monster from "../assets/monster-1.svg";

import HALO from "vanta/dist/vanta.halo.min";

const backgroundStyles = {
  zIndex: "10",
};

const Home = ({ links }) => {
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
    <div ref={myRef}>
      <div
        className="scroll-child d-flex justify-content-center align-items-center vh-100"
        id="home"
      >
        <Container className="home-hero">
          <Row>
            <Col>
              <div className="monster-container">
                <Monster className="monster-item" />
              </div>
              <h1>
                <i>I build and manage</i> development teams <i>that scale.</i>{" "}
                <span className="heading-sub">I can also code :)</span>
              </h1>
              <div className="vertical_container">
                <div className="vertical_container-text">scrolldown</div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="overlay"></div>
        <div className="background-profile"></div>
      </div>
    </div>
  );
};

export default Home;
