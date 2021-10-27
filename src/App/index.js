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
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        //Local storage
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
          }

        setItem(parsedItem);  
        setLoading(false);
        // throw new Error();
      } catch(error) {
        setError(true);
      }
      
    }, 1000)
  });
  

  //Make local storaged data it's show in state
  const saveItem = (item) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(item));
      setItem(item);
    } catch(error) {
      setError(true);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error,
  }

}

function App() {
  // const [patito, savePatito] = useLocalStorage("PATITO_V1", "fernando");
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
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
      loading={loading}
      error={error}
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
