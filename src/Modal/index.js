import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { TodoContext } from "../TodoContext";

function Modal({ children }) {
  const {
    openModal
  } = React.useContext(TodoContext);

  if(openModal) {
    return ReactDOM.createPortal(
      <div className="ModalBackground">
        {children}
      </div>
      ,
      document.getElementById("modal")
    );
  } else {
    return null;
  }
  
}

export { Modal };