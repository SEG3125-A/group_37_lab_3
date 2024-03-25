import React, { useState } from 'react';
import translations from './Translations.json';
import './app.css';

function HomePage({ onLanguageChange }) {
  const [language, setLanguage] = useState('en'); // Default language is English

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage); // Toggle between English and French
    onLanguageChange(newLanguage); // Propagate language change to parent component
  };

  const handleSubmitFeedback = (feedback) => {
    // Handle feedback submission
    console.log('Feedback:', feedback);
    alert('Feedback submitted successfully!');
  };

  return (
    <div className="content">
      <div className="header">
        <button className="language-switch" onClick={toggleLanguage}>
          {translations[language].toggleLanguage}
        </button>
      </div>
      <div className="top-section">
        <div className="event left">
          <h2>{translations[language].firstEverSki}</h2>
          <p>{translations[language].firstEverDate}</p>
          <p>{translations[language].firstEverDescription}</p>
          <button>{translations[language].register}</button>
          <button className="more-info">{translations[language].moreInfo}</button>
        </div>
        <div className="event right">
          <h2>{translations[language].workshopSki}</h2>
          <p>{translations[language].workshopDate}</p>
          <p>{translations[language].workshopDescription}</p>
          <button>{translations[language].register}</button>
          <button className="more-info">{translations[language].moreInfo}</button>
        </div>
      </div>
      <div className="bottom-section">
        <div className="members-container">
          <h2>{translations[language].famousMembers}</h2>
          <div className="member">
            <h3>{translations[language].omarAbdul}</h3>
            <p>{translations[language].omarRank}</p>
            <p>{translations[language].omarSlope}</p>
            <button>{translations[language].viewProfile}</button> {/* Translate button */}
          </div>
          <div className="separator"></div>
          <div className="member">
            <h3>{translations[language].joshuaAnton}</h3>
            <p>{translations[language].joshuaRank}</p>
            <p>{translations[language].joshuaSlope}</p>
            <button>{translations[language].viewProfile}</button> {/* Translate button */}
          </div>
        </div>
        <div className="resources-feedback-container">
          <div className="resources">
            <h2>{translations[language].resources}</h2>
            <p>{translations[language].skiGuides}</p>
            <p>{translations[language].equipmentChecklist}</p>
            <a href="https://campfortune.com/" target="_blank">{translations[language].viewAllResources}</a>
          </div>
          <div className="feedback-container">
            <h2>{translations[language].shareIdeas}</h2>
            <form onSubmit={handleSubmitFeedback}>
              <textarea
                placeholder={translations[language].enterFeedback}
                rows={4}
                cols={50}
                required
              />
              <button type="submit">{translations[language].submitFeedback}</button>
            </form>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>{translations[language].websiteDeveloped}</p>
      </footer>
    </div>
  );
}

export default HomePage;
