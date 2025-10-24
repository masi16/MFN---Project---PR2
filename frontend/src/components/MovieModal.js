// src/components/MovieModal.js

import React from 'react';
import './MovieModal.css';

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750.png?text=No+Image';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-body">
          <img src={posterUrl} alt={`Póster de ${movie.title}`} className="modal-poster" />
          <div className="modal-details">
            <h2>{movie.title}</h2>
            <p className="modal-release-date">{movie.release_date ? movie.release_date.substring(0, 4) : ''}</p>
            <p className="modal-rating">⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}</p>
            <p className="modal-overview">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;