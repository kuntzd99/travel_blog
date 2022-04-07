import logo from './logo.svg'
import './App.css'
import Locations from './components/Locations'
import { Routes, Route } from 'react-router-dom'
import LocationDetails from './components/LocationDetails'
import CommentForm from './components/CommentForm'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Locations />} />
        <Route path="/:id" element={<LocationDetails />} />
        <Route path="/addcomment/:id" element={<CommentForm />} />
      </Routes>
    </div>
  )
}

export default App
