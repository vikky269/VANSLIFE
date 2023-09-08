import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanphotos = () => {

    const [vandetail, setvandetail] = useOutletContext()
  return (
    <img src={vandetail.imageUrl} alt="" className='host-van-detail-image'/>
  )
}

export default HostVanphotos