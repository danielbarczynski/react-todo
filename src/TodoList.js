import { Todo } from './Todo'
import React from 'react'

const TodoList = ({ todos, toggleCheckbox }) => {
  return (
    todos.map(todo => {
      return <Todo key={todo.id} todo={todo} toggleCheckbox={toggleCheckbox}/>
    })
  )}

export default TodoList