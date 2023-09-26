import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { ItemsProvider } from './context/ItemsProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ItemsProvider>
    <RouterProvider router={router}/>
  </ItemsProvider>
  
)
