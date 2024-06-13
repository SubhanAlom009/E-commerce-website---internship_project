import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Products from './components/products/Products.jsx'
import ProductViewPage from './components/ProductViewPage/ProductViewPage.jsx'
import Cart from './components/Cart/Cart.jsx'
import { CartProvider } from './Context/CartContext/CartContext.jsx';
import Checkout from './components/Checkout/Checkout.jsx'
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation.jsx'
import { AddressProvider } from './Context/AddressContext/AddressContext.jsx'
import Search from './components/Search/Search.jsx'
import Login from './components/Login/Login.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:productId/:productName' element={<ProductViewPage />} />
      <Route path='/:productId/:productName' element={<ProductViewPage />} />
      <Route path='/cart/:productId' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/order-confirmation' element={<OrderConfirmation />} />
      <Route path='/search/:productName' element={<Search />} />
      <Route path='/login' element={<Login />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <AddressProvider>
        <RouterProvider router={router} />
      </AddressProvider>
    </CartProvider>
  </React.StrictMode>,
)
