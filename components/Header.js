import React from 'react'
import NavLink from './NavLink'

const Header = () => {
  return (
    <header className='bg-gray-700 bg-opacity-80 py-2 mb-3 sticky top-0 backdrop-blur'>
      <nav className='container mx-auto px-4'>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/register">Signup</NavLink>
        <NavLink href="/login">Login</NavLink>
        <button className='hover:bg-red-600 rounded py-1 px-3 inline-flex'>Logout</button>
      </nav>
    </header>
  )
}

export default Header