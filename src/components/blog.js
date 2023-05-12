import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Badge, Jumbotron } from "react-bootstrap";

import { Link } from "gatsby";

import DOTS from "vanta/dist/vanta.dots.min";

const Blog = ({ links }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={myRef} className="scroll-child" id="blog">
      <Container fluid className="py-5 header-container">
     
  
      </Container>
      <Container className="blog_container ">
        <Row>
          <Col>
            <h2>Title of bloc</h2>
            <p>
              Date <span>05/2023</span>
            </p>
            <p>
              Sed lorem mi, sodales quis lacinia ac, cursus in magna. Proin
              magna nunc, bibendum at risus eget, mollis accumsan nulla.
              Praesent ut ultricies urna, vitae rhoncus neque. Donec non iaculis
              ante, in accumsan eros. Aenean pharetra nec neque id porta.
              Aliquam at sodales tortor, eu ultrices turpis. Morbi egestas elit
              orci, at volutpat odio dictum at.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Title of bloc</h2>
            <p>
              Date <span>05/2023</span>
            </p>
            <p>
              Sed lorem mi, sodales quis lacinia ac, cursus in magna. Proin
              magna nunc, bibendum at risus eget, mollis accumsan nulla.
              Praesent ut ultricies urna, vitae rhoncus neque. Donec non iaculis
              ante, in accumsan eros. Aenean pharetra nec neque id porta.
              Aliquam at sodales tortor, eu ultrices turpis. Morbi egestas elit
              orci, at volutpat odio dictum at.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Title of bloc</h2>
            <p>
              Date <span>05/2023</span>
            </p>
            <p>
              Sed lorem mi, sodales quis lacinia ac, cursus in magna. Proin
              magna nunc, bibendum at risus eget, mollis accumsan nulla.
              Praesent ut ultricies urna, vitae rhoncus neque. Donec non iaculis
              ante, in accumsan eros. Aenean pharetra nec neque id porta.
              Aliquam at sodales tortor, eu ultrices turpis. Morbi egestas elit
              orci, at volutpat odio dictum at.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Title of bloc</h2>
            <p>
              Date <span>05/2023</span>
            </p>
            <p>
              Sed lorem mi, sodales quis lacinia ac, cursus in magna. Proin
              magna nunc, bibendum at risus eget, mollis accumsan nulla.
              Praesent ut ultricies urna, vitae rhoncus neque. Donec non iaculis
              ante, in accumsan eros. Aenean pharetra nec neque id porta.
              Aliquam at sodales tortor, eu ultrices turpis. Morbi egestas elit
              orci, at volutpat odio dictum at.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Title of bloc</h2>
            <p>
              Date <span>05/2023</span>
            </p>
            <p>
              Sed lorem mi, sodales quis lacinia ac, cursus in magna. Proin
              magna nunc, bibendum at risus eget, mollis accumsan nulla.
              Praesent ut ultricies urna, vitae rhoncus neque. Donec non iaculis
              ante, in accumsan eros. Aenean pharetra nec neque id porta.
              Aliquam at sodales tortor, eu ultrices turpis. Morbi egestas elit
              orci, at volutpat odio dictum at.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const Head = () => <title>Engineering Blog</title>;

export default Blog;
