import React, { useRef, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { gsap } from 'gsap';

const Students = () => {
  const headingRefs = useRef([]);
  const listItemRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      headingRefs.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
    );
    gsap.fromTo(
      listItemRefs.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.1 }
    );
  }, []);

  return (
    <Container className="mt-5">
      <h1
        ref={(el) => headingRefs.current.push(el)}
        className="text-center mb-4"
        style={{ fontSize: '3rem', fontWeight: 'bold' }}
      >
        Students
      </h1>

      <Card className="shadow-sm mb-4">
        <Card.Body>
          <h2
            ref={(el) => headingRefs.current.push(el)}
            className="text-center mb-3"
            style={{ fontSize: '2rem', color: '#007bff' }}
          >
            Life at Springdale
          </h2>
          <p className="text-center mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>
            Extracurricular Activities: Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club
          </p>
        </Card.Body>
      </Card>

      <Card className="shadow-sm mb-4">
        <Card.Body>
          <h2
            ref={(el) => headingRefs.current.push(el)}
            className="text-center mb-3"
            style={{ fontSize: '2rem', color: '#007bff' }}
          >
            Clubs and Societies
          </h2>
          <p className="text-center mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>
            Literary Society, Environmental Club, Astronomy Club, Coding Club
          </p>
        </Card.Body>
      </Card>

      <Card className="shadow-sm mb-4">
        <Card.Body>
          <h2
            ref={(el) => headingRefs.current.push(el)}
            className="text-center mb-3"
            style={{ fontSize: '2rem', color: '#007bff' }}
          >
            Achievements
          </h2>
          <ul className="list-unstyled">
            <li
              ref={(el) => listItemRefs.current.push(el)}
              className="mb-2"
              style={{ fontSize: '1.1rem', lineHeight: '1.5' }}
            >
              John Smith - National Level Math Olympiad Winner
            </li>
            <li
              ref={(el) => listItemRefs.current.push(el)}
              className="mb-2"
              style={{ fontSize: '1.1rem', lineHeight: '1.5' }}
            >
              Sarah Lee - Gold Medalist in State Swimming Championship
            </li>
            <li
              ref={(el) => listItemRefs.current.push(el)}
              className="mb-2"
              style={{ fontSize: '1.1rem', lineHeight: '1.5' }}
            >
              Tech Innovators Club - Winners of Inter-School Robotics Competition
            </li>
          </ul>
        </Card.Body>
      </Card>

      <Card className="shadow-sm mb-4">
        <Card.Body>
          <h2
            ref={(el) => headingRefs.current.push(el)}
            className="text-center mb-3"
            style={{ fontSize: '2rem', color: '#007bff' }}
          >
            Student Council
          </h2>
          <p className="text-center mb-2" style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>
            President: Amy Parker, Grade 12
          </p>
          <p className="text-center mb-2" style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>
            Vice President: Rajiv Mehta, Grade 11
          </p>
          <p className="text-center" style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>
            Secretary: Lisa Wong, Grade 10
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Students;