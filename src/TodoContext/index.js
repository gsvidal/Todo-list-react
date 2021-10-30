import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  //Modal states
  const [openModal, setOpenModal] = React.useState(false);
  //Form states
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const [emptyTodo, setEmptyTodo] = React.useState(false);
  const [successTodo, setSuccessTodo] = React.useState(false);
  const [animationButton, setAnimationButton] = React.useState(true);

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

  const addTodos = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  }

  return(
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      todos,
      completeTodos,
      deleteTodos,
      addTodos,
      openModal,
      setOpenModal,
      newTodoValue,
      setNewTodoValue,
      emptyTodo,
      setEmptyTodo,
      successTodo,
      setSuccessTodo,
      animationButton, 
      setAnimationButton
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
