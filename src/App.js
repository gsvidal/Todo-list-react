import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';

const todos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de ReactTomar el curso de ReactTomar el curso de ReactTomar el curso de ReactTomar el curso de ReactTomar el curso dcurso de ReactTomar el curso de ReactTomar el curso de ReactTomar el curso de ReactTomar el curso de ReactTomar el curso de React", completed: false },
  { text: "Llorar con la cebolla", completed: false },

]

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch />
      <TodoList 
        todos={todos}
      >
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
