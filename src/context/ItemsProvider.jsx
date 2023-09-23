import React, { Children } from 'react'
import { createContext } from 'react'

const ItemsContext = createContext()

const ItemsProvider = ({children}) => {
    const productsUrl = "http://localhost:1337/api/productos?&populate[categorias][fields]=nombre&populate[Imagen][fields][1]=url"
  return (
    <ItemsContext.Provider
    value = {{
      productsUrl,

    }}
    >{children}</ItemsContext.Provider>
  )
}
export {ItemsProvider}
export default ItemsContext 
