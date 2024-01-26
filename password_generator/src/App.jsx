import { useState,useCallback,useEffect,useRef} from 'react'

function App() {
  const [length,setlength]=useState(8);
  const [numAllowed,setNumAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("");

  //useRef hook
  const passwordRef=useRef(null)
  const passGen=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRESTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_[]{}/'|"
    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char);
    }
    setPassword(pass)
  },[length,numAllowed,charAllowed,setPassword])
  
  const copyPassToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,50)
    window.navigator.clipboard.writeText(password)
  },[password])
  
  useEffect(()=>{passGen()},[length,numAllowed,charAllowed,passGen])

  return (
    <>
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-700'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-2'>
    <input type="text"
    value={password}
    className='outline-none w-full py-1 px-3 my-2'
    placeholder='Password'
    readOnly
    ref={passwordRef}
    />
    <button className='outline-none rounded-lg bg-blue-700 text-white px-2 py-0.5 shrink-0 hover:bg-blue-500' onClick={copyPassToClipboard}>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor--pointer'
          onChange={(e)=>{
            setlength(e.target.value)
          }}
        />
        <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={numAllowed}
        id="numberInput"
        onChange={()=>{
          setNumAllowed((prev)=>!prev)
        }}
        />
        <label>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={numAllowed}
        id="numberInput"
        onChange={()=>{
          setCharAllowed((prev)=>!prev)
        }}
        />
        <label>Characters</label>
      </div>
    </div>
  </div>
    </>
  )
}

export default App
