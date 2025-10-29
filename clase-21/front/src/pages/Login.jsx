import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [ email, setEmail ] = useState("")
  const [ pass, setPass ] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    console.log(email, pass)
    //TODO deberiamos llamar a la api
    fetch("http://localhost:2025/api/usuarios/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: pass
      })
    })
    .then( res => res.json() )
    .then( usuario => {
      localStorage.setItem( "session", JSON.stringify(usuario) )
    } )
    //TODO validar ingreso de usuario
    navigate("/")
  }

  return (
    <div className='py-5' >
      <input onChange={ (e) => setEmail(e.target.value) } type="email" placeholder='Ingresar email'/>
      <input onChange={ (e) => setPass(e.target.value) } type="password" placeholder='Ingresar Pass'/>
      <button onClick={ handleLogin } >Ingresar</button>
    </div>
  )
}

export default Login