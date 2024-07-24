import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { gsap } from 'gsap';

const Admissions = () => {
  const headingRefs = useRef([]);

  useEffect(() => {
    headingRefs.current.forEach((heading, index) => {
      gsap.fromTo(
        heading,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: index * 0.2 }
      );
    });
  }, []);

  return (
    <Container className="mt-5">
      <h1
        ref={(el) => (headingRefs.current[0] = el)}
        className="text-center mb-4"
        style={{ fontSize: '3rem', fontWeight: 'bold' }}
      >
        Admissions
      </h1>

      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <h2
                ref={(el) => (headingRefs.current[1] = el)}
                className="text-center mb-3"
                style={{ fontSize: '2rem', color: '#007bff' }}
              >
                Process
              </h2>
              <p className="text-center">
                Admission forms are available for download. Submit the
                completed form along with required documents at the school
                office.
              </p>
            </Card.Body>
          </Card>

          <Card className="shadow-sm mt-4">
            <Card.Body>
              <h2
                ref={(el) => (headingRefs.current[2] = el)}
                className="text-center mb-3"
                style={{ fontSize: '2rem', color: '#007bff' }}
              >
                Criteria
              </h2>
              <p className="text-center">
                Admission is based on merit and availability of seats. Entrance
                tests may be conducted for certain grades.
              </p>
            </Card.Body>
          </Card>

          <Card className="shadow-sm mt-4">
            <Card.Body>
              <h2
                ref={(el) => (headingRefs.current[3] = el)}
                className="text-center mb-3"
                style={{ fontSize: '2rem', color: '#007bff' }}
              >
                Important Dates
              </h2>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <b>Admission Form Availability:</b> March 1st
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Last Date for Submission:</b> March 31st
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Entrance Test:</b> April 15th
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Announcement of Results:</b> April 30th
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Admissions;