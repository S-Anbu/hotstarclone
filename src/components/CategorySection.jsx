// src/components/CategorySection.js
import React from 'react';
import Card from './Card';

const CategorySection = ({ title, items }) => {
  return (
    <div className="category-section">
      <h2>{title}</h2>
      <div className="card-container">
        {items.map((item, index) => (
          <Card key={index} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
