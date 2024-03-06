import React from 'react';

function Filter({ onSearchChange }) {
  const handleChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
}

export default Filter;
