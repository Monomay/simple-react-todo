import React from 'react'
// import Todos from './Todos'

const TodoItem = ({todo,onDelete}) => {
  console.log(todo);
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>onDelete(todo)}>Delete</button>
    </div>
  )
}

export default TodoItem