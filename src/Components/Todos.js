import React, { useContext } from 'react'
import { UserContext } from '../App'
import Todo from './Todo'

function Todos() {

  const state = useContext(UserContext)

  return (
    <ul className="Todos">
      {
        state.newTodos.map((todo) => {
          return <Todo todo={todo} key={todo.id} />
        })
      }
    </ul>
  )
}

export default Todos
