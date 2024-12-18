import { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleClick = () => {
    setTodos([...todos, { title: input }]);
  };
  const submitTodo = (event) => {
    event.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  const handleButton = () => {
    setTodos("");
  };
  return (
    <form onSubmit={submitTodo}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Add a new task..."
        value={userInput}
        className="todo-input"
      />

      <button onClick={handleClick}>add</button>
      <button onClick={handleButton}>clear all</button>
    </form>
  );
};

export default TodoForm;
