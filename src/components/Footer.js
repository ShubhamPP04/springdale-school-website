import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>Springdale Public School is committed to providing quality education to all students. Our mission is to foster a love for learning and to help students achieve their full potential.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/admissions" className="text-white">Admissions</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
              <li><a href="/faculty" className="text-white">Faculty</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>
              123 School Lane<br />
              Springdale, SP 12345<br />
              Phone: (123) 456-7890<br />
              Email: info@springdale.edu
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com" className="text-white mx-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com" className="text-white mx-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com" className="text-white mx-2">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">&copy; 2024 Springdale Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
