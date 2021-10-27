import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';

function AppUI(
  {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    todos,
    completeTodos,
    deleteTodos,
  }
) {
  return(
    <React.Fragment>
      <TodoCounter
        completedTodos={completedTodos}
        totalTodos={totalTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList 
        loading={loading}
        error={error}
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

export { AppUI };