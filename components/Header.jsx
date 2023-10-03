import React from 'react'
import {Link, NavLink } from 'react-router-dom'
import loginimg from "../assets/images/avatar-icon.png"

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

        <Link to="login" className="login-link">
                    <img 
                        src={loginimg}
                        className="login-icon"
                    />
                </Link>
      </nav>
     </header>
  )
}

export default Header