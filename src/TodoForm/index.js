import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const [emptyTodo, setEmptyTodo] = React.useState(false);

  const {
    openModal,
    setOpenModal,
    addTodos,
  } = React.useContext(TodoContext);

  const onSubmit = (event) => {
    event.preventDefault();
    event.target[0].value === "" ? setEmptyTodo(true) : addTodos(newTodoValue);
    setNewTodoValue("");
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    setEmptyTodo(false)
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
      <p>Empty To Do's are not allowed!</p>
      }
      </div>
    </form>

  );
}

export { TodoForm };