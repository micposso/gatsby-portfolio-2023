import React, { useState, useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Monster from '../assets/monster-1.svg';

import HALO from "vanta/dist/vanta.halo.min";

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
<>
    <div ref={myRef}>
      <div className="scroll-child d-flex justify-content-center align-items-center vh-100" id="home">
      <div className="overlay"></div>

      <Card style={{ width: "35rem" }}>
        <div className="vector-container">
          <Monster />
        </div>
      <div className="name-card text-center">michael posso</div>
      <div className="line-container">
        <div className="card-vertical-line">
        </div>
      </div>
      <Card.Text  className="text-center">
            Enginering Manager | Tech Educator | UI Developer
          </Card.Text>
        <Card.Body>
          <Card.Title>I build and manage development teams that scale.</Card.Title>
         </Card.Body>
         <div className="line-container">
          <div className="card-vertical-line"></div>
          <div className="vertical-text">
            scrolldown
          </div>
        </div>

      </Card>
      </div>

    </div>
          <div className="background-profile"></div>
          </>
  );
};

export default Home;
