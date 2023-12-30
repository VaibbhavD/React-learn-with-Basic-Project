import { useEffect, useState } from 'react'
import './App.css'
import {Header,Footer} from './Components/index'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'


function App() {
  const[loading,setloading]=useState(true);
  const dispatch=useDispatch();
 
  useEffect(()=>{
    authService.getCurrentuser()
    .then((userdata)=>{
           if(userdata)   
           {
            dispatch(login(userdata))
           } 
           else{
            dispatch(logout())
           }})
    .finally(()=>setloading(false))
    },[])
  
  return !loading?(
    <div className="w-full h-full bg-black">hi Vaibhav</div>
  ):(
    <div className="w-full h-full bg-black">Please Login First</div>
  )
}

export default App
