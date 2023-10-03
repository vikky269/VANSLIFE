import React from 'react'
//import { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../api'
import requireAuth from '../../utils'

export async function loader ({request}){
  await requireAuth(request)
  return getHostVans()
}

const HostVan = () => {

//const [hostvan, sethostvan] = useState([])
 //useEffect(()=> {
       // fetch("/api/host/vans")
        //.then(res => res.json())
        //.then(data => sethostvan(data.vans))
 //}, [])
//console.log(hostvan)
const hostvan = useLoaderData()
 const hostvanElement = hostvan.map((host) => {
   return (
     <Link 
     to={`${host.id}`}
     className='host-van-link-wrapper'
     key={host.id}
     >
       <div className="host-van-single" key={host.id}>
         <img src={host.imageUrl} alt="" />
         <div className="host-van-info">
           <h3>{host.name}</h3>
           <p>
             ${host.price}
             <span>/day</span>
           </p>
         </div>
       </div>
     </Link>
   )
 })
  return (
       <section>
          <h1 className='host-vans-title'>Your Listed Vans</h1>
          <div className='host-vans-list'>
                    <section>
                        {hostvanElement}
                    </section>
          </div>
       </section >
  )
}

export default HostVan