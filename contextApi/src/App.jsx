import Login from './componenet/login'
import Profile from './componenet/profile'
import Context from './context/Context'
import React from 'react'
import './App.css'

function App() {
  const [user,setuser]=React.useState(null)

  return (
    <Context.Provider value={{user,setuser}}>
     <Login/>
     <Profile/>
     </Context.Provider>
  
  )
}

export default App
