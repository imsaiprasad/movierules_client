import './App.css'
import Movie from './Components/Movie'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/movieX" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App