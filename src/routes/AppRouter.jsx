import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'

const AppRouter = () => {
  
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route index path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter