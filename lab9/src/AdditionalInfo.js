import React from 'react';
import './formStyles.css';

const AdditionalInfo = ({ nextStep, prevStep, handleChange }) => {
  return (
    <div className="container">
      <h1 className="form-title">Step 2: Additional Information</h1>
      <input className="form-input" type="text" placeholder="Address" onChange={handleChange('address')} />
      <input className="form-input" type="text" placeholder="City" onChange={handleChange('city')} />
      <input className="form-input" type="text" placeholder="State/Province" onChange={handleChange('state')} />
      <input className="form-input" type="text" placeholder="Postal/Zip Code" onChange={handleChange('postalCode')} />
      <div className="button-container">
        <button className="form-button" onClick={prevStep}>Back</button>
        <button className="form-button" onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default AdditionalInfo;
