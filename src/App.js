import logo from './logo.svg';
import './App.css';
import Input from './Components/Input';
import React, { useEffect, useState } from 'react';
import Todos from './Components/Todos';

export const UserContext = React.createContext()

function App() {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [newTodos, setNewTodos] = useState([])
  const [status, setStatus] = useState('all')

  useEffect(() => {
    if(localStorage.getItem('todos') === '[]') {
      localStorage.setItem('todos', JSON.stringify([]))
    }
    else {
      let dummy = JSON.parse(localStorage.getItem('todos'))
      setTodos(dummy)
      console.log("running")
    }
  }, [])

  useEffect(() => {
    handleFilters()
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos, status])

  const handleFilters = () => {
    switch(status) {
      case 'all':
        setNewTodos(todos)
        break
      case 'completed':
        setNewTodos(todos.filter((todo) => todo.complete))
        break
      case 'uncompleted':
        setNewTodos(todos.filter((todo) => !todo.complete))
        break
      default:
        setNewTodos(todos)
        break
    }
  }

  return (
    <div className="App">
      <h1>Raj's List</h1>
      <UserContext.Provider 
      value={{
        input: input,
        setInput: setInput,
        todos: todos,
        setTodos: setTodos,
        newTodos: newTodos,
        setNewTodos: setNewTodos,
        status: status,
        setStatus: setStatus
      }}>
        <Input />
        <Todos />
      </UserContext.Provider>
    </div>
  );
}

export default App;