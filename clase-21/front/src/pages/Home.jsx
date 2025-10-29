import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLoaderData } from 'react-router-dom'

// export async function loader() {
//   const res = await fetch("http://localhost:2025/api/productos")
//   const token = localStorage.getItem("usuario")
  
//   const productos = await res.json()
//   console.log("PRODUCTOS", productos)
//   return { productos }
// }

const Home = () => {

    // const { productos } = useLoaderData()
    const [productos, setProductos] = useState([])
    useEffect( () => {
        console.log(localStorage.getItem("session"))
        const token = JSON.parse(localStorage.getItem("session")).token
        fetch( "http://localhost:2025/api/productos", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }
        } )
        .then( (res) => res.json() )
        .then( productos => setProductos(productos) )
        
    }, [])

    return (
        <div className='p-6 bg-gray-50 min-h-screen'>
            <div className='max-w-7xl mx-auto' >
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Lista de Productos</h1>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                #
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Marca
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Modelo
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Precio
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productos.map(producto => (
                                <tr key={producto.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {producto._id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {producto.marca}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 italic">
                                        {producto.modelo}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {producto.precio}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Link state={producto} to={ `/detalle/${producto._id}` } className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                                        >Ver detalle</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home