import React from 'react';
import { TodoItem } from '../TodoItem';
import { TodoContext } from '../TodoContext';
import './TodoList.css';
import { MyLoader } from '../MyLoader';

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
      {error && <p>An error happened</p>}
      {loading && <MyLoader />}
      {(!loading && !todos.length && !error) && 
        <p className="TodoListEmpty">Create your first TODO!</p> 
      }
      <ul>
        { (searchValue && todos.length > 0) && 
          <h2 className="FilteredTodosCounter">
          You've completed {filteredCompleted} of {filteredTotal} <strong>FILTERED</strong>  TODO{filteredTotal !== 1 && `s`} 
          </h2> 
        }
      
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