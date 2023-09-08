import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './server'
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Layout from  './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import HostVan from './pages/Host/HostVan';
import HostVanDetail from './pages/Host/HostVanDetail';
import Hostvaninfo from './pages/Host/Hostvaninfo';
import HostVanpricing from './pages/Host/HostVanpricing';
import HostVanphotos from './pages/Host/HostVanphotos';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Vans" element={<Vans />} />
          <Route path="Vans/:id" element={<VanDetail />} />

          <Route path='Host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="Income" element={<Income />} />
            <Route path="Reviews" element={<Reviews />} />
            <Route path="HostVan" element={<HostVan />} />

            
            <Route path="HostVan/:id" element={<HostVanDetail />}>

               <Route index element={<Hostvaninfo />} />
               <Route path="pricing" element={<HostVanpricing />} />
               <Route path="photos" element={<HostVanphotos />} />
               

            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
 <App />
)