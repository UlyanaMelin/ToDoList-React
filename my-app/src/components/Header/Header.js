import React, { useEffect, useState } from 'react';
import style from './../Header/Header.module.css';

const Header = ({ todo, setTodo, addTodo, delete_all_todos, delete_done_todos }) => {

    return (
    <div>
        <div className={style.header}>
              <h2>Мой список дел</h2>
              <div className={style.delete_todos}>
                <button onClick={()=>delete_all_todos()} className={style.delete_all_todos}> очистить весь список </button>
                <button onClick={()=>delete_done_todos()} className={style.delete_done_todos}> удалить завершённые </button>
              </div>
        </div>
        <div className={style.new_todo}>
          <div className={style.todoform}>   
            <input type="text" className={style.form_input} id="newtodo" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="я планирую ..." />
            <button onClick={()=>addTodo()} className={style.add_button}>   
            <i className="bi bi-plus-circle-fill"></i>      
            </button>
          </div>
        </div>
    </div>
  );
}

export default Header;


