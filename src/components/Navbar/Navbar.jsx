import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('onboarding');

  // Navigation items
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'writings', label: 'Writings' },
    { id: 'contact', label: 'Contact' }
  ];

  // Intersection Observer to track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the center of viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = ['onboarding', 'about', 'skills', 'projects', 'writings', 'contact'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <button
            onClick={() => scrollToSection('onboarding')}
            className={styles.logoButton}
          >
            Jaebeom Lee
          </button>
        </div>

        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.id} className={styles.navItem}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`${styles.navLink} ${
                  activeSection === item.id ? styles.active : ''
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;