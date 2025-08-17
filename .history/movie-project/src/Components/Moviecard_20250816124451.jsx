import React from 'react'
import {FaHeart, FaRegHeart } from 'react-icons/fa'

    const Moviecard=({movie})=>{

    
  return (
    
    <div className=' bg-[#1F1F1F] p-4 rounded-lg font-serif  shadow-md  shadow-[#3B82F6] transition-transform duration-300 transform hover:scale-105 hover:z-10 hover:shadow-[rgb(248,199,76)] text-white relative opacity-100  group-hover:opacity-10'>
       
        <img src={movie.poster} alt={movie.title} className='w-full h-80 object-contain rounded-sm '/>
        <h3 className='text-lg font-bold mt-4 text-[#C5A236] hover:text-[#b8860b] cursor-pointer drop-shadow-lg'>{movie.title}</h3>
        <p className='text-sm text-yellow-600 hover:text-yellow-800 cursor-pointer'>{movie.release_date}</p>
        <button className='absolute top-2 right-2 text-red-500 text-xl'>{1!==1?<FaHeart/>:<FaRegHeart/>
            }
         
        </button>
    </div>
  )
}

export default Moviecard