import React, { useRef, useEffect, useState, useMemo } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Creating refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Memoized sections object to optimize re-rendering
  const sectionRefs = useMemo(() => ({
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    services: servicesRef,
    projects: projectsRef,
    contact: contactRef,
  }), []);

  // State to store active section for navigation highlighting
  const [activeSection, setActiveSection] = useState('home');

  // Scroll to a specific section when nav item is clicked
  const handleScrollToSection = (section) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Update active section based on scrolling
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Start observing each section
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <nav>
          <ul>
            <li className="portfolio-title">Portfolio</li>
            {Object.keys(sectionRefs).map((section) => (
              <li
                key={section}
                onClick={() => handleScrollToSection(section)}
                className={activeSection === section ? 'active' : ''}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Sections */}
      <div id="home" ref={homeRef}><Home /></div>
      <div id="about" ref={aboutRef}><About /></div>
      <div id="skills" ref={skillsRef}><Skills /></div>
      <div id="services" ref={servicesRef}><Services /></div>
      <div id="projects" ref={projectsRef}><Projects /></div>
      <div id="contact" ref={contactRef}><Contact /></div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
