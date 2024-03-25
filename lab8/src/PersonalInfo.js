import React, { useState } from 'react';
import './formStyles.css';
import { useNavigate } from 'react-router-dom';

const PersonalInfo = ({ nextStep }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setFormData({ ...formData, [field]: value });

    // Validation for email
    if (field === 'email') {
      const isValidEmail = /\S+@\S+\.\S+/.test(value);
      setErrors({ ...errors, email: isValidEmail ? '' : 'Invalid email address' });
    }

    // Validation for password
    if (field === 'password') {
      const isValidPassword = value.length >= 6;
      setErrors({ ...errors, password: isValidPassword ? '' : 'Password must be at least 6 characters' });
    }
  };

  const goBack = () => {
    navigate('/');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if there are any errors before proceeding
    if (Object.values(errors).every((error) => !error)) {
      nextStep();
    } else {
      // Handle form submission errors
      console.error('Form submission error:', errors);
    }
  };

  return (
    <div className="container">
      <h1 className="form-title">Step 1: Personal Information</h1>
      <input className="form-input" type="text" placeholder="Full Name" onChange={handleChange('fullName')} />
      <input className="form-input" type="email" placeholder="Email Address" onChange={handleChange('email')} />
      {errors.email && <p className="error-message">{errors.email}</p>}
      <input className="form-input" type="password" placeholder="Password" onChange={handleChange('password')} />
      {errors.password && <p className="error-message">{errors.password}</p>}
      <div className="button-container">
        {/* Replace Link with a button for back navigation */}
        <button className="form-button back-button" onClick={goBack}>Back</button>
        <button className="form-button" onClick={handleSubmit}>Next</button>
      </div>
    </div>
  );
};

export default PersonalInfo;
