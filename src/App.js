import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      
    </Routes>
  </Router>
  )
}

export default App
