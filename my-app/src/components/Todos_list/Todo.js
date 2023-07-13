import React, { useState } from 'react';
import style from './../Todos_list/Todos_list.module.css';

const Todo = ({ id, text, checked, editChecked, redactTodo, deleteTodo }) => {

  return (
    <div className={style.todo}>
      <input type='checkbox' id={id} checked={checked} onChange={()=> editChecked(id,checked,text)}/>
      <label for={id}>
          <p className={checked ? style.checkedText: style.notCheckedText}>{text}</p> 
      </label>
      <div className={style.button_pencil} onClick={()=>redactTodo(id,checked,text)}>
        <i className="bi bi-pencil-square"></i>
      </div>
      <div className={style.button_trash} onClick={()=>deleteTodo(id)}>
        <i className="bi bi-trash"></i> 
      </div>
    </div>
  );
}
    
export default Todo;

