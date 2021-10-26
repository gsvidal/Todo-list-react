import React from 'react';

function TodoCounter( { completedTodos, totalTodos  }) {
  //componentWillUnmount
  React.useEffect(() => {
    console.log("componentDidMount");
    return () => {
      console.log("componentWillUnmount")
    }
  }, [completedTodos]);
  return (
    <>
      <h2>Has completado {completedTodos} de {totalTodos} TODO{totalTodos !== 1 && `s`}</h2>
    </>
    
  );
}

export {TodoCounter};