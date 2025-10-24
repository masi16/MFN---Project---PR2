// src/components/MovieList.js

import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

// Recibimos "title" y "onCardClick" como props
const MovieList = ({ movies, onCardClick, title }) => {
  if (!movies || movies.length === 0) {
    return null;
  }
  
  return (
    <div className="movie-list-container">
      <div className="section-title">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
         </svg>
        {title} {/* Usamos el título dinámico que recibimos */}
      </div>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} onCardClick={onCardClick} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;