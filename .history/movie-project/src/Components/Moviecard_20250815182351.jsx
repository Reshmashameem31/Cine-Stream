import React from 'react'
import {FaHeart, FaRegHeart } from 'react-icons/fa'
const movie={
    poster:"https://images.justwatch.com/poster/322729101/s166/the-gorge",
    title:"The George",
    release_date:"2025-02-13"}
    const Moviecard=()=>{

    
  return (
    <div className='p-4 rounded-lg shadow-md text-white relative'>
        <img src={movie.poster} alt={movie.title} cl/>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
        <button>{1===1?<FaHeart/>:<FaRegHeart/>
            }
         
        </button>
    </div>
  )
}

export default Moviecard