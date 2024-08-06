// About.js
import React, { useState } from 'react';
import '../styles/aboutme.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabs = {
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Bootstrap', 'Git', 'REST API'],
    interests: ['Web Development', 'Educational Technology', 'UI/UX Design', 'Frontend Optimization'],
    education: ['B.Sc. in Mathematics, Maharaja Ganga Singh University', 'The Web Developer Bootcamp, Udemy']
  };

  return (
    <section className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>Hello! I'm Kanika Arora, a passionate self-taught Frontend Developer with a Bachelor's degree in Mathematics. My journey in web development started with a curiosity for creating visually appealing and user-friendly websites.</p>
          <p>I'm particularly interested in educational technology and its potential to revolutionize learning. My goal is to contribute to innovative projects that make a positive impact on how people interact with digital platforms.</p>
        </div>
        <div className="about-tabs">
          {Object.keys(tabs).map(tab => (
            <button 
              key={tab} 
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <ul className="tab-content">
          {tabs[activeTab].map((item, index) => (
            <li key={index} className="fade-in">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;