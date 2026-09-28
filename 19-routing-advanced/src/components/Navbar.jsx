import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center py-4 px-8 bg-cyan-800 justify-between'>
      <h2 className='text-xl font-bold'>Sheryians</h2>
      <div className='flex gap-8 '>
      <a className='text-lg font-bold' href="/">Home</a>
      <a className='text-lg font-bold' href="/About">About</a>
      <a className='text-lg font-bold' href="/Contact">Contact</a>
      </div>
    </div>
  )
}

export default Navbar
