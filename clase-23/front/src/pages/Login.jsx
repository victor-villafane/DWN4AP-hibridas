import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { uselogin } from '../contexts/session.context'

const Login = () => {
  const [ email, setEmail ] = useState("")
  const [ pass, setPass ] = useState("")
  const [ error, setError ] = useState("")
  const navigate = useNavigate()

  const login = uselogin()

  const handleLogin = () => {
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
    .then( res => {
      if( !res.ok ){
        throw new Error("Credenciales invalidas")
      }
      return res.json()
    } )
    .then( usuario => {
      login(usuario.token, {...usuario, token: undefined})
      navigate("/")
    } )   
    .catch( (err) => setError(err.message) ) 
  }

  return (
    <div className='py-5' >
      { error.length > 0 && <p>{error}</p> }
      <input onChange={ (e) => setEmail( e.target.value ) } type="email" placeholder='Ingresar email'/>
      <input onChange={ (e) => setPass(e.target.value) } type="password" placeholder='Ingresar Pass'/>
      <button onClick={ handleLogin } >Ingresar</button>
    </div>
  )
}

export default Login