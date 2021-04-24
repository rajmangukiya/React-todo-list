import React, { useContext } from 'react'
import { UserContext } from '../App'

function Options() {

  const state = useContext(UserContext)

  const handleStatus = (e) => {
    state.setStatus(e.target.value)
  }

  return (
    <select onChange={handleStatus} className="Options">
      <option value="all">all</option>
      <option value="completed">completed</option>
      <option value="uncompleted">un-completed</option>
    </select>
  )
}

export default Options
