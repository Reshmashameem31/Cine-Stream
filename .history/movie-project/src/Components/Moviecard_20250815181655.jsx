import React from 'react'
import {} from 
const movie={
    poster:"https://images.justwatch.com/poster/322729101/s166/the-gorge",
    title:"The George",
    release_date:"2025-02-13"}
    const Moviecard=()=>{

    
  return (
    <div>
        <img src={movie.poster} alt={movie.title}/>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
        <button>

        </button>
    </div>
  )
}

export default Moviecard