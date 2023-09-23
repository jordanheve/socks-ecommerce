import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Slider from '../components/Slider'

export default function layout() {
  return (
    <div className='min-h-screen flex flex-col bg-rose-50'>
        <Navbar/>
        <Slider/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
