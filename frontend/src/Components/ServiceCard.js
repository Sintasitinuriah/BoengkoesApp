import React from 'react';
import '../Services.css';

const ServiceCard = ({ title, description }) => {
  return (
    <div className="service-card animate">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
