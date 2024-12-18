import React from "react";

const TodoList = ({ todo, toggleTask, removeTask }) => {
  return (
    <div className="todo-item">
      <button onClick={() => removeTask(todo.id)}>delete</button>
      <div onClick={() => toggleTask(todo.id)}>{todo.task}</div>
    </div>
  );
};

export default TodoList;
