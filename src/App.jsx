import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import PlantLanding from './component/plants_shopping/landing'
import PlantProduct  from './component/plants_shopping/product'
import PlantCart from './component/plants_shopping/cart'
import Checkout from './component/plants_shopping/checkout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path="/plant-shopping/landing" element={<PlantLanding />} />
        <Route path="/plant-shopping/product" element={<PlantProduct />} />
        <Route path="/plant-shopping/cart" element={<PlantCart />} />
        <Route path="/plant-shopping/checkout" element={<Checkout />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
