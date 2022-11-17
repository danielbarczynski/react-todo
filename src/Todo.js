import React from 'react'

export const Todo = ({ todo }) => {
  return (
    <div>
        <input type="checkbox" checked={todo.complete} />
        {todo.name}
    </div>
  )
}

export default Todo