import React, { useState } from 'react';


const SearchBar = ({ onSearch }) => { 
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = () => {

    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Escribe una película que te guste..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Obtener Recomendaciones</button>
    </div>
  );
};

export default SearchBar;