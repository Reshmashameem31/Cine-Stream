import { useEffect, useState } from 'react'
import Moviecard from '../Components/Moviecard'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=56234f0812d9ba8a5cd3570633fcb315`

    if (search.trim()) {
      url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(search)}&page=${page}&api_key=56234f0812d9ba8a5cd3570633fcb315`
    }

    console.log("Fetching URL:", url)  // ✅ Debugging log
    setLoading(true)

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("API Response:", data) // ✅ Debugging log
        setMovies(data.results || [])
        setLoading(false)
      })
      .catch(err => {
        console.error("Fetch error:", err)
        setLoading(false)
      })
  }, [page, search])

  return (
    <div className='p-4 pt-16 bg-[#141414]'>
      {/* Search Bar */}
      <input
        type='text'
        placeholder='Search movies, series...'
        className='p-2 w-3/4 md:w-1/2 border rounded border-[#B8860B] bg-[#1F1F1F] bg-opacity-10 backdrop-blur-md text-[rgb(248,199,76)] fixed left-1/4 z-10 top-16'
        onChange={(e) => {
          setSearch(e.target.value)
          setPage(1) // ✅ reset to first page on new search
        }}
      />

      {/* Movie List */}
      <div className='movies-container grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16 group'>
        {loading ? (
          <p className="text-yellow-400 text-center col-span-full">Loading...</p>
        ) : movies.length > 0 ? (
          movies.map(movie => (
            <Moviecard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full">No movies found</p>
        )}
      </div>

      {/* Pagination */}
      <div className='pagination-container flex justify-between font-serif mt-5'>
        <button
          disabled={page === 1}
          className='p-2 bg-[#E50914] hover:bg-red-600 hover:text-[#B8860B] text-[rgb(248,199,76)] rounded disabled:opacity-50'
          onClick={() => setPage(prev => prev - 1)}
        >
          PREV
        </button>
        <button
          className='p-2 bg-[#E50914] hover:bg-red-600 hover:text-[#B8860B] text-[rgb(248,199,76)] rounded'
          onClick={() => setPage(prev => prev + 1)}
        >
          NEXT
        </button>
      </div>
    </div>
  )
}

export default Home
