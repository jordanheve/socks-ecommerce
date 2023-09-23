import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
   const [category, setCategory] = useState([])
    const data = async() => {
        try {
         const response = await fetch('http://localhost:1337/api/categorias')
         const data = await response.json();    
         setCategory(data.data) 
        }catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        data()
    }, [])
  return (
    <>
    <header className='bg-rose-200 h-12 flex place-content-between px-6 items-center'>
        <h1 className='font-bold text-2xl text-rose-600'>PimpMyFeet</h1>
        <button className='cursor-pointer'> 
        <i className='bi bi-cart4 text-2xl text-rose-600'></i>
        </button>
    </header>
    <nav className='flex justify-center sticky bg-rose-600 text-white font-bold '>
        <div className=' flex gap-8 justify-center'>
        {category[0] !== null ? category.map (category => (
                <NavLink key={category.id}>{category.attributes.Nombre}</NavLink>)
            ) : "Cargando..."}
        </div>
       
    </nav>
    </>
  )
}
