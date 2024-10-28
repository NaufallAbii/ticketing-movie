import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Theatres from './pages/Theatres'
import YourTickets from './pages/YourTickets'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      
      <Header />
      <Banner />
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Banner/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/theatres' element={<Theatres/>}/>
          <Route path='/yourtickets' element={<YourTickets/>}/>
        </Routes>
        </BrowserRouter>
      <Footer />
    </div>
    
  )
}

export default App