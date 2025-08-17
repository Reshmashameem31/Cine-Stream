import {BrowserRouter,Routes,Route} from 'react-router-dom'

import { useState } from 'react'
import Navbar from './pages/Navbar'
import Watchlist from './pages/WatchList'
import Home from './pages/Home'
import E
import { WatchListProvider } from './context/WatchListContext'
function App() {
  const [count, setCount] = useState(0)

  return (
   <WatchListProvider>
    <BrowserRouter>
    
    <Navbar/>
    <Routes>
       <Route path="/" element={<Enter />} />
      <Route path='/home' element={<Home/>}></Route>
        <Route path='/watchlist' element={<Watchlist/>}></Route>
    </Routes>
    </BrowserRouter></WatchListProvider>
  )
}

export default App
