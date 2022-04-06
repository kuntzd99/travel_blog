import logo from './logo.svg'
import './App.css'
import Locations from './components/Locations'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Locations />} />
      </Routes>
    </div>
  )
}

export default App
