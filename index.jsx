import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import About from './pages/About';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './server'
import Vans from './pages/Vans/Vans';
import VanDetail,{loader as vandetailoader} from './pages/Vans/VanDetail';
import Layout from  './components/Layout';
import Dashboard  from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import HostVan , {loader as hostvanloader} from './pages/Host/HostVan';
import HostVanDetail ,{loader as HostVanDetailloader} from './pages/Host/HostVanDetail';
import Hostvaninfo from './pages/Host/Hostvaninfo';
import HostVanpricing from './pages/Host/HostVanpricing';
import HostVanphotos from './pages/Host/HostVanphotos';
import NotFound from './pages/NotFound';
import { loader as vanspageLoader } from './pages/Vans/Vans';
import Error from './components/Error';
import Login from './pages/Login';
import requireAuth from './utils';
import { loginloader } from './pages/Login';
import { loginAction } from './pages/Login';
localStorage.removeItem("loggedin")


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="login" element={<Login />}  loader={loginloader} action={loginAction}/>
      <Route path="Vans" element={<Vans />} loader={vanspageLoader} errorElement={<Error/>} />
      <Route 
      path="Vans/:id" 
      element={<VanDetail />}
      loader={vandetailoader}
      />
      

      
      <Route path="Host" element={<HostLayout />}>
        <Route index
         element={<Dashboard />}
         loader={async ()=> await requireAuth()}
         />
        <Route 
        path="Income" 
        element={<Income />}
        loader={async ()=> await requireAuth()}
        />
        <Route 
        path="Reviews" 
        element={<Reviews />} 
         loader={async ()=> await requireAuth()}
        />
        <Route 
        path="HostVan" 
        element={<HostVan />}
        loader={hostvanloader}
        />

        <Route 
        path="HostVan/:id" 
        element={<HostVanDetail />}
        loader={HostVanDetailloader}
        >
          <Route index 
          element={<Hostvaninfo />}
          loader={async ()=> await requireAuth()}
          />
          <Route 
          path="pricing" 
          element={<HostVanpricing />} 
          loader={async ()=> await requireAuth()}
          />
          <Route 
          path="photos" 
          element={<HostVanphotos />} 
          loader={async ()=> await requireAuth()}
          />
        </Route>
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)


function App() {

  return (
    <RouterProvider router={router} />
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
 <App />
)