import { Todo } from './Todo'

const TodoList = ({ todos }) => {
  return (
    todos.map(todo => {
      return <Todo todo={todo}/>
    })
  )}

export default TodoList