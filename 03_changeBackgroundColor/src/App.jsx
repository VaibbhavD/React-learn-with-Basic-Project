import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
   let [color,setcolor]=useState("grey")
  return (
    <>
       <div className="w-full h-screen flex justify-center" style={{backgroundColor:color}} id="back">
        <div className="absolute top-96 mt-56 text-lg space-x-7 flex">
           <button type="submit" className='bg-red-900 p-5 rounded-xl' onClick={()=>setcolor("red")}>Red</button>
           <button type="submit" className='bg-yellow-500 p-6 rounded-xl'onClick={()=>setcolor("yellow")}>yellow</button>
           <button type="submit" className='bg-blue-700 p-6 rounded-xl'onClick={()=>setcolor("blue")}>blue</button>
           <button type="submit" className='bg-white p-6 rounded-xl'onClick={()=>setcolor("white")}>white</button>
           <button type="submit" className='bg-orange-700 p-6 rounded-xl'onClick={()=>setcolor("orange")}>orange</button>
           <button type="submit" className='bg-green-600 p-6 rounded-xl'onClick={()=>setcolor("green")}>green</button>
           <button type="submit" className='bg-pink-400 p-6 rounded-xl'onClick={()=>setcolor("pink")}>pink</button>
           <button type="submit" className='bg-black p-6 rounded-xl text-white'onClick={()=>setcolor("black")}>black</button>
         </div>
         </div>
    </>
  )
}

export default App
