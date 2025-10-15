import React, { useEffect } from 'react'
import { useLocation, useParams, } from 'react-router-dom'

const DetallePlanta = () => {
  const params = useParams()  //saca los valores de la url
  const location = useLocation(); //con este pueden sacar valores como el state
  console.log(location)
  useEffect( () => {
    //llamemos a la api /:id
  }, [] )
  return (
    <div></div>
  )
}

export default DetallePlanta