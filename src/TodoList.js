import React from 'react';
import { TodoItem } from './TodoItem';
import './TodoList.css';

function TodoList(props) {
  return (
    <section>
      <ul>
        {props.todos
        .map(todo => 
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        )}
      </ul>
    </section>
  );
}

export { TodoList };