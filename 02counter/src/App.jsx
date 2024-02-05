import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [Counter,setCounter] = useState(15)
  // let Counter = 15

  const addvalue =()=>{
    console.log("Clicked",Counter);
    // Counter = Counter + 1 
    setCounter(Counter +1 )

  }

  const removevalue =()=>{
    console.log("Clicked",Counter);
    setCounter(Counter - 1 )
    

  }

  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter Value :{Counter}</h2>

      <button onClick={addvalue}>Add Value</button>
      <br/>
      <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
