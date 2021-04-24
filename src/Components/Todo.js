import axios from 'axios'
import React, { useContext } from 'react'
import { UserContext } from '../App'

function Todo(props) {

  const state = useContext(UserContext)

  const handleDeleteButton = () => {
    axios.delete(`http://localhost:5000/${props.todo._id}`)
    .then(res => {
      axios.get('http://localhost:5000')
      .then(res => {
        state.setTodos(res.data)
      })
    })
  }

  const handleDoneButton = () => {
    axios.patch(`http://localhost:5000/${props.todo._id}`,{
      complete: !props.todo.complete
    })
    .then(res => {
      axios.get('http://localhost:5000')
      .then(res => {
        state.setTodos(res.data)
      })
    })
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
