import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { Modal } from '../Modal';
// import { TodoContext } from "../TodoContext";

function AppUI() {
  return(
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList />
        <Modal>
        <p>Escribe tu nuevo TODO</p>
        </Modal>
      <CreateTodoButton
      />
    </React.Fragment>
  );
}

export { AppUI };