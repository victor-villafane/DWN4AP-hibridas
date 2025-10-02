import React, { useState, useEffect } from 'react'

export default function App() {
  const [personajes, setPersonajes] = useState([])
  const [ error, setError ] = useState("")
  const [ loading, setLoading ] = useState(false)
  const [ reload, setReload ] = useState(false)
  const [ intervalo_id, setInvaloId ] = useState(0)
  const [ ubicacionActual, setUbicacion ] = useState({})
  const [ watch, setWatch ] = useState(0)

  useEffect( () => {  //es una funcion que se va a ejecutar cuando se renderiza el componente por primera vez //componentDidMount -> cuando se crea
    setLoading(true)
    // setTimeout( () => {
    //   setPersonajes( JSON.parse( localStorage.getItem('personajes') ) )
    //   setLoading(false)
    // }, 1000 )
    console.log("volvi a ejecutar")
    const id_intervalo = setInterval( () => {
      setReload( !reload )
      const idWatch = navigator.geolocation.watchPosition(
        (posicion) => {
          setUbicacion({
            latitud: posicion.coords.latitude,
            longitud: posicion.coords.longitude
          })
        }
      )
      // window.open(`https://www.google.com/maps?q=${ubicacionActual.latitud},${ubicacionActual.longitud}`)
      setWatch(idWatch)
    }, 5000 )
    
    setInvaloId(id_intervalo)

    return () => {
      //componentDidUnMount -> cuando desaparece
      console.log( "desapareci! " + intervalo_id )
      clearInterval(intervalo_id)
      navigator.geolocation.clearWatch(watch)
    }
  }, [reload] )//componentDiDUpdate -> cuando se actualiza -> los valores que vayan dentro del corchete van a volver a ejecutar el useEffect

  const handleSubmit = (e) => {
    e.preventDefault()
    setPersonajes([...personajes,
    {
      id: personajes.length + 1,
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value
    }
    ])
  }
  if( !navigator.geolocation ){
    console.log("desactivado")
  }
  return (
    <div>
      <p>{ubicacionActual.latitud}</p>
      <p>{ubicacionActual.longitud}</p>
    </div>
  )
  // return personajes.length != 0 
  //   ? (
  //       <div className="container-fluid" >
  //         <form onSubmit={handleSubmit}>
  //           <input type="text" name="nombre" />
  //           <input type="text" name="apellido" />
  //           <button type="submit">Guardar</button>
  //         </form>
  //         {personajes.map(personaje => <p key={personaje.id} >{personaje.nombre}</p>)}
  //         {/* <button onClick={handleNuevoPersonaje} >Nuevo personaje</button> */}
  //         <button onClick={ () => setReload( !reload ) } >recargar</button>
  //       </div>
  //     )
  //   : (
  //     <h1>Cargando....</h1>
  //   )
}
