import React, { useState } from 'react';
import '../styles/skills.css';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('main');

  const mainSkills = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Redux', 'React-Router', 'Git', 'REST API'];
  const additionalSkills = [
    'Cross-Browser Compatibility',
    'Responsive Design',
    'Frontend Optimization',
    'Problem-solving',
    'Technical support',
    'Troubleshooting'
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-nav">
        <button 
          className={activeCategory === 'main' ? 'active' : ''}
          onClick={() => setActiveCategory('main')}
        >
          Main Skills
        </button>
        <button 
          className={activeCategory === 'additional' ? 'active' : ''}
          onClick={() => setActiveCategory('additional')}
        >
          Additional Skills
        </button>
      </div>
      <div className="skills-container">
        {activeCategory === 'main' ? (
          <ul className="skills-list">
            {mainSkills.map((skill, index) => (
              <li key={index} className="skill-item">
                <span className="skill-name">{skill}</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{width: `${Math.random() * 40 + 60}%`}}></div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="skills-list additional">
            {additionalSkills.map((skill, index) => (
              <li key={index} className="skill-item additional">{skill}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Skills;

