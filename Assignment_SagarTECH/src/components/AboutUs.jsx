import React from 'react';
import './AboutUs.css'; 

export const services = [
  {
    title: 'App Development',
    image: 'path/to/app_development.png',
    description: 'We build high-quality mobile and web applications tailored to your needs.',
  },
  {
    title: 'Design',
    image: 'path/to/design.png',
    description: 'Our design team creates visually appealing and user-friendly interfaces.',
  },
  {
    title: 'UI/UX',
    image: 'path/to/ui_ux.png',
    description: 'We focus on providing seamless and engaging user experiences through thoughtful UI/UX design.',
  },
  {
    title: 'Consulting',
    image: 'path/to/consulting.png',
    description: 'Expert advice and strategies to help you navigate the tech landscape and achieve your goals.',
  },
];

const AboutUs = () => (
  <div className="about-us">
    <header className="about-us-header">
      <h1>Welcome to [Your Company Name]</h1>
      <p>We specialize in delivering top-notch services in technology and design.</p>
    </header>
    
    <section className="services-section">
      <h2>What We Do</h2>
      <div className="service-cards">
        {services.map((service) => (
          <div key={service.title} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);


