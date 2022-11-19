import { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todosKey.todos';

function App() {
  const [todos, setTodos] = useState([])
  const refTodo = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(storedTodos);
    if (storedTodos) {
      setTodos(storedTodos);
      console.log('stored');
    }
  }, []) // calling it once, while our component (empty array) loads. if state of empty array occurs, use this function 

  useEffect(() => {
    const saveTodo = localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    console.log(saveTodo);
  }, [todos]) // calling it when there are some todos in our array

  function addTodo(e) {
    const name = refTodo.current.value;
    if (!name) return;
  
    setTodos(prev => {
      return [...prev, {id: uuidv4(), name: name, complete: false}]
    })
    refTodo.current.value = null;
  
  }

  return (
    <>
      <TodoList todos={todos} />
      <input ref={refTodo} type="text" />
      <button onClick={addTodo}>Add</button>
      <button>Done</button>
      <div>0 left</div>
    </>
  );
}

export default App;
