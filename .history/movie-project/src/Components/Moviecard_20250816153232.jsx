import React from 'react'
import {FaHeart, FaRegHeart } from 'react-icons/fa'

    const Moviecard=({movie})=>{

    
  return (
    
    <div className=' bg-[#FFFFFF] p-4 rounded-lg font-serif  shadow-md  shadow-[#3B82F6] transition-transform duration-300 transform hover:scale-105 hover:z-10 hover:shadow-[rgb(248,199,76)] text-white relative opacity-100 group-hover:opacity-60 hover:!opacity-100 '>
       
        <img src={movie.img} alt={movie.name} className='w-full h-80 object-contain rounded-sm '/>
        <h3 className='text-lg font-bold mt-4 text-[#C5A236] hover:text-[#b8860b] cursor-pointer drop-shadow-lg'>{movie.name}</h3>
        <p className='text-md text-yellow-600 hover:text-yellow-800 cursor-pointer'>{movie.price}</p>
        <button className='absolute top-2 right-2 text-red-500 text-xl'>{1!==1?<FaHeart/>:<FaRegHeart/>
            }
         
        </button>
    </div>
  )
}

export default Moviecard