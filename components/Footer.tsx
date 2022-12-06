import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-700 py-6 text-center mt-3'>
    <div className='container mx-auto px-4'>
      <h2 className='font-bold text-2xl mb-3'>MDX Blog</h2>
      <p>Copyright &copy; {new Date().getFullYear()} by Kazi </p>
    </div>
    </footer>
  )
}

export default Footer