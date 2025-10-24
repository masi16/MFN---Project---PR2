import React, { useState } from 'react';
import AudioPlayer from './AudioPlayer';
import './MovieModal.css';

const MovieModal = ({ movie, onClose }) => {
  const [audioStatus, setAudioStatus] = useState('loading');

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

            {}
            {audioStatus === 'loading' && (
              <div className="audio-loading">
                <div className="loading-spinner"></div>
                <span>Cargando soundtrack...</span>
              </div>
            )}
            {audioStatus === 'playing' && (
              <div className="audio-playing">
                🎵 Reproduciendo soundtrack
              </div>
            )}
            {audioStatus === 'error' && (
              <div className="audio-error">
                ⚠️ No se pudo cargar el soundtrack
              </div>
            )}

            {}
            <AudioPlayer movieTitle={movie.title} onStatusChange={setAudioStatus} />
          </div>
        </div>

        {movie.images && movie.images.backdrops && movie.images.backdrops.length > 0 && (
          <div className="modal-gallery">
            <h4>Capturas</h4>
            <div className="image-scroll-container">
              {movie.images.backdrops.slice(0, 10).map((image, index) => (
                <img
                  key={index}
                  src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                  alt={`Captura de ${movie.title}`}
                  className="gallery-image"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieModal;