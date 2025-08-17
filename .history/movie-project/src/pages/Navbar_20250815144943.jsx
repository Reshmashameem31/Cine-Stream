import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <Link to="/"></Link>
      <Link to="/movies">Watchlist</Link>
    </nav>
  )
}

export default Navbar