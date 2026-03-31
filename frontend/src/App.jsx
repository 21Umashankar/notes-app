import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import Createnote from './pages/createnote';


function App() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-900 text-white'> 
      {/*Navbar*/}
      <Navbar/>
      {/*Main content*/}
      <main className='flex-1 container mx-auto p-4'>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create" element={<Createnote/>} />
          </Routes>
      </main>


      {/*Footer*/}
      <Footer/>
    </div>
  )
}

export default App