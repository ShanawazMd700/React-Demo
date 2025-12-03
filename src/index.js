import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './toggle.css';
import App from './App';
import Dashboard from "./Dashboard";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneratePage from "./pages/GeneratePage";
import HistoryPage from "./pages/HistoryPage";
import SavedPage from "./pages/SavedPage";
import SettingsPage from "./pages/SettingsPage";
import StrengthPage from "./pages/StrengthPage";
import { ThemeProvider } from "./ThemeContext";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./Layout";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <Layout>
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
          <Route
            path="/generate"
            element={
              <ProtectedRoute>
                <GeneratePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/saved"
            element={
              <ProtectedRoute>
                <SavedPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/strength"
            element={
              <ProtectedRoute>
                <StrengthPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <HistoryPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <SettingsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </ThemeProvider>
  </BrowserRouter>
);

reportWebVitals();
