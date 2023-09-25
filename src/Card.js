import React, { useState } from 'react';
import './App.css';

const Card = () => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const detailsButton = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="card">
      <img src="https://www.dalycollege.org/images/slider-1.jpg" alt="Card" />
      <h1>Card</h1>
      <p style={{ display: isDescriptionVisible ? 'block' : 'none' }}>
        The Daly College is a group of institutions in Indore, India that includes a co-educational boarding school, a junior school, an undergraduate management school, and a postgraduate business school.
      </p>
      <button onClick={detailsButton}>Details</button>
    </div>
  );
};

export default Card;
