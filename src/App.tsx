import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TelecomPage from './pages/TelecomPage';
import HealthcarePage from './pages/HealthCarePage';
import RealEstatePage from './pages/RealEstatePage';
import HRPage from './pages/HRPage';


const App: React.FC = () => {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/telecom" element={<TelecomPage />} />
        <Route path="/healthcare" element={<HealthcarePage />} />
        <Route path="/testing" element={<RealEstatePage />} />
        <Route path="/hr" element={<HRPage />} />
      </Routes>
    </Router>
  );
};

export default App;
