import axios from 'axios'
import React, { useContext, useState } from 'react'
import { UserContext } from '../App'

function InputButton() {

  const state = useContext(UserContext)

  const handleSubmitTodo = () => {
    axios.post('http://localhost:5000', {
      name: state.input
    })
    .then(res => {
      // console.log(res)
      axios.get('http://localhost:5000')
      .then(res => {
      state.setTodos(res.data)
    })
    })
    state.setInput("")
  }

  return (
    <button onClick={handleSubmitTodo} className="Button">click</button>
  )
}

export default InputButton
