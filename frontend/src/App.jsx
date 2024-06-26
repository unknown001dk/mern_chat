import React from 'react'
// import Register from './pages/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      
    </Routes>
    </BrowserRouter>    
  )
}

export default App