
import React, { useState } from 'react';

const SearchBar = ({ onSearch, placeholder, buttonText }) => {
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
       
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
      />
      {}
      <button onClick={handleSubmit}>{buttonText}</button>
    </div>
  );
};

export default SearchBar;