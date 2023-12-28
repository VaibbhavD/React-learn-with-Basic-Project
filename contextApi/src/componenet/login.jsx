import Context from "../context/Context";
import React,{ useState,useContext } from "react";


function Login(){
   const[username,setUsername]=useState('')
   const[password,setPassword]=useState('')

   const{setuser}=useContext(Context)

   const Saveuser=(e)=>{
    e.preventDefault()
    setuser({username,password})
   }



    return(
        <div className="-mt-52">
        <h2 className="text-5xl mb-10">Login</h2>
        <input
         type="text"
         placeholder="username"
         className="p-2 px-3 rounded-lg mb-5 w-64 text-black"
         value={username}
         onChange={(e)=>setUsername(e.target.value) +console.log(e.target.value)}/>
          <span>             </span><br></br>
        <input
         type="password"
         placeholder="password"
         className="p-2 px-3 rounded-lg w-64 text-black "
         value={password}
         onChange={(e)=>setPassword(e.target.value)}/>
<br></br>
         <button onClick={Saveuser} className="bg-blue-700 mt-5 mb-10">Submit</button>
        </div>
    )
}

export default Login