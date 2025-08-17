import React, { useState,useContext } from 'react'
import GenreFilter from '../Components/GenreFilter'
import { WatchListContext } from '../context/WatchListContext'
import Moviecard from '../Components/Moviecard'
const Watchlist = () => {
const  {watchlist,genreList}=useContext(WatchListContext)
 const[search,setSearch]=useState("")
 const[selectedGenre,setSelectedGenre]=useState("")
 const filteredMovies=watchlist.filter((movie)=>
movie.title.toLowerCase().includes(search.toLowerCase())).filter(movie=>{
  return !selectedGenre || movie.genre_ids.includes(Number(selectedGenre));
})

  return (
    <div className='p-4 pt-16 bg-[#141414] '>
        <input type='text' placeholder='Search movies,series,...'
         className='p-2 w-3/4 md:w-1/2 border rounded border-[#B8860B]
          bg-[#141414] bg-opacity-60 backdrop-blur-md text-white fixed left-14 md:left-1/4 z-10 top-16'
          onChange={(e)=>setSearch(e.target.value)} />
          
          <div className='mt-16 flex justify-center'>
            <GenreFilter genreList={genreList}
            setSelectedGenre={selectedGenre}/>
          </div>
           <div className='movies-container grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16 group'>
        {filteredMovies.map(movie => (
          <Moviecard key={movie.id} movie={movie} />
        ))}
      </div>
          
          </div>
  )
}

export default Watchlist