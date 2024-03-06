import React, { useState } from 'react';
import Filter from './Filter'; // Adjust the import path here

const App = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (searchTerm) => {
    setSearch(searchTerm);
  };

  return (
    <div>
      <Filter search={search} onSearchChange={handleSearchChange} />
    </div>
  );
};

export default App;
