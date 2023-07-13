import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Todos_list from './components/Todos_list/Todos_list';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");                      
  const [flagRedaction, setFlagRedaction] = useState(false);  
  const [redactId, setRedactId] = useState(0);
  const [redactChecked, setRedactChecked] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('todos') !== null) {                        
      const localTodos = JSON.parse(localStorage.getItem('todos')) 
      setTodos(localTodos)
    }
}, [])

  const addTodo = () => {
    if (flagRedaction){                                               
      if (todo === ''){
        alert('вы ввели пустую строчку!') 
      } else {
        const redactTodo = todos.findIndex(el => el.id === redactId);
        const newRedactTodo = todos.slice();

      newRedactTodo[redactTodo] = {
        id:redactId,
        checked:redactChecked,
        text:todo
        }    
         
      setTodos(newRedactTodo);
      localStorage.setItem('todos', JSON.stringify(newRedactTodo)); 
      setTodo("");

      setRedactId(0);
      setRedactChecked(false);
      setFlagRedaction(false);
      };
      
      } else if (todo !== "") {                                        
        const date = new Date().getTime();
        setTodos([...todos, {id:date, checked:false, text:todo}]);
        localStorage.setItem('todos', JSON.stringify([ ...todos, {
        id:date, checked:false, text:todo
      }]))
        setTodo("");
      }else{                                                           
      alert('вы ничего не ввели');
      }
  };

  const editChecked = (id,checked,text) => {
    const checkedTodosIndex = todos.findIndex(el => el.id === id);

    if (checkedTodosIndex >= 0) {
      const newCheckedTodos = todos.slice() 
      
      newCheckedTodos[checkedTodosIndex] = {
       id,
       checked:!checked,
       text
      }    
     
      setTodos(newCheckedTodos);
      localStorage.setItem('todos', JSON.stringify(newCheckedTodos));
    };
  };
 
  const delete_all_todos = () =>{
    setTodos([]);
  };

  const delete_done_todos = () => {
    const doneTodos = todos.filter(el => el.checked === false);
    setTodos(doneTodos);
    localStorage.setItem('todos', JSON.stringify(doneTodos));
  };

  const redactTodo = (id, checked, text) => {
    setRedactId(id);
    setRedactChecked(checked);
    setTodo(text);
    setFlagRedaction(true); 
  };

  const deleteTodo = (id) => {
    const newTodoo = todos.filter(todooo => todooo.id !== id); 
      setTodos(newTodoo);
      localStorage.setItem('todos', JSON.stringify(newTodoo));
  };

return (
  <div className='app_wrapper'> 
    <Header todo={todo} setTodo={setTodo} addTodo={addTodo} delete_all_todos={delete_all_todos} delete_done_todos={delete_done_todos}/>
    <Todos_list todos={todos} editChecked={editChecked} redactTodo={redactTodo} deleteTodo={deleteTodo}/>
  </div>
  );
}

export default App;


