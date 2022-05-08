import "./App.css";
import Header from "./mycomponents/Header";
import Todos from "./mycomponents/Todos";
import Footer from "./mycomponents/Footer";
import {AddTodo} from "./mycomponents/AddTodo";
import React, { useState } from 'react';

function App() {
 const onDelete = (todo)=>{
   console.log("I am ondelete of todos", todo);
  // console.log(todos);
  //  deleting this way in react does not work.
  //  let index = todos.indexOf(todos);
  //  todos.splice(index, 1);
  // console.log(todo);

  setTodos(todos.filter((e)=>{
    // console.log(e);
    return e!==todo;
  }));
  }
  const addTodo = (title, desc)=>{
    console.log("I am adding this todo", title, desc);
   let sno = todos[todos.length-1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,

    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }

  const[todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "you need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the bus stop",
      desc: "you need to go to the bus stop to get this job done 2"
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "you need to go to the ghat to get this job done 3"
    },
  ]);
  return (
    <>
    <Header title="My Todo" heading="My Name" searchbar={false} />
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
