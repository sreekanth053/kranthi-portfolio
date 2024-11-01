// Skills.js
import React from 'react';
import './Skills.css';
import htmlLogo from '../assets/logos/html.png';
import cssLogo from '../assets/logos/css.png';
import bootstrapLogo from '../assets/logos/bootstrap.png';
import jsLogo from '../assets/logos/javascript.png';
import reactLogo from '../assets/logos/react.png';
import nodejsLogo from '../assets/logos/nodejs.png';
import pythonLogo from '../assets/logos/python.png';

function Skills() {
    return (
        <section className="skills-section">
            <h2>Technical Skills</h2>
            <div className="skills-container">
                {[htmlLogo, cssLogo, bootstrapLogo, jsLogo, reactLogo, nodejsLogo, pythonLogo].map((logo, idx) => (
                    <div key={idx} className="skill-card">
                        <img src={logo} alt={logo.alt} />
                        <p>{logo.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
