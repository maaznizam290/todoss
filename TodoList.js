import React, { useState } from "react";
import Todo from "./Todo";
import Todoform from "./Todoform";

function TodoList() {
  const [todos, settodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    settodos(newTodos);
    // console.log(todo, ...todos);
  };
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^s*$/.test(newValue.text)) {
      return;
    }
    settodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    settodos(removeArr);
  };

  const completeTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    settodos(updateTodos);
  };

  return (
    <div>
      <h1>what is today's plan</h1>
      <Todoform onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
