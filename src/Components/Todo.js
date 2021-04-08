import React, { useContext } from 'react'
import { UserContext } from '../App'

function Todo(props) {

  const state = useContext(UserContext)

  const handleDeleteButton = () => {
    console.log("delete")
    state.setTodos(state.todos.filter((todo) => {
      return todo.id !== props.todo.id
    }))
  }

  const handleDoneButton = () => {
    state.setTodos(state.todos.map((todo) => {
      if(todo.id == props.todo.id) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return {
        ...todo
      }
    }))
  }

  return (
    <div className="Todo" >
      <div className={`TodoText ${props.todo.complete ? 'TodoTextDone' : ''}`}>{props.todo.name}</div>
      <button onClick={handleDoneButton} className={`TodoUnCompleteButton ${props.todo.complete ? 'TodoCompleteButton' : ''}`} ></button>
      <button onClick={handleDeleteButton} className="TodoDeleteButton">
      <div className="image"></div>
      </button>
    </div>
  )
}

export default Todo
