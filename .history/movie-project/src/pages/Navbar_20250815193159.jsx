import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='p-2 bg-[#E50914] text-[#C5A236]  flex justify-between fixed w-full top-0 z-10'>
      <Link to="/" className='font-bold text-xl hover:text-[#B88608] italic flex gap-2'><img src='LOGO.png' className='w-10'/>CineStream</Link>
      <Link to="/watchlist" className='text-l hover:text-[#B88608]'>Watchlist(0)</Link>
    </nav>
  )
}

export default Navbar