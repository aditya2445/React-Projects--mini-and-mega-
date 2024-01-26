import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h5>Custom Calling to MyApp</h5>
    </div>
  )
}

// const ReactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click Me to visit Google'
// } 
// IT WIll Not Work Because its an object AND RENDER METHOD OF RECT NEEDS SOME OTHER TYPE OF FORMAT NOT THE ABOVE MENTIONED TYPE OF DECLARED FORMAT

const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

//IF YOU CALL anotherElement DIRECTLY INSIDE THE RENDER METHOD THEN IT WILL WORK

//NOW LETS READ IN WHICH FORMAT REACT SEES TO THE DATA
const ReactElement=React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    ReactElement
)
