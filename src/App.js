import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
import {v4 as uuidv4} from 'uuid';
import './App.css'


function App() {
const [todos, setTodos] = useState([]);

const todoNameRef = useRef(null);

const handAddTodo = () => {
  // ここでタスクを追加する
  const name = todoNameRef.current.value;

  // 空白の時は追加できないようにする
  if (name === "") return;

  setTodos((prevTodos) => {
    return [...prevTodos, {id: uuidv4(), name: name, completed: false}];
  });
  todoNameRef.current.value = null;
};

const toggleTodo = (id) => {
  const newTodos = [...todos];
  const todo = newTodos.find((todo) => todo.id === id);
  todo.completed =!todo.completed;
  setTodos(newTodos);
}

const handleClear = () => {
  const newTodos = todos.filter((todo) =>!todo.completed);
  setTodos(newTodos);
}

  return(
    <div className="app">

      <h1>TodoList</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef}  />

    <div className="btn"> 
      <button onClick={handAddTodo}>追加</button>
      <button onClick={handleClear}>削除</button>
    </div>

      <div className="rest">
        残りのタスク: {todos.filter((todo) => !todo.completed).length}
      </div>  
    </div>
  );
}
    

export default App;
