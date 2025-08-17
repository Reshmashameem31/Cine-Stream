import { useContext } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { WatchListContext } from '../context/WatchListContext'



const Moviecard = ({ movie }) => {
const{watchlist,toggleWatchlist}=  useContext(WatchListContext)
const inWatchList=watchlist.some((m)=>m.id==movie.id)
  return (
    <div
      className={`bg-[#1F1F1F] p-4 rounded-lg font-serif shadow-md shadow-[#a4faffde] 
      transition-transform duration-300 transform hover:scale-105 hover:z-8 
      hover:shadow-[rgb(248,199,76)] relative opacity-100 group-hover:opacity-60 hover:!opacity-100`}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className='w-full h-80 object-contain rounded-sm'
      />
      <h3 className='text-lg font-bold mt-4 text-[#C5A236] hover:text-[#b8860b] cursor-pointer drop-shadow-lg'>
        {movie.title}
      </h3>
      <p className='text-md text-yellow-600 hover:text-yellow-800 cursor-pointer'>
        {movie.release_date}
      </p>
      
      <div className='display-none   hover:display-block'>
        <p className='text-sm mt-1 text-[rgb(248,199,76)] '>{movie.overview}</p>
      </div>
      
      <button className='absolute top-2 right-2 text-yellow-500 text-xl' onClick={()=>toggleWatchlist(movie)}>
        {inWatchList? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  )
}

export default Moviecard
