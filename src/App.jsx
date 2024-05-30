import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/layouts/Navbar.jsx';
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.jsx';
import Cart from './components/cart/Cart.jsx';
import { CartProvider } from './context/CartContext.jsx';
import Footer from './components/layouts/Footer.jsx';
import ElementEmpty from './components/elementEmpty/ElementEmpty.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App d-flex flex-column">


      <BrowserRouter>
        <CartProvider>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenidos!"} />}/>
            <Route path="/category/:categoryId" element={<ItemListContainer greeting={""} />}/>
            <Route path="/item/:productId" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
            {/* <Route path="*" component={<ElementEmpty />} /> */}
          </Routes>
        </CartProvider>
      </BrowserRouter>
      
      <Footer/>
    </div>
  )
}

export default App
