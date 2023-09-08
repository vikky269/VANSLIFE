import React from 'react'
import {Link, NavLink } from 'react-router-dom'

const Header = () => {

  const activestyles = {
    fontWeight:"bold",
    textDecoration: "underline",
    color: "#161616"
  } 
  return (
    <header>
      <Link to="/" className='site-logo'>#VANLIFE</Link>
      <nav>
        <NavLink 
        to= "/Host"
        style={({isActive})=> isActive ? activestyles : null}
        >
          Host
          </NavLink>

        <NavLink 
        to="/About"
        style={({isActive})=> isActive ? activestyles : null}

        >
          About
          </NavLink>

        <NavLink 
        to="/Vans"
        style={({isActive})=> isActive ? activestyles : null}
        >
          Vans
        </NavLink>
      </nav>
     </header>
  )
}

export default Header