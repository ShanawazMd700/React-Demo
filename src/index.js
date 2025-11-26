import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './toggle.css';
import App from './App';
import Dashboard from "./Dashboard";
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORTANT: import your custom theme provider
import { ThemeProvider } from "./ThemeContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);

reportWebVitals();
