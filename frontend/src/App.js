import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieModal from './components/MovieModal';
import ContentTypeToggle from './components/ContentTypeToggle';


// En App.js, reemplaza los 4 arrays de datos

const popularMoviesData = [
  {
    id: 693134,
    title: '2001: Una Odisea en el Espacio',
    release_date: '1968-09-23',
    poster_path: '/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg',
    overview: 'Después de descubrir un artefacto misterioso enterrado debajo de la superficie lunar, la humanidad emprende una búsqueda para encontrar sus orígenes con la ayuda de una supercomputadora inteligente.',
    vote_average: 8.4,
    director: 'Stanley Kubrick',
    images: { backdrops: [{file_path: '/w5IDXtifKntw0ajv2co7jFlTQDM.jpg'}, {file_path: '/j6TbbxhVLSdJ5kCeqqbaqIDDw53.jpg'}, {file_path: '/spHgY9GdIK6agLUnPmD0yVn3kcG.jpg'}] }
  },
  {
    id: 238,
    title: 'El Padrino',
    release_date: '1972-03-14',
    poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    overview: 'El patriarca de una dinastía del crimen organizado transfiere el control de su imperio clandestino a su reacio hijo.',
    vote_average: 8.7,
    director: 'Francis Ford Coppola',
    images: { backdrops: [{file_path: '/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg'}, {file_path: '/9EuFl42t6VDO1CMpQgbTyef0U22.jpg'} , {file_path: '/uj9vxtNzWGuDvxA1PJ8cLDZvvU6.jpg'}] }
  },
  {
    id: 934632,
    title: 'Anatomía de una Caída',
    release_date: '2023-07-20',
    poster_path: '/kQs6keheMwCxJxrzV83VUwFtHkB.jpg',
    overview: 'Una mujer es sospechosa del asesinato de su marido, y su hijo ciego es el único testigo. La película explora su conflictiva relación a través de un thriller judicial.',
    vote_average: 7.8,
    director: 'Justine Triet',
    images: { backdrops: [{file_path: '/kszooR7v1TLFM4pzx6IkKq2jDAN.jpg'}, {file_path: '/786cfVrkVLQV7bZAN6KnPFaHMNP.jpg'}] }
  },
  {
  id: 338,
    title: 'The Good, the Bad and the Ugly ',
    release_date: '1966-03-14',
    poster_path: '/6tis7qmFzgu1cNhnqAmpbm8Dfq3.jpg',
    overview: 'While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.',
    vote_average: 8.7,
    director: 'Sergio Leone',
    images: { backdrops: [{file_path: '/x4biAVdPVCghBlsVIzB6NmbghIz.jpg'}, {file_path: '/exd3LvZkXxrjShnEjE9klXuNvic.jpg'} , {file_path: '/3XEo7MxJLQhZ7RKZlFRPXu2I6Ft.jpg'}] }
  },
];

const searchResultsData = [
  {
    id: 387,
    title: 'Barry Lyndon',
    release_date: '1975-12-18',
    poster_path: '/znfLskGQnXYB2xcOGM9eInRHPAV.jpg',
    overview: 'En el siglo XVIII, un pícaro irlandés se abre paso en la aristocracia inglesa, asumiendo la identidad y la posición de su difunto marido.',
    vote_average: 8.1,
    director: 'Stanley Kubrick',
    images: { backdrops: [{file_path: '/l1Lo8VWk2B5CL5TJv5L9t6x2UwD.jpg'}, {file_path: '/okdg55jhsr9k1F2lxsZoQncrLZL.jpg'}, {file_path: '/g0eohv1YXGc7RDujmOnf7ConAlq.jpg'}] }
  },
  {
    id: 185,
    title: 'El Ciudadano Kane',
    release_date: '1941-04-17',
    poster_path: '/r3iGakXud3yjP0waEqJwpDIPWI4.jpg',
    overview: 'Tras la muerte de un magnate de la prensa, un grupo de periodistas intenta descifrar el significado de su última palabra: "Rosebud".',
    vote_average: 8.0,
    director: 'Orson Welles',
    images: { backdrops: [{file_path: '/ruF3Lmd4A8MHbnEBE6lxPMbsHGL.jpg'}, {file_path: '/dTqJFzNXqcC5W7cAWKzjQ9nFDuV.jpg'} , {file_path: '/A54ZcvXKiMoexcYQCsiwD49lBmU.jpg'}] }
    },
  {
    id: 680,
    title: 'Pulp Fiction',
    release_date: '1994-04-17',
    poster_path: '/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg',
    overview: 'A burger-loving hit man, his philosophical partner, a drug-addled gangsters moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.',
    vote_average: 8.0,
    director: 'Quentin Tarantino',
    images: { backdrops: [{file_path: '/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg'}, {file_path: '/hQAvKUPjrh6Se3cf8arLIWxfXc.jpg'} , {file_path: '/1z0Mh1mVuIkAEqMXDzJwRSiahLm.jpg'}] }
  },
  {
    id: 1234,
    title: 'Brazil',
    release_date: '1984-04-17',
    poster_path: '/aewan59WcFThBimkTVVoNf2o5Vb.jpg',
    overview: 'Low-level bureaucrat Sam Lowry escapes the monotony of his day-to-day life through a recurring daydream of himself as a virtuous hero saving a beautiful damsel. Investigating a case that led to the wrongful arrest and eventual death of an innocent man instead of wanted terrorist Harry Tuttle, he meets the woman from his daydream, and in trying to help her gets caught in a web of mistaken identities, mindless bureaucracy and lies',
    vote_average: 8.0,
    director: 'Terry Gilliam',
    images: { backdrops: [{file_path: '/kJuDvHB69G4CHopFEd3DakMdMoa.jpg'}, {file_path: '/abCTPZ2MvQS9zNfwHoyjfHpcGJL.jpg'} , {file_path: '/eOuBld8bAykhCEdU59V7qWIXFm2.jpg'}] }
  }
  
];  

const popularSeriesData = [
  {
    id: 1399,
    title: 'Juego de Tronos',
    release_date: '2011-04-17',
    poster_path: '/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg',
    overview: 'Siete familias nobles luchan por el control de la mítica tierra de Poniente, mientras que un antiguo enemigo regresa después de estar inactivo durante miles de años.',
    vote_average: 8.4,
    director: 'D.B. Weiss, David Benioff (Creadores)',
    images: { backdrops: [{file_path: '/suopoADq0k8YZr4dQXcU6pToj6s.jpg'}] }
  },
  {
    id: 1396,
    title: 'Breaking Bad',
    release_date: '2008-01-20',
    poster_path: '/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    overview: 'Un profesor de química de secundaria a quien se le diagnostica un cáncer de pulmón inoperable se dedica a fabricar y vender metanfetamina para asegurar el futuro de su familia.',
    vote_average: 8.8,
    director: 'Vince Gilligan (Creador)',
    images: { backdrops: [{file_path: '/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg'}, {file_path: '/84XPpjGvxNyExjSuLQe0SzioErt.jpg'}] }
  }
];

const searchSeriesData = [
  {
    id: 456,
    title: 'Better Call Saul',
    release_date: '2015-01-10',
    poster_path: '/xEggmiD4WoJBQR2AiVF46yPUUgD.jpg',
    overview: 'Six years before Saul Goodman meets Walter White. We meet him when the man who will become Saul Goodman is known as Jimmy McGill, a small-time lawyer searching for his destiny, and, more immediately, hustling to make ends meet. Working alongside, and, often, against Jimmy, is “fixer” Mike Ehrmantraut. The series tracks Jimmy’s transformation into Saul Goodman, the man who puts “criminal” in “criminal lawyer".',
    vote_average: 8.6,
    director: 'Vince Gilligan, Peter Gould (Creadores)',
    images: { backdrops: [{file_path: '/og2jKploGHYnCz68vV1nRSEE0xV.jpg'}, {file_path: '/5cFijbPfzCRGLEf2zdBHkrwIVsP.jpg'}] }
  },
    {
    id: 123,
    title: 'Twin Peaks',
    release_date: '1999-01-10',
    poster_path: '/kfGlKqHRukOib8PnNUlam8r5aLi.jpg',
    overview: 'The body of Laura Palmer is washed up on a beach near the small Washington state town of Twin Peaks. FBI Special Agent Dale Cooper is called in to investigate her strange demise only to uncover a web of mystery that ultimately leads him deep into the heart of the surrounding woodland and his very own soul.',
    vote_average: 8.6,
    director: 'David Lynch and Mark Frost (Creators)',
    images: { backdrops: [{file_path: '/73fH1MoISwT5sYUikAdEk6f8CM3.jpg'}, {file_path: '/23S9pcWyoi0vcWJKbkyCiU8Qhse.jpg'}, {file_path: '/2KnARCqTmiUaQS3qN2ohPvexdVz.jpg'}]}
  }
];

function App() {
  const [mediaType, setMediaType] = useState('movie');
  const [movies, setMovies] = useState(popularMoviesData);
  const [listTitle, setListTitle] = useState('POPULARES AHORA');

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

  const handleTypeToggle = (type) => {
    setMediaType(type);
    if (type === 'movie') {
      setMovies(popularMoviesData);
    } else {
      setMovies(popularSeriesData);
    }
    setListTitle('POPULARES AHORA');
  };

  const handleSearch = (query) => {
    if (query) {
      if (mediaType === 'movie') {
        setMovies(searchResultsData);
      } else {
        setMovies(searchSeriesData);
      }
      setListTitle('RECOMENDACIONES PARA TI');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
         <div className="header-content">
            <div className="welcome-message">¿Qué te gustaría ver?</div>
            <SearchBar
              onSearch={handleSearch}
              placeholder="Escribe una película..."
              buttonText="Buscar"
            />
            <ContentTypeToggle activeType={mediaType} onToggle={handleTypeToggle} />
        </div>
      </header>
      <main>
        <MovieList
          movies={movies}
          onCardClick={handleCardClick}
          title={listTitle}
        />
      </main>
      {isModalOpen && <MovieModal movie={selectedMovie} onClose={closeModal} />}
    </div>
  );
}

export default App;