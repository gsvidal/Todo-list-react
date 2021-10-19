import React from 'react';

function TodoCounter( { completedTodos, totalTodos  }) {
  return (
    <>
      <h2>Has completado {completedTodos} de {totalTodos} TODO{totalTodos !== 1 && `s`}</h2>
    </>
    
  );
}

export {TodoCounter};