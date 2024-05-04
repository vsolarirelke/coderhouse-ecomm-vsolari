import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/layouts/Navbar.jsx';
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.jsx';
import Footer from './components/layouts/Footer.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App d-flex flex-column">


      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos!"} />}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Bienvenidos!"} />}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
      
      
      <ItemDetailContainer />
      <Footer/>
    </div>
  )
}

export default App
