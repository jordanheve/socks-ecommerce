
import { createContext, useState } from 'react'

const ItemsContext = createContext()
const ItemsProvider = ({children}) => {
  const [currentCategory, setCurrentCategory] = useState('latest') 
    const productsUrl = "http://localhost:1337/api/productos?sort[0]=publishedAt:desc&populate[categorias][fields]=nombre&populate[Imagen][fields][1]=url"
  return (
    <ItemsContext.Provider
    value = {{
      productsUrl,
      currentCategory, 
      setCurrentCategory
    }}
    >{children}</ItemsContext.Provider>
  )
}
export {ItemsProvider}
export default ItemsContext 
