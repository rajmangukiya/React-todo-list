import userEvent from '@testing-library/user-event'
import React, { useContext, useState } from 'react'
import { UserContext } from '../App'

function InputButton() {

  const state = useContext(UserContext)
  const [id, setId] = useState(Math.random())

  const handleSubmitTodo = () => {
    state.setTodos([...state.todos, {
      id: id,
      complete: false,
      name: state.input
    }])
    state.setInput("")
    setId(Math.random())
  }

  return (
    <button onClick={handleSubmitTodo} className="Button">click</button>
  )
}

export default InputButton
