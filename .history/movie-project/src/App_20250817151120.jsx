import {BrowserRouter,Routes,Route} from 'react-router-dom'

import { useState } from 'react'
import Navbar from './pages/Navbar'
import Watchlist from './pages/WatchList'
import Home from './pages/Home'
import Enter from './pages/Enter'
import { WatchListProvider } from './context/WatchListContext'
function App() {
  const [count, setCount] = useState(0)

  return (
     <Enter/>
   <WatchListProvider>
    <BrowserRouter>
   
     <Navbar/>
   
    <Routes>
       
      
      <Route path='/' element={<Home/>}></Route>
        <Route path='/watchlist' element={<Watchlist/>}></Route>
    </Routes>
    </BrowserRouter></WatchListProvider>
  )
}

export default App
