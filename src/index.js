import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Game from './Game';
import Landing from './Landing';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/happy_birthday" element={<Landing />} />
        <Route path="/happy_birthday/game" element={<Game />} />
        <Route path="/happy_birthday/app" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
