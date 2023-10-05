import React from 'react'
import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Content from '../components/Content'
import useItems from '../hooks/useItems'
import Modal from 'react-modal'
import CartModal from '../components/CartModal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root')
export default function layout() {
  const {handleClickViewCart, viewCart} = useItems()
  return (
    <div className='min-h-screen flex flex-col bg-rose-50'>
        <Navbar/>
        
        <Routes>
        <Route path='/' element={<Content/>}/>
        <Route path='/:categoria' element={<Content/>}/>
        </Routes>
        <Modal isOpen={viewCart} style={customStyles} onRequestClose={handleClickViewCart}> 
        <CartModal/>
        </Modal>
        <Footer/>
    </div>
  )
}
