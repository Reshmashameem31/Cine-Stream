import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WatchListContext } from '../context/WatchListContext'

const Navbar = () => {
const  useContext(WatchListContext)
  return (
    <nav className='p-2 bg-[#E50914]  text-[rgb(248,199,76)] flex justify-between fixed w-full top-0 z-10'>
      <Link to="/" className='font-bold text-xl hover:text-[#B88608] flex gap-1 italic'><img src='icon.png'className='w-8 ml-3' />CineStream</Link>
      <Link to="/watchlist" className='text-l font-semibold font-serif hover:text-[#B88608]'>Watchlist(0)</Link>
    </nav>
  )
}

export default Navbar