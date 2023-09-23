import React from 'react'
import axios from 'axios'
export default function Item({item}) {
  console.log(item.Imagen.data.attributes.url)
  const imagenUrl = item.Imagen.data.attributes.url
  return (
    <div className='flex flex-col h-80 w-80 rounded-lg relative'>
      <div className='w-full flex justify-center '>
      <div className=' flex items-center justify-center overflow-hidden h-80 w-80 rounded-lg shadow'>

<img className='h-auto' src={'http://localhost:1337'+ imagenUrl }>
</img>
</div>
      </div>
       
      <div className='absolute opacity-0 hover:opacity-100 h-80 w-80 rounded-lg top-0 left-0 bg-white bg-opacity-80 text-center gap-2 p-4 flex flex-col items-center justify-center transition-opacity duration-300'>
    {(item.Marca !== undefined || "" || null) ? (<p>{item.Marca}</p>) : ""}
      <p className='font-bold text-2xl'>{item.Nombre}</p>
      <p className='text-gray-600 text-xl '>${item.Precio}</p>
      <button 
      type='button'
      className='bg-rose-300 rounded-xl p-2 text-white uppercase font-semibold'
      >Comprar</button>
      </div>
   
    
    </div>
  )
}
