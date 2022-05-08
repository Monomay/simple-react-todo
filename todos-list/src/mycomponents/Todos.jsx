import React from "react";
import TodoItem from "../mycomponents/TodoItem";

const Todos = ({ todos, onDelete }) => {
  // console.log(todo);
  return (
    <div className="container">
      <h3 className="my-3">Todos List</h3>
      {todos.length===0? "No Todos to display": 
      todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.sno}
            onDelete={(todo) => onDelete(todo)}
          />
        );
      })
      }
    </div>
  );
};

export default Todos;
