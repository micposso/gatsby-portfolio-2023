import { useStaticQuery, graphql } from "gatsby";
import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

import DOTS from "vanta/dist/vanta.dots.min";

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            stack
            title
            preview
          }
          id
        }
      }
    }
  `);

  const { allMarkdownRemark } = data;
  const nodes = allMarkdownRemark.nodes;

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
      <Container fluid className="py-5 header-container"></Container>
      <Container className="blog_container">
        {nodes.map((node) => (
          <Row key={node.id}>
            <Col>
              <h2>{node.frontmatter.title}</h2>
              <p>
                Date <span>{node.frontmatter.date}</span>
              </p>
              <p>{node.frontmatter.preview}</p>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export const Head = () => <title>Engineering Blog</title>;

export default Blog;
