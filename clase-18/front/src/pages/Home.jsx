import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Home = () => {
    const [plantas, setPlantas] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)
    useEffect(() => {
        setLoading(true)
        fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent("https://trefle.io/api/v1/plants?token=usr-t_cGbObu6nvYAQ83h85crSdCalvm9DKFZWZ74jojFnE&page="+page))
            .then(res => res.json())
            .then(info => setPlantas(info.data))
            .catch( (err) => setError(err.message) )
            .finally( () => setLoading(false) )
    }, [page])


    // if( loading ) return <div>Cargando...</div>
    if( error ) return <div>{error}</div>

    return (
        <div className='p-6 bg-gray-50 min-h-screen'>
            <div className='max-w-7xl mx-auto' >
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Lista de Plantas</h1>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                #
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Nombre
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Nombre cientifico
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Año
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    {/* Pueden usar Activity 19.2 */}
                    {
                        loading && <div>Cargando...</div> 
                    }
                    <tbody>
                        {
                            loading == false && plantas.map(planta => (
                                <tr key={planta.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {planta.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {planta.common_name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 italic">
                                        {planta.scientific_name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {planta.year}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Link state={planta} to={ `/detalle/${planta.id}` } className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                                        >Ver detalle</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium" onClick={ () => setPage(page - 1) } >Anterior</button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium" onClick={ () => setPage(page + 1) } >Siguente</button>
            </div>
        </div>
    )
}

export default Home