import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='bg-white shadow-sm' >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' >
                <div className='flex flex justify-between h-16' >
                    <div className='flex items-center' >
                        <span className='text-xl font-bold text-gray-800' >Los simpsons</span>
                    </div>
                    <div className='flex items-center space-x-4' >
                        <NavLink to="/" className='text-gray-600 hover:text-gray-900 py-2' >Home</NavLink>
                        <NavLink to="/login" className='text-gray-600 hover:text-gray-900 py-2'>Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav