import React from 'react'
// import '../src/App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import AddRoom from './components/room/AddRoom'
import ExistingRooms from './components/room/ExistingRooms'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/home/Home"
import EditRoom from "./components/room/EditRoom"
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import RoomListing from './components/room/RoomListing'
import Admin from './components/admin/Admin'

function App() {
  return (
    <>
    <main>
      <Router>
        <NavBar/> 
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/edit-room/:roomId" element={<EditRoom/>}></Route>
          <Route path="/existing-rooms" element={<ExistingRooms/>}></Route>
          <Route path="/add-room" element={<AddRoom/>}></Route>
          <Route path="/browse-all-rooms" element={<RoomListing/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </main>
    </>
  )
}

export default App
