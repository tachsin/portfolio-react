// src/components/experiences.js
import React, { useEffect, useState } from 'react';
import '../App.css';
import bubbleImage from '../assets/9.png'; // Balon resminizi ekleyin
import experiencesData from '../data/experience.json'; // JSON dosyasını içe aktarın

const ExperiencesPage = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    // JSON verilerini state'e yükleyin
    setExperiences(experiencesData);
  }, []);

  return (
    <div className="experiences-page">
      <img src={bubbleImage} alt="bubble-title" className="bubble-image" />
      <div className="bubbles-container">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="bubble"
            style={{
              width: experience.size,
              height: experience.size,
              top: experience.position_style.top,
              left: experience.position_style.left
            }}
          >
            <h6>{experience.position}</h6>
            <h6>{experience.company}</h6>
            <h6>{experience.begin_date}</h6>
            <h6>{experience.end_date}</h6>
            <h6>{experience.description}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencesPage;
