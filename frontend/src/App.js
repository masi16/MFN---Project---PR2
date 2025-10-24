// src/App.js (Versión Súper Simple, 100% Frontend y Autocontenida)

import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieModal from './components/MovieModal';

// 1. DATOS DE PRUEBA COMPLETOS (Nuestra "Base de Datos" interna)
// Tenemos toda la información que necesitamos aquí mismo.

const popularMoviesData = [
  {
    id: 278,
    title: 'Mullholand Drive',
    release_date: '2001-09-23',
    poster_path: '/ufuDwHBEVqyZ8JLjJ5ILgM0qUJj.jpg',
    overview: 'Dos hombres encarcelados establecen un vínculo a lo largo de varios años, encontrando consuelo y redención a través de actos de decencia común.',
    vote_average: 8.7,
    director: 'Frank Darabont'
  },
  {
    id: 238,
    title: 'The Godfather',
    release_date: '1972-03-14',
    poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    overview: 'El patriarca de una dinastía del crimen organizado transfiere el control de su imperio clandestino a su reacio hijo.',
    vote_average: 8.7,
    director: 'Francis Ford Coppola'
  },
  {
    id: 129,
    title: 'Anatomy of a Fall',
    release_date: '2023-07-20',
    poster_path: '/kQs6keheMwCxJxrzV83VUwFtHkB.jpg',
    overview: 'Durante la mudanza de su familia a los suburbios, una niña de 10 años deambula por un mundo gobernado por dioses, brujas y espíritus, y donde los humanos se convierten en bestias.',
    vote_average: 8.5,
    director: 'Hayao Miyazaki'
  },
];

const searchResultsData = [
  {
    id: 27205,
    title: 'Barry Lyndon',
    release_date: '1982-09-15',
    poster_path: '/znfLskGQnXYB2xcOGM9eInRHPAV.jpg',
    overview: 'A un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños se le da la tarea inversa de plantar una idea en la mente de un C.E.O.',
    vote_average: 8.4,
    director: 'Christopher Nolan'
  },
  {
    id: 603,
    title: 'Citizen Kane',
    release_date: '1941-03-30',
    poster_path: '/r3iGakXud3yjP0waEqJwpDIPWI4.jpg',
    overview: 'Un hacker informático se entera por misteriosos rebeldes de la verdadera naturaleza de su realidad y su papel en la guerra contra sus controladores.',
    vote_average: 8.2,
    director: 'Lana Wachowski'
  },
  {
    id: 346364,
    title: 'Brazil',
    release_date: '1984-10-04',
    poster_path: '/2w09J0KUnVtJvqPYu8N63XjAyCR.jpg',
    overview: 'El descubrimiento de un joven Blade Runner de un secreto enterrado durante mucho tiempo lo lleva a buscar al ex Blade Runner Rick Deckard, quien ha estado desaparecido durante treinta años.',
    vote_average: 7.5,
    director: 'Denis Villeneuve'
  },
  {
    id: 157336,
    title: 'Stalker',
    release_date: '1979-11-05',
    poster_path: '/1qhOyf5C4s9ZdvY8d5JDx9DFMeT.jpg',
    overview: 'Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento por asegurar la supervivencia de la humanidad.',
    vote_average: 8.4,
    director: 'Christopher Nolan'
    },
  {

    id: 15733,
    title: 'Taxi Driver',
    release_date: '1976-11-05',
    poster_path: '/ekstpH614fwDX8DUln1a2Opz0N8.jpg',
    overview: 'Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento por asegurar la supervivencia de la humanidad.',
    vote_average: 8.4,
    director: 'Christopher Nolan'
  }
];

function App() {

  const [movies, setMovies] = useState(popularMoviesData);
  const [listTitle, setListTitle] = useState('POPULARES AHORA');

  // El estado del modal se queda igual, ¡funciona perfecto!
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  // 3. LA BÚSQUEDA AHORA ES SIMPLE E INSTANTÁNEA
  const handleSearch = (query) => {
    // Si el usuario busca algo, simplemente mostramos nuestra lista de resultados de prueba.
    if (query) {
      setMovies(searchResultsData);
      setListTitle('RECOMENDACIONES PARA TI');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
         <div className="header-content">
            <div className="welcome-message">¿Qué te gustaría ver?</div>
            <SearchBar onSearch={handleSearch} />
        </div>
      </header>
      <main>
        {/* Ya no necesitamos mensajes de "Cargando" o "Error" */}
        <MovieList movies={movies} onCardClick={handleCardClick} title={listTitle} />
      </main>
      {isModalOpen && <MovieModal movie={selectedMovie} onClose={closeModal} />}
    </div>
  );
}

export default App;