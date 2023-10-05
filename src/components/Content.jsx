
import useItems from '../hooks/useItems'
import useSWR from 'swr'
import Spinner from './Spinner/Spinner'
import Item from './Item'
import { useParams } from 'react-router-dom'

export default function Content() {
    const {productsUrl} = useItems()
    const {categoria} = useParams()
    const fetcher = () => fetch(productsUrl).then(data => data.json()).then(data => data)

    
    const {data, error, isLoading} = useSWR(productsUrl, fetcher)
    
    if (isLoading) return (<Spinner/>)
    
     const items = data.data 
     const pagination = data.meta.pagination
  return (
    <main >


      <div className='min-h-screen grid grid-cols-4 gap-6 p-4'>
    {(items == 0) ? 'no hay nada que mostrar':
      (categoria && items.some(item => item.attributes.categorias.data[0].attributes.Nombre === categoria)) ? (
        items
        .filter(item => item.attributes.categorias.data[0].attributes.Nombre === categoria)
        .map(item => (
          <Item key={item.id} item={item.attributes} />
          ))
          ) : (
            
            items.map (item => (
              <Item
              key={item["id"]}
              item={item.attributes}
              id = {item.id}
              /> ))
              )
            }        
        
        
            </div>
        
        
    </main>
  )
}
