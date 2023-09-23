import React, { useEffect, useState } from 'react'
import useItems from '../hooks/useItems'
import useSWR from 'swr'
import Spinner from './Spinner/Spinner'
import Item from './Item'
export default function Content() {
    const {productsUrl} = useItems()
    
    console.log(productsUrl)
    const fetcher = () => fetch(productsUrl).then(data => data.json()).then(data => data)

    
    const {data, error, isLoading} = useSWR(productsUrl, fetcher)
    
    if (isLoading) return (<Spinner/>)
    
     const items = data.data 
     const pagination = data.meta.pagination
     
  return (
    <main className='min-h-screen grid grid-cols-3 gap-6 p-4'>
        
        {items.map (item => (
            <Item
            key={item["id"]}
            item={item.attributes}
            />
        ) )}
        
    </main>
  )
}
