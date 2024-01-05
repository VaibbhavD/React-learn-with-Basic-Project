import React from "react"
import {logout} from '../../store/authSlice'
import authService from '../../appwrite/auth'
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom"

function LogoutBtn(){
    const dispatch=useDispatch()
    const navigate=useNavigate();

    const logoutHandler=()=>{
        authService.logout().then(()=>{
        dispatch(logout())
         navigate("/")
        
        })
    }

    return(
        <button onClick={logoutHandler}  className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">LogOut</button>
    )
}

export default LogoutBtn