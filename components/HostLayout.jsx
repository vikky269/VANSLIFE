import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const HostLayout = () => {

    const activestyles = {
        fontWeight:"bold",
        textDecoration: "underline",
        color: "#161616"
      } 
  return (

   <>
   <nav className='host-nav'>
    <NavLink 
    to='.'
    end
    style={({isActive})=> isActive ? activestyles : null}
    >
        Dashboard
        </NavLink>

    <NavLink 
    to='income'
    style={({isActive})=> isActive ? activestyles : null}
    >
        Income
        </NavLink>




    <NavLink 
    to='HostVan'
    style={({isActive})=> isActive ? activestyles : null}
    >
        Vans
        </NavLink>




    <NavLink 
    to='reviews'
    style={({isActive})=> isActive ? activestyles : null}
    >
        reviews
    </NavLink>
   </nav>

   <Outlet/>
   </>
  )
}

export default HostLayout