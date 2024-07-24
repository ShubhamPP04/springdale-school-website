import React, { useRef, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { gsap } from 'gsap';

const Faculty = () => {
  const facultyData = [
    {
      name: 'John Doe',
      designation: 'Principal',
      qualification: 'M.Ed',
      experience: '20 years in educational administration',
    },
    {
      name: 'Jane Smith',
      designation: 'Vice Principal',
      qualification: 'M.Sc. in Physics',
      experience: '15 years of teaching experience',
    },
    {
      name: 'Emily Johnson',
      designation: 'English Teacher',
      qualification: 'M.A. in English',
      experience: '10 years of teaching experience',
    },
    {
      name: 'Michael Brown',
      designation: 'Mathematics Teacher',
      qualification: 'M.Sc. in Mathematics',
      experience: '8 years of teaching experience',
    },
    {
      name: 'Sophia Davis',
      designation: 'Science Teacher',
      qualification: 'M.Sc. in Chemistry',
      experience: '12 years of teaching experience',
    },
    {
      name: 'David Wilson',
      designation: 'Computer Science Teacher',
      qualification: 'B.Tech in Computer Science',
      experience: '5 years of teaching experience',
    },
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardRefs.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
        Faculty
      </h1>
      <Row>
        {facultyData.map((faculty, index) => (
          <Col md={6} key={index}>
            <Card className="shadow-sm mb-4" ref={(el) => (cardRefs.current[index] = el)}>
              <Card.Body>
                <h2 className="text-center mb-2" style={{ fontSize: '1.8rem' }}>
                  {faculty.name}
                </h2>
                <p className="text-center" style={{ fontSize: '1rem' }}>
                  {faculty.designation}, {faculty.qualification}, {faculty.experience}
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Faculty;