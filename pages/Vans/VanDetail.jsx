import React from 'react'
import { Link, useLocation, useLoaderData } from 'react-router-dom'
import { getVans } from '../../api'
import requireAuth from '../../utils'


export  async function loader ({params, request}){
  await requireAuth(request)
  return getVans(params.id)
}

const VanDetail = () => {
 // const params = useParams()
  //const [van, setVan]= useState(null)
//console.log(params)

const location = useLocation()
//console.log(location)
const van = useLoaderData()
//console.log(data)


  //useEffect(()=> {
       //     fetch(`/api/vans/${params.id}`)
        // .then(res=> res.json())
       //.then(data => setVan(data.vans))
  //}, [params.id])


  const search = location.state?.search || null
  const typed = location.state?.type || "all"

  return (
    <div className="van-detail-container">
      <Link 
      to={`..${search}`}
      relative="path" 
      className="back-button">
        
        
        &larr; <span>Back to {typed} vans</span>
      </Link>

      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this Van</button>
        </div>
      ) : (
        <h2>Loading ........</h2>
      )}
    </div>
  );
}

export default VanDetail
