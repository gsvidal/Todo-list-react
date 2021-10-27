import React from 'react';
import { TodoItem } from '../TodoItem';
import './TodoList.css';

function TodoList(props) {
  const todosFiltered = props.todos.filter(todo => todo.text.toLocaleLowerCase().includes(props.searchValue.toLocaleLowerCase()));

  const filteredCompleted = todosFiltered.filter(todo => todo.completed).length;
  const filteredTotal = todosFiltered.length;
  return (
    <section>
     
      {props.error && <p>Hubo un error</p>}
      {props.loading && <p>Estamos cargando...</p>}
      {(!props.loading && !props.todos.length && !props.error) && <p>Crea tu primer TODO!</p> }
      <ul>
        { props.searchValue && <h2>
        Has completado {filteredCompleted} de {filteredTotal} TODO{filteredTotal !== 1 && `s`} <strong>FILTRADO{filteredTotal !== 1 && `s`}</strong> 
      </h2> }
      
        {todosFiltered
          .map(todo => 
            <TodoItem 
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => props.completeTodos(todo.text)}
              onDelete={() => props.deleteTodos(todo.text)}
            />
        )}
      </ul>
    </section>
  );
}

export { TodoList };