import React, { useState } from 'react'
import { Link, useSearchParams,useLoaderData } from 'react-router-dom'
import { getVans } from '../../api'


export function loader(){
  return getVans()
}


const Vans = () => {
  // const [vans, setVans] = useState([])
  const [error, setError] = useState(null);

  const vans = useLoaderData();
  //console.log(data)

  const [searchparams, setSearchParams] = useSearchParams();
  const typeFilter = searchparams.get("type");
  //console.log(typeFilter)
  //console.log(searchparams.toString())

  //useEffect(()=> {

  // async function loadVans(){
  // setLoading(true)
  //try{
  //const data = await getVans()
  //setVans(data)
  //}
  //catch(err){
  // setError(err)
  //}
  //finally{
  //  setLoading(false)
  // }

  //}

  //loadVans()
  //}, [])

  const filteredvans = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  //console.log(vans)
  const vanElements = filteredvans.map((van) => {
    return (
      <div key={van.id} className="van-tile">
        <Link
          to={van.id}
          state={{ search: `?${searchparams.toString()}`, type: typeFilter }}
        >
          <img src={van.imageUrl} alt="" />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>
              ${van.price} <span>/day</span>
            </p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
      </div>
    )
  })

  // function handleFilterChange (key, value) {
  // setSearchParams((prevParams) => {
  // if (value === null){
  // prevParams.delete(key)
  // }else {
  //   prevParams.set(key, value)
  // }
  // })
  // return prevParams
  //}

  function handleFilterChange(key, value) {
    const updatedSearchParams = new URLSearchParams(searchparams);
    //console.log(updatedSearchParams)

    if (value === null) {
      updatedSearchParams.delete(key);
    } else {
      updatedSearchParams.set(key, value);
    }

    setSearchParams(updatedSearchParams.toString());
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "simple")}
        >
          Simple
        </button>

        <button
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "rugged")}
        >
          Rugged
        </button>

        <button
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "luxury")}
        >
          Luxury
        </button>

        {typeFilter ? (
          <button
            className=" van-type clear-filters"
            onClick={() => handleFilterChange("type", null)}
          >
            Clear
          </button>
        ) : null}
      </div>

      <div className="van-list">{vanElements}</div>
    </div>
  )
}

export default Vans;