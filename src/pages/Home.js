import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/generate'); // Client-side navigation
  };

  return (
    <div className="home">
      <h1>Welcome to Portfolio Generator</h1>
      <p>Create stunning and professional portfolios effortlessly!</p>
      <button onClick={handleNavigation}>Get Started</button>
    </div>
  );
};

export default Home;
