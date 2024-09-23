import React from 'react'
import Home from './Components/Home/Home'
  import { Route, Routes } from "react-router-dom"
import Courses from './Components/Courses/Courses'

const App=() =>{
  return (
    <div>
    {/* <Home/>
    <Course/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
    </Routes>
  
    </div>
  )
}

export default App