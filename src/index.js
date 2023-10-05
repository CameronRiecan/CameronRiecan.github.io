import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'

// Disable scroll restoration to prevent page from scrolling to previous position on refresh
if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

ReactDOM.render(<App/>, document.querySelector("#root"))