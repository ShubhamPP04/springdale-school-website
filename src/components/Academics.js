import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Academics = () => {
  const headingRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
  
    headingRefs.current.forEach((heading, index) => {
      gsap.fromTo(
        heading,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: index * 0.2 }
      );
    });

    
    gsap.fromTo(
      containerRef.current,
      { backgroundColor: 'rgba(255, 255, 255, 0)' },
      { backgroundColor: 'rgba(255, 255, 255, 0.8)', duration: 1 }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="container mt-5"
      style={{
        backgroundImage: `url('https://www.nshss.org/media/oltcmrhs/tips-for-academic-success-high-school.jpg?width=1280&height=720&v=1d9cf88f4857870&format=webp&quality=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#333',
        padding: '3rem',
        borderRadius: '10px',
        backgroundBlendMode: 'overlay',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'center', 
      }}
    >
      <h1
        ref={(el) => (headingRefs.current[0] = el)}
        className="text-center mb-4"
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        }}
      >
        Academics
      </h1>
      <h2
        ref={(el) => (headingRefs.current[1] = el)}
        className="text-center mb-3"
        style={{
          fontSize: '2.5rem',
          color: '#007bff',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
        }}
      >
        Curriculum
      </h2>
      <h3
        ref={(el) => (headingRefs.current[2] = el)}
        className="mb-2"
        style={{
          fontSize: '1.8rem',
          color: '#000', 
          marginLeft: '1rem',
        }}
      >
        Primary (Grades 1-5)
      </h3>
      
      <h3
        ref={(el) => (headingRefs.current[3] = el)}
        className="mb-2"
        style={{
          fontSize: '1.8rem',
          color: '#000', 
          marginLeft: '1rem',
        }}
      >
        Secondary (Grades 6-10)
      </h3>
      <h3
        ref={(el) => (headingRefs.current[4] = el)}
        className="mb-2"
        style={{
          fontSize: '1.8rem',
          color: '#000', 
          marginLeft: '1rem',
        }}
      >
        Senior Secondary (Grades 11-12)
      </h3>
      <h4
        ref={(el) => (headingRefs.current[5] = el)}
        className="mb-2 stream-text"
        style={{
          fontSize: '1.5rem',
          color: '#28a745', 
          marginLeft: '2rem',
        }}
      >
        Science Stream
      </h4>
      <p className="text-center mb-3">
        Physics, Chemistry, Biology, Mathematics, Computer Science, English
      </p>
      <h4
        ref={(el) => (headingRefs.current[6] = el)}
        className="mb-2 stream-text"
        style={{
          fontSize: '1.5rem',
          color: '#dc3545',
          marginLeft: '2rem',
        }}
      >
        Commerce Stream
      </h4>
      <p className="text-center mb-3">
        Accountancy, Business Studies, Economics, Mathematics, English
      </p>
      <h2
        ref={(el) => (headingRefs.current[7] = el)}
        className="text-center mb-3"
        style={{
          fontSize: '2.5rem',
          color: '#007bff',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
        }}
      >
        Teaching Methodologies
      </h2>
      <p className="text-center mb-3">
        We use a blend of traditional and modern teaching techniques to cater to
        different learning styles.
      </p>
      <h2
        ref={(el) => (headingRefs.current[8] = el)}
        className="text-center mb-3"
        style={{
          fontSize: '2.5rem',
          color: '#007bff',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
        }}
      >
        Educational Resources
      </h2>
      <p className="text-center mb-3">
        Digital classrooms, interactive learning modules, and access to online
        educational platforms.
      </p>
    </div>
  );
};

export default Academics;