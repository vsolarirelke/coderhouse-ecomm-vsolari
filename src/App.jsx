import { useState } from 'react'
import Navbar from './components/layouts/Navbar.jsx';
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.jsx';
import Footer from './components/layouts/Footer.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App d-flex flex-column">
      <Navbar/>
      <ItemListContainer greeting={"Bienvenidos!"} />
      <ItemDetailContainer />
      <Footer/>
    </div>
  )
}

export default App
