//function component
// export default function App(){
//   return <h1>Hola!</h1>
// }
//arrow function component
// const App = () => {
//   return <h1>Hola!</h1>
// }

// export default App
//class component
// import React from 'react'
// class App extends React.Component{
//   render(){
//     return <h1>Hola!</h1>
//   }
// }

// export default App

import React from 'react'
import Nav from './components/Nav'
import Btn from './components/Btn'
import Contacto from './components/Contacto'
export default function App() {
  //aca pueden hacer todo le js que quieran -> localstorage, fetch 
  const unaVariable = "Hola soy una variable"
  const array = [
    {
      "id": 1,
      "nombre": "Juan"
    }, 
    {
      "id": 2,
      "nombre": "Homero"
    },    
    {
      "id": 3,
      "nombre": "Bart"
    },      
  ]
  //const jsxArray = array.map( (elemento, indice) => <div key={indice} >{elemento.nombre}</div> )
  return (
    <div className="container-fluid" >
      <Nav />
      {/* <Btn /> */}
      <Contacto />
      { array.map( (elemento, indice) => <div key={indice} >{elemento.nombre}</div> ) }
    </div>
  )
}
