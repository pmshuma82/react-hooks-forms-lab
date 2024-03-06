import React from 'react';

const Filter = ({ search, onSearchChange }) => {
  const handleChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={handleChange}
    />
  );
};

export default Filter;

