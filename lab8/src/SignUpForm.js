import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './app.css';
import PersonalInfo from './PersonalInfo'; 
import AdditionalInfo from './AdditionalInfo'; 
import MembershipPreferences from './MembershipPreferences'; 


function SignUpForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      password: '',
      address: '',
      city: '',
      state: '',
      postalCode: '',
      newsletter: false, 
    });

  const navigate = useNavigate();

  const handleChange = key => event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData); 
    alert('Registration Complete!');
    navigate('/'); 
  };
  

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep === 1) {
      navigate('/');
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo nextStep={nextStep} handleChange={handleChange} />;
      case 2:
        return <AdditionalInfo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} />;
      case 3:
        return <MembershipPreferences prevStep={prevStep} handleChange={handleChange} handleSubmit={handleSubmit} />;
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="container">
      {renderStep()}
    </div>
  );
}

export default SignUpForm;
