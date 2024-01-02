import React,{ useEffect, useState } from 'react'
import './App.css'
import {Header,Footer} from './Components/index'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import {Outlet} from 'react-router-dom'
import Vaibhav from './Components/vaibhav'


function App() {
  const[loading,setloading]=useState(true);
  const dispatch=useDispatch();
 
  useEffect(()=>{
    authService.getCurrentuser()
    .then((userdata)=>{
           if(userdata)   
           {
            dispatch(login({userdata}))
           } 
           else{
            dispatch(logout())
           }})
         .finally(()=>setloading(false))
        },[])
  
    return !loading ? (
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
        <Header />
        <main>
        <Outlet/>
        </main>
          <Footer />
        </div>
      </div>
    ) : null
  }
  

export default App
