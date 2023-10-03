import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found-container'>
        <h1>
            Sorry, the page you were <br/>
            looking for was not found.
        </h1>
        <Link to="/" >

        <button className='link-button'> Return to Home</button>
        
        </Link>
    </div>
  )
}

export default NotFound