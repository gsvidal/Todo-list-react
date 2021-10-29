import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
      <section>
        <label htmlFor="todo">Search:</label>
        <input  
          id="todo" 
          type="text" 
          placeholder="Searching a To Do..."
          className="TodoSearch"
          value={searchValue}
          onChange={onSearchValueChange}
        />
      </section>
  );
}

export { TodoSearch };
