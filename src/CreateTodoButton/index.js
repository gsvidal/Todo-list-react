import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from "../TodoContext";


function CreateTodoButton() {
  const {
    openModal,
    setOpenModal,
    animationButton
  } = React.useContext(TodoContext);

  const onClickButton = () => {
    setOpenModal(!openModal);
  }

  return (
    <button
      className={`CreateTodoButton ${!animationButton && `CreateTodoButton-stop-anim`}`}
      onClick={onClickButton}
    >+</button>
  );
}

export { CreateTodoButton };