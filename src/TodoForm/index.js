import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {

  const {
    openModal,
    setOpenModal,
    addTodos,
    newTodoValue,
    setNewTodoValue,
    emptyTodo,
    setEmptyTodo,
    successTodo,
    setSuccessTodo,
    setAnimationButton
  } = React.useContext(TodoContext);

  const onSubmit = (event) => {
    event.preventDefault();
    if(event.target[0].value === "") {
      setEmptyTodo(true);
      setSuccessTodo(false);
    } else {
      addTodos(newTodoValue);
      setSuccessTodo(true);
      setAnimationButton(false);
    }
    setNewTodoValue("");
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    setEmptyTodo(false);
    setSuccessTodo(false)
  }

  return(
    <form action="" onSubmit={onSubmit}>
      <div className="ModalContainer">
        <label htmlFor="input-todo">Write down your next To Do!</label>
        <textarea 
          id="input-todo"
          value={newTodoValue}
          onChange={onChange}
          className="ModalTextarea" 
          type="text" 
          placeholder="I wanna make this..."
        />
        <div className="buttonsContainer">
          <button 
          className="modal-button button-addTodo" 
          type="submit"
          >
            Add To Do!
          </button> 
          <button className="modal-button button-closeModal" onClick={() => setOpenModal(!openModal)}>
            Close
          </button>
        </div>
        {emptyTodo &&
          <p className="todo-msg--error">Empty To Do's are not allowed!</p>
        }
        {successTodo &&
          <p className="todo-msg--success">To Do added successfully!</p>
        }
      </div>
    </form>

  );
}

export { TodoForm };