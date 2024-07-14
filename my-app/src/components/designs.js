// src/components/Designs.js
import React from 'react';
import '../App.css';
import designs from '../assets/8.png';
const images = [
  'assets/1.png',
  'assets/2.png',
  'assets/3.png',
  'assets/4.png',
  'assets/5.png'
];

const Designs = () => {
  return (
    <div className='designs'>
      <img src={designs} alt="design-1" />
    <div className="designs-container">

      {images.map((src, index) => (
        <div key={index} className={`frame frame-${index + 1}`}>
          <img src={require(`../${src}`)} alt={`design-${index + 1}`} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Designs;
