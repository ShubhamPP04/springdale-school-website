import React, { useRef, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody } from 'react-bootstrap';
import { gsap } from 'gsap';

const Gallery = () => {
  const imageRefs = useRef([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      imageRefs.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
    );
    gsap.fromTo(
      videoRefs.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
        Gallery
      </h1>

      <h2 className="mb-3" style={{ fontSize: '2rem', color: '#007bff' }}>
        Photos
      </h2>
      <Row>
        <Col md={4} sm={6} className="mb-4">
          <Card className="shadow-sm" onMouseEnter={(e) => gsap.to(e.target, { scale: 1.05, duration: 0.2 })} onMouseLeave={(e) => gsap.to(e.target, { scale: 1, duration: 0.2 })}>
            <img
              ref={(el) => imageRefs.current.push(el)}
              src="participation.png"
              alt="Sports Day"
              className="card-img-top"
            />
            <CardBody>
              <Card.Text>Students participating in various sports events.</Card.Text>
            </CardBody>
          </Card>
        </Col>
        <Col md={4} sm={6} className="mb-4">
          <Card className="shadow-sm" onMouseEnter={(e) => gsap.to(e.target, { scale: 1.05, duration: 0.2 })} onMouseLeave={(e) => gsap.to(e.target, { scale: 1, duration: 0.2 })}>
            <img
              ref={(el) => imageRefs.current.push(el)}
              src="presentation.png"
              alt="Science Exhibition"
              className="card-img-top"
            />
            <CardBody>
              <Card.Text>Students presenting their science projects.</Card.Text>
            </CardBody>
          </Card>
        </Col>
        {}
      </Row>

      <h2 className="mb-3" style={{ fontSize: '2rem', color: '#007bff' }}>
        Videos
      </h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="shadow-sm" onMouseEnter={(e) => gsap.to(e.target, { scale: 1.05, duration: 0.2 })} onMouseLeave={(e) => gsap.to(e.target, { scale: 1, duration: 0.2 })}>
            <a href="https://www.youtube.com/watch?v=EjBK4mkeMGY" target="_blank" rel="noopener noreferrer">
              <video
                ref={(el) => videoRefs.current.push(el)}
                controls
                className="card-img-top"
              >
                <source src="https://www.youtube.com/watch?v=EjBK4mkeMGY" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </a>
            <CardBody>
              <Card.Text>Virtual tour of Springdale Public School.</Card.Text>
            </CardBody>
          </Card>
        </Col>
        {}
      </Row>
    </Container>
  );
};

export default Gallery;