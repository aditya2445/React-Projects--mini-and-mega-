import { useEffect, useState } from 'react'
import './App.css'
import { Todoprovider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos,setTodos]=useState([])

  const addTodo=(todo)=>{ //here todo is not the todos which is defined above because above usestate todos is the whole array of todos but here todo is a single lined todo
    setTodos((prev)=>[...prev,{id:Date.now(),...todo}])
  }

  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todo : prevTodo)))
    //This above line can also be written as :

    // prev.map((eachVal)=>{
    //   if(eachVal.id===id) todo
    //   else eachVal
    // })
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=> todo.id!==id))
  }

  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ? {...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos&&todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <Todoprovider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App