import React from 'react';
import { TodoItem } from '../TodoItem';
import './TodoList.css';

function TodoList(props) {
  const todosFiltered = props.todos.filter(todo => todo.text.toLocaleLowerCase().includes(props.searchValue.toLocaleLowerCase()));

  return (
    <section>
      <ul>
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