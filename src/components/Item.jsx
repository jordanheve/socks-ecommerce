import React from 'react'
import { Link } from 'react-router-dom'
import useItems from '../hooks/useItems'
export default function Item({item, id}) {
  const {handleAddToCart} = useItems()
  const imageUrl = item.Imagen.data.attributes.url
  const itemCategory = item.categorias.data[0].attributes.Nombre
  const product = {
    name: item.Nombre,
    price: item.Precio,
    category: itemCategory,
    brand: item.Marca,
    id: id,
    imageUrl: imageUrl,
    slug: item.slug,
    total: item.Cantidad,
    quantity: 1,

  }

  return (
    <div className='flex flex-col h-80 w-80 rounded-lg relative'>
      <div className='w-full flex justify-center '>
      <div className=' flex items-center justify-center overflow-hidden h-80 w-80 rounded-lg shadow'>

<img className='h-auto' src={'http://localhost:1337'+ product.imageUrl } alt={"imagen de" + product.name}>
</img>
</div>
      </div>
       
      <div className='absolute opacity-0 hover:opacity-100 h-80 w-80 rounded-lg top-0 left-0 bg-white bg-opacity-80 text-center gap-2 p-4 flex flex-col items-center justify-center transition-opacity duration-300'>
    {(product.brand !== undefined || "" || null) ? (<p>{product.brand}</p>) : ""}
      <Link to={`/${product.category}/${product.slug}`}>
      <p className='font-bold text-2xl'>{product.name}</p>
      </Link>
      <p className='text-gray-600 text-xl '>${product.price}</p>
      <button 
      type='button'
      onClick={()=>handleAddToCart(product)}
      className='bg-rose-300 rounded-xl p-2 text-white uppercase font-semibold'
      >Añadir al carrito</button>
      </div>
   
    
    </div>
  )
}
