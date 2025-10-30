import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams, } from 'react-router-dom'
import { useProductosById } from '../contexts/productos.context'

const DetallePlanta = () => {
  const [producto, setProducto] = useState({})
  const params = useParams()  //saca los valores de la url
  const id = params.id

  if( Object.keys(producto).length == 0 ){
    useProductosById(id)
      .then( (res) => setProducto(res) )
      .catch( err => console.error(err.message) )
  }

  return (
    <div className='max-w-3xl mx-auto p-6'>


      <h1 className='text-3xl font-bold mb-2' >{producto.nombre}</h1>
      <p className='text-xl text-gray-600 mb-6' >{producto.modelo}</p>
      
      <div className='space-y-3 mb-6'>
        <p><span className='font-semibold' >Familia: </span> {producto.precio}</p>
      </div>

      <Link className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium" to="/">Volver</Link>
    </div>
  )
}

export default DetallePlanta