import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { TodoContext } from "../TodoContext";

function Modal({ children }) {
  const {
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  if(openModal) {
    return ReactDOM.createPortal(
      <div className="ModalBackground">
        <div className="ModalContainer">
          {children}
          <textarea className="ModalTextarea" type="text" placeholder="Escribe aquí..."/>
          <div className="buttonsContainer">
            <button className="modal-button button-addTodo">Añadir</button>
            <button className="modal-button button-closeModal" onClick={() => setOpenModal(!openModal)}>Cerrar</button>
          </div>
        </div>
      </div>
      ,
      document.getElementById("modal")
    );
  } else {
    return null;
  }
  
}

export { Modal };