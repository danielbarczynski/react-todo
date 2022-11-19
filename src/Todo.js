import React from 'react'

export const Todo = ({ todo, toggleCheckbox }) => {
  function handleCheckbox() {
    toggleCheckbox(todo.id);
  }

  return (
    <div>
      <input type="checkbox" checked={todo.complete} onChange={handleCheckbox} />
        {todo.name}
    </div>
  )
}

export default Todo