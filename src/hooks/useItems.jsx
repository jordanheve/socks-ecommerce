import { useContext } from 'react'
import ItemsContext from '../context/ItemsProvider'
export default function useItems() {
  return useContext(ItemsContext)
}
