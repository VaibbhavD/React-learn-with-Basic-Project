import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {AuthLayout,Login} from './Components/index.js'
import Signup from './Pages/Signup.jsx'
import Home from './Pages/Home.jsx'
import Allposts from './Pages/AllPosts.jsx'
import AddPost from './Pages/AddPost.jsx'
import EditPost from './Pages/EditPost.jsx'
import Post from './Pages/Post.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/login",
        element:
        // (
        //   <AuthLayout authentication={false}>
                     <Login/> 
        //   </AuthLayout>
        // )
      },
        {
          path:'/signup',
          element:(
            <AuthLayout authentication={false}>
                       <Signup/>  
            </AuthLayout>
          )
        },
        {
          path:"/all-posts",
          element:
          // (
          //   <AuthLayout authentication={true}>
                     <Allposts/>    
          //   </AuthLayout>
          // )
        },
        {
          path:"/add-post",
          element:<AddPost/>             
        },
        {
          path:"/edit-post/:slug",
          element:
            <EditPost/>            
        },
        {
          path:"/post/:slug",
          element:<Post/>
        },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
