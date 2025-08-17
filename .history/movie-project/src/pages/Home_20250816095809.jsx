import React from 'react'
import Moviecard from '../Components/Moviecard'
const movies=[{
    poster:"https://images.justwatch.com/poster/322729101/s166/the-gorge",
    title:"The George",
    release_date:"2025-02-13"},
  {
    poster:"https://images.justwatch.com/poster/322729101/s166/the-gorge",
    title:"The George",
    release_date:"2025-02-13"},
  {
    poster:"https://images.justwatch.com/poster/322729101/s166/the-gorge",
    title:"The George",
    release_date:"2025-02-13"},
  {
    poster:"https://images.justwatch.com/poster/322729101/s166/the-gorge",
    title:"The George",
    release_date:"2025-02-13"},
  {
    poster:"https://images.justwatch.com/poster/322729101/s166/the-gorge",
    title:"The George",
    release_date:"2025-02-13"},
  {
    poster:"https://images.justwatch.com/poster/322729101/s166/the-gorge",
    title:"The George",
    release_date:"2025-02-13"},
  {
    poster:"https://images.justwatch.com/poster/322729101/s166/the-gorge",
    title:"The George",
    release_date:"2025-02-13"},
  {
    poster:"https://images.justwatch.com/poster/322729101/s166/the-gorge",
    title:"The George",
    release_date:"2025-02-13"},
  {
    poster:"https://images.justwatch.com/poster/322729101/s166/the-gorge",
    title:"The George",
    release_date:"2025-02-13"},
  {
    poster:"https://images.justwatch.com/poster/322729101/s166/the-gorge",
    title:"The George",
    release_date:"2025-02-13"}]
const Home = () => {
  return (
    <div className='p-4 pt-16 bg-[#141414] '>
        <input type='text' placeholder='Search movies,series,...'
         className='p-2 w-3/4 md:w-1/2 border rounded border-[#B8860B]
          bg-[#141414] bg-opacity-60 backdrop-blur-md text-white fixed  left-1/4 z-10 top-16' />
        <div className='movies-container grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16'>
          {
            movies.map(movie =>{
              return(
              <Moviecard key={movie.id} movie={movie}/>
              )
            })
          }
       
        </div>
        <div className='pagination-container flex justify-between font-serif mt-5'>
          <button className='p-2  bg-[#E50914] hover:bg-red-600  hover:text-[#B8860B] text-[rgb(248,199,76)] rounded'>PREV</button>
          <button className='p-2  bg-[#E50914] v text-[rgb(248,199,76)] rounded'>NEXT</button>
        </div>

    </div>
  )
}

export default Home