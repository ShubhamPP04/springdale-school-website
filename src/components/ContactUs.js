import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { gsap } from 'gsap';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate form submission (replace with actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' }); 
    } catch (error) {
      console.error('Error submitting form:', error);
   
    }
  };

  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <Container className="mt-5">
      <style>
        {`
          .contact-form {
            background: #f9f9f9;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .contact-form .form-control {
            border-radius: 5px;
            margin-bottom: 15px; // Add spacing between form fields
          }

          .contact-form .submit-button {
            width: 100%;
            padding: 10px;
            font-size: 1.2rem;
            transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
          }

          .contact-form .submit-button:hover {
            background-color: #0056b3;
            transform: scale(1.05);
          }
        `}
      </style>
      <h1 className="text-center mb-4" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
        Contact Us
      </h1>
      {showSuccess && (
        <Alert variant="success" className="mb-4">
          Your message has been sent successfully!
        </Alert>
      )}
      <Row className="justify-content-center">
        <Col md={8}>
          <p className="text-center mb-4">
            Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code
          </p>
          <p className="text-center mb-4">
            Phone: +1 (123) 456-7890
          </p>
          <p className="text-center mb-4">
            Email: info@springdale.edu
          </p>
          <Form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <Form.Group controlId="formBasicName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
              <Form.Control.Feedback type="invalid">
                Please provide your name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message"
                rows={5}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a message.
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-button">
              Submit
            </Button>
          </Form>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086509374839!2d144.9630579153167!3d-37.81410797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1b1b1b1b1b1!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
            className="mt-4"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;