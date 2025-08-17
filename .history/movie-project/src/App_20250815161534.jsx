import {BrowserRouter,Routes,Route} from 'react-router-dom'

import { useState } from 'react'
import Navbar from './pages/Navbar'
import Watchlist from './pages/WatchList'
import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div></div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/watchlist' element={<Watchlist/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
