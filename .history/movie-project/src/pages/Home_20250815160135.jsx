import React from 'react'

const Home = () => {
  return (
    <div className='p-4 pt-16'>
        <input type='text' placeholder='Search movies,series,...'/>
        <div className='movies-container'></div>
        <div className='pagination-container'></div>

    </div>
  )
}

export default Home