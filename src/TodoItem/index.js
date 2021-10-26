import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li>
      <span 
        className={`Item ${props.completed && "Item--checked"}`} 
        onClick={props.onComplete}
        >Done</span>
      <p className={`Text ${props.completed && `Text--checked`}`}>{props.text}</p> 
      <span
        className="Icon Icon--delete"
        onClick={props.onDelete}
      >X</span>
    </li>
  );
}

export { TodoItem };

