import React, { useEffect, useState } from 'react'
import useItems from '../hooks/useItems'

export default function CartProduct({product}) {
    const {handleAddQuantity, handleRestQuantity} = useItems()

    return (
    <div className='bg-pink-100 rounded-xl p-2'>
        <div className='flex items-center justify-between mb-2'>

        <img 
        className='h-20'
        src={'http://localhost:1337'+product.imageUrl} alt="" />
       <div>

        <p>{product.name}</p>
        <p>{product.category}</p>
        <p>{product.brand}</p>
       </div>
       <p className='p-2'>${product.price}</p>
        </div>

        <div className='flex justify-between'>


        <div>
            <button
            onClick={() => {
              handleRestQuantity(product)
            }}
            className='bg-blue-200 p-2 rounded'
            >-</button>
            <span className='px-3'>{product.quantity}</span>
            <button 
            onClick={() => {
              handleAddQuantity(product)
            }}
            className='bg-blue-200 p-2 rounded'
            >+</button>
        </div>
        
        <button>
          <i className=' rounded bi bi-trash bg-red-600 p-2 text-white'></i>
        </button>


            </div>
    </div>
  )
}
