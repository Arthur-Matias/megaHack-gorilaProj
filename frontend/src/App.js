import React from 'react';
import './App.css';

import logo from './assets/logo.svg'

import Routes from './routes'

function App() {
  return (
    <div className="container">
      <div className="blueBox">
        <img src={logo} alt="Trade Bridge" id='logo'/>
      </div>
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
