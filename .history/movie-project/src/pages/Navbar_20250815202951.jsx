import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='p-2 bg-[#E50914]  text-[rgb(189,189,189)] flex justify-between fixed w-full top-0 z-10'>
      <Link to="/" className='font-bold text-xl hover:text-[#B88608] flex gap-1 italic'><img src='icon.png'className='w-8' />CineStream</Link>
      <Link to="/watchlist" className='text-l hover:text-[#B88608]'>Watchlist(0)</Link>
    </nav>
  )
}

export default Navbar