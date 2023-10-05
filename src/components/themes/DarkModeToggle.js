import React from 'react';
import { useState, useEffect } from 'react';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';


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
        const body = document.body;

        if (isDarkMode) {
            // Dark mode variables
            root.style.setProperty('--color-bg', '#121212');
            root.style.setProperty('--color-bg-variant', '#1a1a1a');
            root.style.setProperty('--color-primary', '#4db5ff');
            root.style.setProperty('--color-primary-variant', 'rgba(77, 181, 255, 0.4)');
            root.style.setProperty('--color-white', '#fff');
            root.style.setProperty('--color-light', 'rgba(255, 255, 255, 0.6)');
            // Remove the background image
            body.classList.add('dark-mode');
        } else {
             // Light mode variables (reset to your original values)
             root.style.setProperty('--color-bg', '#1f1f38');
             root.style.setProperty('--color-bg-variant', '#2c2c6c');
             root.style.setProperty('--color-primary', '#4db5ff');
             root.style.setProperty('--color-primary-variant', 'rgba(77, 181, 255, 0.4)');
             root.style.setProperty('--color-white', '#fff');
             root.style.setProperty('--color-light', 'rgba(255, 255, 255, 0.6)');
            // Restore the background image
            body.classList.remove('dark-mode');
        }

        // Store dark mode peference in local storage
        localStorage.setItem('darkMode', isDarkMode);
    }, [isDarkMode]);

    // toggle for theme dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
      };

  return (
        <a
          href='#'
          onClick={toggleDarkMode}
          role='link'
          aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDarkMode ? (
          <MdOutlineLightMode aria-label="Light Mode" />
        ) : (
          <MdDarkMode aria-label="Dark Mode" />
        )}
      </a>
  );
};

export default DarkModeToggle;