import { Todo } from './Todo'
import React from 'react'

const TodoList = ({ todos }) => {
  return (
    todos.map(todo => {
      return <Todo key={todo.id} todo={todo}/>
    })
  )}

export default TodoList