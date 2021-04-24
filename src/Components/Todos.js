import React, { useContext } from 'react'
import { UserContext } from '../App'
import Todo from './Todo'

function Todos() {

  const state = useContext(UserContext)

  return (
    <ul className="Todos">
      {
        // state.newTodos === null ? console.log("hbs") : 
        state.newTodos.map((todo) => {
          return <Todo todo={todo} key={todo._id} />
        })
      }
    </ul>
  )
}

export default Todos
