//  eslint-disable react/prop-types
import DeleteIcon from "../assets/deleteicon.png";
import "./todo.css";
import { useState } from "react";

export const TodoItem = ({ id, title, deleteTodo }) => {
  const [isActive, setIsActive] = useState(false);
  const done = () => {
    if (!isActive) setIsActive(true);
    else setIsActive(false);
  };

  return (
    <div className="todo-item" id={"todo-" + id}>
      <p
        className="todo-task-title"
        style={{
          color: isActive ? "#2ab82a" : "",
        }}
      >
        {" "}
        {title}
      </p>
      <div>
        <input
          type="checkbox"
          className="field"
          id={"check-" + id}
          onClick={done}
        />

        <img className="todo-icon" src={DeleteIcon} onClick={deleteTodo} />
      </div>
    </div>
  );
};
