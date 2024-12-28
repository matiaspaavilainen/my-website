import './styles/App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'dotenv/config';

import NavBar from './components/NavBar'
import Home from './pages/Home'
import Photos from './pages/Photos'
import About from './pages/About'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Photos" element={<Photos />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
