import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'



import './App.css'
import Home from './assets/pages/Home';
import MovieDetails from './assets/pages/MovieDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movie/:id" exact element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App
