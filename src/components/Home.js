import React, { useRef, useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const carouselItemStyle = {
    transition: 'transform 0.5s ease-in-out',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
  };

  const captionStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '10px',
    transition: 'opacity 0.5s ease-in-out',
  };

  const carouselRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      carouselRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    );

    gsap.fromTo(
      headingRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power2.out' }
    );

    gsap.fromTo(
      paragraphRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1, ease: 'power2.out' }
    );
  }, []);

  return (
    <Container className="text-center my-5">
      <Row className="mb-4">
        <Col>
          <h1 className="display-4" ref={headingRef}>
            Welcome to Springdale Public School
          </h1>
          <p className="lead" ref={paragraphRef}>
            Where we nurture young minds for a brighter future.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Carousel className="shadow-lg rounded" ref={carouselRef}>
            <Carousel.Item style={carouselItemStyle}>
              <img
                className="d-block w-100 rounded"
                src="https://media.dpssrinagar.com/v2/media/2017/10/IMG_1765.jpg"
                alt="Annual Sports Day"
              />
              <Carousel.Caption style={captionStyle}>
                <h3>Annual Sports Day</h3>
                <p>Celebrating Excellence in Sports</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={carouselItemStyle}>
              <img
                className="d-block w-100 rounded"
                src="https://www.scottishigh.com/wp-content/uploads/2023/07/Science-Exhibition-2023-2.jpg"
                alt="Science Exhibition"
              />
              <Carousel.Caption style={captionStyle}>
                <h3>Science Exhibition</h3>
                <p>Showcasing Student Innovations</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={carouselItemStyle}>
              <img
                className="d-block w-100 rounded"
                src="https://images.tribuneindia.com/cms/gall_content/2016/12/2016_12$largeimg18_Sunday_2016_230907600.jpg"
                alt="Cultural Fest"
              />
              <Carousel.Caption style={captionStyle}>
                <h3>Cultural Fest</h3>
                <p>Embracing Diversity and Creativity</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;