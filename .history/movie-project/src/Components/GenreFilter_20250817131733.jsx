useEffect(() => {
   let url=`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=56234f0812d9ba8a5cd3570633fcb315`;

    if(search){
        url=`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=56234f0812d9ba8a5cd3570633fcb315`
    }
    fetch(url)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [page,search])