import React from 'react'

const GenreFilter = ({genreList,setSelectedGenre}) => {
  
  return (
    <select className='p-2 bg-[#E50914]  text-[rgb(248,199,76)] shadow-md shadow-blue-400  backdrop-blur-md border rounded font-serif mb-4'
    onChange={(e)=>setSelectedGenre(e.target.value)}>
        <option value=''>All Genres</option>
        {genreList.map((genre)=>{
          return(
            <option key={genre} value={genre.id}>{genre.name}</option>
          )
        })

        }

    </select>
  )
}

export default GenreFilter