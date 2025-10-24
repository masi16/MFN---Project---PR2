import React, { useState } from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, onCardClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '...';
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';

  return (
    <div className="movie-card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => onCardClick(movie)}>
      <img src={posterUrl} alt={`Póster de ${movie.title}`} />
      {isHovered && (
        <div className="hover-info">
          <div className="hover-content">
            <div className="rating">⭐ {rating}</div>
            <div className="director"><strong>Director:</strong> {movie.director}</div>
            <div className="click-prompt">Haz click para ver más</div>
          </div>
        </div>
      )}
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date ? movie.release_date.substring(0, 4) : ''}</p>
      </div>
    </div>
  );
};
export default MovieCard;