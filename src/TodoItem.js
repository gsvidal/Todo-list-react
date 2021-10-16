import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  const onComplete = () => {
    alert("Ya se completó el todo: " + props.text);
    
  }
  const onDelete = () => {
    alert("Borraste el todo: " + props.text)
  }

  return (
    <li>
      <span 
        className={`Item ${props.completed && "Item--checked"}`} 
        onClick={onComplete}
        >Done</span>
      <p className={`Text ${props.completed && `Text--checked`}`}>{props.text}</p> 
      <span
        className="Icon Icon--delete"
        onClick={onDelete}
      >X</span>
    </li>
  );
}

export { TodoItem };

