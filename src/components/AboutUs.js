import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUs = () => {
  const headingRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      headingRefs.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <Container className="mt-5">
      <h1
        ref={(el) => headingRefs.current.push(el)}
        className="text-center mb-4"
        style={{ fontSize: '3rem', fontWeight: 'bold' }}
      >
        About Us
      </h1>
      <p className="text-center mb-4" style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
        Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
      </p>

      <Row>
        <Col md={6}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <h2
                ref={(el) => headingRefs.current.push(el)}
                className="text-center mb-3"
                style={{ fontSize: '2rem', color: '#007bff' }}
              >
                Vision
              </h2>
              <p className="text-center" style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>
                To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <h2
                ref={(el) => headingRefs.current.push(el)}
                className="text-center mb-3"
                style={{ fontSize: '2rem', color: '#007bff' }}
              >
                Mission
              </h2>
              <p className="text-center" style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>
                To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="shadow-sm mb-4">
        <Card.Body>
          <h2
            ref={(el) => headingRefs.current.push(el)}
            className="text-center mb-3"
            style={{ fontSize: '2rem', color: '#007bff' }}
          >
            Principal's Message
          </h2>
          <p className="text-center mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>
            At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
          </p>
        </Card.Body>
      </Card>

      <h2
        ref={(el) => headingRefs.current.push(el)}
        className="text-center mb-3"
        style={{ fontSize: '2rem', color: '#007bff' }}
      >
        Infrastructure and Facilities
      </h2>
      <ul className="text-center list-unstyled" style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>
        <li className="mb-2">State-of-the-art science and computer labs</li>
        <li className="mb-2">Spacious and well-equipped classrooms</li>
        <li className="mb-2">Library with a vast collection of books and digital resources</li>
        <li className="mb-2">Sports facilities including a playground, gymnasium, and swimming pool</li>
      </ul>
    </Container>
  );
};

export default AboutUs;