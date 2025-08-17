import { useEffect, useState } from 'react'
import Moviecard from '../Components/Moviecard'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 25
  const [search, setSearch] = useState('')

  
  useEffect(() => {
    fetch("https://jewellery-shop-api-one.vercel.app/jewellery")
      .then(res => res.json())
      .then(data => setMovies(data))
  }, [])

  
  const handleSearch = (e) => {
    setSearch(e.target.value)
    setCurrentPage(1) 
  }


  const filteredMovies = movies.filter(movie =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  )


  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredMovies.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <div className='p-4 pt-16 bg-[#FAF3E0]'>
      <input
        type='text'
        placeholder='Search jewellery...'
        className='p-2 w-3/4 md:w-1/2 border rounded border-[#B8860B] bg-[#1F1F1F] bg-opacity-10 backdrop-blur-md text-[#B] fixed left-1/4 z-10 top-16'
        value={search}
        onChange={handleSearch}
      />

      <div className='movies-container grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16 group'>
        {currentItems.map(movie => (
          <Moviecard key={movie.id} movie={movie} />
        ))}
      </div>

      <div className='pagination-container flex justify-between font-serif mt-5'>
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          className='p-2 bg-[#E50914] hover:bg-red-600 hover:text-[#B8860B] text-[rgb(248,199,76)] rounded'
        >
          PREV
        </button>
        <button
          onClick={() =>
            setCurrentPage(prev =>
              Math.min(prev + 1, Math.ceil(filteredMovies.length / itemsPerPage))
            )
          }
          className='p-2 bg-[#E50914] hover:bg-red-600 hover:text-[#B8860B] text-[rgb(248,199,76)] rounded'
        >
          NEXT
        </button>
      </div>
    </div>
  )
}

export default Home