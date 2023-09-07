import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './server'
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';

function App() {

  return (
    <BrowserRouter>
     <header>
      <Link to="/" className='site-logo'>#VANLIFE</Link>
      <nav>
        <Link to="/About">About</Link>
        <Link to="/Vans">Vans</Link>
      </nav>
     </header>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/About' element={<About/>}/>
      <Route  path='/Vans' element={<Vans/>}/>
      <Route path='/Vans/:id' element= {<VanDetail/>}/>
    </Routes>
    </BrowserRouter>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
 <App />
)