
import useItems from "../hooks/useItems"
import CartProduct from "./CartProduct"
import { currencyFormat } from "../helpers/currencyFormat"



export default function CartModal() {
  const {order, totalPrice} = useItems()
  


  return (
    <div 
    
    className=' max-h-[90vh] overflow-y-scroll w-80 m-h-max flex flex-col'
    >
     {
      (order.length === 0 ) ? (
        <p>No hay objetos en tu carrito</p>
      ) :
      (<div> 
        <p className="text-center text-amber-500 text-xl font-bold">Precio Total: {currencyFormat(totalPrice)}</p>
        {order.map(product => (<CartProduct key={product.id} product={product}/>))}
      </div>)
     }

    </div>
  )
}
