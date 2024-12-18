import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/generate">Generate Portfolio</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
