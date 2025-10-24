import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const YOUTUBE_API_KEY = 'AIzaSyBjwPMdE6cqdken8kMQHLX-7MUDs_iIH9U'; 

const AudioPlayer = ({ movieTitle, onStatusChange }) => {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    if (!movieTitle) return;

    const fetchVideo = async () => {
      try {
       
        const searchQuery = encodeURIComponent(`${movieTitle} movie official soundtrack theme music`);
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${YOUTUBE_API_KEY}&type=video&maxResults=1&videoCategoryId=10`
        );
        
        if (!response.ok) {
          throw new Error('Error en la API de YouTube');
        }

        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setVideoId(data.items[0].id.videoId);
        } else {
          if (onStatusChange) onStatusChange('error');
        }
      } catch (err) {
        console.error("Error al buscar en YouTube:", err);
        if (onStatusChange) onStatusChange('error');
      }
    };

    fetchVideo();
  }, [movieTitle, onStatusChange]);

  const opts = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      rel: 0, 
      start: 30, 
      iv_load_policy: 3, 
      disablekb: 1, 
    },
  };

  const onReady = (event) => {
    event.target.playVideo();
   
    if (onStatusChange) onStatusChange('playing');
  }

  const onError = (error) => {
    console.error("Error del reproductor de YouTube:", error);
    if (onStatusChange) onStatusChange('error');
  }

  const onStateChange = (event) => {
   
    if (event.data === 1 && onStatusChange) {
      onStatusChange('playing');
    }
  }

  if (!videoId) {
    return null;
  }

  return (
    <div className="audio-player-wrapper">
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onReady}
        onError={onError}
        onStateChange={onStateChange}
      />
    </div>
  );
};

export default AudioPlayer;