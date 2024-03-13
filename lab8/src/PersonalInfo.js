import React from 'react';
import './formStyles.css';
import { useNavigate } from 'react-router-dom'; 

const PersonalInfo = ({ nextStep, handleChange }) => {
  const navigate = useNavigate(); 

  const goBack = () => {
    navigate('/'); 
  };

  return (
    <div className="container">
      <h1 className="form-title">Step 1: Personal Information</h1>
      <input className="form-input" type="text" placeholder="Full Name" onChange={handleChange('fullName')} />
      <input className="form-input" type="email" placeholder="Email Address" onChange={handleChange('email')} />
      <input className="form-input" type="password" placeholder="Password" onChange={handleChange('password')} />
      <div className="button-container">
        {/* Replace Link with a button for back navigation */}
        <button className="form-button back-button" onClick={goBack}>Back</button>
        <button className="form-button" onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default PersonalInfo;
