import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='p-4 b'>
      <Link to="/">CineStream</Link>
      <Link to="/watchlist">Watchlist(0)</Link>
    </nav>
  )
}

export default Navbar