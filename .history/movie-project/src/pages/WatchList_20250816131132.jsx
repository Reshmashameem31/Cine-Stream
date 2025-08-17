import React from 'react'
import GenreFilter from '../Components/GenreFilter'

const Watchlist = () => {
  return (
    <div className='p-4 pt-16 bg-[#141414] '>
        <input type='text' placeholder='Search movies,series,...'
         className='p-2 w-3/4 md:w-1/2 border rounded border-[#B8860B]
          bg-[#141414] bg-opacity-60 backdrop-blur-md text-white fixed  left-1/4 z-10 top-16' />
          
          <div className='mt-20'>
            <GenreFilter/>
          </div>
          
          
          </div>
  )
}

export default Watchlist