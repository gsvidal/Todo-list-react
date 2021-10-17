import './App.css';
import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';

const defaulTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de ReactTomar el curso de ReactTomar el curso de ReactTomar el curso de ReactTomar el curso de ReactTomar el curso dcurso de ReactTomar el curso de ReactTomar el curso de ReactTomar el curso de ReactTomar el curso de ReactTomar el curso de React", completed: false },
  { text: "Llorar con la cebolla", completed: true },
]

function App() {
  const [todos, setTodos] = React.useState(defaulTodos);
  const [searchValue, setSearchValue] = React.useState("");

  //TodoSearch
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  //Complete and delete Todos(x item)
  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }
  
  return (
    <React.Fragment>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList 
        searchValue={searchValue}
        todos={todos}
        completeTodos={completeTodos}
        deleteTodos={deleteTodos}
      >
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
