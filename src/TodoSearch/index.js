import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value)
  }

  return (
      <section>
        <label htmlFor="todo">To Do Search:</label>
        <input  
          id="todo" 
          type="text" 
          placeholder="Cebolla"
          className="TodoSearch"
          value={searchValue}
          onChange={onSearchValueChange}
        />
      </section>
  );
}

export { TodoSearch };
