import {BrowserRouter,Routes,Route} from 'react-router-dom'

import { useState } from 'react'
impo

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/watchlist' element={<WatchList/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
