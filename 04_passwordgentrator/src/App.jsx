import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
    const [character, setcharacter] = useState(0)
    const [number, setnumber] = useState(0)
    const [password, setpassword] = useState("")
 

    let passwordRef=useRef(null);


  const Passwordgenrator=useCallback(()=>{
    let pass="";
    let str=""

    str+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number)str+="123456789"
    if(character) str+='!@#$%^&*()_+{}[]:"?>?></*-+'

    for (let i = 0; i < length; i++) {
      let char=Math.floor(Math.random()*str.length+1)

      pass+=str.charAt(char)
      setpassword(pass)
    }
  },[length,number,character,setpassword])



  useEffect(()=>{
    Passwordgenrator()
  },[length,number,character,Passwordgenrator])



  const copytextclipboard=useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)},[password])
  

  return (
    <>
      <div className="w-screen h-screen bg-slate-700 flex justify-center">
        <div className="w-1/2 h-1/3 bg-slate-200 mt-10 rounded-lg text-center">
          <div className="">
            <p className='text-black text-2xl mt-5'>Password Gentrator</p>
            <input 
               type="text"
               value={password}
               placeholder='Password'
               readOnly
               ref={passwordRef}
               className='p-3 w-96 mt-6 outline-none '></input>
               <button
               className='p-3 px-6 rounded-lg bg-blue-700 hover:bg-blue-500 font-bold'
               onClick={copytextclipboard}
               >Copy</button>
          </div>
          <div className="flex justify-center space-x-5 mt-8">

            <div className="">
            <input
            type="range"
            className=''
            min={8}
            value={length}
            onChange={(e)=>{setlength(e.target.value)}}></input>
            <label className='px-2'>{length}</label>
           </div>
            
            <div className=""><input
            type="checkbox"
            className='px-7'
            defaultChecked={number}
            onChange={()=>setnumber((prev)=>!prev)}
            ></input>
            <label className='px-2'>Add Numbers</label>
            </div>
            
            <div className=""><input
            type="checkbox"
            className=''
            defaultChecked={character}
            onChange={()=>setcharacter((prev)=>!prev )}
            ></input>
             <label  className='px-2' >Add Characters</label>
</div>
            
          </div>
        </div>
      </div>
       
    </>
  )
}

export default App
