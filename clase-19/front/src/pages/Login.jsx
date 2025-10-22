import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [ email, setEmail ] = useState("")
  const [ pass, setPass ] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    console.log(email, pass)
    //TODO deberiamos llamar a la api
    localStorage.setItem( "session", JSON.stringify({email, pass}) )
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