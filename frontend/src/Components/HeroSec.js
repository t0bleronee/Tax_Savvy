import React from 'react';
import './HeroSec.css'; // Keep it for other styles

export default function HeroSection() {
  return (
    <div className="hero-section position-relative text-white text-center">
      {/* Background Image */}
      <img 
        src="/Assets/hero_img.jpg" 
        alt="Hero" 
        className="img-fluid w-100" 
        style={{ height: '80vh', objectFit: 'cover' }} 
      />

      {/* Overlay */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }} 
      ></div>

      {/* Text Content */}
      <div className="hero-content position-absolute top-50 start-50 translate-middle text-center">
        <h1 className="display-4 fw-bold">
          We Help Individuals with Smart Tax Solutions
        </h1>
        <p className="lead">
          Whether you're a salaried individual or a business owner, our platform simplifies tax calculations and helps you make informed decisions.
        </p>
      </div>
    </div>
  );
}