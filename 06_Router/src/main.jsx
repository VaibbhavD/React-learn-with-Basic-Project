import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import './index.css'
import Home from './copmonents/Home/Home'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import About from './copmonents/About/About'
import Contact from './copmonents/Contact/Contact'
import User from './copmonents/User/User'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"About",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"user:",
        element:<User/>
      }
    ]
      
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
