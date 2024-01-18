import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Activities from './Pages/Activities.jsx';
import MetArt from './Pages/MetArt.jsx';
import Planet from './Pages/Planets.jsx';
import JacEnterprise from './Pages/JacEnterprise.jsx';
import WeatherData from './Pages/WeatherData.jsx';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/metArt" element={<MetArt/>} />
        <Route path="/Planet" element={<Planet/>} />
        <Route path="/JacEnterprise" element={<JacEnterprise/>} />
        <Route path="/WeatherData" element={<WeatherData/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
