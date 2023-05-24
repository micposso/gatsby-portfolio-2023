import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Profile from "../images/profile-full-engraving.png";

import FOG from "vanta/dist/vanta.fog.min";

const About = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

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
      <Container className="container-gradient container-text">
        <Row>
          <Col lg={4} md={12} className="d-flex justify-content-center align-items-center">
            <div className="about-image-container">
              <img
                className=""
                src={Profile}
                alt="michael posso profile picture"
              />
              <p>adfasdfadsf</p>
            </div>
          </Col>
          <Col lg={8} md={12}>
            <h3><i>About me</i></h3>
            <p>
              <span className="text-uppercase">As a web developer</span>, I am
              an intrepid sailor charting the vast digital ocean. With a compass
              of strong programming foundations, I navigate the turbulent.
            </p>
            <h3><i>Contact</i></h3>
            <p>
              <span className="text-uppercase">As a web developer</span>, I am
              an intrepid sailor charting the vast digital ocean. With a compass
              of strong programming foundations, I navigate the turbulent.
            </p>
          </Col>
        </Row>
      </Container>
      {/* <div className="overlay"></div>*/}
    </div>
  );
};

export const Head = () => <title>About</title>;

export default About;
