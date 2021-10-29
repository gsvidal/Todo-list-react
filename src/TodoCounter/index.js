import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext);
  
  return (
    <>
      <h2>Has completado {completedTodos} de {totalTodos} TODO{totalTodos !== 1 && `s`}</h2>
    </>
  );
}

export {TodoCounter};