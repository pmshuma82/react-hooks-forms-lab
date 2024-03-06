import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Produce');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem);
    setItemName('');
    setItemCategory('Produce');
  };

  const handleNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setItemCategory(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="itemName">Name:</label>
      <input
        type="text"
        id="itemName"
        value={itemName}
        onChange={handleNameChange}
      />

      <label htmlFor="itemCategory">Category:</label>
      <select
        id="itemCategory"
        value={itemCategory}
        onChange={handleCategoryChange}
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
      </select>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

