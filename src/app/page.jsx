"use client";
import React from 'react';
import { Covoiturage, Button, Navbar } from '@/componnents';
import '@/styles/page.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='page-style'>
      <Router>
          <Navbar/>
          <Routes>
          <Route path="/" element={<Covoiturage />} />
          <Route path="/" element={<Button />} />
          <Route path="/" element={<Button />} />
          <Route path="/" element={<Button />} />
          <Route path="/" element={<Button />} />
          <Route path="/" element={<Button />} />
          <Route path="/" element={<Button />} />
          </Routes>
        </Router>
    </div>
    </>
  )
}

export default Home