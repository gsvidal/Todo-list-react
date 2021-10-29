import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
  return(
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList />
      <Modal>
        <TodoForm />
      </Modal>
      <CreateTodoButton
      />
    </React.Fragment>
  );
}

export { AppUI };