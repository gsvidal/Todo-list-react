import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
  const onSearchValueChange = (event) => {
    console.log(event.target.value)
  }

  return (
      <section>
        <label htmlFor="todo">To Do Search:</label>
        <input  
          id="todo" 
          type="text" 
          placeholder="Cebolla"
          className="TodoSearch"
          onChange={onSearchValueChange}
        />
      </section>
  );
}

export { TodoSearch };
