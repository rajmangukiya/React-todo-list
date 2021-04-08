import React, { useContext } from 'react'
import { UserContext } from '../App'
import InputButton from './InputButton'
import Options from './Options'

function Input() {

  const state = useContext(UserContext)
  
  return (
    <div className="Inputs">
      <input onChange={(e) => {state.setInput(e.target.value)}} type="text" value={state.input} />
      <InputButton />
      <Options />
    </div>
  )
}

export default Input
