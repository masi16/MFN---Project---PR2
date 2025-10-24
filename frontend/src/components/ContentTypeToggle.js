import React from 'react';
import './ContentTypeToggle.css';

const ContentTypeToggle = ({ activeType, onToggle }) => {
  return (
    <div className="toggle-container">
      <button
        className={`toggle-button ${activeType === 'movie' ? 'active' : ''}`}
        onClick={() => onToggle('movie')}
      >
        Películas
      </button>
      <button
        className={`toggle-button ${activeType === 'tv' ? 'active' : ''}`}
        onClick={() => onToggle('tv')}
      >
        Series
      </button>
    </div>
  );
};

export default ContentTypeToggle;