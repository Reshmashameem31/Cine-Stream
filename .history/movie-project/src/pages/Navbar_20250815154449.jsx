import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='p-4 bg-[#3B1E54] text-[#E0E0E0]  flex justify-between fixed w-full top-0'>
      <Link to="/" className='font-bold text-xl hover:text-[#00E5FF]'></img/</nav>>CineStream</Link>
      <Link to="/watchlist" className='text-l hover:text-[#00E5FF]'>Watchlist(0)</Link>
    </nav>
  )
}

export default Navbar