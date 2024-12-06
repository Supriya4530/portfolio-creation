import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import PortfolioGenerator from './pages/PortfolioGenerator';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<PortfolioGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
