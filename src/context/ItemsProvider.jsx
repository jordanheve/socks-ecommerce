
import { createContext, useState, useEffect } from 'react'

const ItemsContext = createContext()
const ItemsProvider = ({children}) => {
  //const [product, setProduct] = useState({})  // eliminar esta linea de codigo
  const [order, setOrder] = useState([])
  const [totalPrice, setTotalPrice] = useState()
  const productsUrl = "http://localhost:1337/api/productos?sort[0]=publishedAt:desc&populate[categorias][fields]=nombre&populate[Imagen][fields][1]=url&filters[Cantidad][$gt]=0"
  const [viewCart, SetViewCart] = useState(false);
  const handleClickViewCart = () => {
    SetViewCart(!viewCart)
  }

  // handle products

  const handleAddToCart = ({...product}) => {
    
    const existingProductIndex = order.findIndex((orderProduct) => orderProduct.id === product.id);

    if (existingProductIndex !== -1) {
      // El producto ya existe, actualiza su cantidad
      const updatedOrder = [...order];
      updatedOrder[existingProductIndex].quantity += 1;
  
      // Actualiza el estado con el nuevo order que incluye la cantidad actualizada
      setOrder(updatedOrder);
    } else {
      // El producto no existe en el order, agrégalo con cantidad 1
      setOrder([...order, product]);
    }
    // Actualiza la sesión con el carrito actualizado
    sessionStorage.setItem('cart', JSON.stringify([...order, product]));
  }

  // mantener session 

  useEffect(() => {
    const savedCart = sessionStorage.getItem('cart');
    if (savedCart) {
      setOrder(JSON.parse(savedCart));
    }
  }, []);
  

  useEffect(()=> {
    const newTotal = order.reduce((total, product) => (product.price * product.quantity) + total, 0 )
    setTotalPrice(newTotal)
    console.log('se modifico la orden')
  },[order])
 
  

  //TODO manejar los precios de la orden, desde aqui
  const handleAddQuantity = (product) => {
    const productIndex = order.findIndex((orderProduct) => orderProduct.id === product.id);

    if (productIndex !== -1) {
      const updatedOrder = [...order];
      const updatedProduct = { ...updatedOrder[productIndex] };
  
      // Verifica si la cantidad actual es menor que product.total antes de aumentarla
      if (updatedProduct.quantity < updatedProduct.total) {
        updatedProduct.quantity += 1;
        updatedOrder[productIndex] = updatedProduct;
  
        // Actualiza el estado con el nuevo order que incluye la cantidad actualizada
        setOrder(updatedOrder);
  
        // Actualiza la sesión con el carrito actualizado
        sessionStorage.setItem('cart', JSON.stringify(updatedOrder));
      }
    }
  }
  
  const handleRestQuantity = (product) => {
    const productIndex = order.findIndex((orderProduct) => orderProduct.id === product.id);
  
    if (productIndex !== -1) {
      const updatedOrder = [...order];
      const updatedProduct = { ...updatedOrder[productIndex] };
  
      // Verifica si la cantidad actual es mayor que 1 antes de reducirla
      if (updatedProduct.quantity > 1) {
        updatedProduct.quantity -= 1;
        updatedOrder[productIndex] = updatedProduct;
  
        // Actualiza el estado con el nuevo order que incluye la cantidad actualizada
        setOrder(updatedOrder);
  
        // Actualiza la sesión con el carrito actualizado
        sessionStorage.setItem('cart', JSON.stringify(updatedOrder));
      }
    }
  };

  return (
    <ItemsContext.Provider
    value = {{
      productsUrl,  
      viewCart,
      order,
      totalPrice,
      setTotalPrice,
      handleClickViewCart,
      handleAddToCart,
      handleAddQuantity,
      handleRestQuantity,
    }}
    >{children}</ItemsContext.Provider>
  )
}
export {ItemsProvider}
export default ItemsContext 
