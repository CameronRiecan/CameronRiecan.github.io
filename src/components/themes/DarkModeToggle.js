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
      if (isDarkMode) {
          document.documentElement.classList.add('dark-mode'); // Apply 'dark-mode' to :root
      } else {
          document.documentElement.classList.remove('dark-mode'); // Remove 'dark-mode' from :root
      }

        // Store dark mode peference in local storage
        localStorage.setItem('darkMode', isDarkMode);
    }, [isDarkMode]);

    // toggle for theme dark mode
    const toggleDarkMode = (e) => {
        e.preventDefault(); // Prevent the default behavior of a tag scrolling to the top
        setIsDarkMode(!isDarkMode);

         // Apply or remove the light mode class
        if (isDarkMode) {
        document.documentElement.classList.remove('light-mode');
        } else {
        document.documentElement.classList.add('light-mode');
        }
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