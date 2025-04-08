import React from 'react';
import c1 from '../assets/images/choose1.png';
import c2 from '../assets/images/choose2.png';
import c3 from '../assets/images/choose3.png';
import c4 from '../assets/images/choose4.png';
// import logo from "../assets/images/logo.png"; 
import '../styles/WhyChoose.css';

const WhyChoose = () => {
  const reasons = [
    {
      image: c1,
      heading: 'Authentic Taste',
      paragraph: 'Enjoy our traditional recipes, inspired by rich culinary heritage.',
    },
    {
      image: c2,
      heading: 'Service Excellence',
      paragraph: 'Outstanding service and unforgettable experiences.',
    },
    {
      image: c3,
      heading: 'Best Quality',
      paragraph: 'Top quality standards, excellence in every bite.',
    },
    {
      image: c4,
      heading: 'Heritage',
      paragraph: 'Venus caterings blends food and heart, rooted in family traditions.',
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5 do">
        <h3 className="text-uppercase text-secondary">Why Choose Us</h3>
        <h1 className="fw-bold">
          Leave Your Guests Speechless With Our Fabulous Food!
        </h1>
      </div>

      <div className="row g-4">
        {reasons.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-3" key={index}>
            <div className="why-card text-center p-4 h-100">
              <img src={item.image} alt={item.heading} className="why-icon mb-3" />
              <h5 className="fw-bold">{item.heading}</h5>
              <p className="text-muted">{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
