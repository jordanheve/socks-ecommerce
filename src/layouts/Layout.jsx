import React from 'react'
import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Content from '../components/Content'
import useItems from '../hooks/useItems'
export default function layout() {
  return (
    <div className='min-h-screen flex flex-col bg-rose-50'>
        <Navbar/>
        <Slider/>
        <Routes>
        <Route path='/' element={<Content/>}/>
        <Route path='/:categoria' element={<Content/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}
