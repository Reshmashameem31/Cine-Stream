import React from 'react'
import Moviecard from '../Components/Moviecard'

const Home = () => {
  return (
    <div className='p-4 pt-16 '>
        <input type='text' placeholder='Search movies,series,...'
         className='p-2 w-3/4 md:w-1/2 border rounded border-[#B8860B]
          bg-[#141414] bg-opacity-60 backdrop-blur-md text-white fixed  left-1/4  top-16' />
        <div className='movies-container'>
          <Moviecard movie={/>
        </div>
        <div className='pagination-container'></div>

    </div>
  )
}

export default Home