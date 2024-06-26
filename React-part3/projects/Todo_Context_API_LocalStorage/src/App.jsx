import { useState } from "react";
import "./App.css";
import { TodoProvider } from "./Context";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((previousValue) => [
      { id: Date.now(), ...todo },
      ...previousValue,
    ]);
  };

  const updateTodo = (id, todo) => {
    setTodos((previousValue) =>
      previousValue.map((itemTodo) => (itemTodo.id === id ? todo : itemTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((previousValue) =>
      previousValue.filter((itemTodo) => itemTodo.id !== id)
    );
  };

  const toggleTodo = (id) => {
    setTodos((previousValue) => previousValue.map((itemTodo) => (itemTodo.id === id ? {...itemTodo, isCompleted: !itemTodo.isCompleted} : itemTodo)))
  }
  
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  
  // 54:43

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo,  updateTodo, toggleTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
