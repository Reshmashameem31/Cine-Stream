import React from 'react'

const GenreFilter = ({genreList}) => {
  
  return (
    <select className='p-2 bg-[#E50914]  text-[rgb(248,199,76)] shadow-md shadow-blue-400  backdrop-blur-md border rounded font-serif mb-4'>
        {genreList.map((genre)=>{
          
        })

        }

    </select>
  )
}

export default GenreFilter