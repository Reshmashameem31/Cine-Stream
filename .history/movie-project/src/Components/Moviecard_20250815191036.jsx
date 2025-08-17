import React from 'react'
import {FaHeart, FaRegHeart } from 'react-icons/fa'

    const Moviecard=({movie})=>{

    
  return (
    <div className=' bg-[#1F1F1F] p-4 rounded-lg shadow-md text-white relative'>
        <img src={movie.poster} alt={movie.title} className='w-full h-80 object-contain rounded-sm'/>
        <h3 className='text-lg font-bold mt-4 text-[#C5A236] hover:'>{movie.title}</h3>
        <p className='text-sm text-yellow-600'>{movie.release_date}</p>
        <button className='absolute top-2 right-2 text-red-500 text-xl'>{1!==1?<FaHeart/>:<FaRegHeart/>
            }
         
        </button>
    </div>
  )
}

export default Moviecard