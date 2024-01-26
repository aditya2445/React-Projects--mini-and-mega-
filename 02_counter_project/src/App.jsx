import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const addValue=()=>{
    count=count+1;
    setCount(count);
  }
  const removeValue=()=>{
    count=count-1;
    setCount(count);
  }
  let [count, setCount] = useState(0)

  return (
    <>
      <h1>Count Value:{count}</h1>
      <button
      onClick={addValue}>AddValue</button>
      <br /><br />
      <button
      onClick={removeValue}>RemoveValue</button>
    </>
  )
}

export default App
