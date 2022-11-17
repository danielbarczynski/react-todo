import { useState } from 'react';
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState(['shopping', 'cleaning'])
  
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add</button>
      <button>Done</button>
      <div>0 left</div>
    </>
  );
}

export default App;
