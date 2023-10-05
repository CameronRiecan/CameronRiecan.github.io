import React from 'react';
import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Cheack local storage to see if dark mode is preference
        const isDarkModePreferred = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(isDarkModePreferred);
    }, []);

    useEffect(() => {
        // Update the CSS variables base on dark mode state
        const root = document.documentElement;

        if (isDarkMode) {
            // Dark mode variables
            root.style.setProperty('--color-bg', '#121212');
            root.style.setProperty('--color-bg-variant', '#1a1a1a');
            root.style.setProperty('--color-primary', '#4db5ff');
            root.style.setProperty('--color-primary-variant', 'rgba(77, 181, 255, 0.4)');
            root.style.setProperty('--color-white', '#fff');
            root.style.setProperty('--color-light', 'rgba(255, 255, 255, 0.6)');
        } else {
            // Light mode variables (you can define these as needed)
            root.style.setProperty('--color-bg', 'var(--color-bg-light)');
            root.style.setProperty('--color-bg-variant', 'var(--color-bg-variant-light)');
            root.style.setProperty('--color-primary', 'var(--color-primary-light)');
            root.style.setProperty('--color-primary-variant', 'var(--color-primary-variant-light)');
            root.style.setProperty('--color-white', 'var(--color-white-light)');
            root.style.setProperty('--color-light', 'var(--color-light-light)');
        }

        // Store dark mode peference in local storage
        localStorage.setItem('darkMode', isDarkMode);
    }, [isDarkMode]);

    // toggle for theme dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
      };

  return (
    <div className='dark-mode-toggle'>
        <label className='switch'>
            <input type='checkbox' checked={isDarkMode} onChange={toggleDarkMode} />
            <span className='slider round'></span>
        </label>   DarkModeToggle
    </div>
  );
};

export default DarkModeToggle;