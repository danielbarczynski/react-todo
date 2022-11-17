import { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([])
  const refTodo = useRef();

  useEffect(() => {
    
  })

  function addTodo(e) {
    const name = refTodo.current.value;
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
