import React from 'react';
import './MembershipPreferences.css';

const MembershipPreferences = ({ prevStep, handleChange, handleSubmit }) => {
  return (
    <div>
      <h1>Step 3: Membership Preferences</h1>
      <label>
        <input type="checkbox" onChange={handleChange('newsletter')} />
        Subscribe to Newsletter
      </label>
      <div className="buttons-container">
        <button onClick={prevStep}>Back</button>
        <button onClick={handleSubmit}>Complete Registration</button>
      </div>
    </div>
  );
};

export default MembershipPreferences;
