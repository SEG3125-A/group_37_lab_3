import React, { useState } from 'react';
import './app.css';
import './PersonalInfo.js'




function HomePage() {
  return (
    <div className="content">
      <div className="top-section">
        <div className="event left">
          <h2>First Ever Mount Everest Ski</h2>
          <p>Date: March 1, 2024</p>
          <p>Description: Join us for the world's first ever Mount Everest ski trip. Enjoy breathtaking views and slopes!</p>
          <button>Register</button>
          <button className="more-info">More Info</button>
        </div>
        <div className="event right">
          <h2>Ski Workshop: Advanced Techniques</h2>
          <p>Date: April 1, 2024</p>
          <p>Description: Improve your skiing skills with our advanced workshop. Everyone welcome!</p>
          <button>Register</button>
          <button className="more-info">More Info</button>
        </div>
      </div>
      <div className="bottom-section">
        <div className="resources">
          <h2>Resources</h2>
          <p>Ski Guides</p>
          <p>Ski Equipment Checklist</p>
          <a href="/guides">View all resources</a>
        </div>
        <div className="members-container">
          <h2>Famous Member Profiles</h2>
          <div className="member">
            <h3>Omar Abdul</h3>
            <p>World Rank: 4</p>
            <p>Favorite Slope: Aspen</p>
            <button>View Profile</button>
          </div>
          <div className="separator"></div>
          <div className="member">
            <h3>Joshua Anton</h3>
            <p>World Rank: 2</p>
            <p>Favorite Slope: Chamonix</p>
            <button>View Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
