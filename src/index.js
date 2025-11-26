import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './toggle.css';
import App from './App';
import Dashboard from "./Dashboard";
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./ThemeContext";
import ProtectedRoute from "./ProtectedRoute";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<App />} />
        
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />

      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);

reportWebVitals();
