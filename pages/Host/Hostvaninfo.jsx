import React from 'react'
import { useOutletContext } from 'react-router-dom'


const Hostvaninfo = () => {

    const [vandetail, setvandetail] = useOutletContext()

  return (
       <section className='host-van-detail-info'>
        <h4>Name: <span>{vandetail.name}</span></h4>
        <h4>Category: <span>{vandetail.type}</span></h4>
        <h4>Description: <span>{vandetail.description}</span></h4>
        <h4>Visibility: <span>Public</span> </h4>
       </section>
  )
}

export default Hostvaninfo