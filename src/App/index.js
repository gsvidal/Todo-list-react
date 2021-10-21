import './App.css';
import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el curso de ReactTomar el curso de ReactTomar el curso de ReactTomar el curso de ReactTomar el curso de ReactTomar el curso dcurso de ReactTomar el curso de ReactTomar el curso de ReactTomar el curso de ReactTomar el curso de ReactTomar el curso de React", completed: false },
//   { text: "Llorar con la cebolla", completed: true },
// ]

//Custom hook useLocalStorage
function useLocalStorage(itemName, initialValue) {
  //Local storage
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
    }

  const [item, setItem] = React.useState(parsedItem);

  //Make local storaged data it's show in state
  const saveItem = (item) => {
    localStorage.setItem(itemName, JSON.stringify(item));
    setItem(item);
  }

  return [
    item,
    saveItem,
  ];
}

function App() {

  // const [patito, savePatito] = useLocalStorage("PATITO_V1", "fernando");
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  //TodoSearch
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  //Complete and delete Todos(x item)
  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <AppUI 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      todos={todos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
    />
    );
}

export default App;
