import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card';
function App() {
  
  return (
    //here in card we can give some of the props like channel="chai"etc..
    //imortant key points that one must consider here are you cannot pass an object or an array directly but this can be using a var i.e, store the object or the arr inside an object and use that object inside the props...
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>TailWind Props</h1>
      <Card userName="Aditya" btnText="Like Here"/>
      <Card userName="Adi" btnText="Share Here"/>
    </>
  )
}

export default App
