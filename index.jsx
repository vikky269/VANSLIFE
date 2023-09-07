import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
     <header>
      <Link to="/" className='site-logo'>#VANLIFE</Link>
      <nav>
        <Link to="/About">About</Link>
      </nav>
     </header>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/About' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
 <App />
)