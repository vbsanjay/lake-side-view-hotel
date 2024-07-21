import React from 'react'
//import '../src/App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import AddRoom from './components/room/AddRoom'
import ExistingRooms from './components/room/ExistingRooms'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/home/Home"
import EditRoom from "./components/room/EditRoom"

function App() {
  return (
    <>
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/edit-room/:roomId" element={<EditRoom/>}></Route>
          <Route path="/existing-rooms" element={<ExistingRooms/>}></Route>
        </Routes>
      </Router>
    </main>
    </>
  )
}

export default App
