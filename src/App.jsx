<<<<<<< HEAD
import './App.css'
import Nav from './components/Nav'
function App() {

  return (
    <>
      <Nav/>
    </>
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
// import RoomsPage from "./pages/RoomsPage"
// import RoomDetailPage from "./pages/RoomDetailPage"
// import FacilitiesPage from "./pages/FacilitiesPage"
// import ContactPage from "./pages/ContactPage"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
>>>>>>> master
  )
}

export default App
<<<<<<< HEAD
=======

>>>>>>> master
