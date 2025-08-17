import { useEffect, useState } from 'react'
import Moviecard from '../Components/Moviecard'

const Home = () => {
  const [movies, setMovies] = useState([])
  const[page,setPage]=useState(1);
   const[search,setSearch]=useState("");
  
  useEffect(() => {
   let url=`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=56234f0812d9ba8a5cd3570633fcb315`;

    if(search){
        url=`https://api.themoviedb.org/3/movie/s?page=${page}&api_key=56234f0812d9ba8a5cd3570633fcb315`
    }
    fetch(`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=56234f0812d9ba8a5cd3570633fcb315`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [page])

  
 



  return (
    <div className='p-4 pt-16 bg-[#141414]'>
      <input
        type='text'
        placeholder='Search movies,series...'
        className='p-2 w-3/4 md:w-1/2 border rounded border-[#B8860B] bg-[#1F1F1F] bg-opacity-10 backdrop-blur-md text-[rgb(248,199,76)] fixed left-1/4 z-10 top-16'
        
      />

      <div className='movies-container grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16 group'>
        {movies.map(movie => (
          <Moviecard key={movie.id} movie={movie} />
        ))}
      </div>

      <div className='pagination-container flex justify-between font-serif mt-5'>
        <button disabled={page==1}
        className='p-2 bg-[#E50914] hover:bg-red-600 hover:text-[#B8860B] text-[rgb(248,199,76)] rounded' onClick={()=>{
          setPage(prev=>prev-1);
        }}>
          PREV
        </button>
        <button
      className='p-2 bg-[#E50914] hover:bg-red-600 hover:text-[#B8860B] text-[rgb(248,199,76)] rounded'
      onClick={()=>{
          setPage(prev=>prev+1);
        }}
        >
          NEXT
        </button>
      </div>
    </div>
  )
}

export default Home