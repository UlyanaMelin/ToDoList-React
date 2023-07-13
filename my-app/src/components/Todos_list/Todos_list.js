import React from 'react';
import style from './../Todos_list/Todos_list.module.css';
import Todo from './Todo';

const Todos_list = (props) => {
  const myTodos = props.todos.map((el) => (
    <Todo key={el.id} id={el.id} text={el.text} checked={el.checked} editChecked={props.editChecked} redactTodo={props.redactTodo} deleteTodo={props.deleteTodo}/>
  ));

  return (
    <div className={style.todos_list}>
        {myTodos}
    </div>
  );
}
    
export default Todos_list;

