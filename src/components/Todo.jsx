import "./Todos.css";
import icons from "../assets/images.png";
import { useState } from "react";
import TodoForm from "../components/TodoForm.jsx";
import TodoList from "../components/TodoList.jsx";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const addTask = (userInput) => {
    if (userInput) {
      const newTask = {
        id: Date.now(),
        task: userInput,
        completed: false,
      };
      setTodos([...todos, newTask]);
    }
  };
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  const toggleTask = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="first-container">
      <span>
        <h1>
          <img src={icons} alt="icon" />
          Todo list
          <hr />
        </h1>
      </span>

      <TodoForm addTask={addTask} />

      {todos.map((todo) => (
        <TodoList
          todo={todo}
          key={todo.id}
          removeTask={removeTask}
          toggleTask={toggleTask}
        />
      ))}
    </div>
  );
};

export default Todo;
