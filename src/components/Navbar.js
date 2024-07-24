import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" alt="Springdale Public School Logo" height="40" className="rounded-circle" style={{ marginRight: '10px' }} />
          Springdale Public School
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link px-3 ${isActive('/')}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link px-3 ${isActive('/about')}`} to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link px-3 ${isActive('/academics')}`} to="/academics">Academics</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link px-3 ${isActive('/admissions')}`} to="/admissions">Admissions</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link px-3 ${isActive('/faculty')}`} to="/faculty">Faculty</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link px-3 ${isActive('/students')}`} to="/students">Students</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link px-3 ${isActive('/gallery')}`} to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link px-3 ${isActive('/contact')}`} to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;