import React from 'react';
import { TodoItem } from '../TodoItem';
import { TodoContext } from '../TodoContext';
import './TodoList.css';

function TodoList() {
  const {
    loading,
    error,
    searchValue,
    todos,
    completeTodos,
    deleteTodos
  } = React.useContext(TodoContext);
  
  const todosFiltered = todos.filter(todo => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

  const filteredCompleted = todosFiltered.filter(todo => todo.completed).length;
  const filteredTotal = todosFiltered.length;
  return (
    <section>
    
      {error && <p>Hubo un error</p>}
      {loading && <p>Estamos cargando...</p>}
      {(!loading && !todos.length && !error) && <p>Crea tu primer TODO!</p> }
      <ul>
        { searchValue && <h2>
        Has completado {filteredCompleted} de {filteredTotal} TODO{filteredTotal !== 1 && `s`} <strong>FILTRADO{filteredTotal !== 1 && `s`}</strong> 
      </h2> }
      
        {todosFiltered
          .map(todo => 
            <TodoItem 
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodos(todo.text)}
              onDelete={() => deleteTodos(todo.text)}
            />
        )}
      </ul>
    </section>
  );
}

export { TodoList };