import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext);
  
  return (
    <>
      <h2>You've completed {completedTodos} of {totalTodos} TODO{totalTodos !== 1 && `s`}</h2>
    </>
  );
}

export {TodoCounter};