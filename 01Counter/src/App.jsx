import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
   let [number,setnumber]=useState(15);

   const Add=()=>{
    number++;
    setnumber(number)
    console.log(Math.random())
    }
    const Remove=()=>{
    number--;
    if(number>=0){
    setnumber(number)
    }
    else{
      alert("You Cant Not Get Negative Value !")
    }
  }


  return (
    <>
      <h1>{number}</h1>
      <button onClick={Add}>Increase Number</button>
      <button onClick={Remove}>Decrease Number</button>
    </>
  )
}

export default App
