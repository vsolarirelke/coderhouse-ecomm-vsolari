import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/layouts/Navbar.jsx';
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.jsx';
import Cart from './components/cart/Cart.jsx';
import { CartProvider } from './context/CartContext.jsx';
import Footer from './components/layouts/Footer.jsx';
import ElementEmpty from './components/elementEmpty/ElementEmpty.jsx'
import Checkout from './components/checkout/Checkout.jsx'
import { ToastContainer } from "react-toastify";

import './App.css'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App d-flex flex-column">


      <BrowserRouter>
        <CartProvider>
          <Navbar/>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition: Bounce
            />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenidos!"} />}/>
            <Route path="/category/:categoryName" element={<ItemListContainer greeting={""} />}/>
            <Route path="/item/:productId" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout/> } />
            <Route path="*" component={<ElementEmpty />} />
          </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>
      
    </div>
  )
}

export default App
