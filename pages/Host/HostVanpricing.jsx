import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanpricing = () => {

    const [vandetail, setvandetail] = useOutletContext()

  return (
    <h3 className='host-van-price'>${vandetail.price} <span>/ day</span></h3>
  )
}

export default HostVanpricing