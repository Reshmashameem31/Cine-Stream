import {BrowserRouter,Routes,Route} from 'react-router-dom'

import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
