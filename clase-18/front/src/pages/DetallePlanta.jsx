import React, { useEffect } from 'react'
import { Link, useLocation, useParams, } from 'react-router-dom'

const DetallePlanta = () => {
  const params = useParams()  //saca los valores de la url
  const location = useLocation(); //con este pueden sacar valores como el state
  // console.log(location.state)
  const planta = location.state
    // useEffect( () => {
    //   //llamemos a la api /:id
    // }, [] )
  return (
    <div className='max-w-3xl mx-auto p-6'>
      <img src={planta.image_url} alt="" className='w-full h-64 object-cover rounded mb-6'/>

      <h1 className='text-3xl font-bold mb-2' >{planta.scientific_name}</h1>
      <p className='text-xl text-gray-600 mb-6' >{planta.common_name}</p>
      
      <div className='space-y-3 mb-6'>
        <p><span className='font-semibold' >Familia: </span> {planta.family}</p>
        <p><span className='font-semibold'>Autor: </span> {planta.author}</p>
        <p><span className='font-semibold'>Año: </span> {planta.year}</p>
        <p><span className='font-semibold'>Status: </span> {planta.status}</p>
        <p><span className='font-semibold'>Biografia: </span> {planta.bibliography}</p>
      </div>

      <Link className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium" to="/">Volver</Link>
    </div>
  )
}

export default DetallePlanta