import React, { useState } from 'react';
import './app.css';
import './PersonalInfo.js'
import SignUpForm from './SignUpForm'; 
import HomePage from './HomePage.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="app-header">
          <h1>Alpine Outdoors Joy Skiers Club</h1>
          <div className="auth-buttons">
            {/* Use Link from react-router-dom for navigation */}
            <Link to="/signup" className="sign-up">Sign Up</Link>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
