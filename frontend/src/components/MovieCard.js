import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const placeholder = 'https://via.placeholder.com/500x750.png?text=No+Image';

  
  let finalPosterUrl = placeholder;
  if (movie.poster_path) {
   
    const finalPosterPath = movie.poster_path.startsWith('/')
      ? movie.poster_path
      : `/${movie.poster_path}`;
    finalPosterUrl = `https://image.tmdb.org/t/p/w500${finalPosterPath}`;
  }

  const handleImageError = (e) => {
    e.target.src = placeholder;
  };

  return (
    <div className="movie-card">
      <img
        src={finalPosterUrl}
        alt={`Póster de ${movie.title}`}
        onError={handleImageError}
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}</p>
      </div>
    </div>
  );
};

export default MovieCard;