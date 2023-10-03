import React from 'react'
//import { useState,useEffect } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import { getHostVans } from '../../api'
import requireAuth from '../../utils'

export async  function loader ({params, request}){
  await requireAuth(request)
  return getHostVans(params.id)
}

const HostVanDetail = () => {

    //const params = useParams()
    //const [vandetail, setvandetail]= useState()

    const vandetail = useLoaderData()

   // useEffect(()=> {
     //  fetch(`/api/host/vans/${params.id}`)
       //.then(res=> res.json())
       //.then(data => setvandetail(data.vans))
    //}, [params.id])

    if(!vandetail){
        return <h1>loading.....</h1>
    }

    const activestyles = {
        fontWeight:"bold",
        textDecoration: "underline",
        color: "#161616"
      }

  return (

    <>    
    
    <section>
        <Link
        to=".."
        relative='path'
        className='back-button'
        >
        &larr; <span>Back to all vans</span>
        </Link>
      <div className='host-van-detail-layout-container'>
        <div className='host-van-detail'>
          <img src={vandetail.imageUrl} alt="" />
          <div className='host-van-detail-info-text'>
            <i
            className={`van-type van-type-${vandetail.type}`}
            >
                {vandetail.type}
            </i>
            <h3>{vandetail.name}</h3>
            <h4>${vandetail.price}/day</h4>
          </div>
        </div> 


            <nav className='host-van-detail-nav'>

            <NavLink
             to='.'  
             style={({isActive})=> isActive ? activestyles : null}
             end
            >
                Details
            </NavLink>

            <NavLink 
            to='pricing'
            style={({isActive})=> isActive ? activestyles : null}
            >
                Pricing
            </NavLink>

            <NavLink 
            to='photos'
            style={({isActive})=> isActive ? activestyles : null}
            >
                Photos
            </NavLink>


            </nav>
        <Outlet  context={[vandetail]}/>
      </div>


      
    </section>
    </>
  )
}

export default HostVanDetail