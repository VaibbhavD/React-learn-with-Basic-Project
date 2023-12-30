import './App.css'
import AddTodo from './component/Addtodo'
import Todos from './component/Todods'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store'


function App() {

  return (
    <Provider store={store}>
    <div className="">Vaibhav</div>
      <AddTodo/>
      <Todos/>
    </Provider>
  )
}

export default App
