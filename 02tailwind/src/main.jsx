import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './card1.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1 className='text-center mt-10 text-5xl font-bold font-mono'>Cards</h1>
    <div className="flex justify-center space-x-10 mt-20">
            <App name="Vaibhav"/> 
            <Card name="Rushikesh"/> 
            </div>
              
  </React.StrictMode>,
)
