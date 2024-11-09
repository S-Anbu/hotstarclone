// src/components/Card.js
import React from 'react';

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-title">{title}</div>
    </div>
  );
};

export default Card;
