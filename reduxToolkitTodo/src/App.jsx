import { useState } from 'react'
import './App.css'
import AddTodo from './components/addTodo';
import Todos from './components/Todo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learn about Redux Toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App;
