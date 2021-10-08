import React from 'react';
import {useState} from "react";
import "./styles.css";
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';


export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompeleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompeleteTodos, todoText]
    setIncompleteTodos(newTodos)
    setTodoText("")
  }
  const onClickDelete = (index) => {
    const newTodos = [...incompeleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos)
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompeleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompeleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompeleteTodos, completeTodos[index]]
    setCompleteTodos(newCompleteTodos)
    setIncompleteTodos(newIncompleteTodos)
  }

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompeleteTodos.length >= 5}
      />
      {incompeleteTodos.length >= 5 && (<p　style={{color:'red'}}>登録できるtodoは５つまでです。消化してください。</p>) }
      
      <IncompleteTodos
        todos={incompeleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos 
      todos ={completeTodos}
        onClickBack={onClickBack}
        />
    </>

  );
}